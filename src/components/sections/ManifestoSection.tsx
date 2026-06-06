"use client";

import { motion } from "framer-motion";

export default function ManifestoSection() {
  return (
    <section id="about" className="bg-[#E3E2DE] py-24 px-6 border-b border-[#D9D9D9]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Label */}
          <div className="col-span-1 md:col-span-4 border-t-2 border-[#1B0E0D] pt-4">
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-[#1B0E0D]">
              Manifesto
            </h2>
          </div>

          {/* Main Text */}
          <div className="col-span-1 md:col-span-8 pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-[48px] uppercase leading-[1.1] tracking-tight text-[#1B0E0D]"
            >
              <span className="inline-block w-12 md:w-24"></span>
              We don&apos;t follow trends. We <span className="text-[#61220F]">bury them</span>.
              <br className="hidden md:block" />
              SOLERIFT started in a garage with one idea:
              <br className="hidden md:block" />
              Real streetwear doesn&apos;t ask for <span className="text-[#61220F]">permission</span>.
            </motion.p>

            {/* Stat Blocks */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#D9D9D9] pt-8">
              <div>
                <p className="font-display font-bold text-4xl text-[#C72A09]">12</p>
                <p className="font-mono text-xs uppercase mt-1">Drops</p>
              </div>
              <div>
                <p className="font-display font-bold text-4xl text-[#C72A09]">0</p>
                <p className="font-mono text-xs uppercase mt-1">Restocks</p>
              </div>
              <div>
                <p className="font-display font-bold text-4xl text-[#C72A09]">100%</p>
                <p className="font-mono text-xs uppercase mt-1">Independent</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
