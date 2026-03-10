async function fetchQuestions() {
  const SHEET_ID = '1oxHSMClXdZjxOk6bpaGuA9fv43CvSil64b9WwyEAyQ4'
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

  if (!API_KEY) {
    console.error('[v0] API_KEY not set')
    process.exit(1)
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:N?key=${API_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.values || []
  } catch (error) {
    console.error('[v0] Error fetching sheet:', error.message)
    return []
  }
}

function isValidUrl(urlString) {
  try {
    new URL(urlString)
    return true
  } catch (_) {
    return false
  }
}

function analyzeMediaUrl(url, mediaType) {
  const issues = []

  // Check if URL is valid
  if (!isValidUrl(url)) {
    issues.push('Invalid URL format')
    return issues
  }

  // Check for common CORS or accessibility issues
  const corsDomains = [
    's.studiobinder.com',
    'studiobinder.com',
    'vmcdn.ca',
    'production.assets'
  ]
  
  for (const domain of corsDomains) {
    if (url.includes(domain)) {
      issues.push(`CORS-restricted domain (${domain})`)
      break
    }
  }

  if (url.includes('flickr.com') && !url.includes('/sizes/')) {
    issues.push('Flickr URL - needs to be direct image link')
  }

  // YouTube videos should work with our iframe handler
  if ((url.includes('youtube.com') || url.includes('youtu.be')) && mediaType !== 'video') {
    issues.push('YouTube URL marked as non-video type')
  }

  return issues
}

async function main() {
  console.log('[v0] Analyzing media URLs in Google Sheet...\n')
  
  const rows = await fetchQuestions()
  if (rows.length === 0) {
    console.error('[v0] No data found in sheet')
    return
  }

  const headers = rows[0]
  const idIndex = headers.indexOf('id')
  const mediaUrlIndex = headers.indexOf('mediaUrl')
  const mediaTypeIndex = headers.indexOf('mediaType')
  const conceptIndex = headers.indexOf('concept')

  if (idIndex === -1 || mediaUrlIndex === -1) {
    console.error('[v0] Required columns not found')
    console.log('[v0] Headers found:', headers)
    return
  }

  const problematicMedia = []

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]
    const id = row[idIndex]?.trim()
    const mediaUrl = row[mediaUrlIndex]?.trim()
    const mediaType = row[mediaTypeIndex]?.trim()
    const concept = row[conceptIndex]?.trim()

    if (!id || !mediaUrl) continue

    const issues = analyzeMediaUrl(mediaUrl, mediaType)
    
    if (issues.length > 0) {
      problematicMedia.push({
        id,
        concept,
        mediaType,
        mediaUrl,
        issues
      })
    }
  }

  console.log(`[v0] Analyzed ${rows.length - 1} total questions\n`)

  if (problematicMedia.length === 0) {
    console.log('[v0] ✓ All media URLs appear valid!\n')
  } else {
    console.log(`[v0] Found ${problematicMedia.length} questions with potential issues:\n`)
    
    problematicMedia.forEach(item => {
      console.log(`ID: ${item.id}`)
      console.log(`  Concept: ${item.concept}`)
      console.log(`  Type: ${item.mediaType}`)
      console.log(`  URL: ${item.mediaUrl}`)
      console.log(`  Issue: ${item.issues.join(', ')}`)
    })

    // Summary
    const ids = problematicMedia.map(m => m.id)
    console.log(`\n[v0] Question IDs with media that cannot render:`)
    console.log(ids.join(', '))
  }
}

main()
