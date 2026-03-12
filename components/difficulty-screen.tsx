"use client"

import { useState, useRef, useEffect } from "react"
import type { Topic, Difficulty } from "@/lib/types"

const DIFFICULTIES: { value: Difficulty; svg: string; label: string }[] = [
  { value: "Beginner", svg: "/tickets/beginner-ticket.svg", label: "Beginner – Matinee Showing" },
  { value: "Intermediate", svg: "/tickets/intermediate-ticket.svg", label: "Intermediate – Evening Showing" },
  { value: "Advanced", svg: "/tickets/advanced-ticket.svg", label: "Advanced – Premiere Showing" },
]

interface DifficultyScreenProps {
  selectedTopic: Topic | "random"
  onSelectDifficulty: (difficulty: Difficulty) => void
  onBack?: () => void
}

function courseLabel(topic: Topic | "random"): string {
  return topic === "random" ? "MYSTERY BAG" : topic.toUpperCase()
}

export function DifficultyScreen({ selectedTopic, onSelectDifficulty, onBack }: DifficultyScreenProps) {
  const [tearing, setTearing] = useState<Difficulty | null>(null)
  const tearingRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)

  const handleTicketClick = (d: Difficulty) => {
    // Guard synchronously using a ref so rapid clicks can't schedule multiple timeouts
    if (tearingRef.current) return
    tearingRef.current = true

    setTearing(d)
    timeoutRef.current = window.setTimeout(() => {
      tearingRef.current = false
      onSelectDifficulty(d)
    }, 700)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
        tearingRef.current = false
      }
    }
  }, [])

  return (
    <div className="difficulty-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;1,400&display=swap');
        .difficulty-screen {
          min-height: 100vh;
          position: relative;
          background: #5c0a0a;
          background-image:
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120,20,20,0.4) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.08) 2px,
              rgba(0,0,0,0.08) 4px
            );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Cinzel', serif;
        }
        .difficulty-screen .ticket-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(24px, 4vw, 48px);
          flex-wrap: wrap;
          perspective: 800px;
        }
        .difficulty-screen .ticket-wrap {
          flex: 0 1 280px;
          max-width: 320px;
          transition: transform 0.35s ease, box-shadow 0.35s ease, opacity 0.35s ease;
        }
        .difficulty-screen .ticket-wrap:hover {
          transform: translateY(-12px) rotate(0deg);
          box-shadow: 0 24px 48px rgba(0,0,0,0.5);
        }
        .difficulty-screen .ticket-wrap.fan-left { transform: rotate(-6deg); }
        .difficulty-screen .ticket-wrap.fan-left:hover { transform: translateY(-12px) rotate(-6deg); }
        .difficulty-screen .ticket-wrap.fan-right { transform: rotate(6deg); }
        .difficulty-screen .ticket-wrap.fan-right:hover { transform: translateY(-12px) rotate(6deg); }
        .difficulty-screen .ticket-wrap.tearing {
          pointer-events: none;
          transform: translate(-16px, -8px) rotate(-4deg);
          opacity: 0.85;
          box-shadow: 0 18px 40px rgba(0,0,0,0.6);
        }
        .difficulty-screen .ticket-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 4px;
          box-shadow: 0 12px 24px rgba(0,0,0,0.35);
        }
        .difficulty-screen .back-btn {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(212,175,55,0.5);
          color: #e8dcc8;
          padding: 8px 16px;
          font-family: 'Cinzel', serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }
        .difficulty-screen .back-btn:hover {
          background: rgba(0,0,0,0.5);
          color: #fff;
        }
        .difficulty-screen .screen-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(14px, 1.8vw, 18px);
          font-weight: 600;
          letter-spacing: 0.25em;
          color: rgba(232,220,200,0.9);
          margin-bottom: 32px;
          text-transform: uppercase;
        }
      `}</style>

      {onBack && (
        <button type="button" className="back-btn" onClick={onBack} aria-label="Back to topic selection">
          ← Back
        </button>
      )}

      <p className="screen-title">Select Your Showing</p>

      <div className="ticket-row">
        {DIFFICULTIES.map((d, i) => {
          const isTearing = tearing === d.value
          const fanClass = i === 0 ? "fan-left" : i === 2 ? "fan-right" : ""
          return (
            <div
              key={d.value}
              className={`ticket-wrap ${fanClass} ${isTearing ? "tearing" : ""}`}
              onClick={() => handleTicketClick(d.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTicketClick(d.value)}
              role="button"
              tabIndex={0}
              aria-label={`Select ${d.label} for ${courseLabel(selectedTopic)}`}
            >
              <img
                src={d.svg}
                alt={`${d.label} ticket for ${courseLabel(selectedTopic)}`}
                className="ticket-image"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
