import tinyraytracerImage from "@/assets/projects/tinyraytracer.jpg";
import eyedentifyImage from "@/assets/projects/eyedentify.jpg";
import harborisImage from "@/assets/projects/harboris.png";

import Project from "@/models/project.model";
import { tag } from "./tags";

const projects: Project[] = [
  {
    name: "Eyedentify",
    description:
      "A web application that uses facial recognition to identify people.",
    image: eyedentifyImage,
    imageAlt: "Eyedentify logo",
    projectUrl: "https://github.com/andrewchu16/eyedentify",
    createdDate: new Date("2023-03-03"),
    tags: [
      tag.hackathon["YRHacks 2023"],
      tag.language.Python,
      tag.framework.Flask,
      tag.framework.MediaPipe,
      tag.framework.TailwindCSS,
      tag.framework.React,
      tag.other["RESTful API"],
      tag.language.TypeScript,
    ],
  },
  {
    name: "tinyraytracer",
    description: "A tiny raytracer in C++ and Go.",
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
    name: "Harboris",
    description:
      "A chrome extension for organizing group-buys for any e-commerce store and providing fraud detection.",
    image: harborisImage,
    imageAlt: "Harboris logo",
    projectUrl: "https://github.com/andrewchu16/Harboris",
    createdDate: new Date("2025-01-18"),
    tags: [
      tag.hackathon["UofTHacks 12"],
      tag.language.TypeScript,
      tag.framework.React,
      tag.other["Chrome Extension"],
      tag.other.Figma,
    ],
  },
  {
    name: "Harboris2",
    description:
      "A chrome extension for organizing group-buys for any e-commerce store and providing fraud detection.",
    image: harborisImage,
    imageAlt: "Harboris logo",
    projectUrl: "https://github.com/andrewchu16/Harboris",
    createdDate: new Date("2025-01-18"),
    tags: [
      tag.hackathon["UofTHacks 12"],
      tag.language.TypeScript,
      tag.framework.React,
      tag.other["Chrome Extension"],
      tag.other.Figma,
    ],
  },
  {
    name: "Harboris3",
    description:
      "A chrome extension for organizing group-buys for any e-commerce store and providing fraud detection.",
    image: harborisImage,
    imageAlt: "Harboris logo",
    projectUrl: "https://github.com/andrewchu16/Harboris",
    createdDate: new Date("2025-01-18"),
    tags: [
      tag.hackathon["UofTHacks 12"],
      tag.language.TypeScript,
      tag.framework.React,
      tag.other["Chrome Extension"],
      tag.other.Figma,
    ],
  },
  {
    name: "Harboris4",
    description:
      "A chrome extension for organizing group-buys for any e-commerce store and providing fraud detection.",
    image: harborisImage,
    imageAlt: "Harboris logo",
    projectUrl: "https://github.com/andrewchu16/Harboris",
    createdDate: new Date("2025-01-18"),
    tags: [
      tag.hackathon["UofTHacks 12"],
      tag.language.TypeScript,
      tag.framework.React,
      tag.other["Chrome Extension"],
      tag.other.Figma,
    ],
  },
];

export default projects;
