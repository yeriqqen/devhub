import { Experience } from '../model';
import Image from 'next/image';

interface ExperienceCardProps {
    experience: Experience;
    className?: string;
}

export const ExperienceCard = ({ experience, className = "" }: ExperienceCardProps) => {
    return (
        <li
            className={`group bg-transparent overflow-hidden  ${className}`}
        >
            <div className={`relative w-full group-hover:shadow-xl group-hover:border-gray-300 transition-all duration-300 aspect-[5/4] overflow-hidden bg-gradient-to-br`}>
                <Image
                    src={experience.image}
                    alt={experience.name}
                    width={500}
                    height={400}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="group-hover:hidden w-full h-full object-cover"
                />
                <video
                    src={experience.video}
                    autoPlay
                    loop
                    muted
                    className="hidden group-hover:block w-full h-full object-cover"
                />
            </div>

            <div className="py-6">
                <div className="text-center flex flex-row justify-center relative">
                    <h2 className="absolute left-0 text-xl mb-1">
                        {experience.name}
                    </h2>
                    <p className="font-medium text-xl">
                        {experience.role}
                    </p>
                    <time className="absolute right-0 opacity-20 text-lg">
                        ©{experience.duration}
                    </time>
                </div>
            </div>
        </li>
    );
};
