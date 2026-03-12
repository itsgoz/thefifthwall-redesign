"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useQuiz } from "@/lib/quiz-context"
import PosterWall from "@/components/poster-wall"
import { DifficultyScreen } from "@/components/difficulty-screen"
import type { Topic, Difficulty } from "@/lib/types"

type Screen = "door" | "posters" | "difficulty"

const TICKET_SVGS = ["/tickets/beginner-ticket.svg", "/tickets/intermediate-ticket.svg", "/tickets/advanced-ticket.svg"]

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to preload ${src}`))
    img.src = src
  })
}

export function LandingPage() {
  const { startQuiz } = useQuiz()
  const [screen, setScreen] = useState<Screen>("door")
  const [selectedTopic, setSelectedTopic] = useState<Topic | "random" | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const isMountedRef = useRef(true)
  const transitionTokenRef = useRef(0)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const handleDoorClick = () => {
    setScreen("posters")
  }

  const handlePosterSelect = async (topic: Topic | "random") => {
    if (transitioning) return
    setTransitioning(true)
    const token = ++transitionTokenRef.current

    // Keep the poster wall visible until ticket SVGs are ready
    try {
      await Promise.all(TICKET_SVGS.map(preloadImage))
    } catch {
      // If preloading fails, still navigate; the DifficultyScreen will render normally.
    }

    if (!isMountedRef.current || transitionTokenRef.current !== token) return
    setSelectedTopic(topic)
    setScreen("difficulty")
    setTransitioning(false)
  }

  const handleBackToPosters = () => {
    // Cancel any in-flight transition/preload and re-enable poster clicks
    transitionTokenRef.current++
    setTransitioning(false)
    setScreen("posters")
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
        onBack={handleBackToPosters}
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