"use client"

import { useQuiz } from "@/lib/quiz-context"
import { ResultsView } from "./results-view2.0"
import QuizScreen from "./quiz-screen"

export function QuizView() {
  const { quizState } = useQuiz()
  console.log("QuizView sees isComplete:", quizState?.isComplete)

  if (!quizState) return null
  if (quizState.isComplete) return <ResultsView /> 
  return (
    <QuizScreen />
  )
}
