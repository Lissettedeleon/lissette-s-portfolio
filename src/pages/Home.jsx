import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import LiveTools from "@/components/portfolio/LiveTools";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-noir text-cream">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-6xl space-y-28 px-5 pb-24 sm:px-8 lg:space-y-32">
        <FeaturedProjects />
        <LiveTools />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
