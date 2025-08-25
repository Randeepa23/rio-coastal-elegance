import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import crabCurryImage from "@/assets/dish-crab-curry.jpg";
import cocktailImage from "@/assets/cocktail-sunset.jpg";
import pizzaImage from "@/assets/pizza-wood-fired.jpg";
import fruitsImage from "@/assets/fruits-tropical.jpg";

const galleryImages = [
  { id: 1, src: crabCurryImage, alt: "Signature Jaffna Crab Curry", title: "Jaffna Crab Curry" },
  { id: 2, src: cocktailImage, alt: "Sunset Martini Cocktail", title: "Sunset Martini" },
  { id: 3, src: pizzaImage, alt: "Wood-Fired Pizza", title: "Wood-Fired Pizza" },
  { id: 4, src: fruitsImage, alt: "Tropical Fruit Platter", title: "Tropical Fruits" },
  { id: 5, src: heroImage, alt: "Ocean View Dining", title: "Ocean View" },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1);
    } else {
      setCurrentIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mb-20">
        <h1 className="text-6xl md:text-8xl font-light mb-8 fade-in tracking-wider text-shadow-lg">
          RIO CAFE
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-16 opacity-95 fade-in fade-in-delay-1 text-shadow">
          A Culinary Journey by the Indian Ocean
        </p>
      </div>

      {/* Enhanced Horizontal Image Scroller */}
      <div className="relative z-10 w-full max-w-7xl px-6 mb-20">
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToImage('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-3 rounded-full shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToImage('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-3 rounded-full shadow-lg backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </Button>

          {/* Image Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-full relative group"
                >
                  <div className="aspect-[21/9] relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-3xl font-light mb-2 text-shadow">{image.title}</h3>
                      <p className="text-lg opacity-90 text-shadow">Discover our signature experience</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center fade-in fade-in-delay-2">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 px-12 py-4 text-lg font-semibold tracking-wider shadow-xl">
          Reserve Your Experience
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}