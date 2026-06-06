"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="bg-[#1B0E0D] text-[#E3E2DE] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold uppercase text-[12vw] md:text-8xl leading-none tracking-tighter mb-6"
        >
          GET IN THE LOOP
        </motion.h2>
        
        <p className="font-mono text-sm md:text-base uppercase tracking-widest text-[#E3E2DE]/70 mb-16">
          Drop your email. First access to every release.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="w-full relative">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              required
              className="w-full bg-transparent border-b-2 border-[#E3E2DE]/30 text-[#E3E2DE] py-4 px-2 font-mono uppercase focus:outline-none focus:border-[#31EF07] transition-colors placeholder:text-[#E3E2DE]/30"
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto bg-[#31EF07] text-[#1B0E0D] font-bold font-mono uppercase px-12 py-4 tracking-widest hover:bg-[#E3E2DE] transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            {isSubmitted ? "JOINED" : "JOIN"}
          </button>
        </form>
      </div>
    </section>
  );
}
