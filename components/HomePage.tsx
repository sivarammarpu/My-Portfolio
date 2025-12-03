"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import QualitiesStrip from "./QualitiesStrip";
import Skills from "./Skills";
import Collaboration from "./Collaboration";
import Projects from "./Projects";
import About from "./About";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Extras from "./Extras";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ContactDrawer from "./ContactDrawer";

import ScrollProgress from "./ScrollProgress";

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pb-16">
        <Hero
          onViewProjects={() => scrollToId("projects")}
          onContact={() => scrollToId("contact")}
        />
        <QualitiesStrip />
        <Collaboration />
        <Skills />
        <Projects />
        <About />
        <Timeline />
        <Testimonials />
        <Extras />
        <ContactSection />
      </main>
      <Footer />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}


