import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Heart, Users, Trophy } from "phosphor-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a passion for Sri Lankan flavors and international hospitality, 
              Rio Cafe represents the perfect harmony between tradition and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nestled along the pristine shores of Negombo, Rio Cafe was born from a dream 
                  to create something extraordinary - a place where the vibrant culinary heritage 
                  of Sri Lanka meets the sophistication of international fine dining.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 2018 by chef-proprietor Chaminda Perera, who trained in some of the 
                  world's finest kitchens before returning to his homeland, Rio Cafe has become 
                  synonymous with excellence in Sri Lankan hospitality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every dish tells a story of our island's rich culinary tapestry, while our 
                  commitment to sustainable sourcing supports the local fishing and farming 
                  communities that make our cuisine possible.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <GlassCard className="text-center hover" hover>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-accent" weight="light" />
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every dish is crafted with love and dedication to culinary excellence.
              </p>
            </GlassCard>

            <GlassCard className="text-center hover" hover>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-accent" weight="light" />
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Supporting local producers and creating connections through food.
              </p>
            </GlassCard>

            <GlassCard className="text-center hover" hover>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-accent" weight="light" />
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Uncompromising standards in service, quality, and guest experience.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}