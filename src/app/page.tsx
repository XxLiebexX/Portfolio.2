import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
