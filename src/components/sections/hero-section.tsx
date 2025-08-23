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
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const imageWidth = container.clientWidth / 3; // Show 3 images at a time
    
    if (direction === 'left') {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1);
    } else {
      setCurrentIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0);
    }
    
    container.scrollTo({
      left: currentIndex * imageWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-light mb-6 fade-in tracking-wider">
          RIO CAFE
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 opacity-90 fade-in fade-in-delay-1">
          A Culinary Journey by the Indian Ocean
        </p>
      </div>

      {/* Horizontal Image Scroller */}
      <div className="relative z-10 w-full max-w-6xl px-6 mb-16">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToImage('left')}
            className="text-white hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </Button>
          
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-shrink-0 w-1/3 px-2 transition-all duration-300 ${
                    index === currentIndex + 1 ? 'scale-110 z-10' : 'scale-95 opacity-80'
                  }`}
                >
                  <div className="glass rounded-lg overflow-hidden aspect-[4/3] relative group cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-medium">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToImage('right')}
            className="text-white hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center fade-in fade-in-delay-2">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 px-8 py-4 text-lg tracking-wider">
          Reserve Your Experience
        </Button>
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