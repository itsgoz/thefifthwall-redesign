"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { Question, QuizState, UserAnswer, Topic, Difficulty, QuizResults, TopicPerformance } from "./types"
import { getFilteredQuestions, getRandomQuestions, TOPICS } from "./mock-questions"
import { fetchQuestionsFromSheet, getFilteredQuestions as getFilteredFromGoogle, getRandomQuestions as getRandomFromGoogle } from "./google-sheets"

interface QuizContextType {
  quizState: QuizState | null
  startQuiz: (topic: Topic | "random", difficulty: Difficulty) => void
  submitAnswer: (answer: string) => void
  markExplanationReviewed: () => void
  nextQuestion: () => void
  resetQuiz: () => void
  getCurrentQuestion: () => Question | null
  getCurrentAnswer: () => UserAnswer | null
  getResults: () => QuizResults | null
  isLoadingQuestions: boolean
  recordFailedMedia: (questionId: string, url: string, mediaType: string) => void
}

const QuizContext = createContext<QuizContextType | null>(null)

const QUESTIONS_PER_QUIZ = 10

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizState, setQuizState] = useState<QuizState | null>(null)
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false)
  const [cachedQuestions, setCachedQuestions] = useState<Question[]>([])
  const [useGoogleSheets, setUseGoogleSheets] = useState(true)
  const [failedMedia, setFailedMedia] = useState<Array<{ questionId: string; url: string; mediaType: string }>>([])

  const recordFailedMedia = useCallback((questionId: string, url: string, mediaType: string) => {
    setFailedMedia(prev => {
      // Avoid duplicates
      if (prev.some(m => m.questionId === questionId && m.url === url)) {
        return prev
      }
      return [...prev, { questionId, url, mediaType }]
    })
  }, [])

  // Load questions from Google Sheets on mount
  useEffect(() => {
    const loadQuestions = async () => {
      setIsLoadingQuestions(true)
      try {
        const questions = await fetchQuestionsFromSheet()
        if (questions.length > 0) {
          setCachedQuestions(questions)
          console.log("[v0] Loaded questions from Google Sheets")
        } else {
          console.warn("[v0] No questions loaded from Google Sheets, falling back to mock data")
          setUseGoogleSheets(false)
        }
      } catch (error) {
        console.error("[v0] Error loading questions:", error)
        setUseGoogleSheets(false)
      } finally {
        setIsLoadingQuestions(false)
      }
    }

    loadQuestions()
  }, [])

  const startQuiz = useCallback((topic: Topic | "random", difficulty: Difficulty) => {
    let questions: Question[]
    const questionsToUse = useGoogleSheets && cachedQuestions.length > 0 ? cachedQuestions : []
    
    if (useGoogleSheets && cachedQuestions.length > 0) {
      // Use Google Sheets data
      if (topic === "random") {
        questions = getRandomFromGoogle(QUESTIONS_PER_QUIZ, difficulty, questionsToUse)
      } else {
        questions = getFilteredFromGoogle(topic, difficulty, questionsToUse)
        
        if (questions.length < QUESTIONS_PER_QUIZ) {
          const allTopicQuestions = getFilteredFromGoogle(topic, null, questionsToUse)
          const existingIds = new Set(questions.map(q => q.id))
          const additionalQuestions = allTopicQuestions.filter(q => !existingIds.has(q.id))
          questions = [...questions, ...additionalQuestions].slice(0, QUESTIONS_PER_QUIZ)
        }
      }
    } else {
      // Fall back to mock data (mock-questions functions don't require questions parameter)
      if (topic === "random") {
        questions = getRandomQuestions(QUESTIONS_PER_QUIZ, difficulty)
      } else {
        questions = getFilteredQuestions(topic, difficulty)
        
        if (questions.length < QUESTIONS_PER_QUIZ) {
          const allTopicQuestions = getFilteredQuestions(topic, null)
          const existingIds = new Set(questions.map(q => q.id))
          const additionalQuestions = allTopicQuestions.filter(q => !existingIds.has(q.id))
          questions = [...questions, ...additionalQuestions].slice(0, QUESTIONS_PER_QUIZ)
        }
      }
    }

    // Shuffle the questions
    questions = questions.sort(() => Math.random() - 0.5)

    setQuizState({
      currentQuestionIndex: 0,
      questions: questions.slice(0, QUESTIONS_PER_QUIZ),
      answers: [],
      isComplete: false,
      selectedTopic: topic,
      selectedDifficulty: difficulty
    })
  }, [useGoogleSheets, cachedQuestions])

  const submitAnswer = useCallback((answer: string) => {
    setQuizState(prev => {
      if (!prev) return null
      const currentQuestion = prev.questions[prev.currentQuestionIndex]
      const isCorrect = answer === currentQuestion.correctAnswer ||
       ["A","B","C","D"][currentQuestion.answerOptions?.indexOf(currentQuestion.correctAnswer) ?? -1] === answer

      const newAnswer: UserAnswer = {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
        isCorrect,
        hasReviewedExplanation: false
      }

      return {
        ...prev,
        answers: [...prev.answers, newAnswer]
      }
    })
  }, [])

  const markExplanationReviewed = useCallback(() => {
    setQuizState(prev => {
      if (!prev) return null
      const answers = [...prev.answers]
      if (answers.length > 0) {
        answers[answers.length - 1] = {
          ...answers[answers.length - 1],
          hasReviewedExplanation: true
        }
      }
      return { ...prev, answers }
    })
  }, [])

  const nextQuestion = useCallback(() => {
    setQuizState(prev => {
      if (!prev) return null
      const nextIndex = prev.currentQuestionIndex + 1
      const isComplete = nextIndex >= prev.questions.length

      return {
        ...prev,
        currentQuestionIndex: isComplete ? prev.currentQuestionIndex : nextIndex,
        isComplete
      }
    })
  }, [])

  const resetQuiz = useCallback(() => {
    setQuizState(null)
  }, [])

  const getCurrentQuestion = useCallback((): Question | null => {
    if (!quizState) return null
    return quizState.questions[quizState.currentQuestionIndex] || null
  }, [quizState])

  const getCurrentAnswer = useCallback((): UserAnswer | null => {
    if (!quizState) return null
    return quizState.answers.find(a => a.questionId === quizState.questions[quizState.currentQuestionIndex]?.id) || null
  }, [quizState])

  const getResults = useCallback((): QuizResults | null => {
    if (!quizState || !quizState.isComplete) return null

    const totalQuestions = quizState.questions.length
    const correctAnswers = quizState.answers.filter(a => a.isCorrect).length
    const percentage = Math.round((correctAnswers / totalQuestions) * 100)

    // Calculate performance by concept (not topic)
    const conceptStats: Record<string, { correct: number; total: number }> = {}
    const topicStats: Record<string, { correct: number; total: number }> = {}
    
    quizState.questions.forEach((question, index) => {
      const answer = quizState.answers[index]
      if (answer) {
        if (!conceptStats[question.concept]) {
          conceptStats[question.concept] = { correct: 0, total: 0 }
        }
        conceptStats[question.concept].total++
        if (answer.isCorrect) {
          conceptStats[question.concept].correct++
        }

        if (!topicStats[question.topic]) {
          topicStats[question.topic] = { correct: 0, total: 0 }
        }
        topicStats[question.topic].total++
        if (answer.isCorrect) {
          topicStats[question.topic].correct++
        }
      }
    })

    const topicPerformance: TopicPerformance[] = Object.entries(conceptStats)
      .map(([concept, stats]) => ({
        topic: concept,
        correct: stats.correct,
        total: stats.total,
        percentage: Math.round((stats.correct / stats.total) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage)

    const topicBreakdown: TopicPerformance[] | undefined = quizState.selectedTopic === "random" 
      ? Object.entries(topicStats)
          .map(([topic, stats]) => ({
            topic,
            correct: stats.correct,
            total: stats.total,
            percentage: Math.round((stats.correct / stats.total) * 100)
          }))
          .sort((a, b) => b.percentage - a.percentage)
      : undefined

    // Generate recommendations based on weak areas
    const recommendations: string[] = []
    topicPerformance
      .filter(tp => tp.percentage < 70)
      .forEach(tp => {
        recommendations.push(`Review ${tp.topic} — you scored ${tp.percentage}% in this area`)
      })

    if (recommendations.length === 0 && percentage < 80) {
      recommendations.push("Continue practicing across all topics to reinforce your understanding")
    } else if (recommendations.length === 0) {
      recommendations.push("Excellent work! Consider trying the Advanced difficulty to challenge yourself further")
    }

    return {
      totalScore: correctAnswers,
      totalQuestions,
      percentage,
      topicPerformance,
      recommendations,
      failedMedia: failedMedia.map(fm => {
        const question = quizState.questions.find(q => q.id === fm.questionId)
        return {
          questionId: fm.questionId,
          url: fm.url,
          mediaType: fm.mediaType,
          concept: question?.concept || "Unknown"
        }
      }),
      topicBreakdown
    }
  }, [quizState, failedMedia])

  return (
    <QuizContext.Provider value={{
      quizState,
      startQuiz,
      submitAnswer,
      markExplanationReviewed,
      nextQuestion,
      resetQuiz,
      getCurrentQuestion,
      getCurrentAnswer,
      getResults,
      isLoadingQuestions,
      recordFailedMedia
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}
