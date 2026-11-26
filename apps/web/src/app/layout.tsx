import type { Metadata } from "next";
import { Nav } from "@/widgets/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yestay Yessenbay",
    template: "%s | Yestay Yessenbay",
  },
  description:
    "My corner of the internet for things I’ve made, notes I’ve written, and a way to say hello.",
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
