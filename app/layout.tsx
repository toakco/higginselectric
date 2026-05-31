import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { business } from "@/lib/content";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} · ${business.tagline}`,
  description: `Family owned Connecticut electrical contractor. Commercial, industrial, residential, generators. Serving ${business.serviceArea}.`,
  metadataBase: new URL("https://higginselectric.com"),
  openGraph: {
    title: `${business.name} · ${business.tagline}`,
    description: `Family owned Connecticut electrical contractor. Commercial, industrial, residential, and generators.`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-higgins-black text-higgins-bone selection:bg-higgins-yellow selection:text-higgins-black">
        <SmoothScroll>
<Nav />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
