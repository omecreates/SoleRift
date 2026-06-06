"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="bg-[var(--color-solerift-charcoal)] relative py-40 px-8 overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* Giant Decorative Quotation Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-solerift-navy)] text-[40rem] font-display opacity-30 select-none pointer-events-none leading-none -z-0">
        &quot;
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-7xl leading-[1.1] text-[var(--color-solerift-white)] mb-16"
        >
          THE ONLY SHOE BRAND THAT DROPS CULTURE, NOT JUST KICKS.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-solerift-sage)] text-[var(--color-solerift-navy)] flex items-center justify-center font-display text-2xl mb-4">
            SR
          </div>
          <span className="font-display text-xl text-[var(--color-solerift-white)] tracking-widest">
            SOLERIFT COMMUNITY
          </span>
        </motion.div>
      </div>

    </section>
  );
}
