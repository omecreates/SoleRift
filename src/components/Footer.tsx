export default function Footer() {
  return (
    <footer className="bg-[#E3E2DE] pt-24 pb-8 px-6 border-t border-[#D9D9D9] relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
          <div>
            <h3 className="font-display font-bold uppercase text-xl mb-6">Shop</h3>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">All Drops</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Low-Top</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">High-Top</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Collabs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-xl mb-6">Info</h3>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Stockists</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-xl mb-6">Community</h3>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-xl mb-6">Legal</h3>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-solerift-neon)] transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>

        {/* Ghost Brand Title */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-40 select-none">
          <h1 className="font-display font-bold text-[8vw] leading-none text-[#D9D9D9] tracking-tighter whitespace-nowrap">
            SOLERIFT
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between font-mono text-xs uppercase border-t border-[#D9D9D9] pt-8 relative z-10">
          <p>&copy; 2025 SOLERIFT. NO RESTOCKS. NO REGRETS.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Born Underground</span>
            <span className="text-[var(--color-solerift-red)]">Built Different</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
