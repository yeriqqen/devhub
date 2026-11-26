import { HeroSection } from "@/widgets/HeroSection";
import { CookieNotice } from "@/widgets/CookieNotice";
import { Welcome } from "@/widgets/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-12 bg-gray-50 pb-36 pt-28 sm:pb-28 lg:pt-24">
      <Welcome />
      <HeroSection />
      <h1 className="mt-auto px-4 text-center text-[clamp(2.75rem,14vw,8rem)] font-black leading-none tracking-tight">
        WELCOME
      </h1>
      <CookieNotice />
    </main>
  );
}
