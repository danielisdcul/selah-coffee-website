import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selah Coffee — Good Coffee, Peaceful Moments",
  description: "Thoughtfully sourced coffee, simple food, and a warm place to pause.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
