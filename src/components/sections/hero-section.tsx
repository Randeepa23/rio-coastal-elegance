import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-6 fade-in">
          Rio Cafe
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 fade-in fade-in-delay-1">
          A Culinary Journey by the Indian Ocean
        </p>
        <div className="fade-in fade-in-delay-2">
          <Button size="lg" className="neomorphic bg-accent hover:bg-accent/90 text-white border-0 px-8 py-4 text-lg">
            Reserve a Table
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}