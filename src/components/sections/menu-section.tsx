import { GlassCard } from "@/components/ui/glass-card";
import crabCurry from "@/assets/dish-crab-curry.jpg";
import sunsetCocktail from "@/assets/cocktail-sunset.jpg";
import woodPizza from "@/assets/pizza-wood-fired.jpg";
import tropicalFruits from "@/assets/fruits-tropical.jpg";

const dishes = [
  {
    name: "Jaffna Crab Curry",
    image: crabCurry,
    description: "Traditional Sri Lankan spices meet fresh Indian Ocean crab"
  },
  {
    name: "Sunset Martini", 
    image: sunsetCocktail,
    description: "Craft cocktail inspired by Negombo's golden hour"
  },
  {
    name: "Wood-Fired Pizza",
    image: woodPizza,
    description: "Artisan pizzas with locally sourced ingredients"
  },
  {
    name: "Tropical Fruit Platter",
    image: tropicalFruits,
    description: "Fresh seasonal fruits from local Sri Lankan farms"
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            Signature Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-fade">
            Discover the flavors that make Rio Cafe a culinary destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {dishes.map((dish, index) => (
            <GlassCard key={index} className="overflow-hidden p-0 hover scroll-fade" hover>
              <div className="relative">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-medium mb-1">{dish.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}