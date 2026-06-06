"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#fafafa] pt-32 pb-0 overflow-hidden text-[var(--color-solerift-navy)]">
      <div className="max-w-screen-2xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left Column */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-solerift-taupe)] mb-12 font-bold">
              THE BRAND
            </h3>
            
            <ul className="space-y-6 font-sans text-xs uppercase tracking-widest font-semibold text-[var(--color-solerift-navy)]">
              {['Born Independent', 'No Restocks Ever', 'Limited Drops Only', '100% Underground'].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="inline-block h-[1px] w-10 bg-[var(--color-solerift-navy)] mr-6 transition-all duration-500 group-hover:w-16"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Heading) */}
          <div className="col-span-1 md:col-span-8 flex items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[10vw] md:text-8xl leading-[0.9] text-[var(--color-solerift-navy)] font-light"
            >
              WE DON&apos;T FOLLOW TRENDS.<br/>
              WE <span className="italic text-[var(--color-solerift-taupe)]">BURY</span> THEM.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full bg-[var(--color-solerift-navy)] py-6 overflow-hidden whitespace-nowrap flex relative border-y border-[var(--color-solerift-white)] border-opacity-10">
        <motion.div 
          className="flex font-display text-4xl md:text-6xl text-[var(--color-solerift-taupe)]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          <span className="mx-8">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-8">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-8">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
          <span className="mx-8">SOLERIFT &middot; BORN UNDERGROUND &middot; NO RESTOCKS &middot; STAY RAW &middot; BUILT DIFFERENT &middot; </span>
        </motion.div>
      </div>
    </section>
  );
}
