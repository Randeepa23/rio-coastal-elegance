import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Star } from "phosphor-react";

const testimonials = [
  {
    quote: "An absolute gem by the ocean. The sunset views paired with their exceptional Sri Lankan fusion cuisine created an unforgettable evening.",
    name: "Sarah Johnson",
    title: "Travel Blogger"
  },
  {
    quote: "Rio Cafe exceeded all expectations. The service was impeccable, and every dish was a masterpiece. A truly world-class dining experience.",
    name: "Michael Chen", 
    title: "Food Critic"
  },
  {
    quote: "The perfect blend of luxury and authenticity. Their fresh seafood and craft cocktails make this the best restaurant in Negombo.",
    name: "Priya Sharma",
    title: "Hotel Concierge"
  },
  {
    quote: "Celebrating our anniversary here was magical. The ambiance, the food, the staff - everything was perfect. We'll definitely return.",
    name: "James & Emma Wilson",
    title: "Guests"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            What Our Guests Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto scroll-fade">
          <GlassCard className="min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} weight="fill" className="text-accent" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-medium text-primary mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent" : "bg-accent/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}