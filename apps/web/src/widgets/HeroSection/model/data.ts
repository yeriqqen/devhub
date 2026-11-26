import type { Project } from "./types";

export const defaultProjects: Project[] = [
  {
    id: "dep",
    name: "DEP",
    description: "Company web platform built with Next.js and NestJS.",
    image: "/experiences/dep/dep.jpeg",
    video: "/experiences/dep/VSS_RECAP_2023.mp4",
    link: "https://dep.team",
  },
  {
    id: "yeriqqen",
    name: "Yeriqqen",
    description: "Personal site.",
    image: "/project-previews/yeriqqen.webp",
    link: "https://yeriqqen.vercel.app",
  },
  {
    id: "bankai",
    name: "My Bankai",
    image: "/experiences/mybankai/chloro.jpg",
  },
  {
    id: "yikipedia",
    name: "Yikipedia",
    description: "My blog.",
    image: "/project-previews/yikipedia.webp",
    link: "https://yeriqqen.github.io",
  },
  {
    id: "memories",
    name: "Memories",
    image: "/project-previews/memories.webp",
    homeOnly: true,
  },
  {
    id: "levelup",
    name: "나 혼자만 레벨업",
    image: "/project-previews/levelup.webp",
    homeOnly: true,
  },
];
