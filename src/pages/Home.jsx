import React from "react";
import Sidebar from "@/components/portfolio/Sidebar";
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
      <div className="mx-auto max-w-screen-xl px-6 py-14 md:px-12 lg:flex lg:justify-between lg:gap-14 lg:px-16 lg:py-0">
        <Sidebar />
        <main className="pt-16 lg:w-[52%] lg:py-24">
          <div className="space-y-24 lg:space-y-32">
            <About />
            <Experience />
            <Projects />
            <LiveTools />
            <Hobbies />
            <Education />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
