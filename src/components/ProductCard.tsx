"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  status: "AVAILABLE" | "SOLD OUT" | "ONLY 3 LEFT" | "COLLAB DROP";
  category: "LOW-TOP" | "MID-TOP" | "HIGH-TOP" | "COLLAB";
}

export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const getStatusBadge = () => {
    switch (product.status) {
      case "SOLD OUT":
        return <span className="bg-[var(--color-solerift-navy)] text-[var(--color-solerift-white)] px-3 py-1 text-[10px] font-sans font-bold uppercase z-20 absolute top-4 right-4">SOLD OUT</span>;
      case "ONLY 3 LEFT":
        return <span className="bg-[var(--color-solerift-white)] text-[var(--color-solerift-navy)] px-3 py-1 text-[10px] font-sans font-bold uppercase z-20 absolute top-4 right-4 border-premium">ONLY 3 LEFT</span>;
      case "COLLAB DROP":
        return <span className="bg-[var(--color-solerift-sage)] text-[var(--color-solerift-navy)] px-3 py-1 text-[10px] font-sans font-bold uppercase z-20 absolute top-4 right-4">COLLAB DROP</span>;
      default:
        return null;
    }
  };

  const isSoldOut = product.status === "SOLD OUT";

  return (
    <motion.div 
      className={`group relative flex flex-col cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-[var(--color-solerift-charcoal)] aspect-[3/4]">
        {getStatusBadge()}
        
        {/* Navy Overlay on hover */}
        <div 
          className="absolute inset-0 bg-[var(--color-solerift-navy)] z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: isHovered ? 0.6 : 0 }}
        />

        <div 
          className="w-full h-full min-h-[300px] flex items-center justify-center img-hover-reveal relative bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${product.image})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          {!product.image && (
             <span className="font-display text-4xl text-[var(--color-solerift-white)] opacity-20 rotate-[-10deg] tracking-tighter">
               {product.id}
             </span>
          )}
        </div>

        {/* Circular View Badge */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[var(--color-solerift-white)] text-[var(--color-solerift-navy)] flex items-center justify-center z-20 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.8})`
          }}
        >
          <span className="font-display text-sm tracking-widest mt-1">VIEW</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-6 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display text-2xl leading-none text-[var(--color-solerift-navy)] dark:text-[var(--color-solerift-white)]">{product.name}</h3>
            <p className="font-sans text-[11px] text-[var(--color-solerift-taupe)] uppercase mt-2 tracking-wide font-medium">{product.subtitle}</p>
          </div>
          <span className="font-sans text-sm font-semibold text-[var(--color-solerift-taupe)]">₹{product.price.toLocaleString("en-IN")}</span>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            if (!isSoldOut) addToCart();
          }}
          disabled={isSoldOut}
          className={`mt-6 w-full py-4 font-sans font-bold uppercase text-[10px] tracking-widest transition-colors border-premium ${
            isSoldOut 
              ? "bg-transparent text-[var(--color-solerift-taupe)] cursor-not-allowed border-[var(--color-solerift-taupe)]" 
              : "bg-transparent text-[var(--color-solerift-navy)] dark:text-[var(--color-solerift-white)] border-[var(--color-solerift-navy)] dark:border-[var(--color-solerift-white)] hover:bg-[var(--color-solerift-navy)] dark:hover:bg-[var(--color-solerift-white)] hover:text-[var(--color-solerift-white)] dark:hover:text-[var(--color-solerift-navy)]"
          }`}
        >
          {isSoldOut ? "NOTIFY ME" : "ADD TO CART"}
        </button>
      </div>
    </motion.div>
  );
}
