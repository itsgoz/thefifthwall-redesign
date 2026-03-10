async function fetchQuestion() {
  const SHEET_ID = '1oxHSMClXdZjxOk6bpaGuA9fv43CvSil64b9WwyEAyQ4'
  const RANGE = 'Sheet1!A:N'
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

  if (!API_KEY) {
    console.error('[v0] API_KEY not set')
    process.exit(1)
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const rows = data.values || []

    const headers = rows[0]
    const idIndex = headers.indexOf('id')
    const topicIndex = headers.indexOf('topic')
    const conceptIndex = headers.indexOf('concept')
    const questionIndex = headers.indexOf('question')
    const mediaTypeIndex = headers.indexOf('mediaType')
    const mediaUrlIndex = headers.indexOf('mediaUrl')
    const optionAIndex = headers.indexOf('optionA')
    const optionBIndex = headers.indexOf('optionB')
    const optionCIndex = headers.indexOf('optionC')
    const optionDIndex = headers.indexOf('optionD')
    const correctAnswerIndex = headers.indexOf('correctAnswer')
    const explanationIndex = headers.indexOf('explanation')
    const difficultyIndex = headers.indexOf('difficulty')

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i]
      const id = row[idIndex]?.trim()

      if (id === 'ts-b-030') {
        console.log('[v0] Question ts-b-030 Details:')
        console.log('[v0] ---')
        console.log(`[v0] ID: ${id}`)
        console.log(`[v0] Topic: ${row[topicIndex]}`)
        console.log(`[v0] Concept: ${row[conceptIndex]}`)
        console.log(`[v0] Difficulty: ${row[difficultyIndex]}`)
        console.log(`[v0] Question: ${row[questionIndex]}`)
        console.log(`[v0] Media Type: ${row[mediaTypeIndex]}`)
        console.log(`[v0] Media URL: ${row[mediaUrlIndex]}`)
        console.log(`[v0] Option A: ${row[optionAIndex]}`)
        console.log(`[v0] Option B: ${row[optionBIndex]}`)
        console.log(`[v0] Option C: ${row[optionCIndex]}`)
        console.log(`[v0] Option D: ${row[optionDIndex]}`)
        console.log(`[v0] Correct Answer: ${row[correctAnswerIndex]}`)
        console.log(`[v0] Explanation: ${row[explanationIndex]}`)
        return
      }
    }

    console.log('[v0] Question ts-b-030 not found')
  } catch (error) {
    console.error('[v0] Error:', error.message)
  }
}

fetchQuestion()
