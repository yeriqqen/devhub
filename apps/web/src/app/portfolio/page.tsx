import type { Metadata } from "next";
import { ExperienceGrid } from "@/widgets/ExperienceGrid";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <main className="min-h-svh bg-neutral-900 px-6 pb-20 pt-28 text-white sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-5xl font-light italic tracking-tight sm:text-7xl">
          Portfolio
        </h1>
        <ExperienceGrid />
      </div>
    </main>
  );
}
