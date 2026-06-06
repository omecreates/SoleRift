"use client";

import ProductCard, { Product } from "../ProductCard";
import { useEffect, useState } from "react";

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
    subtitle: "Neon orange & white mid-top",
    price: 10499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    status: "ONLY 3 LEFT",
    category: "MID-TOP"
  },
  {
    id: "RIFT-03",
    name: "GHOST",
    subtitle: "All-white clean silhouette",
    price: 9499,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop",
    status: "AVAILABLE",
    category: "LOW-TOP"
  }
];

export default function FeaturedDrops() {
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60); // 3 days in seconds

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
    <section id="drops" className="bg-[#E3E2DE] pb-24">
      {/* Category Divider Ribbon */}
      <div className="w-full border-y border-[#D9D9D9] py-2 bg-[#E3E2DE] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center whitespace-nowrap">
          <h2 className="font-display font-bold uppercase text-[10vw] md:text-[8vw] leading-none tracking-tighter text-[#61220F]">
            THIS WEEK&apos;S DROP
          </h2>
          <div className="hidden md:flex flex-col items-end pl-8 border-l border-[#D9D9D9]">
            <span className="font-mono text-xs uppercase mb-1">Ends In</span>
            <span className="font-mono font-bold text-2xl text-[#C72A09]">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
      
      {/* Mobile Timer */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 border-b border-[#D9D9D9]">
        <span className="font-mono text-xs uppercase">Ends In</span>
        <span className="font-mono font-bold text-xl text-[#C72A09]">{formatTime(timeLeft)}</span>
      </div>

      {/* Asymmetric Product Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          {/* Product A - 7 columns */}
          <div className="col-span-1 md:col-span-7">
            <ProductCard product={FEATURED_PRODUCTS[0]} />
          </div>

          {/* Product B - 5 columns, offset top */}
          <div className="col-span-1 md:col-span-5 md:mt-32">
            <ProductCard product={FEATURED_PRODUCTS[1]} />
          </div>

          {/* Product C - full width */}
          <div className="col-span-1 md:col-span-12 mt-12 md:mt-24">
            <div className="w-full aspect-[16/9] md:aspect-[21/9]">
              <ProductCard 
                product={FEATURED_PRODUCTS[2]} 
                className="h-full w-full [&>div:first-child]:aspect-auto [&>div:first-child]:h-[60vh] [&>div:first-child]:md:h-[500px]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
