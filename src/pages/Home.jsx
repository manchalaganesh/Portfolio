import React from "react";
import PageTransition from "../components/PageTransition";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import CodeSkills from "../components/portfolio/CodeSkills";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import ContactSection from "../components/portfolio/ContactSection";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <CodeSkills />
      <ProjectsSection projectsProp={projects} showFilter={false} />
      <ExperienceSection />
      <ContactSection />
    </PageTransition>
  );
}
