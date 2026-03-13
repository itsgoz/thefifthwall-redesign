"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { QuestionCard } from "./question-card"
import { ResultsView } from "./results-view"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuizScreen from "./quiz-screen"

export function QuizView() {
  const { quizState, resetQuiz } = useQuiz()

  if (!quizState) return null

  return (
    <QuizScreen />
  )
}
