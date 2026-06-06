export default function Footer() {
  return (
    <footer className="bg-[var(--color-solerift-navy)] pt-32 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-32 relative z-10">
          <h2 className="font-display text-[9xl] md:text-[14vw] leading-none text-[var(--color-solerift-white)] mb-4">
            LET&apos;S CREATE
          </h2>
          <a href="mailto:hello@solerift.com" className="font-display text-4xl text-[var(--color-solerift-sage)] relative inline-block">
            hello@solerift.com
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-solerift-sage)]"></span>
          </a>
        </div>

        {/* Ghost Brand Title */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
          <h1 className="font-display text-[8vw] leading-none text-[var(--color-solerift-sage)] opacity-10 tracking-tighter whitespace-nowrap">
            SOLERIFT
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between font-sans font-semibold text-[10px] tracking-widest uppercase border-t border-[var(--color-solerift-white)] border-opacity-10 pt-8 relative z-10 text-[var(--color-solerift-taupe)]">
          <p>&copy; 2025 SOLERIFT. NO RESTOCKS.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">Size Guide</a>
            <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">Returns</a>
            <a href="#" className="hover:text-[var(--color-solerift-white)] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
