import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo, MapPin, Phone, Envelope } from "phosphor-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium mb-4">Rio Cafe</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              A culinary journey by the Indian Ocean, where Sri Lankan flavors 
              meet international sophistication in an atmosphere of serene luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors">
                <InstagramLogo size={20} weight="light" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors">
                <FacebookLogo size={20} weight="light" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" weight="light" />
                <span className="text-sm">
                  123 Beach Road, Negombo<br />
                  Western Province, Sri Lanka
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3" weight="light" />
                <span className="text-sm">+94 31 227 8899</span>
              </div>
              <div className="flex items-center">
                <Envelope size={18} className="mr-3" weight="light" />
                <span className="text-sm">hello@riocafe.lk</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigate</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Blog
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Rio Cafe. All rights reserved. | Designed with passion in Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
}