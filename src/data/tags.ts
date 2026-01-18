// Flat list of all available tags with autocomplete support
export const Tag = {
  // Languages
  Python: "Python",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  Go: "Go",
  C: "C",
  "C++": "C++",
  Java: "Java",
  CSS: "CSS",
  HTML: "HTML",

  // Frameworks & Libraries
  React: "React",
  Flask: "Flask",
  TailwindCSS: "TailwindCSS",
  JSwing: "JSwing",
  Mocha: "Mocha",
  FastAPI: "FastAPI",
  SvelteKit: "SvelteKit",
  "Next.js": "Next.js",
  "Express.js": "Express.js",
  "Node.js": "Node.js",
  spaCy: "spaCy",
  Gemini: "Gemini",
  Cohere: "Cohere",

  // Databases
  Firebase: "Firebase",
  MongoDB: "MongoDB",
  Supabase: "Supabase",

  // Data Science
  NumPy: "NumPy",
  MNE: "MNE",
  SciPy: "SciPy",
  Matplotlib: "Matplotlib",
  "Jupyter Notebook": "Jupyter Notebook",
  Streamlit: "Streamlit",

  // Other
  face_recognition: "face_recognition",
  "Computer Graphics": "Computer Graphics",
  Neurotech: "Neurotech",
  "REST API": "REST API",
  "CI/CD": "CI/CD",
  "Discord Bot": "Discord Bot",
  GitHub: "GitHub",
  "Chrome Extension": "Chrome Extension",
  Figma: "Figma",
  "Open AI": "Open AI",
  "Game Development": "Game Development",
  Interpreter: "Interpreter",
  JWT: "JWT",
  Vercel: "Vercel",
  WebSocket: "WebSocket",
  Twilio: "Twilio",
  FFMPEG: "FFMPEG",

  // Hackathons
  "YRHacks 2022": "YRHacks 2022",
  "YRHacks 2023": "YRHacks 2023",
  "Hack the Valley 9": "Hack the Valley 9",
  "DeltaHacks XI": "DeltaHacks XI",
  Hack49: "Hack49",
  "Hack Western 11": "Hack Western 11",
  "UofTHacks 12": "UofTHacks 12",
  "Screenpipe Agentic Hackathon": "Screenpipe Agentic Hackathon",
  "GenAI Genesis": "GenAI Genesis",
  "Hack the 6ix 2025": "Hack the 6ix 2025",
} as const;

export type TagValue = (typeof Tag)[keyof typeof Tag];
