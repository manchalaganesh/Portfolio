import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";
import { AnimatePresence } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="bg-zinc-950 min-h-screen text-white scroll-smooth font-['Inter',sans-serif] dark:bg-zinc-950 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <React.Fragment key={location.pathname}>
            <Outlet />
          </React.Fragment>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
