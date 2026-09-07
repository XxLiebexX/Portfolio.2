import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/canvas/BackgroundCanvas";
import SpatialAtmosphere from "@/components/SpatialAtmosphere";
import SystemInitLoader from "@/components/SystemInitLoader";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Yuvraj  Singh — AI/ML Researcher & Full-Stack Developer",
  description:
    "Portfolio of Yuvraj Singh (XxLiebexX), AI/ML Researcher and Full-Stack Developer specializing in machine learning pipelines, quantum key distribution simulations, and real-time systems.",
  keywords: [
    "Yuvraj  Singh",
    "XxLiebexX",
    "AI/ML",
    "Quantum Computing",
    "QKD",
    "FastAPI",
    "Next.js",
    "WebSockets",
    "Bennett University",
  ],
  authors: [{ name: "Yuvraj Singh" }],
  openGraph: {
    title: "Yuvraj Singh — AI/ML & Full-Stack Engineer",
    description: "Building intelligent systems, quantum cryptographic algorithms, and real-time architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans relative select-none">
        <ThemeProvider>
          {/* Custom Animated Mouse Tracker (Reticle & Spring Physics) */}
          <CustomCursor />

          {/* Prabal-Style System Bootloader Screen */}
          <SystemInitLoader />

          {/* Prabal-Style Cursor Spotlight, Pulsing Orbs & Technical Grid */}
          <SpatialAtmosphere />

          {/* Ambient 3D Starfield / Dust Canvas */}
          <BackgroundCanvas />

          {/* Global Header */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow relative z-10">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
