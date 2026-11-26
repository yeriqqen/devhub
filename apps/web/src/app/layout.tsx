import type { Metadata } from "next";
import { Nav } from "@/widgets/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yestay Yessenbay",
    template: "%s | Yestay Yessenbay",
  },
  description:
    "Projects, work experience, and contact details for Yestay Yessenbay.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
