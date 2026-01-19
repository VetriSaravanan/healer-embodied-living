import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="healer-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Healer</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Philosophy
            </a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Programs
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-border">
            <a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Philosophy
            </a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Programs
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <Button variant="hero" size="default" className="w-full mt-2">
              Join Waitlist
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
