import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import crabCurryImage from "@/assets/dish-crab-curry.jpg";
import cocktailImage from "@/assets/cocktail-sunset.jpg";
import pizzaImage from "@/assets/pizza-wood-fired.jpg";
import fruitsImage from "@/assets/fruits-tropical.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    id: 1,
    image: heroImage,
    title: "RIO CAFE",
    subtitle: "A Culinary Journey by the Indian Ocean",
    description: "Experience the finest coastal dining where Sri Lankan flavors meet international sophistication",
    cta: "Reserve Your Experience"
  },
  {
    id: 2,
    image: crabCurryImage,
    title: "SIGNATURE DISHES",
    subtitle: "Authentic Jaffna Crab Curry",
    description: "Savor our chef's masterpiece - fresh crab in aromatic Sri Lankan spices",
    cta: "Explore Our Menu"
  },
  {
    id: 3,
    image: cocktailImage,
    title: "SUNSET COCKTAILS",
    subtitle: "Handcrafted with Ocean Views",
    description: "Watch the sun set over the Indian Ocean with our signature cocktails",
    cta: "View Drinks Menu"
  },
  {
    id: 4,
    image: pizzaImage,
    title: "WOOD-FIRED PIZZAS",
    subtitle: "Mediterranean Meets Tropical",
    description: "Fresh ingredients, traditional techniques, with a tropical twist",
    cta: "Order Now"
  },
  {
    id: 5,
    image: fruitsImage,
    title: "TROPICAL EXPERIENCES",
    subtitle: "Fresh Island Flavors",
    description: "Discover the vibrant tastes of Sri Lankan tropical fruits and desserts",
    cta: "Book Your Table"
  }
];

export function HeroSlider() {
  useEffect(() => {
    // Scroll animations for other sections
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
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wider text-shadow-lg animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-4xl font-light mb-8 opacity-95 text-shadow animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed text-shadow animate-fade-in">
                    {slide.description}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white border-0 px-12 py-4 text-lg font-semibold tracking-wider shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="hero-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-accent transition-colors duration-300 opacity-70 hover:opacity-100">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className="hero-next absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-accent transition-colors duration-300 opacity-70 hover:opacity-100">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white opacity-70 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}