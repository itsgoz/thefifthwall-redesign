"use client"

import { CSSProperties } from "react"
import { motion } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { RefreshCw, Shuffle, BookOpen, Trophy, Target, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { TOPICS } from "@/lib/mock-questions"
import { navigateTo } from "@/app/page"

export function ResultsView() {
  const { getResults, startQuiz, resetQuiz, quizState } = useQuiz()
  const results = getResults()
  console.log("results:", results)
  console.log("quizState:", quizState)

  if (!results || !quizState) return null

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return "Outstanding visual literacy. You read cinema like a native speaker."
    if (percentage >= 60) return "Strong foundation. You're developing a keen eye for visual storytelling."
    if (percentage >= 40) return "Good start. Every film you watch is an opportunity to learn more."
    return "Keep watching, keep learning. The language of film reveals itself with practice."
  }

  const handleRetry = () => {
    startQuiz(quizState.selectedTopic, quizState.selectedDifficulty)
    navigateTo("quiz")
  }

  const handleRandomQuiz = () => {
    startQuiz("random", quizState.selectedDifficulty)
  }

  const handleChangeTopic = () => {
    resetQuiz()
    navigateTo("poster-wall")
  }

  const scoreColor =
    results.percentage >= 80
      ? "#4CAF50"
      : results.percentage >= 60
      ? "#C9A84C"
      : "rgba(232,223,200,0.5)"

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

        {/* Screen surround */}
        <div style={s.screenSurround}>
          <div style={s.screenGlowLeft} />
          <div style={s.screenGlowRight} />

          {/* ── SCREEN PANEL ── */}
          <div style={s.screenPanel}>

            {/* HEADER */}
            <div style={s.header}>
              <div style={s.headerLeft}>
                <span style={s.logoText}>The Fifth Wall</span>
                <span style={s.topicText}>{quizState.selectedTopic === "random" ? "Mystery Screening" : quizState.selectedTopic}</span>
              </div>
              <div style={s.headerCenter}>
                <Trophy style={{ width: 12, height: 12, color: "#C9A84C", flexShrink: 0 }} />
                <span style={s.quizCompleteLabel}>Quiz Complete</span>
              </div>
              <div style={s.headerRight}>
                <button style={s.exitBtn} onClick={handleChangeTopic}>✕ Exit</button>
              </div>
            </div>

            {/* SCROLLABLE CONTENT AREA */}
            <div style={s.scrollArea}>

              {/* ── SCORE HERO ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={s.scoreHero}
              >
                <div style={{ ...s.scoreBig, color: scoreColor }}>
                  {results.percentage}%
                </div>
                <div style={s.scoreSubline}>
                  {results.totalScore} of {results.totalQuestions} correct
                </div>
                <div style={s.scoreMessage}>
                  {getScoreMessage(results.percentage)}
                </div>
              </motion.div>

              <div style={s.divider} />

              {/* ── PERFORMANCE BY CONCEPT ── */}
              {results.topicPerformance.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  style={s.section}
                >
                  <div style={s.sectionHeader}>
                    <Target style={{ width: 12, height: 12, color: "#C9A84C", flexShrink: 0 }} />
                    <span style={s.sectionLabel}>Performance by Concept</span>
                  </div>
                  <div style={s.barList}>
                    {results.topicPerformance.map((tp, index) => (
                      <motion.div
                        key={tp.topic}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.08 }}
                        style={s.barRow}
                      >
                        <div style={s.barRowTop}>
                          <span style={s.barLabel}>{tp.topic}</span>
                          <span style={{
                            ...s.barStat,
                            color: tp.percentage >= 70 ? "#4CAF50" : tp.percentage >= 50 ? "#C9A84C" : "rgba(232,223,200,0.4)",
                          }}>
                            {tp.correct}/{tp.total} ({tp.percentage}%)
                          </span>
                        </div>
                        <div style={s.barTrack}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tp.percentage}%` }}
                            transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                            style={{
                              ...s.barFill,
                              background: tp.percentage >= 70 ? "#4CAF50" : tp.percentage >= 50 ? "#C9A84C" : "rgba(232,223,200,0.3)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── TOPIC BREAKDOWN (Mystery Bag only) ── */}
              {quizState.selectedTopic === "random" && results.topicBreakdown && results.topicBreakdown.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={s.section}
                >
                  <div style={s.sectionHeader}>
                    <Target style={{ width: 12, height: 12, color: "#C9A84C", flexShrink: 0 }} />
                    <span style={s.sectionLabel}>Performance by Topic</span>
                  </div>
                  <div style={s.barList}>
                    {results.topicBreakdown.map((tb, index) => (
                      <motion.div
                        key={tb.topic}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.08 }}
                        style={s.barRow}
                      >
                        <div style={s.barRowTop}>
                          <span style={s.barLabel}>{tb.topic}</span>
                          <span style={{
                            ...s.barStat,
                            color: tb.percentage >= 70 ? "#4CAF50" : tb.percentage >= 50 ? "#C9A84C" : "rgba(232,223,200,0.4)",
                          }}>
                            {tb.correct}/{tb.total} ({tb.percentage}%)
                          </span>
                        </div>
                        <div style={s.barTrack}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tb.percentage}%` }}
                            transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                            style={{
                              ...s.barFill,
                              background: tb.percentage >= 70 ? "#4CAF50" : tb.percentage >= 50 ? "#C9A84C" : "rgba(232,223,200,0.3)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── RECOMMENDATIONS ── */}
              {results.recommendations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  style={s.section}
                >
                  <div style={s.sectionHeader}>
                    <TrendingUp style={{ width: 12, height: 12, color: "#C9A84C", flexShrink: 0 }} />
                    <span style={s.sectionLabel}>Recommendations</span>
                  </div>
                  <div style={s.recBox}>
                    {results.recommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.08 }}
                        style={s.recRow}
                      >
                        <span style={s.recBullet}>•</span>
                        <span style={s.recText}>{rec}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── JUMP TO TOPIC ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                style={s.topicSection}
              >
                <span style={s.topicSectionLabel}>Jump to a specific topic</span>
                <div style={s.topicChips}>
                  {TOPICS.map((topic) => (
                    <button
                      key={topic}
                      className="topic-chip"
                      style={s.topicChip}
                      onClick={() => navigateTo("difficulty", topic)}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
            {/* end scrollArea */}

            {/* ── ACTION ROW (pinned to bottom) ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={s.actionRow}
            >
              <button className="action-btn action-btn-primary" style={s.actionBtnPrimary} onClick={handleRetry}>
                <RefreshCw style={{ width: 13, height: 13 }} />
                Retake Quiz
              </button>
              <button className="action-btn action-btn-outline" style={s.actionBtnOutline} onClick={() => navigateTo("difficulty", "random")}>
                <Shuffle style={{ width: 13, height: 13 }} />
                 Random Quiz
              </button>
              <button className="action-btn action-btn-outline" style={s.actionBtnOutline} onClick={handleChangeTopic}>
                <BookOpen style={{ width: 13, height: 13 }} />
                Choose Topic
              </button>
            </motion.div>

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
  theatre: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg, #0d0a06 0%, #100c06 35%, #0a0604 100%)",
    position: "relative",
    overflow: "hidden",
  },

  // CEILING
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

  // SCREEN SURROUND
  screenSurround: {
    flex: "1 1 0",
    position: "relative",
    zIndex: 3,
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
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

  // SCREEN PANEL
  screenPanel: {
    position: "relative",
    zIndex: 2,
    flex: "1 1 0",
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

  // HEADER
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "clamp(6px, 1.2vh, 12px) clamp(10px, 2vw, 20px)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    background: "rgba(0,0,0,0.3)",
    flexShrink: 0,
    gap: "12px",
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
    gap: "6px",
    flex: 1,
    justifyContent: "center",
  },
  quizCompleteLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "rgba(201,168,76,0.7)",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
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

  // SCROLL AREA
  scrollArea: {
    flex: "1 1 0",
    overflowY: "auto" as const,
    padding: "clamp(16px, 3vh, 32px) clamp(16px, 3vw, 40px)",
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  // SCORE HERO
  scoreHero: {
    textAlign: "center" as const,
    paddingBottom: "clamp(16px, 3vh, 28px)",
  },
  scoreBig: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(48px, 8vw, 96px)",
    fontWeight: 300,
    lineHeight: 1,
    marginBottom: "10px",
    letterSpacing: "-2px",
  },
  scoreSubline: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(11px, 1.3vw, 14px)",
    color: "rgba(232,223,200,0.5)",
    letterSpacing: "1px",
    marginBottom: "12px",
  },
  scoreMessage: {
    fontFamily: "'Crimson Text', serif",
    fontStyle: "italic",
    fontSize: "clamp(13px, 1.6vw, 17px)",
    color: "rgba(232,223,200,0.75)",
    maxWidth: "480px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  divider: {
    height: "1px",
    background: "rgba(201,168,76,0.15)",
    margin: "clamp(12px, 2vh, 20px) 0",
    flexShrink: 0,
  },

  // SECTIONS
  section: {
    marginBottom: "clamp(16px, 2.5vh, 28px)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  sectionLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "rgba(201,168,76,0.6)",
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
  },

  // BAR ROWS
  barList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  barRow: {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(201,168,76,0.12)",
    padding: "10px 14px",
    borderRadius: "2px",
  },
  barRowTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    gap: "12px",
  },
  barLabel: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "clamp(12px, 1.4vw, 15px)",
    color: "#E8DFC8",
  },
  barStat: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(10px, 1.1vw, 12px)",
    letterSpacing: "0.5px",
    flexShrink: 0,
  },
  barTrack: {
    height: "4px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "2px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: "2px",
  },

  // RECOMMENDATIONS
  recBox: {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(201,168,76,0.12)",
    padding: "clamp(10px, 1.8vh, 18px) clamp(14px, 2vw, 20px)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  recRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },
  recBullet: {
    color: "#C9A84C",
    flexShrink: 0,
    marginTop: "1px",
    fontSize: "14px",
  },
  recText: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "clamp(12px, 1.4vw, 15px)",
    color: "#E8DFC8",
    lineHeight: 1.55,
  },

  // TOPIC CHIPS
  topicSection: {
    borderTop: "1px solid rgba(201,168,76,0.12)",
    paddingTop: "clamp(14px, 2.5vh, 24px)",
    marginTop: "clamp(4px, 1vh, 10px)",
  },
  topicSectionLabel: {
    display: "block",
    fontFamily: "'DM Mono', monospace",
    fontSize: "clamp(9px, 1vw, 11px)",
    color: "rgba(201,168,76,0.45)",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
    marginBottom: "12px",
  },
  topicChips: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    justifyContent: "center",
  },
  topicChip: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "clamp(11px, 1.2vw, 13px)",
    color: "rgba(232,223,200,0.45)",
    background: "transparent",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "2px",
    padding: "4px 12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  // ACTION ROW
  actionRow: {
    display: "flex",
    gap: "10px",
    padding: "clamp(10px, 1.6vh, 16px) clamp(14px, 2.5vw, 28px)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    background: "rgba(0,0,0,0.3)",
    flexShrink: 0,
    flexWrap: "wrap" as const,
  },
  actionBtnPrimary: {
    flex: "1 1 0",
    minWidth: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(10px, 1.1vw, 12px)",
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase" as const,
    color: "#0a0806",
    background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
    border: "none",
    borderRadius: "3px",
    padding: "clamp(9px, 1.4vh, 13px) 16px",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
  },
  actionBtnOutline: {
    flex: "1 1 0",
    minWidth: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(10px, 1.1vw, 12px)",
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase" as const,
    color: "#C9A84C",
    background: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "3px",
    padding: "clamp(9px, 1.4vh, 13px) 16px",
    cursor: "pointer",
  },

  // SEATS
  seatsArea: {
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "clamp(6px, 1.2vh, 14px)",
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
}

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

  .topic-chip:hover {
    color: #F5EDD6 !important;
    border-color: rgba(201,168,76,0.4) !important;
    background: rgba(201,168,76,0.08) !important;
  }

  .action-btn-primary:hover {
    box-shadow: 0 6px 28px rgba(201,168,76,0.5) !important;
    opacity: 0.92;
  }

  .action-btn-outline:hover {
    background: rgba(201,168,76,0.12) !important;
    border-color: rgba(201,168,76,0.55) !important;
  }

  /* Scrollbar styling */
  .results-scroll::-webkit-scrollbar { width: 4px; }
  .results-scroll::-webkit-scrollbar-track { background: transparent; }
  .results-scroll::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); border-radius: 2px; }
`
