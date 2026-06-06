"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#E3E2DE] pt-12 pb-0 overflow-hidden">
      {/* Category Divider */}
      <div className="w-full border-y border-[#D9D9D9] py-2 bg-[#E3E2DE] mb-16">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="font-display font-bold uppercase text-[10vw] md:text-[8vw] leading-none tracking-tighter text-[#61220F]">
            ABOUT
          </h2>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="font-mono text-sm uppercase leading-relaxed text-[#1B0E0D]/80">
            <p className="mb-6">
              SOLERIFT IS NOT JUST ANOTHER SNEAKER BRAND. WE ARE A RESPONSE TO THE MASS-PRODUCED, OVER-HYPE CULTURE THAT HAS DILUTED THE ESSENCE OF STREETWEAR.
            </p>
            <p>
              EVERY SILHOUETTE IS DESIGNED WITH INTENT. EVERY MATERIAL SOURCED WITH PURPOSE. WE PRODUCE IN LIMITED BATCHES BECAUSE WE BELIEVE IN EXCLUSIVITY THAT MATTERS, NOT MANUFACTURED SCARCITY.
            </p>
          </div>

          {/* Right Column (Stats) */}
          <div className="border-l border-[#D9D9D9] pl-8 flex flex-col justify-center">
            <div className="mb-8">
              <h4 className="font-display font-bold text-2xl text-[#1B0E0D] uppercase mb-2">Independent</h4>
              <p className="font-mono text-xs uppercase text-[#1B0E0D]/60">NO CORPORATE BACKING. PURE VISION.</p>
            </div>
            <div className="mb-8">
              <h4 className="font-display font-bold text-2xl text-[#1B0E0D] uppercase mb-2">Sustainable Scarcity</h4>
              <p className="font-mono text-xs uppercase text-[#1B0E0D]/60">WE MAKE EXACTLY WHAT WE SELL. ZERO WASTE.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-[#1B0E0D] uppercase mb-2">Anti-Resell</h4>
              <p className="font-mono text-xs uppercase text-[#1B0E0D]/60">OUR SHOES ARE MEANT TO BE WORN, NOT HOARDED.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full border-y border-[#D9D9D9] py-6 bg-[#1B0E0D] overflow-hidden whitespace-nowrap flex relative">
        <motion.div 
          className="flex font-display font-bold text-4xl md:text-6xl uppercase tracking-widest text-[#C72A09]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          <span className="mx-4">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-4">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-4">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-4">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
        </motion.div>
      </div>
    </section>
  );
}
