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
import { Tag } from "./tags";

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
      Tag.TypeScript,
      Tag.React,
      Tag.TailwindCSS,
      Tag.Firebase,
      Tag["CI/CD"],
      Tag.GitHub,
      Tag.Mocha,
      Tag.Figma,
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
      Tag.SvelteKit,
      Tag.TailwindCSS,
      Tag.TypeScript,
      Tag.CSS,
      Tag.GitHub,
      Tag.HTML,
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
      Tag.Python,
      Tag.FastAPI,
      Tag.SciPy,
      Tag.NumPy,
      Tag.MNE,
      Tag.Matplotlib,
      Tag["Jupyter Notebook"],
      Tag.TailwindCSS,
      Tag.Neurotech,
      Tag.Hack49,
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
    tags: [Tag.Go, Tag["C++"], Tag["Computer Graphics"]],
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
      Tag["Next.js"],
      Tag.FastAPI,
      Tag["Hack the 6ix 2025"],
      Tag.FFMPEG,
      Tag.Gemini,
      Tag.TypeScript,
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
      Tag.Python,
      Tag.Flask,
      Tag.React,
      Tag.TypeScript,
      Tag.TailwindCSS,
      Tag.face_recognition,
      Tag["REST API"],
      Tag["YRHacks 2023"],
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
    tags: [Tag["Next.js"], Tag.TailwindCSS, Tag.TypeScript, Tag.CSS, Tag.GitHub],
  },
  {
    name: "Cows Vs. Ducks",
    description:
      "A strategy-based game based on Plants vs. Zombies, where cows defend against ducks. Implemented a state machine and animation system.",
    projectUrl: "https://github.com/rhhscs/cows-vs-ducks",
    createdDate: new Date("2023-09-23"),
    image: cowsVsDucksImage,
    imageAlt: "Cows Vs. Ducks gampelay",
    tags: [Tag.Java, Tag.JSwing, Tag["Game Development"]],
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
      Tag.Streamlit,
      Tag.Firebase,
      Tag["DeltaHacks XI"],
      Tag["Game Development"],
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
      Tag.Flask,
      Tag["Next.js"],
      Tag.Python,
      Tag["Express.js"],
      Tag.Cohere,
      Tag.Gemini,
      Tag.WebSocket,
      Tag.TypeScript,
      Tag["GenAI Genesis"],
      Tag.Twilio,
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
    tags: [Tag.Java, Tag.JSwing, Tag["Computer Graphics"]],
  },
  {
    name: "invitation",
    description:
      "An invitation to my birthday party. Features JWT authentication, server actions, and a responsive design. Friends only.",
    projectUrl: "",
    createdDate: new Date("2025-02-14"),
    tags: [
      Tag["Next.js"],
      Tag.TypeScript,
      Tag.Supabase,
      Tag.JWT,
      Tag["REST API"],
      Tag.React,
      Tag.TailwindCSS,
      Tag.GitHub,
      Tag.Vercel,
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
    tags: [Tag.C, Tag.Interpreter],
  },
];

export default projects;
