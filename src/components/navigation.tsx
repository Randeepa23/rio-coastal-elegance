import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#journey", label: "Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#experiences", label: "Packages" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-4" : "py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-medium text-primary">
          Rio Cafe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-primary/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex neomorphic border-0 text-primary hover:text-accent"
        >
          Reserve a Table
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
        >
          <List size={24} />
        </Button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className={cn(
            "fixed right-0 top-0 h-full w-80 max-w-[90vw] glass transform transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="flex items-center justify-between p-6 border-b border-glass-border">
              <span className="text-xl font-medium">Menu</span>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </Button>
            </div>
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 text-lg text-primary/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link 
                to="/about" 
                className="py-3 text-lg text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="py-3 text-lg text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className="py-3 text-lg text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button className="mt-4 neomorphic border-0 text-primary hover:text-accent">
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}