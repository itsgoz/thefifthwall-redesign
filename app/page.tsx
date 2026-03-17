"use client"

import { useState } from "react"
import { QuizProvider, useQuiz } from "@/lib/quiz-context"
import TheatreLanding from "@/components/theatre-landing"
import PosterWall from "@/components/poster-wall"
import { DifficultyScreen } from "@/components/difficulty-screen"
import { QuizView } from "@/components/quiz-view"
import { ResultsView } from "@/components/results-view2.0"
import type { Topic, Difficulty } from "@/lib/types"

type Screen = "landing" | "poster-wall" | "difficulty" | "quiz" | "results"

let currentSetScreen: ((screen: Screen) => void) | null = null

export function navigateTo(screen: Screen) {
  currentSetScreen?.(screen)
}

function QuizApp() {
  const { startQuiz, resetQuiz, quizState } = useQuiz()
  const [screen, setScreen] = useState<Screen>("landing")
  const [selectedTopic, setSelectedTopic] = useState<Topic | "random">("random")
  currentSetScreen = setScreen

  // Automatically move to results when quiz is complete
  if (screen === "quiz" && quizState?.isComplete) {
    setScreen("results")
  }

  if (screen === "landing") {
    return <TheatreLanding />
  }

  if (screen === "poster-wall") {
    return (
      <PosterWall
        onPosterSelect={(topic: Topic | "random") => {
          setSelectedTopic(topic)
          setScreen("difficulty")
        }}
      />
    )
  }

  if (screen === "difficulty") {
    return (
      <DifficultyScreen
        selectedTopic={selectedTopic}
        onSelectDifficulty={(difficulty: Difficulty) => {
          startQuiz(selectedTopic, difficulty)
          setScreen("quiz")
        }}
        onBack={() => setScreen("poster-wall")}
      />
    )
  }

  if (screen === "quiz") {
    return <QuizView />
  }

  if (screen === "results") {
    return (
      <ResultsView />
    )
  }

  return null
}

export default function Page() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  )
}