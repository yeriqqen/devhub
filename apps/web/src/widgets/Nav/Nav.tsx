"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RightMenu } from "./ui/RightMenu";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPortfolio = pathname === "/portfolio";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${isHome ? "home-navigation" : isPortfolio ? "bg-neutral-900 text-white" : "bg-white text-neutral-950"}`}
    >
      <nav
        aria-label="Main"
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-6 py-5 md:px-8"
      >
        <Link
          href="/explore"
          aria-current={pathname === "/explore" ? "page" : undefined}
          className="home-nav-control justify-self-start text-lg font-light italic underline underline-offset-4 sm:text-xl"
          data-hover-cursor
        >
          explore
        </Link>
        {!isHome && (
          <Link
            href="/"
            aria-label="Home"
            className="col-start-2 text-xl font-black leading-none tracking-tight sm:text-2xl"
          >
            WELCOME
          </Link>
        )}
        <RightMenu key={pathname} dark={isPortfolio} />
      </nav>
    </header>
  );
}
