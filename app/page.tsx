"use client"

import { QuizProvider, useQuiz } from "@/lib/quiz-context"
import { LandingPage } from "@/components/landing-page"
import { QuizView } from "@/components/quiz-view"

function QuizApp() {
  const { quizState } = useQuiz()
  
  return quizState ? <QuizView /> : <LandingPage />
}

export default function Page() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  )
}
