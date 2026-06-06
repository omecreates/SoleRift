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
    <section id="contact" className="bg-[var(--color-solerift-navy)] text-[var(--color-solerift-white)] pt-32 pb-48 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[12vw] md:text-[8rem] leading-none text-[var(--color-solerift-white)] mb-8"
        >
          GET IN THE LOOP
        </motion.h2>
        
        <p className="font-sans text-sm md:text-base tracking-widest text-[var(--color-solerift-taupe)] mb-16">
          Drop your email. First access to every release. No spam. Ever.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-16">
          <div className="w-full relative">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              required
              className="w-full bg-transparent border-b border-[var(--color-solerift-white)] border-opacity-30 text-[var(--color-solerift-white)] py-4 px-2 font-sans tracking-widest text-xs uppercase focus:outline-none focus:border-[var(--color-solerift-sage)] transition-colors placeholder:text-[var(--color-solerift-white)] placeholder:opacity-30"
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto bg-transparent border-premium text-[var(--color-solerift-white)] font-sans text-xs uppercase px-12 py-4 tracking-widest hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-navy)] transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            {isSubmitted ? "JOINED" : "JOIN"}
          </button>
        </form>

        <div className="flex justify-center space-x-8 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-solerift-sage)]">
          <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">YouTube</a>
        </div>
      </div>
    </section>
  );
}
