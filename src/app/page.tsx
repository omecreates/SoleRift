import HeroSection from "@/components/sections/HeroSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import FeaturedDrops from "@/components/sections/FeaturedDrops";
import FullCollection from "@/components/sections/FullCollection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <FeaturedDrops />
      <FullCollection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
