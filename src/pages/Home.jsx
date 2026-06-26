import React from "react";
import CustomCursor from "@/components/portfolio/CustomCursor";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import SkillTicker from "@/components/portfolio/SkillTicker";
import About from "@/components/portfolio/About";
import Divider from "@/components/portfolio/Divider";
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
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SkillTicker />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <LiveTools />
        <Divider />
        <Hobbies />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}