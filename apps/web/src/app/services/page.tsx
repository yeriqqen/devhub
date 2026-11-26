import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 sm:px-8 sm:pt-36">
      <h1 className="mb-8 text-5xl font-light italic tracking-tight sm:text-7xl">
        Services
      </h1>
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-700">
        I build web applications and help maintain existing ones. At DEP, I
        worked on the frontend, API, database, and deployment for the same
        product.
      </p>
      <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
          <dt className="font-medium">Web applications</dt>
          <dd className="text-neutral-700">
            Next.js sites and React interfaces.
          </dd>
        </div>
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
          <dt className="font-medium">APIs and data</dt>
          <dd className="text-neutral-700">
            NestJS APIs, third-party integrations, and PostgreSQL.
          </dd>
        </div>
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
          <dt className="font-medium">Performance</dt>
          <dd className="text-neutral-700">
            Slow pages, server rendering, and database queries.
          </dd>
        </div>
      </dl>
      <p className="mt-8 text-neutral-700">
        <Link
          href="/contact"
          className="text-neutral-950 underline underline-offset-4"
        >
          Get in touch
        </Link>{" "}
        with a short description of the project and your timeline.
      </p>
    </main>
  );
}
