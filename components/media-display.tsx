"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { QuestionMedia, Question } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useQuiz } from "@/lib/quiz-context"

interface MediaDisplayProps {
  media: QuestionMedia
  overlayType?: Question["overlayType"]
  questionId?: string
}

// Extract YouTube video ID from various YouTube URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }
  return null
}

function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com|youtu\.be)/.test(url)
}

export function MediaDisplay({ media, overlayType, questionId }: MediaDisplayProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [mediaError, setMediaError] = useState(false)
  const { recordFailedMedia } = useQuiz()

  const handleImageError = () => {
    console.error(`[v0] Media failed to load - ID: ${questionId} - URL: ${media.url}`)
    if (questionId) {
      recordFailedMedia(questionId, media.url, media.type)
    }
    setMediaError(true)
    setIsLoaded(true)
  }

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  const handleVideoError = () => {
    console.error(`[v0] Video failed to load - ID: ${questionId} - URL: ${media.url}`)
    if (questionId) {
      recordFailedMedia(questionId, media.url, media.type)
    }
    setMediaError(true)
    setIsLoaded(true)
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
      {/* Image & GIF */}
      {(media.type === "image" || media.type === "gif") && (
        <Image
          src={media.url || "/placeholder.svg"}
          alt="Cinematography example"
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          priority
          unoptimized={media.type === "gif"}
        />
      )}

      {/* Video - Standard or YouTube */}
      {media.type === "video" && (
        <>
          {isYouTubeUrl(media.url) ? (
            // YouTube embed
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(media.url)}`}
              title="YouTube video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            />
          ) : (
            // Standard video element
            <video
              src={media.url}
              poster={media.thumbnailUrl}
              className="w-full h-full object-cover"
              controls
              playsInline
              onError={handleVideoError}
              onLoadedData={() => setIsLoaded(true)}
            />
          )}
        </>
      )}

      {/* Loading State */}
      {!isLoaded && (media.type === "image" || media.type === "gif") && !mediaError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {mediaError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Media failed to load</p>
            <p className="text-xs text-muted-foreground/60 break-all max-w-xs">{media.url}</p>
          </div>
        </div>
      )}

      {/* Visual Overlays */}
      <AnimatePresence>
        {overlayType && showOverlay && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            {overlayType === "rule-of-thirds" && <RuleOfThirdsOverlay />}
            {overlayType === "leading-lines" && <LeadingLinesOverlay />}
            {overlayType === "light-direction" && <LightDirectionOverlay />}
            {overlayType === "depth-layers" && <DepthLayersOverlay />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay Toggle */}
      {overlayType && isLoaded && (
        <button
          onClick={() => setShowOverlay(!showOverlay)}
          className={cn(
            "absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium",
            "bg-background/80 backdrop-blur-sm border border-border",
            "text-foreground hover:bg-background transition-colors",
            "z-10"
          )}
        >
          {showOverlay ? "Hide Overlay" : "Show Overlay"}
        </button>
      )}

      {/* Source Attribution */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs bg-background/60 backdrop-blur-sm text-muted-foreground">
        Source: {media.source}
      </div>
    </div>
  )
}

function RuleOfThirdsOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Vertical lines */}
      <line x1="33.33" y1="0" x2="33.33" y2="100" stroke="rgba(255,200,100,0.6)" strokeWidth="0.5" />
      <line x1="66.66" y1="0" x2="66.66" y2="100" stroke="rgba(255,200,100,0.6)" strokeWidth="0.5" />
      {/* Horizontal lines */}
      <line x1="0" y1="33.33" x2="100" y2="33.33" stroke="rgba(255,200,100,0.6)" strokeWidth="0.5" />
      <line x1="0" y1="66.66" x2="100" y2="66.66" stroke="rgba(255,200,100,0.6)" strokeWidth="0.5" />
      {/* Intersection points */}
      <circle cx="33.33" cy="33.33" r="1.5" fill="rgba(255,200,100,0.9)" />
      <circle cx="66.66" cy="33.33" r="1.5" fill="rgba(255,200,100,0.9)" />
      <circle cx="33.33" cy="66.66" r="1.5" fill="rgba(255,200,100,0.9)" />
      <circle cx="66.66" cy="66.66" r="1.5" fill="rgba(255,200,100,0.9)" />
    </svg>
  )
}

function LeadingLinesOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Converging lines toward center-right */}
      <line x1="0" y1="100" x2="70" y2="40" stroke="rgba(255,200,100,0.5)" strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1="0" y1="80" x2="70" y2="40" stroke="rgba(255,200,100,0.5)" strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1="0" y1="60" x2="70" y2="40" stroke="rgba(255,200,100,0.5)" strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1="100" y1="100" x2="70" y2="40" stroke="rgba(255,200,100,0.5)" strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1="100" y1="80" x2="70" y2="40" stroke="rgba(255,200,100,0.5)" strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Vanishing point */}
      <circle cx="70" cy="40" r="2" fill="rgba(255,200,100,0.9)" />
      {/* Label */}
      <text x="72" y="38" fill="rgba(255,200,100,0.9)" fontSize="3" fontFamily="sans-serif">VP</text>
    </svg>
  )
}

function LightDirectionOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Light source indicator */}
      <circle cx="15" cy="20" r="4" fill="rgba(255,220,100,0.7)" />
      {/* Light rays */}
      <line x1="15" y1="20" x2="50" y2="50" stroke="rgba(255,220,100,0.4)" strokeWidth="0.5" />
      <line x1="15" y1="20" x2="60" y2="40" stroke="rgba(255,220,100,0.4)" strokeWidth="0.5" />
      <line x1="15" y1="20" x2="55" y2="60" stroke="rgba(255,220,100,0.4)" strokeWidth="0.5" />
      <line x1="15" y1="20" x2="40" y2="55" stroke="rgba(255,220,100,0.4)" strokeWidth="0.5" />
      {/* Arrow indicating key light direction */}
      <polygon points="48,48 52,52 46,52" fill="rgba(255,220,100,0.8)" />
      {/* Shadow area indicator */}
      <rect x="60" y="45" width="25" height="30" fill="rgba(0,0,0,0.2)" rx="2" />
      <text x="72.5" y="62" fill="rgba(255,255,255,0.5)" fontSize="3" fontFamily="sans-serif" textAnchor="middle">shadow</text>
    </svg>
  )
}

function DepthLayersOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Foreground indicator */}
      <rect x="5" y="70" width="20" height="25" fill="none" stroke="rgba(255,200,100,0.6)" strokeWidth="0.5" strokeDasharray="2,2" rx="1" />
      <text x="15" y="98" fill="rgba(255,200,100,0.9)" fontSize="2.5" fontFamily="sans-serif" textAnchor="middle">FG</text>
      
      {/* Midground indicator */}
      <rect x="30" y="35" width="30" height="35" fill="none" stroke="rgba(200,180,100,0.6)" strokeWidth="0.5" strokeDasharray="2,2" rx="1" />
      <text x="45" y="73" fill="rgba(200,180,100,0.9)" fontSize="2.5" fontFamily="sans-serif" textAnchor="middle">MG</text>
      
      {/* Background indicator */}
      <rect x="65" y="10" width="30" height="40" fill="none" stroke="rgba(150,150,100,0.6)" strokeWidth="0.5" strokeDasharray="2,2" rx="1" />
      <text x="80" y="53" fill="rgba(150,150,100,0.9)" fontSize="2.5" fontFamily="sans-serif" textAnchor="middle">BG</text>
      
      {/* Depth arrow */}
      <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(255,200,100,0.4)" strokeWidth="0.5" />
      <polygon points="90,30 85,28 85,32" fill="rgba(255,200,100,0.6)" />
      <text x="50" y="27" fill="rgba(255,200,100,0.8)" fontSize="2.5" fontFamily="sans-serif" textAnchor="middle">depth</text>
    </svg>
  )
}
