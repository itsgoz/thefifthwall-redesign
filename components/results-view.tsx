"use client"

import { motion } from "framer-motion"
import { useQuiz } from "@/lib/quiz-context"
import { Button } from "@/components/ui/button"
import { RefreshCw, Shuffle, BookOpen, Trophy, Target, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Difficulty } from "@/lib/types"
import { TOPICS } from "@/lib/mock-questions"

export function ResultsView() {
  const { getResults, startQuiz, resetQuiz, quizState } = useQuiz()
  const results = getResults()

  if (!results || !quizState) return null

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return "Outstanding visual literacy. You read cinema like a native speaker."
    if (percentage >= 60) return "Strong foundation. You're developing a keen eye for visual storytelling."
    if (percentage >= 40) return "Good start. Every film you watch is an opportunity to learn more."
    return "Keep watching, keep learning. The language of film reveals itself with practice."
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success"
    if (percentage >= 60) return "text-primary"
    return "text-muted-foreground"
  }

  const handleRetry = () => {
    startQuiz(quizState.selectedTopic, quizState.selectedDifficulty)
  }

  const handleRandomQuiz = () => {
    startQuiz("random", quizState.selectedDifficulty)
  }

  const handleChangeTopic = () => {
    resetQuiz()
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
          <Trophy className="w-4 h-4" />
          Quiz Complete
        </div>
        
        <div className={cn(
          "text-7xl md:text-8xl font-light mb-4",
          getScoreColor(results.percentage)
        )}>
          {results.percentage}%
        </div>
        
        <p className="text-lg text-muted-foreground mb-2">
          {results.totalScore} of {results.totalQuestions} correct
        </p>
        
        <p className="text-foreground max-w-md mx-auto leading-relaxed">
          {getScoreMessage(results.percentage)}
        </p>
      </motion.div>

      {/* Performance Breakdown */}
      {results.topicPerformance.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
              Performance by Concept
            </h3>
          </div>
          
          <div className="space-y-3">
            {results.topicPerformance.map((tp, index) => (
              <motion.div
                key={tp.topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-medium">{tp.topic}</span>
                  <span className={cn(
                    "text-sm font-medium",
                    tp.percentage >= 70 ? "text-success" : tp.percentage >= 50 ? "text-primary" : "text-muted-foreground"
                  )}>
                    {tp.correct}/{tp.total} ({tp.percentage}%)
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tp.percentage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={cn(
                      "h-full rounded-full",
                      tp.percentage >= 70 ? "bg-success" : tp.percentage >= 50 ? "bg-primary" : "bg-muted-foreground"
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Topic Breakdown (Mystery Bag only) */}
      {quizState.selectedTopic === "random" && results.topicBreakdown && results.topicBreakdown.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
              Performance by Topic
            </h3>
          </div>
          
          <div className="space-y-3">
            {results.topicBreakdown.map((tb, index) => (
              <motion.div
                key={tb.topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-medium">{tb.topic}</span>
                  <span className={cn(
                    "text-sm font-medium",
                    tb.percentage >= 70 ? "text-success" : tb.percentage >= 50 ? "text-primary" : "text-muted-foreground"
                  )}>
                    {tb.correct}/{tb.total} ({tb.percentage}%)
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tb.percentage}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className={cn(
                      "h-full rounded-full",
                      tb.percentage >= 70 ? "bg-success" : tb.percentage >= 50 ? "bg-primary" : "bg-muted-foreground"
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Recommendations */}
      {results.recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
              Recommendations
            </h3>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-5">
            <ul className="space-y-3">
              {results.recommendations.map((rec, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="text-primary mt-0.5">•</span>
                  <span>{rec}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Button
          onClick={handleRetry}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
        
        <Button
          variant="outline"
          onClick={handleRandomQuiz}
          className="flex-1 border-border text-foreground hover:bg-secondary bg-transparent"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Random Quiz
        </Button>
        
        <Button
          variant="outline"
          onClick={handleChangeTopic}
          className="flex-1 border-border text-foreground hover:bg-secondary bg-transparent"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Choose Topic
        </Button>
      </motion.div>

      {/* Quick Topic Selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 pt-8 border-t border-border"
      >
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Jump to a specific topic
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {TOPICS.map((topic) => (
            <Button
              key={topic}
              variant="ghost"
              size="sm"
              onClick={() => startQuiz(topic, quizState.selectedDifficulty)}
              className="text-xs text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {topic}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
