'use client';

import { ExperienceCard } from './ui';
import { defaultExperiences, ExperienceGridProps  } from './model';

export const ExperienceGrid = ({
    experiences = defaultExperiences,
    className = ""
}: ExperienceGridProps) => {
    return (
        <ul className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
            {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
            ))}
        </ul>
    );
};