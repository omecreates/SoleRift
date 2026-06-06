"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [cycleText, setCycleText] = useState(0);
  const words = ["EXCLUSIVE DROPS", "LIMITED RUNS", "NO RESTOCKS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleText((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative w-full h-screen bg-[#1B0E0D] overflow-hidden flex flex-col justify-between pt-32 pb-12 px-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop)' }}
      />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex-1 flex flex-col justify-center">
        {/* Split Indented Headline */}
        <div className="w-full relative">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold uppercase text-[16vw] md:text-[13.5vw] leading-[0.75] tracking-[-0.05em] text-[#E3E2DE]"
          >
            SOLE
          </motion.h1>
          <motion.h1 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display font-bold uppercase text-[16vw] md:text-[13.5vw] leading-[0.75] tracking-[-0.05em] text-[#C72A09] md:ml-[20vw] ml-[10vw]"
          >
            RIFT
          </motion.h1>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto mt-auto border-t border-[#E3E2DE]/30 pt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E3E2DE]/70">
            SS25 &middot; COLLECTION 01 &middot; LIMITED EDITION &middot; NO RESTOCKS
          </p>
          <p className="font-sans font-medium text-lg text-[#E3E2DE]">
            Born Underground. Built Different.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="h-6 overflow-hidden">
            <motion.p
              key={cycleText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="font-mono font-bold text-[var(--color-solerift-neon)] uppercase"
            >
              {words[cycleText]}
            </motion.p>
          </div>
          
          <button className="bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] px-8 py-4 font-bold uppercase text-sm tracking-wider transition-colors duration-300">
            SHOP THE DROP
          </button>
        </div>
      </div>
    </section>
  );
}
