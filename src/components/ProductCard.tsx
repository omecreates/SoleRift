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
        return <span className="bg-[#C72A09] text-white px-2 py-1 text-[10px] font-bold uppercase z-10 absolute top-4 right-4">SOLD OUT</span>;
      case "ONLY 3 LEFT":
        return <span className="bg-[#1B0E0D] text-white px-2 py-1 text-[10px] font-bold uppercase z-10 absolute top-4 right-4 border border-[#D9D9D9]">ONLY 3 LEFT</span>;
      case "COLLAB DROP":
        return <span className="bg-[#31EF07] text-[#1B0E0D] px-2 py-1 text-[10px] font-bold uppercase z-10 absolute top-4 right-4">COLLAB DROP</span>;
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
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-[#D9D9D9] aspect-[4/5] md:aspect-auto">
        {getStatusBadge()}
        
        {/* Placeholder image (using a solid block + text for demo, imagine an actual shoe image) */}
        <div 
          className="w-full h-full min-h-[300px] flex items-center justify-center img-hover-reveal relative transition-all duration-500 bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${product.image})`,
            backgroundColor: isHovered ? '#1B0E0D' : '#111' 
          }}
        >
          {!product.image && (
             <span className="font-display text-4xl text-white/20 opacity-50 font-bold uppercase rotate-[-10deg] tracking-tighter">
               {product.id}
             </span>
          )}
        </div>

        {/* Quick View Badge */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#31EF07] text-[#1B0E0D] px-4 py-2 text-[10px] font-bold uppercase z-20 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          QUICK VIEW
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-4 flex flex-col justify-between border-b-2 border-transparent group-hover:border-[#C72A09] transition-colors duration-300 pb-2">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display font-bold uppercase text-lg leading-tight tracking-tight">{product.name}</h3>
            <p className="font-mono text-[10px] text-gray-500 uppercase mt-1">{product.subtitle}</p>
          </div>
          <span className="font-mono text-sm">₹{product.price.toLocaleString("en-IN")}</span>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            if (!isSoldOut) addToCart();
          }}
          disabled={isSoldOut}
          className={`mt-4 w-full py-3 font-bold uppercase text-xs tracking-wider transition-colors ${
            isSoldOut 
              ? "bg-[#D9D9D9] text-gray-500 cursor-not-allowed" 
              : "bg-[#1B0E0D] text-[#E3E2DE] hover:bg-[#31EF07] hover:text-[#1B0E0D]"
          }`}
        >
          {isSoldOut ? "NOTIFY ME" : "ADD TO CART"}
        </button>
      </div>
    </motion.div>
  );
}
