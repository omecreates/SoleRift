"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[var(--color-solerift-navy)] overflow-hidden flex flex-col justify-between pt-32 pb-12 px-8">
      
      {/* Floating Ambient Blur Orbs */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[384px] h-[384px] rounded-full bg-[var(--color-solerift-sage)] opacity-20 blur-[120px] pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[20%] w-[384px] h-[384px] rounded-full bg-[var(--color-solerift-soft-blue)] opacity-20 blur-[120px] pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex-1 flex flex-col justify-center mt-16">
        {/* Main Headline */}
        <div className="w-full relative flex flex-col items-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter text-[var(--color-solerift-sage)] w-full"
          >
            SOLE
          </motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter text-outline w-full text-right md:-mt-8"
          >
            RIFT
          </motion.h1>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto mt-auto flex justify-between items-end">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-solerift-taupe)] max-w-xs font-medium"
        >
          Born Underground. Built Different.<br/>SS25 &middot; Collection 01 &middot; No Restocks.
        </motion.p>

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
          className="w-16 h-16 rounded-full border-premium flex items-center justify-center text-[var(--color-solerift-white)] cursor-pointer hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-navy)] transition-colors duration-500"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          >
            <ArrowDownRight size={24} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
