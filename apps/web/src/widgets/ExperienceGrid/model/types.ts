export interface Experience {
  id: string;
  name: string;
  role: string;
  duration: string;
  description: string;
  image1: string;
  image2?: string;
  video?: string;
  technologies?: string[];
  achievements?: string[];
  link?: string;
}

export interface ExperienceGridProps {
  experiences?: Experience[];
  className?: string;
}

export interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}
