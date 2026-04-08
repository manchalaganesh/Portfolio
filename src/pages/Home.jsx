import React from "react";
import PageTransition from "../components/PageTransition";
import HeroSection from "../components/portfolio/HeroSection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
    </PageTransition>
  );
}
