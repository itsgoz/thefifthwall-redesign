import type { Question, Topic, Difficulty } from "./types"

const SHEET_ID = "1oxHSMClXdZjxOk6bpaGuA9fv43CvSil64b9WwyEAyQ4"
const RANGE = "Sheet1!A:N" // Columns A through N

interface SheetRow {
  id: string
  topic: string
  difficulty: string
  concept: string
  question: string
  mediaType: string
  mediaUrl: string
  mediaSource: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  correctAnswer: string
  explanation: string
}

export async function fetchQuestionsFromSheet(): Promise<Question[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

  if (!apiKey) {
    console.warn(
      "[v0] NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY is not set. Falling back to mock data. Please add it to Vars in v0 sidebar."
    )
    return []
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${apiKey}`
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      console.error("[v0] Failed to fetch from Google Sheets:", response.statusText)
      return []
    }

    const data = await response.json()
    const rows = data.values || []

    // Skip header row
    const dataRows = rows.slice(1)

    const questions: Question[] = dataRows
      .map((row: string[], index: number) => {
        try {
          // Map columns to our interface
          const sheetRow: SheetRow = {
            id: row[0] || "",
            topic: row[1] || "",
            difficulty: row[2] || "",
            concept: row[3] || "",
            question: row[4] || "",
            mediaType: row[5] || "image",
            mediaUrl: row[6] || "",
            mediaSource: row[7] || "",
            optionA: row[8] || "",
            optionB: row[9] || "",
            optionC: row[10] || "",
            optionD: row[11] || "",
            correctAnswer: row[12] || "A",
            explanation: row[13] || ""
          }

          // Validate required fields
          if (!sheetRow.id || !sheetRow.question) {
            console.warn(`[v0] Skipping row ${index + 2}: missing id or question`)
            return null
          }

          // Convert correctAnswer string to the actual option text
          let correctAnswerText = ""
          const correctLetter = sheetRow.correctAnswer?.toUpperCase?.() || "A"
          
          if (["A", "B", "C", "D"].includes(correctLetter)) {
            const answerIndex = correctLetter.charCodeAt(0) - 65 // A=0, B=1, C=2, D=3
            correctAnswerText = [
              sheetRow.optionA,
              sheetRow.optionB,
              sheetRow.optionC,
              sheetRow.optionD
            ][answerIndex] || sheetRow.optionA
          } else {
            // If not a letter, assume it's the full answer text
            correctAnswerText = sheetRow.correctAnswer
          }

          const question: Question = {
            id: sheetRow.id,
            topic: sheetRow.topic as Topic,
            difficulty: sheetRow.difficulty as Difficulty,
            concept: sheetRow.concept,
            questionText: sheetRow.question,
            answerOptions: [sheetRow.optionA, sheetRow.optionB, sheetRow.optionC, sheetRow.optionD],
            correctAnswer: correctAnswerText,
            explanation: sheetRow.explanation,
            media: {
              type: (sheetRow.mediaType?.toLowerCase() as "image" | "gif" | "video") || "image",
              source: sheetRow.mediaSource,
              url: sheetRow.mediaUrl,
              attribution: sheetRow.mediaSource
            }
          }

          return question
        } catch (error) {
          console.warn(`[v0] Error parsing row ${index + 2}:`, error)
          return null
        }
      })
      .filter((q: Question | null): q is Question => q !== null)

    console.log(`[v0] Loaded ${questions.length} questions from Google Sheets`)
    return questions
  } catch (error) {
    console.error("[v0] Error fetching from Google Sheets:", error)
    return []
  }
}

export function getFilteredQuestions(
  topic: Topic | null,
  difficulty: Difficulty | null,
  questions: Question[]
): Question[] {
  return questions.filter(q => {
    const matchesTopic = !topic || q.topic === topic
    const matchesDifficulty = !difficulty || q.difficulty === difficulty
    return matchesTopic && matchesDifficulty
  })
}

export function getRandomQuestions(
  count: number,
  difficulty: Difficulty | null,
  questions: Question[]
): Question[] {
  const filtered = getFilteredQuestions(null, difficulty, questions)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
