import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leftNavLinks = [
  { href: "#story", label: "OUR STORY" },
  { href: "#menu", label: "MENU" },
  { href: "#gallery", label: "GALLERY" },
];

const rightNavLinks = [
  { href: "#events", label: "EVENTS" },
  { href: "/blog", label: "BLOG", isExternal: true },
  { href: "/contact", label: "CONTACT", isExternal: true },
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

  const handleNavClick = (href: string, isExternal?: boolean) => {
    if (isExternal) return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-background/90 backdrop-blur-lg border-b border-border/20",
      "shadow-sm",
      isScrolled ? "py-2" : "py-3"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between min-h-[60px]">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-12 flex-1">
            {leftNavLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center Logo - Made More Prominent */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-3xl font-bold text-primary tracking-wider font-serif">
              RIO CAFE
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-12 flex-1 justify-end">
            {rightNavLinks.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors tracking-wider"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors tracking-wider"
                >
                  {link.label}
                </button>
              )
            ))}
            <Button
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white border-0 px-8 py-3 text-sm font-semibold tracking-wider shadow-lg"
            >
              FIND A TABLE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(true)}
          >
            <List size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
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
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              'isExternal' in link && link.isExternal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 text-lg text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 text-lg text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
            <Button className="mt-4 bg-accent hover:bg-accent/90 text-white border-0 px-8 py-3 text-sm font-semibold tracking-wider shadow-lg">
              FIND A TABLE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}