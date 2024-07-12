import Image from "next/image";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Design from "@/components/Design";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Experience />
      <Projects />
      <Design />
      <CTA />
    </main>
  );
}
