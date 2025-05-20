// src/App.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import StickyCTA from "./components/StickyCTA";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ExperienceSection from "./components/ExperienceSection";
import ShowcaseSection from "./components/ShowcaseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import TechStackSection from "./components/TechStackSection";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-[#B8B8B8] min-h-screen">
      {/* Main content area */}
      <main className="pt-8 md:pt-16 px-4">
        {" "}
        {/* Added padding top to body effectively */}
        <Hero />
        <Stats />
        <ExperienceSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <ServicesSection />
        <TechStackSection />
      </main>

      {/* Sticky CTA at the bottom */}
      <StickyCTA />
    </div>
  );
}

export default App;
