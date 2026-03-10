export type MediaSource = "KinoCheck" | "TMDB" | "OMDb" | "Pexels" | "MovieGlu" | "Unsplash" | "Boords" | "YouTube" | string

export type Topic =
  | "Lighting Techniques"
  | "Color Theory"
  | "Types of Shots"
  | "Composition & Framing"
  | "Camera Movement"
  | "Camera Angles"
  | "Focus & Depth of Field"
  | "Mise en Scene"

export type Difficulty = "Beginner" | "Intermediate" | "Advanced"

export interface QuestionMedia {
  type: "image" | "gif" | "video"
  source: MediaSource
  url: string
  thumbnailUrl?: string
  attribution?: string
}

export interface Question {
  id: string
  media: QuestionMedia
  topic: Topic
  concept: string
  questionText: string
  answerOptions: string[]
  correctAnswer: string
  explanation: string
  difficulty: Difficulty
  overlayType?: "rule-of-thirds" | "leading-lines" | "light-direction" | "depth-layers" | null
}

export interface QuizState {
  currentQuestionIndex: number
  questions: Question[]
  answers: UserAnswer[]
  isComplete: boolean
  selectedTopic: Topic | "random"
  selectedDifficulty: Difficulty
}

export interface UserAnswer {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
  hasReviewedExplanation: boolean
}

export interface TopicPerformance {
  topic: string
  correct: number
  total: number
  percentage: number
}

export interface FailedMedia {
  questionId: string
  url: string
  mediaType: string
  concept: string
}

export interface QuizResults {
  totalScore: number
  totalQuestions: number
  percentage: number
  topicPerformance: TopicPerformance[]
  recommendations: string[]
  failedMedia?: FailedMedia[]
  topicBreakdown?: TopicPerformance[]
}
