import { Experience } from ".";

export const defaultExperiences: Experience[] = [
  {
    id: "tech-innovators",
    name: "TechInnovators Inc.",
    role: "Senior Full Stack Developer",
    duration: "2022 - 2024",
    description:
      "Led development of enterprise-grade web applications and implemented scalable cloud solutions for Fortune 500 clients.",
    image: "/placeholder-office-1.jpg",
    gradient: "from-blue-500 to-purple-600",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    achievements: [
      "Reduced application load time by 60%",
      "Led team of 8 developers",
      "Implemented CI/CD pipeline improving deployment frequency by 300%",
    ],
    link: "https://techinnovators.example.com",
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions Agency",
    role: "Lead Frontend Developer",
    duration: "2020 - 2022",
    description:
      "Specialized in creating stunning user interfaces and implementing complex frontend architectures for high-traffic applications.",
    image: "/placeholder-office-2.jpg",
    gradient: "from-green-500 to-teal-600",
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "JavaScript", "Firebase"],
    achievements: [
      "Improved user engagement by 85%",
      "Built responsive designs for 50+ projects",
      "Mentored junior developers and established coding standards",
    ],
    link: "https://digitalsolutions.example.com",
  },
  {
    id: "startup-labs",
    name: "StartupLabs",
    role: "Full Stack Engineer",
    duration: "2018 - 2020",
    description:
      "Developed MVP products from concept to launch, working closely with founders to bring innovative ideas to life.",
    image: "/placeholder-office-3.jpg",
    gradient: "from-orange-500 to-red-600",
    technologies: ["Python", "Django", "React", "Docker", "Redis"],
    achievements: [
      "Shipped 15+ MVP products",
      "Achieved 99.9% uptime across all applications",
      "Implemented automated testing reducing bugs by 70%",
    ],
    link: "https://startuplabs.example.com",
  },
];
