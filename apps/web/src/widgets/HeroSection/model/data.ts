import type { Project } from "./types";

export const defaultProjects: Project[] = [
  {
    id: "dep",
    name: "DEP",
    description: "A team I worked with in Gwangju.",
    image: "/experiences/dep/dep.jpeg",
    video: "/experiences/dep/VSS_RECAP_2023.mp4",
    link: "https://dep.team",
  },
  {
    id: "yeriqqen",
    name: "Yeriqqen",
    description: "My personal homepage.",
    image: "/project-previews/yeriqqen.webp",
    link: "https://yeriqqen.vercel.app",
  },
  {
    id: "bankai",
    name: "My Bankai",
    image: "/project-previews/yikipedia.webp",
  },
  {
    id: "yikipedia",
    name: "Yikipedia",
    description: "Notes on what I’m learning.",
    image: "/experiences/mybankai/chloro.jpg",
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
