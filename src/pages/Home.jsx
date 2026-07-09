import React from "react";
import Starfield from "@/components/portfolio/Starfield";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import LiveTools from "@/components/portfolio/LiveTools";
import Hobbies from "@/components/portfolio/Hobbies";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-noir text-cream">
      <Starfield />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <main className="mx-auto max-w-4xl space-y-28 px-5 py-24 sm:px-8 lg:space-y-36">
          <About />
          <Experience />
          <Projects />
          <LiveTools />
          <Hobbies />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
