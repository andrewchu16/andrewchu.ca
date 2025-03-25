import Tag from "@/models/tag.model";

const hackathonsList: Tag[] = [
  // { short: "YRHacks 2021", long: "YRHacks 2021" },
  { short: "YRHacks 2022", long: "YRHacks 2022" },
  { short: "YRHacks 2023", long: "YRHacks 2023" },
  // { short: "HTN 2022", long: "Hack the North 2022" },
  // { short: "HTN 2023", long: "Hack the North 2023" },
  // { short: "HTN 2024", long: "Hack the North 2024" },
  // { short: "HTV7", long: "Hack the Valley 7" },
  // { short: "HTV8", long: "Hack the Valley 8" },
  { short: "HTV9", long: "Hack the Valley 9" },
  // { short: "AliceHacks", long: "AliceHacks" },
  // { short: "StarterHacks", long: "StarterHacks 2024" },
  // { short: "TerraHacks", long: "TerraHacks" },
  // { short: "Ignition Hacks", long: "Ignition Hacks 2024" },
  { short: "DeltaHacks", long: "DeltaHacks XI" },
  { short: "Hack49", long: "Hack49" },
  { short: "Hack Western", long: "Hack Western 11" },
  { short: "UofTHacks", long: "UofTHacks 12" },
  { short: "Screenpipe", long: "Screenpipe Agentic Hackathon" },
  { short: "GenAI Genesis", long: "GenAI Genesis" },
];

const languagesList: Tag[] = [
  { short: "Python", long: "Python" },
  { short: "JS", long: "JavaScript" },
  { short: "TS", long: "TypeScript" },
  { short: "Go", long: "Go" },
  { short: "C", long: "C" },
  { short: "C++", long: "C++" },
  { short: "Java", long: "Java" },
  { short: "CSS", long: "CSS" },
  { short: "HTML", long: "HTML" },
];

const databasesList: Tag[] = [
  { short: "Firebase", long: "Firebase" },
  { short: "MongoDB", long: "MongoDB" },
  { short: "Supabase", long: "Supabase" },
];

const dataFrameworksList: Tag[] = [
  { short: "NumPy", long: "NumPy" },
  { short: "MNE", long: "MNE" },
  { short: "SciPy", long: "SciPy" },
  { short: "Matplotlib", long: "Matplotlib" },
  { short: "Jupyter", long: "Jupyter Notebook" },
  { short: "Streamlit", long: "Streamlit" },
];

const frameworksList: Tag[] = [
  { short: "React", long: "React" },
  { short: "Flask", long: "Flask" },
  { short: "Tailwind", long: "TailwindCSS" },
  { short: "JSwing", long: "JSwing" },
  { short: "Mocha", long: "Mocha" },
  { short: "FastAPI", long: "FastAPI" },
  { short: "SvelteKit", long: "SvelteKit" },
  { short: "Next", long: "Next.js" },
  { short: "Express", long: "Express.js" },
  { short: "Node", long: "Node.js" },
  { short: "spaCy", long: "spaCy" },
  { short: "Gemini", long: "Gemini" },
  { short: "Cohere", long: "Cohere" },
];

const otherList: Tag[] = [
  { short: "Face Recognition", long: "face_recognition" },
  { short: "Graphics", long: "Computer Graphics" },
  { short: "EEG", long: "Neurotech" },
  { short: "REST", long: "REST API" },
  { short: "CI/CD", long: "CI/CD" },
  { short: "Cohere", long: "Cohere API" },
  { short: "Discord", long: "Discord Bot" },
  { short: "GitHub", long: "GitHub" },
  { short: "Chrome", long: "Chrome Extension" },
  { short: "Figma", long: "Figma" },
  { short: "Open AI", long: "Open AI" },
  { short: "Game", long: "Game Development" },
  { short: "Interpreter", long: "Interpreter" },
  { short: "JWT", long: "JWT" },
  { short: "Vercel", long: "Vercel" },
  { short: "WebSocket", long: "WebSocket" },
  { short: "Twilio", long: "Twilio" },
];

function buildTagMap(tags: Tag[]): { [key: string]: Tag } {
  return tags.reduce((lookup, tag) => {
    lookup[tag.long] = tag;
    return lookup;
  }, {} as { [key: string]: Tag });
}

hackathonsList.sort((a, b) => a.short.localeCompare(b.short));
languagesList.sort((a, b) => a.short.localeCompare(b.short));
databasesList.sort((a, b) => a.short.localeCompare(b.short));
frameworksList.sort((a, b) => a.short.localeCompare(b.short));
otherList.sort((a, b) => a.short.localeCompare(b.short));
dataFrameworksList.sort((a, b) => a.short.localeCompare(b.short));

export const tagList = {
  languages: languagesList,
  frameworks: frameworksList,
  databases: databasesList,
  "Data Science": dataFrameworksList,
  "Other Technologies": otherList,
  hackathons: hackathonsList,
};

export const tag = {
  language: buildTagMap(languagesList),
  framework: buildTagMap(frameworksList),
  database: buildTagMap(databasesList),
  data: buildTagMap(dataFrameworksList),
  other: buildTagMap(otherList),
  hackathon: buildTagMap(hackathonsList),
};
