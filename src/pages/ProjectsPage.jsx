import React from "react";
import PageTransition from "../components/PageTransition";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectsSection projectsProp={projects} showFilter={true} />
    </PageTransition>
  );
}
