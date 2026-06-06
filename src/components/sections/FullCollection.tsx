"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard, { Product } from "../ProductCard";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ALL_PRODUCTS: Product[] = [
  {
    id: "RIFT-04",
    name: "VENOM",
    subtitle: "High-top techwear silhouette",
    price: 12499,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    status: "AVAILABLE",
    category: "HIGH-TOP"
  },
  {
    id: "RIFT-05",
    name: "CYBER",
    subtitle: "Silver & black mid-top",
    price: 11999,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop",
    status: "AVAILABLE",
    category: "MID-TOP"
  },
  {
    id: "RIFT-06",
    name: "VOID",
    subtitle: "Triple black low-top",
    price: 8999,
    image: "https://images.unsplash.com/photo-1584735175315-9d5823015fcc?q=80&w=1000&auto=format&fit=crop",
    status: "SOLD OUT",
    category: "LOW-TOP"
  },
  {
    id: "RIFT-07",
    name: "NEXUS",
    subtitle: "Solerift x UNDERGROUND",
    price: 14999,
    image: "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?q=80&w=1000&auto=format&fit=crop",
    status: "COLLAB DROP",
    category: "COLLAB"
  },
  {
    id: "RIFT-08",
    name: "BLAZE",
    subtitle: "Red accent high-top",
    price: 13499,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    status: "AVAILABLE",
    category: "HIGH-TOP"
  },
  {
    id: "RIFT-09",
    name: "BONE",
    subtitle: "Off-white low-top",
    price: 7999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    status: "ONLY 3 LEFT",
    category: "LOW-TOP"
  }
];

const FILTERS = ["ALL", "LOW-TOP", "MID-TOP", "HIGH-TOP", "COLLAB"];

export default function FullCollection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const { addToCart } = useCart();

  const filteredProducts = activeFilter === "ALL" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="collection" className="bg-[var(--color-solerift-navy)] pt-32 pb-32 border-t border-[var(--color-solerift-white)] border-opacity-10">
      <div className="max-w-screen-2xl mx-auto px-8">
        
        {/* Featured Collection Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-center">
          <div className="lg:col-span-5 relative">
            {/* Decorative Cyan Square */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.2, x: -48 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-12 bottom-12 right-0 w-full bg-[var(--color-solerift-cyan)] -z-10 hidden md:block"
            />
            <div className="aspect-[4/5] bg-[var(--color-solerift-charcoal)] relative overflow-hidden group">
               <img 
                 src={ALL_PRODUCTS[0].image} 
                 alt="Featured Product" 
                 className="w-full h-full object-cover img-hover-reveal grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
               />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-display text-[var(--color-solerift-sage)] text-xl mb-6">COLLECTION 01</span>
            <h2 className="font-display text-7xl md:text-8xl leading-[0.9] text-[var(--color-solerift-white)] mb-8">
              {ALL_PRODUCTS[0].name}
            </h2>
            <p className="font-sans text-[var(--color-solerift-taupe)] max-w-md mb-4 text-sm leading-relaxed">
              {ALL_PRODUCTS[0].subtitle}. Engineered for the concrete jungle. Premium materials, uncompromising aesthetic.
            </p>
            <p className="font-sans font-semibold text-[var(--color-solerift-white)] mb-12">
              ₹{ALL_PRODUCTS[0].price.toLocaleString('en-IN')}
            </p>
            
            <button 
              onClick={() => addToCart()}
              className="group flex items-center gap-4 text-[var(--color-solerift-white)] font-sans text-[11px] uppercase tracking-widest font-bold hover:text-[var(--color-solerift-sage)] transition-colors w-fit"
            >
              ADD TO CART
              <motion.span 
                className="inline-block"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </motion.span>
            </button>
          </div>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-[var(--color-solerift-white)] border-opacity-20 pb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 font-sans text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 border-premium ${
                activeFilter === filter 
                  ? "bg-[var(--color-solerift-white)] text-[var(--color-solerift-navy)] border-[var(--color-solerift-white)]" 
                  : "bg-transparent text-[var(--color-solerift-white)] border-[var(--color-solerift-white)] border-opacity-30 hover:border-opacity-100 hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-navy)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 3 === 2 ? 'lg:mt-32' : ''}`}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center font-sans uppercase text-[var(--color-solerift-taupe)] tracking-widest text-xs">
            No products found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
