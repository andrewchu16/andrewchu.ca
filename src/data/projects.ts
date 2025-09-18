import tinyraytracerImage from "@/assets/projects/tinyraytracer.jpg";
import eyedentifyImage from "@/assets/projects/eyedentify.jpg";
import personalWebsiteImage from "@/assets/projects/personal-website.png";
import easymeetImage from "@/assets/projects/easymeet.png";
import spyglassWebsiteImage from "@/assets/projects/spyglass-website.png";
import baselineImage from "@/assets/projects/baseline.png";
import raycasterJavaImage from "@/assets/projects/raycaster-java.png";
import brainfImage from "@/assets/projects/brainf.png";
import cowsVsDucksImage from "@/assets/projects/cows-vs-ducks.png";
import layoffEvadersImage from "@/assets/projects/layoff-evaders.png";
import invitationImage from "@/assets/projects/invitation.png";
import replateImage from "@/assets/projects/replate.png";
import thirteenLabsImage from "@/assets/projects/thirteen-labs.png";

import Project from "@/models/project.model";
import { tag } from "./tags";

const projects: Project[] = [
  {
    name: "EasyMeet",
    description:
      "A mobile-friendly scheduling app for planning events with friends. Implemented a CI/CD pipeline and unit tests.",
    image: easymeetImage,
    imageAlt: "EasyMeet create meeting page",
    projectUrl: "https://github.com/andrewchu16/easymeet",
    siteUrl: "https://easymeet.ca",
    createdDate: new Date("2025-01-10"),
    tags: [
      tag.language.TypeScript,
      tag.framework.React,
      tag.framework.TailwindCSS,
      tag.database.Firebase,
      tag.other["CI/CD"],
      tag.other.GitHub,
      tag.framework.Mocha,
      tag.other.Figma,
    ],
  },
  {
    name: "The Spyglass Website",
    description:
      "The official website for Richmond Hill High School's student magazine. Optimized for the mobile experience.",
    image: spyglassWebsiteImage,
    imageAlt: "The Spyglass website home page",
    projectUrl: "https://github.com/rhhsspyglass/spyglass",
    siteUrl: "https://rhhspyglass.com",
    createdDate: new Date("2024-07-25"),
    tags: [
      tag.framework.SvelteKit,
      tag.framework.TailwindCSS,
      tag.language.TypeScript,
      tag.language.CSS,
      tag.other.GitHub,
      tag.language.HTML,
    ],
  },
  {
    name: "Baseline",
    description:
      "A neurotech application for detecting fatigue levels in real-time using EEG data. Won 2nd Place for neurotech at Hack49.",
    image: baselineImage,
    imageAlt: "Baseline logo",
    projectUrl: "https://github.com/andrewchu16/baseline",
    createdDate: new Date("2024-10-21"),
    tags: [
      tag.language.Python,
      tag.framework.FastAPI,
      tag.data.SciPy,
      tag.data.NumPy,
      tag.data.MNE,
      tag.data.Matplotlib,
      tag.data["Jupyter Notebook"],
      tag.framework.TailwindCSS,
      tag.other.Neurotech,
      tag.hackathon.Hack49,
    ],
  },
  {
    name: "tinyraytracer",
    description:
      "A minimalist raytracer in C++ and Go. Renders lighting effects using the Phong reflection model.",
    image: tinyraytracerImage,
    imageAlt: "Tinyraytracer rendered image of a sphere",
    projectUrl: "https://github.com/andrewchu16/tinyraytracer",
    createdDate: new Date("2024-12-27"),
    tags: [
      tag.language.Go,
      tag.language["C++"],
      tag.other["Computer Graphics"],
    ],
  },
  {
    name: "ThirteenLabs",
    description:
      "Video to interactive model generator powered by Twelve Labs. Won Best Developer Tool and 2nd Best Use of Twelve Labs at Hack the 6ix 2025.",
    image: thirteenLabsImage,
    imageAlt: "ThirteenLabs model generation",
    projectUrl: "https://github.com/Marcus990/ThirteenLabs",
    createdDate: new Date("2025-07-20"),
    tags: [
      tag.framework["Next.js"],
      tag.framework.FastAPI,
      tag.hackathon["Hack the 6ix 2025"],
      tag.other.FFMPEG,
      tag.framework.Gemini,
      tag.language.TypeScript,
    ],
  },
  {
    name: "Eyedentify",
    description:
      "A web application utilizing facial recognition to identify multiple people from a picture. Won 2nd Place and Best Web App at YRHacks 2023.",
    image: eyedentifyImage,
    imageAlt: "Eyedentify logo",
    projectUrl: "https://github.com/andrewchu16/eyedentify",
    createdDate: new Date("2023-03-03"),
    tags: [
      tag.language.Python,
      tag.framework.Flask,
      tag.framework.React,
      tag.language.TypeScript,
      tag.framework.TailwindCSS,
      tag.other.face_recognition,
      tag.other["REST API"],
      tag.hackathon["YRHacks 2023"],
    ],
  },
  {
    name: "Personal Website",
    description:
      "My personal website built with Next.js and Tailwind CSS. Features a dark mode toggle and a responsive design.",
    image: personalWebsiteImage,
    imageAlt: "Personal website home page",
    projectUrl: "https://github.com/andrewchu16/andrewchu.ca",
    siteUrl: "https://andrewchu.ca",
    createdDate: new Date("2025-02-02"),
    tags: [
      tag.framework["Next.js"],
      tag.framework.TailwindCSS,
      tag.language.TypeScript,
      tag.language.CSS,
      tag.other.GitHub,
    ],
  },
  {
    name: "Cows Vs. Ducks",
    description:
      "A strategy-based game based on Plants vs. Zombies, where cows defend against ducks. Implemented a state machine and animation system.",
    projectUrl: "https://github.com/rhhscs/cows-vs-ducks",
    createdDate: new Date("2023-09-23"),
    image: cowsVsDucksImage,
    imageAlt: "Cows Vs. Ducks gampelay",
    tags: [
      tag.language.Java,
      tag.framework.JSwing,
      tag.other["Game Development"],
    ],
  },
  {
    name: "Layoff Evaders",
    description:
      "A VR fitness game where players dodge obstacles to avoid getting laid off. Game built in Unity, dashboard built with Streamlit and Firebase Realtime Database. Won 2nd Place at DeltaHacks XI.",
    projectUrl: "https://github.com/martin226/layoffevaders",
    createdDate: new Date("2025-01-12"),
    image: layoffEvadersImage,
    imageAlt: "Layoff Evaders gameplay and dashboard",
    tags: [
      tag.data.Streamlit,
      tag.database.Firebase,
      tag.hackathon["DeltaHacks XI"],
      tag.other["Game Development"],
    ],
  },
  {
    name: "Replate",
    description:
      "An AI-powered food sustainability and delivery app. Features dual-agent RAG pipeline. Won Eco-Mobility award at GenAI Genesis.",
    image: replateImage,
    imageAlt: "Replate landing page",
    projectUrl: "https://github.com/andrewchu16/replate",
    createdDate: new Date("2025-03-23"),
    tags: [
      tag.framework.Flask,
      tag.framework["Next.js"],
      tag.language.Python,
      tag.framework["Express.js"],
      tag.framework.Cohere,
      tag.framework.Gemini,
      tag.other.WebSocket,
      tag.language.TypeScript,
      tag.hackathon["GenAI Genesis"],
      tag.other.Twilio,
    ],
  },
  {
    name: "raycaster-java",
    description:
      "A Wolfenstein-like raycaster built in Java for rendering pseudo-3D environments.",
    image: raycasterJavaImage,
    imageAlt: "Example of raycasting",
    projectUrl: "https://github.com/andrewchu16/raycaster-java",
    createdDate: new Date("2022-07-21"),
    tags: [
      tag.language.Java,
      tag.framework.JSwing,
      tag.other["Computer Graphics"],
    ],
  },
  {
    name: "invitation",
    description:
      "An invitation to my birthday party. Features JWT authentication, server actions, and a responsive design. Friends only.",
    projectUrl: "",
    createdDate: new Date("2025-02-14"),
    tags: [
      tag.framework["Next.js"],
      tag.language.TypeScript,
      tag.database.Supabase,
      tag.other.JWT,
      tag.other["REST API"],
      tag.framework.React,
      tag.framework.TailwindCSS,
      tag.other.GitHub,
      tag.other.Vercel,
    ],
    image: invitationImage,
    imageAlt: "Invitation page",
  },
  {
    name: "brainf",
    description: "A brainf**** interpreter and transpiler written in C.",
    projectUrl: "https://github.com/andrewchu16/brainf",
    image: brainfImage,
    imageAlt: "brainf terminal utility",
    createdDate: new Date("2021-09-15"),
    tags: [tag.language.C, tag.other.Interpreter],
  },
];

export default projects;
