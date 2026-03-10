"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { MediaDisplay } from "./media-display"

export function QuestionCard() {
  const { getCurrentQuestion, getCurrentAnswer, submitAnswer, nextQuestion, quizState } = useQuiz()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  
  const question = getCurrentQuestion()
  const answer = getCurrentAnswer()
  const hasAnswered = answer !== null
  const isLastQuestion = quizState ? quizState.currentQuestionIndex === quizState.questions.length - 1 : false

  if (!question) return null

  const handleOptionSelect = (option: string) => {
    if (hasAnswered) return
    setSelectedOption(option)
  }

  const handleSubmit = () => {
    if (!selectedOption || hasAnswered) return
    submitAnswer(selectedOption)
  }

  const handleContinue = () => {
    setSelectedOption(null)
    nextQuestion()
  }

  const getOptionState = (option: string) => {
    if (!hasAnswered) {
      return selectedOption === option ? "selected" : "default"
    }
    if (option === question.correctAnswer) return "correct"
    if (option === answer?.selectedAnswer && !answer.isCorrect) return "incorrect"
    return "disabled"
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Media Display */}
      <div className="mb-8">
        <MediaDisplay 
          media={question.media} 
          overlayType={hasAnswered ? question.overlayType : null}
          questionId={question.id}
        />
      </div>

      {/* Question */}
      <motion.h2 
        className="text-xl md:text-2xl font-light text-foreground mb-8 text-balance leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {question.questionText}
      </motion.h2>

      {/* Answer Options */}
      <div className="space-y-3 mb-8">
        {question.answerOptions.map((option, index) => {
          const state = getOptionState(option)
          return (
            <motion.button
              key={option}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => handleOptionSelect(option)}
              disabled={hasAnswered}
              className={cn(
                "w-full p-4 rounded-lg border text-left transition-all duration-300",
                "flex items-center gap-4",
                state === "default" && "bg-card border-border hover:border-muted-foreground/50 hover:bg-secondary/30",
                state === "selected" && "bg-secondary border-primary ring-1 ring-primary",
                state === "correct" && "bg-success/10 border-success text-success",
                state === "incorrect" && "bg-destructive/10 border-destructive text-destructive",
                state === "disabled" && "bg-card border-border opacity-50"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0",
                "border transition-colors",
                state === "default" && "border-muted-foreground/30 text-muted-foreground",
                state === "selected" && "border-primary bg-primary text-primary-foreground",
                state === "correct" && "border-success bg-success text-success-foreground",
                state === "incorrect" && "border-destructive bg-destructive text-destructive-foreground",
                state === "disabled" && "border-muted text-muted-foreground"
              )}>
                {state === "correct" ? (
                  <Check className="w-4 h-4" />
                ) : state === "incorrect" ? (
                  <X className="w-4 h-4" />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </div>
              <span className={cn(
                "flex-1",
                state === "default" && "text-foreground",
                state === "selected" && "text-foreground",
                state === "disabled" && "text-muted-foreground"
              )}>
                {option}
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* Submit Button (before answer) */}
      {!hasAnswered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            Submit Answer
          </Button>
        </motion.div>
      )}

      {/* Explanation (after answer) */}
      <AnimatePresence>
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            {/* Result Banner */}
            <div className={cn(
              "p-4 rounded-lg mb-6",
              answer?.isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
            )}>
              <div className="flex items-start gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  answer?.isCorrect ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
                )}>
                  {answer?.isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
                <div>
                  <p className={cn(
                    "font-medium",
                    answer?.isCorrect ? "text-success" : "text-destructive"
                  )}>
                    {answer?.isCorrect 
                      ? "Correct! You understood the visual language here."
                      : "Not quite — but every frame is a lesson."}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Explanation</span>
              </div>
              <p className="text-foreground leading-relaxed">
                {question.explanation}
              </p>
            </div>

            {/* Continue Button */}
            <Button
              size="lg"
              onClick={handleContinue}
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLastQuestion ? "See Results" : "Next Question"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
