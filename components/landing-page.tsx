"use client"

import { useState } from "react"
import Image from "next/image"
import { useQuiz } from "@/lib/quiz-context"
import PosterWall from "@/components/poster-wall"
import { DifficultyScreen } from "@/components/difficulty-screen"
import type { Topic, Difficulty } from "@/lib/types"

type Screen = "door" | "posters" | "difficulty"

export function LandingPage() {
  const { startQuiz } = useQuiz()
  const [screen, setScreen] = useState<Screen>("door")
  const [selectedTopic, setSelectedTopic] = useState<Topic | "random" | null>(null)

  const handleDoorClick = () => {
    setScreen("posters")
  }

  const handlePosterSelect = (topic: Topic | "random") => {
    setSelectedTopic(topic)
    setScreen("difficulty")
  }

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    if (selectedTopic == null) return
    startQuiz(selectedTopic, difficulty)
  }

  if (screen === "posters") {
    return <PosterWall onPosterSelect={handlePosterSelect} />
  }

  if (screen === "difficulty" && selectedTopic != null) {
    return (
      <DifficultyScreen
        selectedTopic={selectedTopic}
        onSelectDifficulty={handleSelectDifficulty}
        onBack={() => setScreen("posters")}
      />
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background images: desktop and mobile */}
      <div className="absolute inset-0">
        {/* Desktop / tablet version */}
        <Image
          src="/landing-door-desktop.png"  // change to .png if needed
          alt="Film set corridor with a door"
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* Mobile version */}
        <Image
          src="/landing-door-mobile.png"   // change to .png if needed
          alt="Film set corridor with a door"
          fill
          priority
          className="block md:hidden object-cover"
        />
      </div>

      {/* Desktop-only door hotspot */}
      <button
        className="hidden md:flex items-start justify-center group"
        type="button"
        onClick={handleDoorClick}
        aria-label="Enter through the door"
        style={{
          position: "absolute",
          top: "40%",
          left: "55%",
          width: "12%",
          height: "60%",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            marginTop: "90px",
            color: "#F3EADB",
            fontFamily: '"Limelight", cursive',
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "capitalize",
          }}
        >
          Click to Enter
        </span>
      </button>

      {/* Mobile-only door hotspot */}
      <button
        className="flex md:hidden items-start justify-center group"
        type="button"
        onClick={handleDoorClick}
        aria-label="Enter through the door"
        style={{
          position: "absolute",
          top: "35%",
          left: "65%",
          width: "30%",
          height: "60%",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center"
          style={{
            marginTop: "160px",
            color: "#F3EADB",
            fontFamily: '"Limelight", cursive',
            fontSize: 16,
            letterSpacing: "0.08em",
            textTransform: "capitalize",
          }}
        >
          Click to Enter
        </span>
      </button>
    </div>
  )
}