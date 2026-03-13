"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { QuestionCard } from "./question-card"
import { ResultsView } from "./results-view"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CSSProperties } from "react"

export function QuizView() {
  const { quizState, resetQuiz } = useQuiz()

  if (!quizState) return null

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* ── THEATRE BACKGROUND ── */}
      <div style={s.theatre}>
        {/* Ceiling with marquee lights */}
        <div style={s.ceiling}>
          <div style={s.ceilingInner}>
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className="marquee-bulb"
                style={{ animationDelay: `${(i * 0.18) % 2.4}s` }}
              />
            ))}
          </div>
        </div>

        {/* Screen surround — glowing amber frame */}
        <div style={s.screenSurround}>
          <div style={s.screenGlowLeft} />
          <div style={s.screenGlowRight} />

          {/* ── SCREEN PANEL (all UI lives here) ── */}
          <div style={s.screenPanel}>
            {/* HEADER */}
            <div style={s.header}>
              <div style={s.headerLeft}>
                <span style={s.logoText}>The Fifth Wall</span>
                <span style={s.topicText}>
                 {quizState.selectedTopic === "random" ? "Mixed Topics" : quizState.selectedTopic}
                </span>
              </div>
              <div style={s.headerCenter}>
              {quizState.questions.map((_, index) => (
                <div
                 key={index}
                 style={{
                 ...s.dot,
                 background:
                  index < quizState.currentQuestionIndex
                   ? "#C9A84C"
                   : index === quizState.currentQuestionIndex
                   ? "rgba(201,168,76,0.7)"
                   : "rgba(201,168,76,0.25)",
                }}
               />
             ))}
                <span style={s.counter}>
                 {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </span>
              </div>
              <div style={s.headerRight}>
              <button style={s.exitBtn} onClick={resetQuiz}>
                 ✕ Exit
              </button>
              </div>
            </div>

           {/* QUIZ CONTENT AREA */}
           
            {/* MEDIA AREA */}
            <div style={s.mediaBox}>
              <div style={s.mediaInner}>
                {/* In production: swap this div for <img>, <video>, or <iframe> */}
                <div style={s.mediaPlaceholder}>
                  <span style={s.mediaLabel}>{q.mediaLabel}</span>
                </div>
              </div>
            </div>

            {/* QUESTION */}
            <div style={s.questionBar}>
              <span style={s.questionText}>{q.questionText}</span>
            </div>

            {/* OPTIONS GRID */}
            <div style={s.optionsGrid}>
              {q.options.map((opt) => {
                const isSelected = selected === opt.key;
                const isThisCorrect = opt.key === q.correctKey;

                let bg = "rgba(10,8,4,0.75)";
                let border = "1px solid rgba(201,168,76,0.25)";
                let color = "#E8DFC8";

                if (view === "result") {
                  if (isThisCorrect) {
                    bg = "rgba(34,85,34,0.85)";
                    border = "1px solid #4CAF50";
                    color = "#90EE90";
                  } else if (isSelected && !isThisCorrect) {
                    bg = "rgba(100,20,20,0.85)";
                    border = "1px solid #E53935";
                    color = "#FF8A80";
                  }
                } else if (isSelected) {
                  bg = "rgba(201,168,76,0.18)";
                  border = "1px solid #C9A84C";
                  color = "#F5EDD6";
                }

                return (
                  <button
                    key={opt.key}
                    className={view === "question" ? "option-btn" : ""}
                    style={{
                      ...s.optionBtn,
                      background: bg,
                      border,
                      color,
                      cursor: view === "result" ? "default" : "pointer",
                    }}
                    onClick={() => view === "question" && setSelected(opt.key)}
                    disabled={view === "result"}
                  >
                    <span style={s.optionKey}>{opt.key}</span>
                    <span style={s.optionText}>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* EXPLANATION (result view only) */}
            {view === "result" && (
              <div style={s.explanationBar}>
                <span style={s.explanationLabel}>
                  {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                </span>
                <span style={s.explanationText}>{q.explanation}</span>
              </div>
            )}

            {/* ACTION ROW */}
            <div style={s.actionRow}>
              {view === "question" ? (
                <button
                  style={{
                    ...s.submitBtn,
                    opacity: selected ? 1 : 0.45,
                    cursor: selected ? "pointer" : "default",
                  }}
                  onClick={handleSubmit}
                  disabled={!selected}
                >
                  Submit Answer
                </button>
              ) : (
                <button style={s.nextBtn} onClick={handleNext}>
                  Next Question →
                </button>
              )}
          </div>
          {/* end screenPanel */}
        </div>
        {/* end screenSurround */}

        {/* SEATS */}
        <div style={s.seatsArea}>
          {[0, 1, 2].map((row) => (
            <div key={row} style={{ ...s.seatRow, marginTop: row === 0 ? 0 : `${row * 8}px` }}>
              {Array.from({ length: 22 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    ...s.seat,
                    opacity: 0.55 + row * 0.1,
                    transform: `perspective(400px) rotateX(${8 + row * 4}deg)`,
                  }}
                />
              ))}
            </div>
          ))}
          {/* floor gradient */}
          <div style={s.floorGlow} />
        </div>
      </div>
    </div>
  )
}
// ─── STYLES ──────────────────────────────────────────────────────────────────
const s: Record<string, CSSProperties> = {
  root: {
    width: "100vw",
    height: "100vh",
    minHeight: "600px",
    minWidth: "360px",
    overflow: "hidden",
    background: "#0a0806",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Cinzel', serif",
  },

  // ── THEATRE ──
  theatre: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg, #0d0a06 0%, #100c06 35%, #0a0604 100%)",
    position: "relative",
    overflow: "hidden",
  },

  // ── CEILING ──
  ceiling: {
    height: "clamp(36px, 7vh, 64px)",
    background: "linear-gradient(180deg, #1a1208 0%, #1e1608 60%, #160e04 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "flex-end",
    paddingBottom: "6px",
    position: "relative",
    zIndex: 2,
    borderBottom: "2px solid rgba(60,40,10,0.8)",
  },
  ceilingInner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "clamp(6px, 2vw, 18px)",
    paddingBottom: "2px",
    flexWrap: "nowrap",
    overflow: "hidden",
  },

  // ── SCREEN SURROUND ──
  screenSurround: {
    flex: "0 0 auto",
    position: "relative",
    zIndex: 3,
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px",
  },
  screenGlowLeft: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "clamp(18px, 3vw, 48px)",
    background: "linear-gradient(90deg, rgba(180,130,30,0.08) 0%, rgba(220,175,70,0.45) 60%, rgba(240,200,90,0.6) 100%)",
    filter: "blur(2px)",
    zIndex: 1,
    pointerEvents: "none",
  },
  screenGlowRight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "clamp(18px, 3vw, 48px)",
    background: "linear-gradient(270deg, rgba(180,130,30,0.08) 0%, rgba(220,175,70,0.45) 60%, rgba(240,200,90,0.6) 100%)",
    filter: "blur(2px)",
    zIndex: 1,
    pointerEvents: "none",
  },

  // ── SCREEN PANEL ──
  screenPanel: {
    position: "relative",
    zIndex: 2,
    margin: "0 clamp(18px, 3vw, 48px)",
    background: "linear-gradient(180deg, #0e0b06 0%, #12100a 100%)",
    display: "flex",
    flexDirection: "column",
    borderLeft: "3px solid rgba(220,175,70,0.7)",
    borderRight: "3px solid rgba(220,175,70,0.7)",
    borderTop: "2px solid rgba(220,175,70,0.5)",
    boxShadow: "0 0 60px 10px rgba(200,150,40,0.18), inset 0 0 40px rgba(0,0,0,0.5)",
    minHeight: 0,
    overflow: "hidden",
  },

  // ── HEADER ──
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "clamp(6px, 1.2vh, 12px) clamp(10px, 2vw, 20px)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    background: "rgba(0,0,0,0.3)",
    flexShrink: 0,
    gap: "12px",
    flexWrap: "wrap",
  },
  headerLeft: {
    display: "flex",
    alignItems: "baseline",
    gap: "10px",
    flexShrink: 0,
  },
  logoText: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(10px, 1.4vw, 15px)",
    fontWeight: 700,
    color: "#C9A84C",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  },
  topicText: {
    fontFamily: "'Crimson Text', serif",
    fontStyle: "italic",
    fontSize: "clamp(9px, 1.2vw, 13px)",
    color: "rgba(232,223,200,0.6)",
    whiteSpace: "nowrap",
  },
  headerCenter: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  counter: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "rgba(201,168,76,0.7)",
    marginLeft: "6px",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  },
  headerRight: {
    flexShrink: 0,
  },
  exitBtn: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "#C9A84C",
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "3px",
    padding: "4px 10px",
    cursor: "pointer",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  },

  // ── MEDIA ──
  mediaBox: {
    flex: "1 1 0",
    minHeight: 0,
    display: "flex",
    padding: "clamp(6px, 1.5vh, 14px) clamp(8px, 1.5vw, 16px) clamp(4px, 1vh, 10px)",
    background: "rgba(0,0,0,0.2)",
  },
  mediaInner: {
    flex: 1,
    border: "1px solid rgba(201,168,76,0.2)",
    background: "rgba(20,16,10,0.6)",
    overflow: "hidden",
    position: "relative",
  },
  mediaPlaceholder: {
    width: "100%",
    height: "100%",
    minHeight: "clamp(80px, 18vh, 220px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a150a 0%, #100c06 100%)",
  },
  mediaLabel: {
    fontFamily: "'Crimson Text', serif",
    fontStyle: "italic",
    fontSize: "clamp(11px, 1.4vw, 15px)",
    color: "rgba(201,168,76,0.35)",
    letterSpacing: "0.5px",
  },

  // ── QUESTION BAR ──
  questionBar: {
    padding: "clamp(7px, 1.2vh, 12px) clamp(10px, 2vw, 20px)",
    borderTop: "1px solid rgba(201,168,76,0.12)",
    borderBottom: "1px solid rgba(201,168,76,0.12)",
    background: "rgba(0,0,0,0.35)",
    flexShrink: 0,
  },
  questionText: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "clamp(13px, 1.8vw, 19px)",
    color: "#F5EDD6",
    letterSpacing: "0.2px",
    lineHeight: 1.4,
  },

  // ── OPTIONS ──
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1px",
    background: "rgba(201,168,76,0.1)",
    flexShrink: 0,
    borderTop: "1px solid rgba(201,168,76,0.1)",
  },
  optionBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "clamp(8px, 1.4vh, 14px) clamp(10px, 1.8vw, 18px)",
    fontFamily: "'Crimson Text', serif",
    fontSize: "clamp(11px, 1.4vw, 15px)",
    textAlign: "left" as const,
    transition: "background 0.2s ease, border-color 0.2s ease",
    outline: "none",
    borderRadius: 0,
    lineHeight: 1.35,
  },
  optionKey: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "rgba(201,168,76,0.6)",
    flexShrink: 0,
    letterSpacing: "1px",
  },
  optionText: {
    flex: 1,
  },

  // ── EXPLANATION ──
  explanationBar: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "clamp(7px, 1.2vh, 12px) clamp(10px, 2vw, 18px)",
    background: "rgba(0,0,0,0.5)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    flexShrink: 0,
  },
  explanationLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "#C9A84C",
    letterSpacing: "1px",
    flexShrink: 0,
    paddingTop: "2px",
    whiteSpace: "nowrap",
  },
  explanationText: {
    fontFamily: "'Crimson Text', serif",
    fontStyle: "italic",
    fontSize: "clamp(11px, 1.3vw, 14px)",
    color: "rgba(232,223,200,0.75)",
    lineHeight: 1.5,
  },

  // ── ACTION ROW ──
  actionRow: {
    display: "flex",
    justifyContent: "center",
    padding: "clamp(8px, 1.4vh, 14px) clamp(10px, 2vw, 20px)",
    borderTop: "1px solid rgba(201,168,76,0.12)",
    background: "rgba(0,0,0,0.25)",
    flexShrink: 0,
  },
  submitBtn: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(11px, 1.3vw, 14px)",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: "#0a0806",
    background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
    border: "none",
    borderRadius: "3px",
    padding: "clamp(9px, 1.4vh, 14px) clamp(24px, 4vw, 48px)",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
    transition: "opacity 0.2s ease, box-shadow 0.2s ease",
  },
  nextBtn: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(11px, 1.3vw, 14px)",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: "#0a0806",
    background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
    border: "none",
    borderRadius: "3px",
    padding: "clamp(9px, 1.4vh, 14px) clamp(20px, 3.5vw, 40px)",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
  },

  // ── SEATS ──
  seatsArea: {
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "clamp(6px, 1.2vh, 14px)",
    paddingBottom: "0",
    background: "linear-gradient(180deg, #0a0604 0%, #0c0704 60%, #080502 100%)",
    position: "relative",
    minHeight: "clamp(40px, 10vh, 90px)",
    zIndex: 2,
    overflow: "hidden",
  },
  seatRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(3px, 0.6vw, 7px)",
    paddingBottom: "clamp(3px, 0.6vh, 6px)",
    flexShrink: 0,
  },
  seat: {
    width: "clamp(14px, 2.2vw, 26px)",
    height: "clamp(10px, 1.6vh, 18px)",
    borderRadius: "3px 3px 0 0",
    background: "linear-gradient(180deg, #6b1a1a 0%, #4a1010 60%, #3a0c0c 100%)",
    flexShrink: 0,
    boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  floorGlow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30px",
    background: "linear-gradient(0deg, rgba(180,100,20,0.06) 0%, transparent 100%)",
    pointerEvents: "none",
  },
};

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@300;400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes bulbFlicker {
    0%,100% { opacity: 1; box-shadow: 0 0 6px 3px rgba(255,210,80,0.7); }
    88%      { opacity: 1; }
    89%      { opacity: 0.7; box-shadow: 0 0 3px 1px rgba(255,210,80,0.4); }
    90%      { opacity: 1; }
    95%      { opacity: 0.85; }
    96%      { opacity: 1; }
  }

  .marquee-bulb {
    width: clamp(6px, 1vw, 10px);
    height: clamp(6px, 1vw, 10px);
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #fffbe0, #f5c842);
    box-shadow: 0 0 6px 3px rgba(255,210,80,0.7);
    flex-shrink: 0;
    animation: bulbFlicker 3.5s ease-in-out infinite;
  }

  .option-btn:hover {
    background: rgba(201,168,76,0.14) !important;
    border-color: rgba(201,168,76,0.5) !important;
    color: #F5EDD6 !important;
  }
`;