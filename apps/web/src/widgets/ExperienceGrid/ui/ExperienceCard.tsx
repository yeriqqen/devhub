import Image from "next/image";
import type { ExperienceCardProps } from "../model";
import { ExperienceMedia } from "./ExperienceMedia";

export function ExperienceCard({
  experience,
  className = "",
}: ExperienceCardProps) {
  const sizes = "(min-width: 1024px) 42vw, 90vw";
  const alternateImage = experience.video ? undefined : experience.image2;

  return (
    <li className={className}>
      <ExperienceMedia
        name={experience.name}
        link={experience.link}
        video={experience.video}
      >
        <Image
          src={experience.image1}
          alt={experience.link ? "" : experience.name}
          fill
          sizes={sizes}
          className="object-cover"
        />
        {alternateImage && (
          <Image
            src={alternateImage}
            alt=""
            fill
            sizes={sizes}
            className="hidden object-cover group-hover:block group-focus-visible:block"
          />
        )}
      </ExperienceMedia>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
        <h2 className="text-xl">{experience.name}</h2>
        <p className="text-neutral-300">{experience.role}</p>
        <p className="ml-auto whitespace-nowrap text-sm text-neutral-400">
          {experience.duration}
        </p>
      </div>
    </li>
  );
}
