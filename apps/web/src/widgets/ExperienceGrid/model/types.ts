export interface Experience {
    id: string;
    name: string;
    role: string;
    duration: string;
    description: string;
    image: string;
    gradient: string;
    technologies: string[];
    achievements: string[];
    link?: string;
}

export interface ExperienceGridProps {
    experiences?: Experience[];
    className?: string;
}