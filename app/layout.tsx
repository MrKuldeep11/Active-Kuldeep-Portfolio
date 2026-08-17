import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Kuldeep | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Kuldeep — Full-Stack Developer and AI Enthusiast building modern web applications and AI-powered digital experiences.",
  keywords: [
    "Kuldeep",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Portfolio",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "AI portfolio",
  ],
  openGraph: {
    title: "Kuldeep | Full-Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Kuldeep — Full-Stack Developer and AI Enthusiast building modern web applications and AI-powered digital experiences.",
    type: "website",
    siteName: "Kuldeep Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep | Full-Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Kuldeep — Full-Stack Developer and AI Enthusiast building modern web applications and AI-powered digital experiences.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
