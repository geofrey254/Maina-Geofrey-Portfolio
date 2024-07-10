import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
