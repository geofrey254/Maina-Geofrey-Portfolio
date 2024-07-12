import Image from "next/image";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
