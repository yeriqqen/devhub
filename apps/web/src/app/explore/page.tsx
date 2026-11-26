import type { Metadata } from "next";
import { defaultProjects } from "@/widgets/HeroSection/model";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  const projects = defaultProjects.filter((project) => !project.homeOnly);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 sm:pt-36">
      <h1 className="mb-10 text-5xl font-light italic tracking-tight sm:text-7xl">
        Projects
      </h1>
      <ul className="border-t border-neutral-200">
        {projects.map(({ id, name, description, link, image }) => (
          <li key={id} className="border-b border-neutral-200">
            {link ? (
              <a
                href={link}
                className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-offset-4"
              >
                <span>
                  <span className="block text-2xl group-hover:underline">
                    {name}
                  </span>
                  {description && (
                    <span className="mt-1 block text-sm text-neutral-600">
                      {description}
                    </span>
                  )}
                </span>
                <span aria-hidden="true" className="text-xl">
                  ↗
                </span>
              </a>
            ) : (
              <details className="py-5">
                <summary className="cursor-pointer text-2xl hover:underline">
                  {name}
                </summary>
                <p className="mt-2 text-sm text-neutral-600">
                  <a href={image} className="underline underline-offset-4">
                    View project image
                  </a>
                </p>
              </details>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
