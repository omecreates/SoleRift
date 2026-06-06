"use client";

import { useCart } from "@/context/CartContext";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Drops", "Collection", "About", "Contact"];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 mix-blend-difference text-[var(--color-solerift-white)] py-8 px-8 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-widest z-50">
            SOLERIFT
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 font-sans text-[12px] uppercase tracking-widest font-semibold">
            {navLinks.map((link) => (
              <Link key={link} href={`#${link.toLowerCase()}`} className="link-underline">
                {link}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-8 z-50">
            <button className="border-premium text-[10px] uppercase tracking-widest py-2 px-6 hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-navy)] transition-colors duration-300">
              Get in Touch
            </button>
            <button className="hover:text-[var(--color-solerift-sage)] transition-colors relative">
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-solerift-sage)] text-[var(--color-solerift-navy)] text-[9px] font-sans font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-6 z-50">
            <button className="relative">
              <ShoppingCart size={24} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-solerift-sage)] text-[var(--color-solerift-navy)] text-[10px] font-sans font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[var(--color-solerift-navy)] text-[var(--color-solerift-white)] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-5xl uppercase hover:text-[var(--color-solerift-sage)] transition-colors"
              >
                {link}
              </Link>
            ))}
            <button className="border-premium text-xs uppercase tracking-widest py-3 px-8 mt-8 hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-navy)] transition-colors">
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
