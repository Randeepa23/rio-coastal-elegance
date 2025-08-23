import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JourneySection } from "@/components/sections/journey-section";
import { MenuSection } from "@/components/sections/menu-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/footer";

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
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