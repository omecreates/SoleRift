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
      <nav className="fixed top-0 w-full z-40 mix-blend-difference text-[#E3E2DE] p-6 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display font-bold uppercase text-2xl tracking-tight z-50">
            SOLERIFT
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link key={link} href={`#${link.toLowerCase()}`} className="link-underline">
                {link}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6 z-50">
            <button className="hover:text-[var(--color-solerift-neon)] transition-colors">
              <Search size={24} />
            </button>
            <button className="relative hover:text-[var(--color-solerift-neon)] transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-solerift-red)] text-white text-xs font-mono w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden ml-4 hover:text-[var(--color-solerift-neon)] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 z-30 bg-[#1B0E0D] text-[#E3E2DE] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-4xl uppercase hover:text-[var(--color-solerift-neon)] transition-colors"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
