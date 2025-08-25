import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo, MapPin, Phone, Envelope } from "phosphor-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 tracking-wider">RIO CAFE</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-md text-lg">
              A culinary journey by the Indian Ocean, where Sri Lankan flavors 
              meet international sophistication in an atmosphere of serene luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group">
                <InstagramLogo size={24} weight="light" className="group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group">
                <FacebookLogo size={24} weight="light" className="group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-xl">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                About Us
              </Link>
              <Link to="/menu" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Menu
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-xl">Services</h4>
            <nav className="space-y-3">
              <a href="#dining" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Fine Dining
              </a>
              <a href="#events" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Private Events
              </a>
              <a href="#catering" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Catering
              </a>
              <a href="#delivery" className="block text-primary-foreground/80 hover:text-accent transition-colors text-base hover:translate-x-1 transform duration-200">
                Delivery
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-xl">Contact</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-start group">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 group-hover:text-accent transition-colors" weight="light" />
                <span className="text-base leading-relaxed">
                  123 Beach Road, Negombo<br />
                  Western Province, Sri Lanka
                </span>
              </div>
              <div className="flex items-center group">
                <Phone size={20} className="mr-3 group-hover:text-accent transition-colors" weight="light" />
                <span className="text-base">+94 31 227 8899</span>
              </div>
              <div className="flex items-center group">
                <Envelope size={20} className="mr-3 group-hover:text-accent transition-colors" weight="light" />
                <span className="text-base">hello@riocafe.lk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-base">
              © 2024 Rio Cafe. All rights reserved. | Designed with passion in Sri Lanka.
            </p>
            <div className="flex space-x-6 text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors text-base">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors text-base">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}