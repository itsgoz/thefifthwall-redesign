"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { QuestionCard } from "./question-card"
import { ResultsView } from "./results-view"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuizView() {
  const { quizState, resetQuiz } = useQuiz()

  if (!quizState) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
            {/* Branding and Topic */}
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <h1 className="font-serif text-lg md:text-xl text-primary whitespace-nowrap">The Fifth Wall</h1>
              <span className="text-xs md:text-xs text-muted-foreground uppercase tracking-wider truncate">
                {quizState.selectedTopic === "random" ? "Mixed Topics" : quizState.selectedTopic}
              </span>
            </div>
            
            {!quizState.isComplete && (
              <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
                <div className="flex items-center gap-1.5 md:gap-2 flex-1 md:flex-none min-w-0 md:min-w-auto">
                  {quizState.questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors flex-shrink-0 ${
                        index < quizState.currentQuestionIndex
                          ? "bg-primary"
                          : index === quizState.currentQuestionIndex
                          ? "bg-primary/50"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                  {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                </span>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={resetQuiz}
              className="text-muted-foreground hover:text-foreground h-8 md:h-9 px-2 md:px-3"
            >
              <X className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
              <span>Exit</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {quizState.isComplete ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ResultsView />
            </motion.div>
          ) : (
            <motion.div
              key={`question-${quizState.currentQuestionIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionCard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
