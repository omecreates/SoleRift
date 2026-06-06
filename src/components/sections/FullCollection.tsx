"use client";

import { useState } from "react";
import ProductCard, { Product } from "../ProductCard";

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

  const filteredProducts = activeFilter === "ALL" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="collection" className="bg-[#E3E2DE] pb-24">
      {/* Category Divider */}
      <div className="w-full border-y border-[#D9D9D9] py-2 bg-[#E3E2DE] mb-12">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="font-display font-bold uppercase text-[10vw] md:text-[8vw] leading-none tracking-tighter text-[#61220F]">
            COLLECTION 01
          </h2>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-[#D9D9D9] pb-8">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-mono text-sm font-bold uppercase transition-colors duration-300 border-2 border-[#1B0E0D] ${
                activeFilter === filter 
                  ? "bg-[#1B0E0D] text-[#E3E2DE]" 
                  : "bg-transparent text-[#1B0E0D] hover:bg-[#D9D9D9]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center font-mono uppercase text-gray-500">
            No products found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
