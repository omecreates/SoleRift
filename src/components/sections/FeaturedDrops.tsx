"use client";

import ProductCard, { Product } from "../ProductCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FEATURED_PRODUCTS: Product[] = [
  {
    id: "RIFT-01",
    name: "ASPHALT",
    subtitle: "Matte black low-top",
    price: 8999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    status: "SOLD OUT",
    category: "LOW-TOP"
  },
  {
    id: "RIFT-02",
    name: "EMBER",
    subtitle: "Neon orange mid-top",
    price: 10499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    status: "ONLY 3 LEFT",
    category: "MID-TOP"
  },
  {
    id: "RIFT-03",
    name: "GHOST",
    subtitle: "All-white silhouette",
    price: 9499,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop",
    status: "AVAILABLE",
    category: "LOW-TOP"
  }
];

export default function FeaturedDrops() {
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}D ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="drops" className="bg-[var(--color-solerift-white)] pt-32 pb-32">
      <div className="max-w-screen-2xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[12vw] md:text-9xl leading-[0.8] text-[var(--color-solerift-navy)] uppercase"
          >
            THIS WEEK&apos;S<br/>DROP
          </motion.h2>
          <div className="flex flex-col items-start md:items-end">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-solerift-taupe)] mb-2 font-semibold">Ends In</span>
            <span className="font-mono text-2xl text-[var(--color-solerift-taupe)]">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              className={`${index % 2 !== 0 ? 'md:mt-32' : ''} ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
