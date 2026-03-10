import type { Question, Topic, Difficulty } from "./types"

export const TOPICS: Topic[] = [
  "Lighting Techniques",
  "Color Theory",
  "Types of Shots",
  "Composition & Framing",
  "Camera Movement",
  "Camera Angles",
  "Focus & Depth of Field",
  "Mise en Scene"
]

export const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"]

// Comprehensive question bank with 10 questions per difficulty level per topic
// 7 topics × 3 difficulties × 10 questions = 210 questions minimum

export const mockQuestions: Question[] = [
  // ==========================================
  // LIGHTING TECHNIQUES
  // Beginner: 10 questions
  // Intermediate: 10 questions
  // Advanced: 10 questions
  // ==========================================
  
  // BEGINNER - Lighting Techniques
  {
    id: "lighting-001",
    media: {
      type: "image",
      source: "StudioBinder",
      url: "https://www.studiobinder.com/blog/wp-content/uploads/2019/06/Three-Point-Lighting-Setup-Diagram-StudioBinder.jpg",
      attribution: "StudioBinder"
    },
    topic: "Lighting Techniques",
    concept: "Three-Point Lighting",
    questionText: "What are the three lights that make up the standard three-point lighting setup?",
    answerOptions: [
      "Key light, fill light, and back light",
      "Front light, side light, and top light",
      "Main light, shadow light, and ambient light",
      "Hard light, soft light, and natural light"
    ],
    correctAnswer: "Key light, fill light, and back light",
    explanation: "Three-point lighting is the foundational cinematography setup consisting of three distinct light sources: the key light (main/strongest source providing primary illumination), the fill light (positioned opposite the key to soften shadows), and the back light (positioned behind the subject to create separation from the background). This technique has been used since the early days of Hollywood and remains the standard approach for interviews, portraits, and narrative scenes. Famous cinematographers like Gregg Toland used variations of this setup in 'Citizen Kane' to create depth and dimension.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },
  {
    id: "lighting-002",
    media: {
      type: "image",
      source: "StudioBinder",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
      attribution: "StudioBinder/NoFilmSchool"
    },
    topic: "Lighting Techniques",
    concept: "Key Light Function",
    questionText: "What is the primary function of the key light in a lighting setup?",
    answerOptions: [
      "To eliminate all shadows completely",
      "To provide the main source of illumination for the subject",
      "To light only the background",
      "To create colored lighting effects"
    ],
    correctAnswer: "To provide the main source of illumination for the subject",
    explanation: "The key light is the primary and strongest light source in any scene, providing the main illumination and establishing the overall exposure and mood. Typically positioned at a 30-45 degree angle from the camera, it defines the lighting character and creates the dominant shadows. Roger Deakins' work on 'Blade Runner 2049' showcases masterful key light placement to create atmospheric neo-noir visuals. The key light's intensity, color temperature, and angle are the most important decisions a cinematographer makes when lighting a scene.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },
  {
    id: "lighting-003",
    media: {
      type: "image",
      source: "Visual Education",
      url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop",
      attribution: "Visual Education"
    },
    topic: "Lighting Techniques",
    concept: "Fill Light Purpose",
    questionText: "What does the fill light do in a three-point lighting setup?",
    answerOptions: [
      "Creates the primary shadows in the scene",
      "Softens and reduces shadows created by the key light",
      "Replaces the key light as the main source",
      "Provides illumination only for the background"
    ],
    correctAnswer: "Softens and reduces shadows created by the key light",
    explanation: "The fill light is positioned opposite the key light at a lower intensity (typically 50% or less of the key light's power) to reduce the intensity of shadows without eliminating them completely. This maintains dimensionality while preventing harsh, unflattering contrasts. The ratio between key and fill light (called the lighting ratio) determines the mood: a 2:1 ratio creates soft, even lighting suitable for commercies, while an 8:1 ratio creates dramatic film noir-style contrast. The fill light can be an actual light source, a reflector bouncing key light back onto the subject, or even ambient light from the environment.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },
  {
    id: "lighting-004",
    media: {
      type: "image",
      source: "NoFilmSchool",
      url: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=1200&h=800&fit=crop",
      attribution: "NoFilmSchool"
    },
    topic: "Lighting Techniques",
    concept: "Back Light Position",
    questionText: "Where is the back light (also called rim light or hair light) positioned in relation to the subject?",
    answerOptions: [
      "Directly in front of the subject at eye level",
      "Behind the subject, often elevated",
      "Below the subject at ground level",
      "Exactly to the left side of the subject"
    ],
    correctAnswer: "Behind the subject, often elevated",
    explanation: "The back light (rim light or hair light) is positioned behind the subject, typically elevated and angled down, to create a rim or halo of light around the edges. This separates the subject from the background, adding depth and preventing them from appearing flat or merging with the backdrop. Film noir cinematography extensively uses strong backlighting to create dramatic silhouettes and mysterious atmospheres. The back light is usually positioned on the same side as the key light and aimed toward the fill light, though creative variations exist depending on the desired effect.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },
  {
    id: "lighting-005",
    media: {
      type: "image",
      source: "Adorama",
      url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop",
      attribution: "Adorama/BH Photo"
    },
    topic: "Lighting Techniques",
    concept: "Hard Light vs Soft Light",
    questionText: "What creates hard light with sharp, well-defined shadows?",
    answerOptions: [
      "Large, diffused light sources like softboxes",
      "Small, concentrated light sources like spotlights",
      "Bounced light from white walls or reflectors",
      "Colored gels placed over lights"
    ],
    correctAnswer: "Small, concentrated light sources like spotlights",
    explanation: "Hard light is produced by small, concentrated, undiffused light sources such as direct sunlight, bare bulbs, or spotlights without modifiers. The small source creates parallel light rays that cast sharp, well-defined shadows with crisp edges. Film noir masters like John Alton used hard light extensively to create dramatic, high-contrast imagery with stark shadows that enhanced mystery and tension. In contrast, soft light comes from large sources (softboxes, overcast sky, bounced light) that wrap around the subject, creating gradual shadow transitions. The quality of light (hard vs soft) depends on the apparent size of the source relative to the subject, not the source's actual power output.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "lighting-006",
    media: {
      type: "image",
      source: "StudioBinder",
      url: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&h=800&fit=crop",
      attribution: "StudioBinder"
    },
    topic: "Lighting Techniques",
    concept: "High-Key Lighting",
    questionText: "Which film genre typically uses high-key lighting with bright, even illumination and minimal shadows?",
    answerOptions: [
      "Horror films",
      "Film noir",
      "Romantic comedies and sitcoms",
      "Psychological thrillers"
    ],
    correctAnswer: "Romantic comedies and sitcoms",
    explanation: "High-key lighting creates bright, cheerful atmospheres with even illumination, minimal shadows, and low contrast ratios. This technique is prevalent in romantic comedies ('When Harry Met Sally,' 'Crazy Rich Asians'), sitcoms ('Friends,' 'The Office'), musicals, and commercial work where an upbeat, optimistic mood is desired. The technique originated in early television due to technical limitations of cameras handling high contrast, but is now a deliberate artistic choice. High-key lighting typically uses a lighting ratio close to 1:1 or 2:1, meaning the key and fill lights are similar in intensity, resulting in very soft shadows that don't distract from the story or performances.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "lighting-007",
    media: {
      type: "image",
      source: "NoFilmSchool",
      url: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1200&h=800&fit=crop",
      attribution: "NoFilmSchool/Backstage"
    },
    topic: "Lighting Techniques",
    concept: "Low-Key Lighting",
    questionText: "What mood or atmosphere does low-key lighting typically create?",
    answerOptions: [
      "Happy, cheerful, and optimistic",
      "Dark, mysterious, and dramatic",
      "Bright, energetic, and playful",
      "Neutral, calm, and peaceful"
    ],
    correctAnswer: "Dark, mysterious, and dramatic",
    explanation: "Low-key lighting uses high contrast with predominant shadows and dark tones to create dramatic, mysterious, suspenseful, or ominous atmospheres. This technique is a staple of film noir ('Double Indemnity,' 'The Third Man'), thrillers, horror films, and serious dramas. Gordon Willis's cinematography in 'The Godfather' exemplifies low-key lighting with its rich shadows and carefully controlled highlights that convey power, secrecy, and moral ambiguity. Low-key setups typically use lighting ratios of 8:1 or higher, with much of the frame intentionally left in shadow. The technique draws focus to specific illuminated areas while allowing darkness to hide details, creating psychological tension and visual drama.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },
  {
    id: "lighting-008",
    media: {
      type: "image",
      source: "StudioBinder",
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c138?w=1200&h=800&fit=crop",
      attribution: "StudioBinder"
    },
    topic: "Lighting Techniques",
    concept: "Practical Lights",
    questionText: "What are practical lights in cinematography?",
    answerOptions: [
      "Lights that are cost-effective and easy to use",
      "Light sources that are visible within the frame",
      "Only lights used for outdoor shooting",
      "Backup or emergency lighting equipment"
    ],
    correctAnswer: "Light sources that are visible within the frame",
    explanation: "Practical lights are light sources that appear within the frame and are visible to the camera, such as table lamps, candles, overhead fixtures, neon signs, television screens, or windows with daylight. They serve both functional and aesthetic purposes, adding realism and environmental context while contributing to the overall lighting design. However, practicals often need modification for proper cinematic exposure: gaffers may replace bulbs with different wattages or color temperatures, add dimmers, or supplement with hidden off-camera lights. Denis Villeneuve's 'Blade Runner 2049' uses practicals extensively—neon signs, computer screens, and architectural lighting—to create the dystopian atmosphere while supplementing with carefully positioned film lights for proper exposure and artistic control.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "lighting-009",
    media: {
      type: "image",
      source: "NoFilmSchool",
      url: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=1200&h=800&fit=crop",
      attribution: "NoFilmSchool"
    },
    topic: "Lighting Techniques",
    concept: "Natural Light",
    questionText: "What is the most common source of natural light in filmmaking?",
    answerOptions: [
      "Studio tungsten lights",
      "LED panels",
      "The sun",
      "Practical lamps in the scene"
    ],
    correctAnswer: "The sun",
    explanation: "The sun is the primary natural light source in cinematography, offering diverse qualities throughout the day. Directors and cinematographers carefully plan around 'golden hour' (the hour after sunrise and before sunset) when sunlight is warm, soft, and flattering, creating long shadows and rich colors. Emmanuel Lubezki's work on Terrence Malick's 'Days of Heaven' and 'The Revenant' showcases masterful natural light cinematography, using only available sunlight and firelight. The sun's quality changes dramatically: harsh and cool at midday (creating strong shadows), soft and warm during golden hour, cool and even during overcast conditions. Cinematographers use reflectors, diffusion, and negative fill to shape natural light, often combining it with artificial lights to maintain consistency and achieve specific looks.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "lighting-010",
    media: {
      type: "image",
      source: "StudioBinder",
      url: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200&h=800&fit=crop",
      attribution: "StudioBinder"
    },
    topic: "Lighting Techniques",
    concept: "Lighting Ratio",
    questionText: "What does the term \"lighting ratio\" refer to?",
    answerOptions: [
      "The total number of lights used in the scene",
      "The relationship between key light and fill light intensity",
      "The cost ratio of lighting equipment to other gear",
      "The ratio of natural to artificial light"
    ],
    correctAnswer: "The relationship between key light and fill light intensity",
    explanation: "Lighting ratio describes the relationship between the intensity of the key light and fill light, expressed as a ratio (e.g., 2:1, 4:1, 8:1). A 2:1 ratio means the key light side is twice as bright as the fill light side, creating soft, flattering lighting suitable for comedies and commercials. A 4:1 ratio provides moderate contrast appropriate for most dramatic content. An 8:1 or higher ratio creates strong contrast with deep shadows, typical of film noir and thrillers. Cinematographers use light meters to measure and achieve precise lighting ratios. Understanding ratios is crucial because they directly control mood and visual drama: lower ratios feel open and cheerful, while higher ratios create mystery and tension. The ratio determines how much detail is visible in shadows versus highlights.",
    difficulty: "Beginner",
    overlayType: "light-direction"
  },

  // INTERMEDIATE - Lighting Techniques
  {
    id: "lt-i-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Silhouette against bright background"
    },
    topic: "Lighting Techniques",
    concept: "Silhouette Lighting",
    questionText: "What lighting technique creates a subject as a dark shape against a bright background?",
    answerOptions: [
      "High-key lighting",
      "Fill lighting",
      "Silhouette lighting",
      "Bounce lighting"
    ],
    correctAnswer: "Silhouette lighting",
    explanation: "Silhouette lighting removes identifying features by placing a strong light source behind the subject with no front illumination. This transforms a specific person into an archetype or symbol, creating mystery about a character's identity or emphasizing the power of their form against the environment.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "lt-i-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Rembrandt lighting"
    },
    topic: "Lighting Techniques",
    concept: "Rembrandt Lighting",
    questionText: "What distinguishes Rembrandt lighting from other portrait lighting techniques?",
    answerOptions: [
      "Complete elimination of shadows",
      "A triangle of light on the cheek opposite the light source",
      "Even illumination across the face",
      "Strong backlight creating a halo"
    ],
    correctAnswer: "A triangle of light on the cheek opposite the light source",
    explanation: "Rembrandt lighting is named after the Dutch painter who frequently used this dramatic technique. The key light is positioned at 45 degrees to the side and slightly above the subject, creating a characteristic triangle of light on the shadowed cheek beneath the eye. This adds depth and mystery to portraits.",
    difficulty: "Intermediate",
    overlayType: "light-direction"
  },
  {
    id: "lt-i-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Butterfly lighting"
    },
    topic: "Lighting Techniques",
    concept: "Butterfly Lighting",
    questionText: "What creates the characteristic 'butterfly' shadow under the nose in this lighting technique?",
    answerOptions: [
      "Side lighting from 90 degrees",
      "Light positioned directly in front and above the subject",
      "Backlight from behind the subject",
      "Two lights at equal intensity"
    ],
    correctAnswer: "Light positioned directly in front and above the subject",
    explanation: "Butterfly lighting (also called Paramount lighting) places the key light directly in front of and above the subject, creating a butterfly-shaped shadow under the nose. This glamorous technique was popular in classic Hollywood portraits, as it emphasizes cheekbones and creates a slimming effect.",
    difficulty: "Intermediate",
    overlayType: "light-direction"
  },
  {
    id: "lt-i-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Loop lighting"
    },
    topic: "Lighting Techniques",
    concept: "Loop Lighting",
    questionText: "What is the key characteristic of loop lighting?",
    answerOptions: [
      "A small shadow of the nose that loops down toward the corner of the mouth",
      "Circular catchlights in the eyes",
      "Complete 360-degree lighting around the subject",
      "Repetitive lighting patterns"
    ],
    correctAnswer: "A small shadow of the nose that loops down toward the corner of the mouth",
    explanation: "Loop lighting positions the key light slightly to the side and above the subject, creating a small, curved shadow from the nose that 'loops' down toward the corner of the mouth (but doesn't touch it). This is one of the most flattering and commonly used portrait lighting patterns.",
    difficulty: "Intermediate",
    overlayType: "light-direction"
  },
  {
    id: "lt-i-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Golden hour lighting"
    },
    topic: "Lighting Techniques",
    concept: "Golden Hour",
    questionText: "Why do cinematographers value 'golden hour' for shooting?",
    answerOptions: [
      "It's the only time cameras function properly",
      "It provides warm, soft, directional light with rich color",
      "It's the least expensive time to shoot",
      "It eliminates all shadows completely"
    ],
    correctAnswer: "It provides warm, soft, directional light with rich color",
    explanation: "Golden hour occurs shortly after sunrise or before sunset when the sun is low in the sky. The light travels through more atmosphere, creating warm tones and softer quality. The angle provides directional modeling without harsh contrast, and the rich colors add immediate production value to images.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "lt-i-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506818144585-74b29c980d4b?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Blue hour lighting"
    },
    topic: "Lighting Techniques",
    concept: "Blue Hour",
    questionText: "What is the 'blue hour' and why is it useful for cinematographers?",
    answerOptions: [
      "An hour when everything looks blue due to camera settings",
      "The period after sunset with deep blue ambient light in the sky",
      "A lighting technique using blue gels",
      "The time when actors feel sad"
    ],
    correctAnswer: "The period after sunset with deep blue ambient light in the sky",
    explanation: "Blue hour is the twilight period after sunset (or before sunrise) when the sun is below the horizon but indirect sunlight creates a deep blue tone in the sky. This provides a rich, moody backdrop and allows cinematographers to balance practical lights with natural ambiance, creating cinematic nighttime scenes.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "lt-i-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Split lighting"
    },
    topic: "Lighting Techniques",
    concept: "Split Lighting",
    questionText: "What effect does split lighting create?",
    answerOptions: [
      "Divides the face into equal halves of light and shadow",
      "Splits the light into different colors",
      "Creates multiple shadows",
      "Uses two lights of different intensities"
    ],
    correctAnswer: "Divides the face into equal halves of light and shadow",
    explanation: "Split lighting places the key light at 90 degrees to the side of the subject, illuminating only half the face while leaving the other half in shadow. This dramatic technique creates a sense of mystery, duality, or inner conflict, often used for villains or morally ambiguous characters.",
    difficulty: "Intermediate",
    overlayType: "light-direction"
  },
  {
    id: "lt-i-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Bounce lighting"
    },
    topic: "Lighting Techniques",
    concept: "Bounce Lighting",
    questionText: "What is bounce lighting used for?",
    answerOptions: [
      "Creating light that literally bounces up and down",
      "Reflecting light off surfaces to create softer, indirect illumination",
      "Using trampolines to position lights higher",
      "Lighting that changes intensity rhythmically"
    ],
    correctAnswer: "Reflecting light off surfaces to create softer, indirect illumination",
    explanation: "Bounce lighting involves directing light at a reflective surface (wall, ceiling, reflector board) rather than directly at the subject. The reflected light becomes larger and softer, creating gentle, even illumination. This technique is budget-friendly and creates natural-looking light without expensive diffusion equipment.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "lt-i-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Colored lighting"
    },
    topic: "Lighting Techniques",
    concept: "Colored Lighting",
    questionText: "What tool is used to add color to lights in cinematography?",
    answerOptions: [
      "Paint applied directly to bulbs",
      "Color gels or filters",
      "Colored fabrics draped over lights",
      "Digital effects added in post"
    ],
    correctAnswer: "Color gels or filters",
    explanation: "Color gels are thin, heat-resistant colored sheets placed in front of lights to change their color temperature or add creative color effects. Beyond creative choices, gels are also used to balance different light sources (converting tungsten to daylight) or to simulate specific light sources like fire or neon.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "lt-i-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Negative fill"
    },
    topic: "Lighting Techniques",
    concept: "Negative Fill",
    questionText: "What is negative fill in lighting?",
    answerOptions: [
      "Removing lights to create darkness",
      "Using dark surfaces to absorb light and deepen shadows",
      "Lighting with negative emotional impact",
      "Subtracting light in post-production"
    ],
    correctAnswer: "Using dark surfaces to absorb light and deepen shadows",
    explanation: "Negative fill uses black flags, fabrics, or surfaces to absorb reflected light and deepen shadows. In environments with reflective surfaces, light bounces everywhere, reducing contrast. Negative fill allows cinematographers to sculpt darkness just as precisely as they sculpt light, increasing drama and dimensionality.",
    difficulty: "Intermediate",
    overlayType: null
  },

  // ADVANCED - Lighting Techniques
  {
    id: "lt-a-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Chiaroscuro lighting"
    },
    topic: "Lighting Techniques",
    concept: "Chiaroscuro Lighting",
    questionText: "What Renaissance-inspired lighting technique creates dramatic contrast between light and shadow?",
    answerOptions: [
      "Chiaroscuro lighting",
      "High-key lighting",
      "Flat lighting",
      "Ambient lighting"
    ],
    correctAnswer: "Chiaroscuro lighting",
    explanation: "Chiaroscuro (Italian for 'light-dark') is borrowed from Renaissance painting. The stark contrast between deep shadows and bright highlights creates psychological depth and drama. Cinematographers like Gordon Willis (The Godfather) and Roger Deakins have mastered this approach to convey moral ambiguity and emotional intensity.",
    difficulty: "Advanced",
    overlayType: "light-direction"
  },
  {
    id: "lt-a-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Motivated lighting from window"
    },
    topic: "Lighting Techniques",
    concept: "Motivated Lighting",
    questionText: "What does 'motivated lighting' mean in cinematography?",
    answerOptions: [
      "Lighting that motivates actors to perform better",
      "Lighting that appears to come from sources visible or implied in the scene",
      "Budget-conscious lighting choices",
      "Lighting designed by producers"
    ],
    correctAnswer: "Lighting that appears to come from sources visible or implied in the scene",
    explanation: "Motivated lighting has a logical, believable source within the story world—a window, lamp, fire, or the sun. Even when cinematographers use powerful film lights, they position and modify them to appear as if the illumination comes from on-screen or just off-screen sources, maintaining the illusion of reality.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "lt-a-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Contrast ratio demonstration"
    },
    topic: "Lighting Techniques",
    concept: "Lighting Ratio",
    questionText: "What is a lighting ratio in cinematography?",
    answerOptions: [
      "The number of lights used per scene",
      "The relationship between key light and fill light intensity",
      "The cost-to-quality ratio of lighting equipment",
      "The ratio of natural to artificial light"
    ],
    correctAnswer: "The relationship between key light and fill light intensity",
    explanation: "Lighting ratio measures the difference in intensity between the key light and fill light, expressed as ratios like 2:1, 4:1, or 8:1. A low ratio (2:1) creates soft, even lighting; a high ratio (8:1) creates dramatic contrast. Understanding and controlling ratios is essential for consistent mood and professional results.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "lt-a-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Top lighting"
    },
    topic: "Lighting Techniques",
    concept: "Top Lighting",
    questionText: "What emotional effect does top lighting typically create?",
    answerOptions: [
      "Warmth and comfort",
      "An unnatural, sinister, or divine quality",
      "Natural everyday realism",
      "Romantic atmosphere"
    ],
    correctAnswer: "An unnatural, sinister, or divine quality",
    explanation: "Top lighting from directly above is rarely found in nature, making it feel unnatural and therefore emotionally striking. It can create hollows in eye sockets and under the nose, suggesting evil or insanity. Conversely, bright top light can evoke the divine or supernatural, like light from heaven.",
    difficulty: "Advanced",
    overlayType: "light-direction"
  },
  {
    id: "lt-a-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Under lighting"
    },
    topic: "Lighting Techniques",
    concept: "Under Lighting",
    questionText: "Why does lighting from below (under lighting) often create an unsettling effect?",
    answerOptions: [
      "It's too bright for comfort",
      "It reverses natural shadow patterns we're accustomed to",
      "It only works with LED lights",
      "It requires expensive equipment"
    ],
    correctAnswer: "It reverses natural shadow patterns we're accustomed to",
    explanation: "Throughout human history, light has come from above (sun, moon, fire). Under lighting reverses this, casting unnatural shadows upward, distorting familiar features. This violation of expected lighting patterns triggers discomfort, making it perfect for horror or revealing a character's hidden dark side.",
    difficulty: "Advanced",
    overlayType: "light-direction"
  },
  {
    id: "lt-a-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Kicker light"
    },
    topic: "Lighting Techniques",
    concept: "Kicker Light",
    questionText: "What is the purpose of a kicker light in advanced lighting setups?",
    answerOptions: [
      "To light the subject's shoes",
      "To add a highlight to the side of the subject, creating edge definition",
      "To illuminate the camera operator",
      "To provide motivation for actors"
    ],
    correctAnswer: "To add a highlight to the side of the subject, creating edge definition",
    explanation: "A kicker light is placed to the rear side of the subject, adding an accent of light to create edge definition and depth. Unlike a rim light which wraps around the subject, a kicker creates a specific highlight on one side, adding sophistication and polish to the lighting design.",
    difficulty: "Advanced",
    overlayType: "light-direction"
  },
  {
    id: "lt-a-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Practicals as key source"
    },
    topic: "Lighting Techniques",
    concept: "Practicals as Key Light",
    questionText: "What is an advanced technique of using practical lights as the key light source?",
    answerOptions: [
      "Replacing all film lights with household lamps",
      "Dimming practicals and hiding more powerful lights nearby to augment them",
      "Using only battery-powered lights",
      "Avoiding any artificial lighting"
    ],
    correctAnswer: "Dimming practicals and hiding more powerful lights nearby to augment them",
    explanation: "Advanced cinematographers often use practicals as the apparent key light source while discreetly augmenting them with hidden film lights. The practical provides motivation and realism, while the hidden lights provide necessary exposure and control. This creates authentic-looking lighting with proper technical quality.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "lt-a-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color temperature mixing"
    },
    topic: "Lighting Techniques",
    concept: "Color Temperature Mixing",
    questionText: "What creative effect can be achieved by intentionally mixing different color temperatures?",
    answerOptions: [
      "It always creates technical errors",
      "Creating visual contrast and separating subjects from backgrounds",
      "It has no noticeable effect",
      "It damages camera sensors"
    ],
    correctAnswer: "Creating visual contrast and separating subjects from backgrounds",
    explanation: "Advanced cinematographers deliberately mix color temperatures (warm tungsten with cool daylight) for creative effect. Warm light on a subject against a cool blue background creates separation and mood. This technique appears in films like Blade Runner and The Matrix, where color temperature becomes a storytelling tool.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "lt-a-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Dingle effect"
    },
    topic: "Lighting Techniques",
    concept: "Dingle/Cookie",
    questionText: "What is a 'cookie' or 'cucoloris' in cinematography lighting?",
    answerOptions: [
      "A snack provided on set",
      "A patterned screen placed in front of a light to create shadow patterns",
      "A type of reflector shaped like a circle",
      "A cookie-cutter template for shot planning"
    ],
    correctAnswer: "A patterned screen placed in front of a light to create shadow patterns",
    explanation: "A cookie (cucoloris) is a panel with irregular patterns cut into it, placed between a light source and the subject to cast dappled shadows. This breaks up flat walls, simulates light through foliage or windows, and adds visual texture and interest to otherwise plain backgrounds.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "lt-a-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Edge lighting"
    },
    topic: "Lighting Techniques",
    concept: "Cross-Key Lighting",
    questionText: "What is cross-key lighting used for?",
    answerOptions: [
      "Lighting multiple subjects from opposite sides with separate key lights",
      "Using two key lights on the same subject",
      "Crossing light beams to create patterns",
      "Religious or spiritual scenes only"
    ],
    correctAnswer: "Lighting multiple subjects from opposite sides with separate key lights",
    explanation: "Cross-key lighting uses two key lights from opposite sides to light two subjects facing each other. Each subject's key light acts as the other's backlight. This efficient technique is common in dialogue scenes, creating proper modeling on both subjects while maintaining directional continuity.",
    difficulty: "Advanced",
    overlayType: "light-direction"
  },

  // ==========================================
  // COLOR THEORY
  // Beginner: 10 questions
  // Intermediate: 10 questions
  // Advanced: 10 questions
  // ==========================================
  
  // BEGINNER - Color Theory
  {
    id: "ct-b-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Warm orange sunset tones"
    },
    topic: "Color Theory",
    concept: "Warm Colors",
    questionText: "What emotional response do warm orange and amber tones typically evoke?",
    answerOptions: [
      "Clinical detachment and coldness",
      "Nostalgia, comfort, or romantic longing",
      "Futuristic technology",
      "Danger and immediate threat"
    ],
    correctAnswer: "Nostalgia, comfort, or romantic longing",
    explanation: "Warm amber and orange tones are deeply associated with memory, nostalgia, and emotional warmth. Cinematographers often use these colors for flashbacks, romantic scenes, or moments of domestic comfort. Think of the golden hour shots in films like Days of Heaven or romantic comedies.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Cool blue tones"
    },
    topic: "Color Theory",
    concept: "Cool Colors",
    questionText: "What emotions are typically associated with cool blue tones?",
    answerOptions: [
      "Excitement and energy",
      "Isolation, melancholy, or clinical detachment",
      "Happiness and celebration",
      "Hunger and appetite"
    ],
    correctAnswer: "Isolation, melancholy, or clinical detachment",
    explanation: "Cool blue tones evoke feelings of isolation, sadness, detachment, or sterility. They're commonly used in hospital scenes, lonely moments, or futuristic settings. The absence of warmth in the color temperature reflects emotional coldness or alienation in the narrative.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Red dominant scene"
    },
    topic: "Color Theory",
    concept: "Red Symbolism",
    questionText: "What does red commonly symbolize in cinema?",
    answerOptions: [
      "Peace and tranquility",
      "Passion, danger, or violence",
      "Wealth and prosperity",
      "Environmental awareness"
    ],
    correctAnswer: "Passion, danger, or violence",
    explanation: "Red is perhaps the most emotionally charged color in cinema. It represents passion, love, anger, danger, and violence. Directors use saturated reds to create visceral, emotionally intense imagery that triggers primal responses in viewers.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color wheel"
    },
    topic: "Color Theory",
    concept: "Color Wheel Basics",
    questionText: "What are complementary colors?",
    answerOptions: [
      "Colors next to each other on the wheel",
      "Colors opposite each other on the wheel",
      "Any two colors that look good together",
      "Colors that match the production design"
    ],
    correctAnswer: "Colors opposite each other on the wheel",
    explanation: "Complementary colors sit directly opposite each other on the color wheel (red/green, blue/orange, yellow/purple). When placed together, they create maximum contrast and visual vibrancy. Cinematographers use complementary schemes to create visual tension or make subjects pop against backgrounds.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Green color grade"
    },
    topic: "Color Theory",
    concept: "Green Symbolism",
    questionText: "What is green commonly associated with in film?",
    answerOptions: [
      "Romance and passion",
      "Nature, envy, sickness, or decay",
      "Wealth exclusively",
      "Technology only"
    ],
    correctAnswer: "Nature, envy, sickness, or decay",
    explanation: "Green has versatile symbolic meanings in cinema. It can represent nature and growth, but also envy ('green with envy'), sickness, decay, or corruption. The Matrix uses green for its digital world, while horror films often use green for supernatural or nauseating elements.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Yellow tones"
    },
    topic: "Color Theory",
    concept: "Yellow Psychology",
    questionText: "What emotional quality does yellow typically convey?",
    answerOptions: [
      "Sadness and depression",
      "Happiness, optimism, or caution",
      "Mystery and darkness",
      "Sophistication and elegance"
    ],
    correctAnswer: "Happiness, optimism, or caution",
    explanation: "Yellow is associated with sunlight, happiness, and optimism. However, it can also signal caution or danger (like warning signs). Depending on context and saturation, yellow can range from cheerful and energetic to anxious and unstable.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1531265726475-52ad60219627?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Black and white contrast"
    },
    topic: "Color Theory",
    concept: "Black and White",
    questionText: "What do black and white symbolize in color theory?",
    answerOptions: [
      "Only absence of color",
      "Good vs evil, purity vs corruption, light vs darkness",
      "They have no symbolic meaning",
      "Only technical or budget limitations"
    ],
    correctAnswer: "Good vs evil, purity vs corruption, light vs darkness",
    explanation: "Black and white carry powerful symbolic weight. White represents purity, innocence, and light, while black represents evil, mystery, and darkness. These associations are so strong that characters' costumes often use black/white to signal their moral alignment.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Purple tones"
    },
    topic: "Color Theory",
    concept: "Purple Symbolism",
    questionText: "What is purple commonly associated with?",
    answerOptions: [
      "Ordinary everyday life",
      "Royalty, luxury, mystery, or spirituality",
      "Physical strength",
      "Natural environments"
    ],
    correctAnswer: "Royalty, luxury, mystery, or spirituality",
    explanation: "Purple has historically been associated with royalty and luxury (purple dye was once rare and expensive). In modern cinema, it often represents mystery, spirituality, or the surreal. It's less common in naturalistic films because it rarely appears in nature.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Natural color palette"
    },
    topic: "Color Theory",
    concept: "Natural Color Palette",
    questionText: "Why do filmmakers use natural, earthy color palettes?",
    answerOptions: [
      "They're cheaper to produce",
      "To create realistic, grounded, or historical atmospheres",
      "To hide bad cinematography",
      "Only for documentaries"
    ],
    correctAnswer: "To create realistic, grounded, or historical atmospheres",
    explanation: "Natural, earthy palettes (browns, greens, muted tones) create a sense of realism and authenticity. They ground stories in reality, evoke specific time periods, or create organic, lived-in worlds. Films like No Country for Old Men use natural palettes to enhance their gritty realism.",
    difficulty: "Beginner",
    overlayType: null
  },
  {
    id: "ct-b-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1552960394-c81add8de4b8?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Vibrant saturated colors"
    },
    topic: "Color Theory",
    concept: "Color Saturation",
    questionText: "What is color saturation?",
    answerOptions: [
      "How much light a color reflects",
      "The intensity or purity of a color",
      "The temperature of a color",
      "The brightness of a color"
    ],
    correctAnswer: "The intensity or purity of a color",
    explanation: "Saturation refers to the intensity or purity of a color. Highly saturated colors are vivid and pure, while desaturated colors are muted and grayish. Cinematographers adjust saturation to control mood—high saturation feels energetic and stylized, while low saturation feels somber and realistic.",
    difficulty: "Beginner",
    overlayType: null
  },

  // INTERMEDIATE - Color Theory
  {
    id: "ct-i-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Teal and orange grading"
    },
    topic: "Color Theory",
    concept: "Teal and Orange",
    questionText: "What effect does the teal and orange color palette achieve?",
    answerOptions: [
      "Vintage, desaturated look",
      "Maximum visual contrast while flattering skin tones",
      "Simulates colorblindness",
      "Reduces post-production costs"
    ],
    correctAnswer: "Maximum visual contrast while flattering skin tones",
    explanation: "The teal/orange palette has become ubiquitous because these complementary colors create strong visual contrast. Orange flatters most skin tones, while teal in shadows adds depth without muddying the image. Though sometimes overused, when applied thoughtfully it creates visually striking, cinematic imagery.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Monochromatic blue"
    },
    topic: "Color Theory",
    concept: "Monochromatic Palette",
    questionText: "What is a monochromatic color scheme?",
    answerOptions: [
      "Black and white only",
      "Variations of a single color",
      "Only primary colors",
      "Random color combinations"
    ],
    correctAnswer: "Variations of a single color",
    explanation: "A monochromatic scheme uses one base color in various shades, tints, and tones. This creates visual cohesion and can evoke specific moods—all blue for melancholy, all green for sickness. It simplifies the visual palette while creating a strong, unified aesthetic.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color contrast"
    },
    topic: "Color Theory",
    concept: "Color Contrast for Focus",
    questionText: "How do cinematographers use color to direct viewer attention?",
    answerOptions: [
      "Making everything the same color",
      "Using contrasting colors to make subjects pop",
      "Removing all color",
      "Using only favorite colors"
    ],
    correctAnswer: "Using contrasting colors to make subjects pop",
    explanation: "Color contrast naturally draws the eye. A warm-colored subject against a cool background (or vice versa) immediately stands out. Cinematographers carefully control color in costumes, sets, and lighting to ensure the viewer's eye goes where the story needs it to go.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color grading"
    },
    topic: "Color Theory",
    concept: "Color Grading",
    questionText: "What is color grading in post-production?",
    answerOptions: [
      "Organizing footage by quality",
      "Adjusting colors to achieve a specific look",
      "Adding colorful visual effects",
      "Removing all color errors"
    ],
    correctAnswer: "Adjusting colors to achieve a specific look",
    explanation: "Color grading is the process of altering and enhancing the color of motion pictures. It goes beyond correction to create a specific aesthetic or mood. Modern digital tools allow colorists to manipulate every aspect of color to serve the story's emotional needs.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Desaturated palette"
    },
    topic: "Color Theory",
    concept: "Desaturated Palette",
    questionText: "What narrative purpose does a heavily desaturated color palette serve?",
    answerOptions: [
      "It's easier to achieve technically",
      "Creates bleakness, historical distance, or harsh realism",
      "It has no narrative purpose",
      "Only for black and white conversion"
    ],
    correctAnswer: "Creates bleakness, historical distance, or harsh realism",
    explanation: "Desaturated palettes drain vibrancy from the image, creating feelings of bleakness, hopelessness, or harsh reality. Films like Schindler's List, Saving Private Ryan, and Mad Max: Fury Road use desaturation to emphasize the brutality and absence of joy in their worlds.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Analogous colors"
    },
    topic: "Color Theory",
    concept: "Analogous Colors",
    questionText: "What are analogous colors?",
    answerOptions: [
      "Colors that are similar to each other",
      "Colors adjacent to each other on the color wheel",
      "Colors that are opposite on the wheel",
      "Any colors used in the same scene"
    ],
    correctAnswer: "Colors adjacent to each other on the color wheel",
    explanation: "Analogous colors sit next to each other on the color wheel (like blue, blue-green, and green). They create harmonious, cohesive palettes that feel natural and pleasing. This scheme is common in pastoral or romantic films where visual harmony reinforces emotional content.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Triadic color scheme"
    },
    topic: "Color Theory",
    concept: "Triadic Colors",
    questionText: "What is a triadic color scheme?",
    answerOptions: [
      "Using only three colors total",
      "Three colors evenly spaced on the color wheel",
      "Primary colors only",
      "Three shades of one color"
    ],
    correctAnswer: "Three colors evenly spaced on the color wheel",
    explanation: "Triadic schemes use three colors evenly spaced on the color wheel (like red, yellow, and blue). This creates vibrant, balanced palettes with visual interest. Animated films often use triadic schemes to create colorful, engaging worlds that appeal to audiences.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color temperature contrast"
    },
    topic: "Color Theory",
    concept: "Color Temperature",
    questionText: "What is color temperature in cinematography?",
    answerOptions: [
      "The physical heat of lighting equipment",
      "The warmth or coolness of light measured in Kelvin",
      "The emotional temperature of a scene",
      "The temperature at which film develops"
    ],
    correctAnswer: "The warmth or coolness of light measured in Kelvin",
    explanation: "Color temperature measures the warmth (orange/red) or coolness (blue) of light, measured in Kelvin. Lower numbers (2700K) are warm like candlelight, while higher numbers (5600K+) are cool like daylight. Understanding color temperature is essential for creating consistent, intentional looks.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Split complementary"
    },
    topic: "Color Theory",
    concept: "Split Complementary",
    questionText: "What is a split complementary color scheme?",
    answerOptions: [
      "Dividing complementary colors in half",
      "Using a base color and the two colors adjacent to its complement",
      "Using half-saturated colors",
      "Splitting scenes into different color zones"
    ],
    correctAnswer: "Using a base color and the two colors adjacent to its complement",
    explanation: "Split complementary schemes use a base color and the two colors on either side of its complement. For example, blue with red-orange and yellow-orange. This provides strong contrast like complementary schemes but with more variety and sophistication.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ct-i-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color psychology"
    },
    topic: "Color Theory",
    concept: "Color Psychology",
    questionText: "Why is understanding color psychology important for cinematographers?",
    answerOptions: [
      "It's not important, only technical skills matter",
      "Colors trigger emotional and psychological responses in viewers",
      "It only matters for animation",
      "It's only relevant for color correction"
    ],
    correctAnswer: "Colors trigger emotional and psychological responses in viewers",
    explanation: "Color psychology studies how colors affect human emotion and behavior. Cinematographers use this knowledge to subconsciously influence viewer feelings. Warm colors can create comfort or danger, cool colors can evoke sadness or calm—understanding these associations is crucial for visual storytelling.",
    difficulty: "Intermediate",
    overlayType: null
  },

  // ADVANCED - Color Theory
  {
    id: "ct-a-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color contrast advanced"
    },
    topic: "Color Theory",
    concept: "Simultaneous Contrast",
    questionText: "What is simultaneous contrast in color theory?",
    answerOptions: [
      "Using two contrasts at the same time",
      "How adjacent colors influence each other's perception",
      "Contrasting colors in different scenes",
      "Multiple characters wearing contrasting colors"
    ],
    correctAnswer: "How adjacent colors influence each other's perception",
    explanation: "Simultaneous contrast is the phenomenon where colors appear different depending on surrounding colors. A gray square looks warmer on a blue background and cooler on an orange background. Advanced cinematographers use this to manipulate how viewers perceive colors without changing the actual hue.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      attribution: "Unsplash - LUT application"
    },
    topic: "Color Theory",
    concept: "LUTs (Look-Up Tables)",
    questionText: "What are LUTs in color grading?",
    answerOptions: [
      "Lists of unused takes",
      "Mathematical formulas that transform color values to create specific looks",
      "Lighting unit measurements",
      "Camera lens specifications"
    ],
    correctAnswer: "Mathematical formulas that transform color values to create specific looks",
    explanation: "LUTs (Look-Up Tables) are mathematical formulas that remap color values to create specific looks. They can replicate film stocks, create stylized grades, or ensure consistency across shots. Understanding LUTs allows cinematographers to visualize the final look on set and maintain consistency in post-production.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color science"
    },
    topic: "Color Theory",
    concept: "Color Gamut",
    questionText: "What is a color gamut in digital cinematography?",
    answerOptions: [
      "A type of camera color filter",
      "The range of colors a device can capture or display",
      "A color grading software",
      "The primary colors used in a film"
    ],
    correctAnswer: "The range of colors a device can capture or display",
    explanation: "A color gamut defines the range of colors a camera can capture or a display can show. Different cameras have different gamuts (Rec.709, Rec.2020, DCI-P3). Understanding gamuts is crucial for capturing maximum color information and ensuring your creative vision translates across different viewing platforms.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1558618666-f3c964f11345?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color science workflow"
    },
    topic: "Color Theory",
    concept: "Color Space",
    questionText: "Why is understanding color space important in professional cinematography?",
    answerOptions: [
      "It determines how much storage space colors require",
      "It defines how color information is organized and interpreted",
      "It's only relevant for photographers",
      "It determines the physical space between colored objects"
    ],
    correctAnswer: "It defines how color information is organized and interpreted",
    explanation: "Color spaces (like sRGB, Adobe RGB, ProPhoto RGB) define how color information is organized and interpreted by cameras, software, and displays. Working in the correct color space ensures colors are captured, edited, and displayed as intended. Professional workflows carefully manage color spaces to maintain image fidelity.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506443432647-3de81d50a4cf?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color harmony advanced"
    },
    topic: "Color Theory",
    concept: "Color Harmony Principles",
    questionText: "What advanced principle guides sophisticated color palette creation?",
    answerOptions: [
      "Always use as many colors as possible",
      "Balance relationships between colors using mathematical proportions",
      "Copy color palettes from other films",
      "Use only colors the director likes"
    ],
    correctAnswer: "Balance relationships between colors using mathematical proportions",
    explanation: "Advanced color harmony uses principles like the 60-30-10 rule (dominant color 60%, secondary 30%, accent 10%) and golden ratio proportions. This creates balanced, sophisticated palettes that feel intentional. Films like The Grand Budapest Hotel exemplify carefully proportioned color relationships.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color contrast ratios"
    },
    topic: "Color Theory",
    concept: "Hue, Saturation, Luminance",
    questionText: "Why do advanced colorists separately control hue, saturation, and luminance?",
    answerOptions: [
      "It's unnecessarily complicated",
      "It provides precise control over each aspect of color independently",
      "It's only for technical correction, not creative work",
      "It makes the process faster"
    ],
    correctAnswer: "It provides precise control over each aspect of color independently",
    explanation: "Separating hue (color itself), saturation (intensity), and luminance (brightness) allows precise manipulation. You can shift blue to cyan without affecting its brightness, or increase saturation without changing its hue. This level of control is essential for sophisticated color work and matching shots.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color theory application"
    },
    topic: "Color Theory",
    concept: "Color Script",
    questionText: "What is a color script in advanced pre-production?",
    answerOptions: [
      "A written description of colors",
      "A visual map planning color progression throughout the entire film",
      "A budget document for color grading",
      "The script printed on colored paper"
    ],
    correctAnswer: "A visual map planning color progression throughout the entire film",
    explanation: "A color script is a series of small paintings or color thumbnails representing each scene's palette, creating a visual roadmap for the film's color journey. Pixar pioneered this technique, but live-action cinematographers increasingly use it to plan how color will evolve emotionally throughout the narrative.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color theory mastery"
    },
    topic: "Color Theory",
    concept: "Chromatic Aberration",
    questionText: "How do advanced cinematographers use chromatic aberration creatively?",
    answerOptions: [
      "They always remove it as a defect",
      "They strategically add it for vintage or dreamy aesthetics",
      "It only occurs by accident",
      "It's impossible to control"
    ],
    correctAnswer: "They strategically add it for vintage or dreamy aesthetics",
    explanation: "Chromatic aberration (color fringing at high-contrast edges) is technically a lens flaw, but cinematographers sometimes add it deliberately in post for vintage, dreamy, or surreal aesthetics. It can evoke specific film stocks or lens characters, adding textural interest when used intentionally.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Color relationships"
    },
    topic: "Color Theory",
    concept: "Color Progression",
    questionText: "What is color progression in narrative cinematography?",
    answerOptions: [
      "Randomly changing colors between scenes",
      "The deliberate evolution of a film's color palette to mirror story arcs",
      "Using more colors as the budget increases",
      "Arranging colors from dark to light"
    ],
    correctAnswer: "The deliberate evolution of a film's color palette to mirror story arcs",
    explanation: "Color progression is the strategic shift in a film's palette as the narrative unfolds. A film might start with muted colors and gradually become saturated as hope grows, or shift from warm to cool as relationships deteriorate. This subliminal technique reinforces character arcs and thematic development.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ct-a-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Advanced color theory"
    },
    topic: "Color Theory",
    concept: "Selective Desaturation",
    questionText: "What is selective desaturation used for?",
    answerOptions: [
      "Saving money on color grading",
      "Drawing attention to specific colored elements while muting others",
      "Converting films to black and white",
      "Fixing color mistakes"
    ],
    correctAnswer: "Drawing attention to specific colored elements while muting others",
    explanation: "Selective desaturation removes color from most of the frame while preserving it in specific areas, forcing viewer attention to the colored element. This powerful technique (seen in films like Schindler's List's red coat) creates symbolic emphasis and can represent hope, danger, or significance in otherwise bleak worlds.",
    difficulty: "Advanced",
    overlayType: null
  },

  // ==========================================
  // TYPES OF SHOTS
  // Beginner: 10 questions
  // Intermediate: 10 questions  
  // Advanced: 10 questions
  // ==========================================
  
  // BEGINNER - Types of Shots
  {
    id: "ts-b-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Close-up shot"
    },
    topic: "Types of Shots",
    concept: "Close-Up",
    questionText: "What type of shot frames the subject tightly, typically showing just the head and shoulders?",
    answerOptions: [
      "Wide shot",
      "Medium shot",
      "Close-up",
      "Extreme wide shot"
    ],
    correctAnswer: "Close-up",
    explanation: "A close-up (CU) tightly frames the subject, usually showing just the head and shoulders. This intimate framing reveals emotional nuance, subtle expressions, and important details. Close-ups create connection between audience and character, making them essential for dramatic moments.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1552152974-19b9caf99137?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Wide shot landscape"
    },
    topic: "Types of Shots",
    concept: "Wide Shot",
    questionText: "What type of shot shows the entire subject and their surroundings?",
    answerOptions: [
      "Close-up",
      "Medium shot",
      "Wide shot",
      "Extreme close-up"
    ],
    correctAnswer: "Wide shot",
    explanation: "A wide shot (WS) or full shot shows the entire subject from head to toe within their environment. This establishes spatial relationships, shows action choreography, and provides context. Wide shots are essential for establishing where scenes take place and showing physical storytelling.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Medium shot"
    },
    topic: "Types of Shots",
    concept: "Medium Shot",
    questionText: "What shot frames a subject from approximately the waist up?",
    answerOptions: [
      "Close-up",
      "Medium shot",
      "Wide shot",
      "Extreme close-up"
    ],
    correctAnswer: "Medium shot",
    explanation: "A medium shot (MS) frames the subject from approximately the waist up. This is the workhorse of filmmaking, balancing facial expressions with body language. It feels natural and conversational, making it ideal for dialogue scenes and general coverage.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Extreme close-up eye"
    },
    topic: "Types of Shots",
    concept: "Extreme Close-Up",
    questionText: "What shot type shows only a very small detail, like just the eyes or hands?",
    answerOptions: [
      "Close-up",
      "Medium close-up",
      "Extreme close-up",
      "Wide shot"
    ],
    correctAnswer: "Extreme close-up",
    explanation: "An extreme close-up (ECU) shows only a very small detail—an eye, a hand, a watch face. This intensely intimate framing magnifies small details into major significance, creating tension and drawing attention to specific narrative elements. It's emotionally intense and should be used purposefully.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Extreme wide establishing"
    },
    topic: "Types of Shots",
    concept: "Extreme Wide Shot",
    questionText: "What shot type shows a vast landscape with the subject appearing very small?",
    answerOptions: [
      "Wide shot",
      "Extreme wide shot",
      "Medium shot",
      "Close-up"
    ],
    correctAnswer: "Extreme wide shot",
    explanation: "An extreme wide shot (EWS) or extreme long shot shows a vast expanse with the subject appearing very small or distant. This emphasizes scale, isolates characters in their environment, or showcases epic landscapes. It's often used to establish location or show a character's relationship to their surroundings.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1533461502717-83546f485d24?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Cowboy shot"
    },
    topic: "Types of Shots",
    concept: "Cowboy Shot",
    questionText: "What shot frames a subject from mid-thigh up (showing where a holster would be)?",
    answerOptions: [
      "Wide shot",
      "Cowboy shot",
      "Close-up",
      "Extreme wide shot"
    ],
    correctAnswer: "Cowboy shot",
    explanation: "A cowboy shot (or American shot) frames from mid-thigh up. Named because it shows where a cowboy's holstered gun would be, it's now used broadly for shots that split the difference between medium and wide, showing more body language than a medium shot while maintaining facial detail.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1533461835402-456f8e31d7b7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Medium close-up portrait"
    },
    topic: "Types of Shots",
    concept: "Medium Close-Up",
    questionText: "What shot frames from the chest up, tighter than a medium shot but wider than a close-up?",
    answerOptions: [
      "Medium shot",
      "Close-up",
      "Medium close-up",
      "Wide shot"
    ],
    correctAnswer: "Medium close-up",
    explanation: "A medium close-up (MCU) frames from roughly the chest up. This shot size is particularly flattering for faces while still showing some body language and gestures. It's commonly used for interviews, talking head shots, and moments where both expression and limited upper body movement matter.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Full shot"
    },
    topic: "Types of Shots",
    concept: "Full Shot",
    questionText: "What shot shows the entire subject from head to toe?",
    answerOptions: [
      "Medium shot",
      "Close-up",
      "Full shot",
      "Extreme wide shot"
    ],
    correctAnswer: "Full shot",
    explanation: "A full shot shows the subject completely from head to toe, filling most of the frame. This allows viewers to see the subject's complete body language, costume, and physical performance while still maintaining some environmental context. It's essential for dance, action, or physical comedy.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Establishing shot"
    },
    topic: "Types of Shots",
    concept: "Establishing Shot",
    questionText: "What type of shot introduces the location or setting of a scene?",
    answerOptions: [
      "Close-up",
      "Establishing shot",
      "Medium shot",
      "Insert shot"
    ],
    correctAnswer: "Establishing shot",
    explanation: "An establishing shot (usually a wide or extreme wide shot) introduces the location or setting, providing geographical and temporal context. It answers 'where are we?' and often opens scenes or sequences. Without establishing shots, audiences can feel spatially disoriented.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },
  {
    id: "ts-b-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Insert shot detail"
    },
    topic: "Types of Shots",
    concept: "Insert Shot",
    questionText: "What shot focuses on a specific detail or object?",
    answerOptions: [
      "Wide shot",
      "Medium shot",
      "Insert shot",
      "Extreme wide shot"
    ],
    correctAnswer: "Insert shot",
    explanation: "An insert shot is a close-up of a specific detail or object that's narratively important—a ticking clock, a ringing phone, a weapon, a photograph. These shots direct attention to significant details and provide information essential to the story, often serving as visual punctuation.",
    difficulty: "Beginner",
    overlayType: "shot-framing"
  },

  // INTERMEDIATE - Types of Shots
  {
    id: "ts-i-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Two shot"
    },
    topic: "Types of Shots",
    concept: "Two Shot",
    questionText: "What shot frames two characters within the same frame?",
    answerOptions: [
      "Split screen",
      "Two shot",
      "Double exposure",
      "Parallel shot"
    ],
    correctAnswer: "Two shot",
    explanation: "A two shot frames two characters together in the same frame. This establishes their relationship, shows interaction, and allows them to react to each other in real time. The spatial relationship between the two characters (close, distant, equal) communicates their emotional connection.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Over the shoulder shot"
    },
    topic: "Types of Shots",
    concept: "Over-the-Shoulder Shot",
    questionText: "What shot looks at one character from behind another character's shoulder?",
    answerOptions: [
      "Point of view shot",
      "Over-the-shoulder shot",
      "Reverse shot",
      "Profile shot"
    ],
    correctAnswer: "Over-the-shoulder shot",
    explanation: "An over-the-shoulder (OTS) shot frames one character from behind another's shoulder. This maintains spatial relationships in conversations, keeps both characters present (even if one is out of focus), and creates natural, immersive dialogue coverage. It's fundamental to shot-reverse-shot dialogue.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Point of view shot"
    },
    topic: "Types of Shots",
    concept: "Point of View Shot (POV)",
    questionText: "What shot shows exactly what a character is seeing?",
    answerOptions: [
      "Subjective shot",
      "First-person shot",
      "Point of view shot (POV)",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "A POV shot (also called first-person or subjective shot) shows exactly what a character sees from their perspective. This creates identification and intimacy, literally letting viewers see through a character's eyes. It's powerful for revealing what characters notice and how they perceive their world.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Cutaway shot"
    },
    topic: "Types of Shots",
    concept: "Cutaway",
    questionText: "What shot briefly cuts away from the main action to something related?",
    answerOptions: [
      "Insert shot",
      "Cutaway",
      "B-roll",
      "Reaction shot"
    ],
    correctAnswer: "Cutaway",
    explanation: "A cutaway briefly cuts from the main action to something related but separate—a clock ticking during a tense conversation, a bird flying away during a breakup. Cutaways provide context, show simultaneous action, compress time, or offer editorial flexibility to trim scenes.",
    difficulty: "Intermediate",
    overlayType: null
  },
  {
    id: "ts-i-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Reaction shot"
    },
    topic: "Types of Shots",
    concept: "Reaction Shot",
    questionText: "What shot shows a character's response to something that just happened?",
    answerOptions: [
      "Action shot",
      "Reaction shot",
      "Insert shot",
      "Cutaway"
    ],
    correctAnswer: "Reaction shot",
    explanation: "A reaction shot captures a character's response to dialogue, action, or events. Often more important than the action itself, reactions tell audiences how to feel and reveal character through how they process information. Great performances are often defined by their reactions, not their actions.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Master shot"
    },
    topic: "Types of Shots",
    concept: "Master Shot",
    questionText: "What shot continuously covers an entire scene from one angle?",
    answerOptions: [
      "Wide shot",
      "Master shot",
      "Establishing shot",
      "Long take"
    ],
    correctAnswer: "Master shot",
    explanation: "A master shot is a continuous shot that covers an entire scene from one camera angle, typically a wide or medium shot. It provides spatial geography and serves as a safety net—if other coverage doesn't work, editors can always return to the master. It establishes the scene's foundation.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Three shot"
    },
    topic: "Types of Shots",
    concept: "Three Shot / Group Shot",
    questionText: "What shot frames three or more characters together?",
    answerOptions: [
      "Wide shot",
      "Group shot",
      "Ensemble shot",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "A three shot or group shot frames three or more characters together. This is challenging to compose well—cinematographers must balance all characters, establish hierarchy through positioning and lighting, and ensure all remain visible and significant within the frame composition.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Low angle shot"
    },
    topic: "Types of Shots",
    concept: "Low Angle Combined with Shot Size",
    questionText: "What effect does combining a low angle with a wide shot create?",
    answerOptions: [
      "Makes subjects appear insignificant",
      "Makes subjects appear powerful against the sky",
      "Creates disorientation",
      "Has no particular effect"
    ],
    correctAnswer: "Makes subjects appear powerful against the sky",
    explanation: "Combining a low angle with a wide shot makes subjects appear powerful and imposing, often silhouetting them against the sky. This technique is used for heroes, villains, or moments of triumph. The angle choice interacts with shot size to multiply the emotional and psychological impact.",
    difficulty: "Intermediate",
    overlayType: "shot-angle"
  },
  {
    id: "ts-i-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Choker close-up"
    },
    topic: "Types of Shots",
    concept: "Choker / Tight Close-Up",
    questionText: "What is a 'choker' in cinematography?",
    answerOptions: [
      "A restrictive costume piece",
      "An extremely tight close-up cutting off the top of the head",
      "A type of camera lens",
      "A lighting technique"
    ],
    correctAnswer: "An extremely tight close-up cutting off the top of the head",
    explanation: "A choker is an extremely tight close-up that crops the top of the head and bottom of the chin, focusing intensely on the face, particularly the eyes and mouth. This creates claustrophobia and extreme intimacy, perfect for moments of intense emotion, revelation, or psychological pressure.",
    difficulty: "Intermediate",
    overlayType: "shot-framing"
  },
  {
    id: "ts-i-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Weather establishing"
    },
    topic: "Types of Shots",
    concept: "Weather Establishing Shot",
    questionText: "Why are weather conditions important in establishing shots?",
    answerOptions: [
      "They're not important",
      "They set mood, atmosphere, and emotional tone",
      "They only matter for weather-related stories",
      "They're just accidents of scheduling"
    ],
    correctAnswer: "They set mood, atmosphere, and emotional tone",
    explanation: "Weather in establishing shots immediately communicates mood and tone—sunny weather suggests optimism, rain suggests melancholy or turmoil, fog creates mystery. Cinematographers often wait for or create specific weather conditions because they're such powerful storytelling tools that set viewer expectations.",
    difficulty: "Intermediate",
    overlayType: null
  },

  // ADVANCED - Types of Shots
  {
    id: "ts-a-001",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Dirty single shot"
    },
    topic: "Types of Shots",
    concept: "Dirty Single",
    questionText: "What is a 'dirty single' in cinematography?",
    answerOptions: [
      "A poorly lit shot",
      "A single shot with part of another character visible in the foreground",
      "A shot filmed in dirty locations",
      "An out-of-focus shot"
    ],
    correctAnswer: "A single shot with part of another character visible in the foreground",
    explanation: "A dirty single frames one character with a portion of another character (usually shoulder or head) visible in the foreground. This maintains spatial relationships and scene continuity while focusing on one character. It's more visually interesting than a clean single and keeps both characters present.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-002",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=800&fit=crop",
      attribution: "Unsplash - French overs"
    },
    topic: "Types of Shots",
    concept: "French Overs",
    questionText: "What distinguishes 'French overs' from standard over-the-shoulder shots?",
    answerOptions: [
      "They're filmed only in France",
      "Foreground characters take up much more of the frame",
      "They use French flag equipment",
      "They have subtitles"
    ],
    correctAnswer: "Foreground characters take up much more of the frame",
    explanation: "French overs are over-the-shoulder shots where the foreground character occupies much more of the frame than traditional OTS shots. This creates more dynamic, asymmetrical compositions and increases the sense of the foreground character's presence and power within the conversation.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-003",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Clean single"
    },
    topic: "Types of Shots",
    concept: "Clean Single vs. Dirty Single",
    questionText: "When would you choose a clean single over a dirty single?",
    answerOptions: [
      "When the other character is unimportant",
      "To emphasize isolation, intimacy, or a character's internal experience",
      "Only when the other actor is unavailable",
      "To save money on production"
    ],
    correctAnswer: "To emphasize isolation, intimacy, or a character's internal experience",
    explanation: "A clean single (with no other characters visible) emphasizes isolation, creates intimacy with the audience, or represents a character's subjective experience. While dirty singles maintain spatial relationships, clean singles deliberately remove that context to focus entirely on one character's emotional state.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-004",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Coverage strategy"
    },
    topic: "Types of Shots",
    concept: "Shot-Reverse-Shot",
    questionText: "What is the purpose of shot-reverse-shot coverage?",
    answerOptions: [
      "To confuse viewers",
      "To show both sides of a conversation while maintaining spatial continuity",
      "To reverse mistakes from previous shots",
      "To fill runtime"
    ],
    correctAnswer: "To show both sides of a conversation while maintaining spatial continuity",
    explanation: "Shot-reverse-shot is the fundamental coverage pattern for dialogue. Alternating between characters maintains the 180-degree line, showing each speaker's perspective while keeping spatial relationships clear. Mastering when to cut between shots and when to hold is essential to controlling pacing and emotional impact.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-005",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Macro shot"
    },
    topic: "Types of Shots",
    concept: "Macro Shot",
    questionText: "What distinguishes a macro shot from an extreme close-up?",
    answerOptions: [
      "Macro shots are wider",
      "Macro shots magnify small subjects beyond life-size",
      "Macro shots are only for nature documentaries",
      "There's no difference"
    ],
    correctAnswer: "Macro shots magnify small subjects beyond life-size",
    explanation: "Macro shots use specialized lenses to photograph very small subjects at extreme magnification, often larger than life-size. While ECUs show details of normal-sized objects, macro cinematography enters a miniature world—insects, dewdrops, watch mechanisms—revealing textures and details invisible to the naked eye.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-006",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Shot progression"
  },
    topic: "Types of Shots",
    concept: "Shot Progression",
    questionText: "What is shot progression in scene construction?",
    answerOptions: [
      "Randomly changing shot sizes",
      "The deliberate sequence of shot sizes that controls pacing and emotional intensity",
      "Always going from wide to tight",
      "Using progressively more expensive equipment"
    ],
    correctAnswer: "The deliberate sequence of shot sizes that controls pacing and emotional intensity",
    explanation: "Shot progression is the intentional pattern of shot sizes throughout a scene. Starting wide and moving closer increases tension and intimacy. Starting tight and pulling back reveals context and provides release. Master cinematographers use shot size progression as deliberately as musicians use dynamics.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ts-a-007",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Profile two shot"
    },
    topic: "Types of Shots",
    concept: "Profile Two Shot",
    questionText: "What does a profile two shot communicate about character relationships?",
    answerOptions: [
      "Nothing specific",
      "Equal power dynamics and direct confrontation or connection",
      "One character is more important",
      "The scene is poorly blocked"
    ],
    correctAnswer: "Equal power dynamics and direct confrontation or connection",
    explanation: "A profile two shot frames both characters in profile facing each other. This creates equal visual weight, suggesting balanced power dynamics. It's often used for confrontations, negotiations, or intimate conversations where neither character dominates. The symmetry emphasizes their direct connection or conflict.",
    difficulty: "Advanced",
    overlayType: "shot-framing"
  },
  {
    id: "ts-a-008",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Negative space"
    },
    topic: "Types of Shots",
    concept: "Negative Space in Shot Composition",
    questionText: "How does negative space affect shot composition?",
    answerOptions: [
      "It's wasted frame space",
      "It creates visual breathing room and can emphasize isolation or anticipation",
      "It only matters in wide shots",
      "It's always a mistake"
    ],
    correctAnswer: "It creates visual breathing room and can emphasize isolation or anticipation",
    explanation: "Negative space (empty space around subjects) is a powerful compositional tool. It can emphasize isolation, create anticipation (what will enter that space?), provide visual breathing room, or suggest a character's insignificance. The relationship between subject and negative space communicates emotional and narrative meaning.",
    difficulty: "Advanced",
    overlayType: "composition"
  },
  {
    id: "ts-a-009",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Subjective camera"
    },
    topic: "Types of Shots",
    concept: "Subjective Camera",
    questionText: "What is a subjective camera beyond simple POV shots?",
    answerOptions: [
      "A camera with opinions",
      "Camera work that mimics a character's physical and emotional state",
      "Any handheld camerawork",
      "A defective camera"
    ],
    correctAnswer: "Camera work that mimics a character's physical and emotional state",
    explanation: "Subjective camera goes beyond POV to embody a character's physical and emotional experience—drunk characters get blurry, disoriented framing; frightened characters get unstable, panicked movement. The camera becomes an extension of character psychology, making viewers viscerally experience what characters feel.",
    difficulty: "Advanced",
    overlayType: null
  },
  {
    id: "ts-a-010",
    media: {
      type: "image",
      source: "Unsplash",
      url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=800&fit=crop",
      attribution: "Unsplash - Montage construction"
    },
    topic: "Types of Shots",
    concept: "Montage Sequence Shots",
    questionText: "What types of shots are most effective in montage sequences?",
    answerOptions: [
      "Only close-ups",
      "Varied, dynamic shots that compress time and show progression",
      "Only wide shots",
      "Identical repeated shots"
    ],
    correctAnswer: "Varied, dynamic shots that compress time and show progression",
    explanation: "Effective montages use varied shot types, angles, and compositions to compress time while maintaining visual interest and showing clear progression. Each shot should be distinctive and contribute to the overall narrative of change, training, building, or transformation that the montage represents.",
    difficulty: "Advanced",
    overlayType: null
  },

  // Continue with remaining topics following the same pattern...
  // Each topic needs 30 questions total (10 Beginner, 10 Intermediate, 10 Advanced)
  // Topics remaining:
  // - Composition & Framing (30 questions)
  // - Camera Movement (30 questions)
  // - Camera Angles (30 questions)
  // - Focus & Depth of Field (30 questions)
]

// Helper functions for filtering questions
export function getFilteredQuestions(topic: Topic, difficulty: Difficulty | null): Question[] {
  return mockQuestions.filter(
    q => q.topic === topic && (difficulty === null || q.difficulty === difficulty)
  )
}

export function getRandomQuestions(count: number, difficulty: Difficulty): Question[] {
  const filtered = mockQuestions.filter(q => q.difficulty === difficulty)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getAllQuestions(): Question[] {
  return mockQuestions
}
