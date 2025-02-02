import Tag from "@/models/tag.model";

const hackathonsList: Tag[] = [
  { short: "YRHacks 2021", long: "YRHacks 2021" },
  { short: "YRHacks 2022", long: "YRHacks 2022" },
  { short: "YRHacks 2023", long: "YRHacks 2023" },
  { short: "HTN 2022", long: "Hack the North 2022" },
  { short: "HTN 2023", long: "Hack the North 2023" },
  { short: "HTN 2024", long: "Hack the North 2024" },
  { short: "HTV7", long: "Hack the Valley 7" },
  { short: "HTV8", long: "Hack the Valley 8" },
  { short: "HTV9", long: "Hack the Valley 9" },
  { short: "AliceHacks", long: "AliceHacks" },
  { short: "StarterHacks", long: "StarterHacks 2024" },
  { short: "TerraHacks", long: "TerraHacks" },
  { short: "Ignition Hacks", long: "Ignition Hacks 2024" },
  { short: "DeltaHacks", long: "DeltaHacks XI" },
  { short: "Hack49", long: "Hack49" },
  { short: "Hack Western", long: "Hack Western 11" },
  { short: "UofTHacks", long: "UofTHacks 12" },
];

const languagesList: Tag[] = [
  { short: "Python", long: "Python" },
  { short: "JS", long: "JavaScript" },
  { short: "TS", long: "TypeScript" },
  { short: "Go", long: "Go" },
  { short: "C", long: "C" },
  { short: "C++", long: "C++" },
  { short: "Java", long: "Java" },
];

const frameworksList: Tag[] = [
  { short: "React", long: "React" },
  { short: "Flask", long: "Flask" },
  { short: "Tailwind", long: "TailwindCSS" },
  { short: "JSwing", long: "JSwing" },
  { short: "Firebase", long: "Firebase" },
  { short: "NumPy", long: "NumPy" },
  { short: "MNE", long: "MNE" },
  { short: "SciPy", long: "SciPy" },
  { short: "Mocha", long: "Mocha" },
  { short: "FastAPI", long: "FastAPI" },
  { short: "SvelteKit", long: "SvelteKit" },
  { short: "Next.js", long: "Next.js" },
  { short: "Matplotlib", long: "Matplotlib" },
  { short: "MediaPipe", long: "MediaPipe" },
  { short: "Open AI", long: "Open AI" },
  { short: "Express", long: "Express.js" },
];

const otherList: Tag[] = [
  { short: "Graphics", long: "Computer Graphics" },
  { short: "EEG", long: "Neurotech" },
  { short: "REST API", long: "RESTful API" },
  { short: "CI/CD", long: "CI/CD" },
  { short: "Cohere", long: "Cohere API" },
  { short: "GitHub", long: "GitHub" },
  { short: "Jupyter", long: "Jupyter Notebook" },
  { short: "Chrome", long: "Chrome Extension" },
  { short: "Figma", long: "Figma" },
  { short: "Game", long: "Game Development" },
];

function buildTagMap(tags: Tag[]): { [key: string]: Tag } {
  return tags.reduce((lookup, tag) => {
    lookup[tag.long] = tag;
    return lookup;
  }, {} as { [key: string]: Tag });
}

hackathonsList.sort((a, b) => a.short.localeCompare(b.short));
languagesList.sort((a, b) => a.short.localeCompare(b.short));
frameworksList.sort((a, b) => a.short.localeCompare(b.short));
otherList.sort((a, b) => a.short.localeCompare(b.short));

export const tagList = {
  hackathons: hackathonsList,
  languages: languagesList,
  frameworks: frameworksList,
  other: otherList,
};

export const tag = {
  hackathon: buildTagMap(hackathonsList),
  language: buildTagMap(languagesList),
  framework: buildTagMap(frameworksList),
  other: buildTagMap(otherList),
};