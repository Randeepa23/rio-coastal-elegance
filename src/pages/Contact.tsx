import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Envelope, Clock } from "phosphor-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out for reservations, 
              inquiries, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <GlassCard>
              <h2 className="text-2xl font-medium text-primary mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+94..." className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Reservation inquiry, event planning, etc." className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                <Button className="w-full neomorphic border-0 text-primary hover:text-accent">
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Contact Information */}
            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-start">
                  <MapPin size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      123 Beach Road<br />
                      Negombo, Western Province<br />
                      Sri Lanka 11500
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Phone size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Reservations: +94 31 227 8899<br />
                      Events: +94 31 227 8800
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Envelope size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General: hello@riocafe.lk<br />
                      Events: events@riocafe.lk
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Clock size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                      <p>Bar Service: Until 12:00 AM</p>
                      <p className="text-sm text-accent">Reservations recommended</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}