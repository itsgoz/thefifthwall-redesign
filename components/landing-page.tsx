"use client"

import Image from "next/image"
import { useQuiz } from "@/lib/quiz-context"

export function LandingPage() {
  const { startQuiz } = useQuiz()

  const handleDoorClick = () => {
    // For now: start a random Beginner quiz.
    // We can change this later when we add topic/difficulty screens.
    startQuiz("random", "Beginner")
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

      {/* Clickable door hotspot */}
      <button
        className="hidden md:block"
        type="button"
        onClick={handleDoorClick}
        aria-label="Enter through the door"
        style={{
          position: "absolute",
          // These percentages control where the clickable area sits.
          // Start with these, then adjust while looking at the browser.
          top: "40%",     // move up/down
          left: "55%",    // move left/right
          width: "12%",   // make the hotspot wider/narrower
          height: "60%",  // make the hotspot taller/shorter

          // Temporary styling so you can SEE the hotspot while adjusting.
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          cursor: "pointer"
        }}
      >
        {/* You can remove this text later; it's just for debugging. */}
        <span style={{ color: "white", fontSize: 12 }}>Enter The 5th Wall</span>
      </button>
    </div>
  )
}