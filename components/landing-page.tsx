"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Topic, Difficulty } from "@/lib/types"
import { TOPICS, DIFFICULTIES } from "@/lib/mock-questions"
import { useQuiz } from "@/lib/quiz-context"
import { cn } from "@/lib/utils"

const topicIcons: Record<Topic, string> = {
  "Lighting Techniques": "💡",
  "Color Theory": "🎨",
  "Types of Shots": "🎬",
  "Composition & Framing": "📐",
  "Camera Movement": "🎥",
  "Camera Angles": "📷",
  "Focus & Depth of Field": "🔍",
  "Mise en Scene": "🎭"
}

const topicDescriptions: Record<Topic, string> = {
  "Lighting Techniques": "Master light and shadow to create mood and atmosphere",
  "Color Theory": "Understand how color shapes emotional response",
  "Types of Shots": "Learn the language of close-ups, wides, and everything between",
  "Composition & Framing": "Discover how visual arrangement creates meaning",
  "Camera Movement": "Explore motion as a storytelling tool",
  "Camera Angles": "See how perspective conveys power and emotion",
  "Focus & Depth of Field": "Control attention through selective focus",
  "Mise en Scene": "Master everything visible within the frame"
}

export function LandingPage() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | "random" | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null)
  const { startQuiz } = useQuiz()

  const handleStartQuiz = () => {
    if (selectedTopic && selectedDifficulty) {
      startQuiz(selectedTopic, selectedDifficulty)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 pt-16 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6">
              <span className="text-primary">The Fifth Wall</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Learn the language of film
            </p>
          </motion.div>
        </div>
      </header>

      {/* Topic Selection */}
      <main className="container mx-auto px-6 pb-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Choose Your Focus
          </h2>

          {/* Random Quiz Option */}
          <motion.button
            onClick={() => setSelectedTopic("random")}
            className={cn(
              "w-full p-6 mb-4 rounded-lg border transition-all duration-300",
              "bg-card hover:bg-secondary/50",
              selectedTopic === "random"
                ? "border-primary ring-1 ring-primary"
                : "border-border hover:border-muted-foreground/30"
            )}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-medium text-foreground">Mystery Bag</h3>
                <p className="text-sm text-muted-foreground">Test your knowledge across all cinematography concepts</p>
              </div>
              
            </div>
          </motion.button>

          {/* Topic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                onClick={() => setSelectedTopic(topic)}
                className={cn(
                  "p-5 rounded-lg border text-left transition-all duration-300",
                  "bg-card hover:bg-secondary/50",
                  selectedTopic === topic
                    ? "border-primary ring-1 ring-primary"
                    : "border-border hover:border-muted-foreground/30"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {topicIcons[topic]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground mb-1">{topic}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {topicDescriptions[topic]}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Difficulty Selection */}
          <AnimatePresence>
            {selectedTopic && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12"
              >
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
                  Select Difficulty
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {DIFFICULTIES.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      size="lg"
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={cn(
                        "min-w-[140px] transition-all duration-300",
                        selectedDifficulty === difficulty
                          ? "bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                      )}
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Start Button */}
          <AnimatePresence>
            {selectedTopic && selectedDifficulty && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-12 text-center"
              >
                <Button
                  size="lg"
                  onClick={handleStartQuiz}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  Begin Quiz
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  10 questions · {selectedDifficulty} difficulty
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            AI-powered visual learning for cinematography fundamentals
          </p>
        </div>
      </footer>
    </div>
  )
}
