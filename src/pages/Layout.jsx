import React from "react";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";
import Home from "./Home";

export default function Layout() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white scroll-smooth font-['Inter',sans-serif] dark:bg-zinc-950 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
