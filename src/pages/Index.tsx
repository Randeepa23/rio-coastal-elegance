import { Navigation } from "@/components/navigation";
import { HeroSlider } from "@/components/sections/hero-slider";
import { FeaturedSection } from "@/components/sections/featured-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JourneySection } from "@/components/sections/journey-section";
import { MenuSection } from "@/components/sections/menu-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <FeaturedSection />
      <TestimonialsSection />
      <JourneySection />
      <MenuSection />
      <MissionSection />
      <ExperiencesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;