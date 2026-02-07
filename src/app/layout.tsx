import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Soundtrack } from "@/components/ui/Soundtrack";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

import { Syne } from "next/font/google";
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thakur | The Archive of Whispers",
  description: "An editorial digital chronicle and portfolio of Thakur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${bebas.variable} ${syne.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-accent/30`}
      >
        <Soundtrack />
        <div className="film-grain" />
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
