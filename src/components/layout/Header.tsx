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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft py-3 border-b border-border/50"
          : "bg-transparent py-5"
      )}
    >
      <div className="healer-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Healer Logo" 
              className="w-11 h-11 group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="text-xl font-bold text-foreground tracking-tight">Healer</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#philosophy" 
              className="text-muted-foreground hover:text-violet font-medium transition-colors duration-300"
            >
              Philosophy
            </a>
            <a 
              href="#programs" 
              className="text-muted-foreground hover:text-violet font-medium transition-colors duration-300"
            >
              Programs
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-violet font-medium transition-colors duration-300"
            >
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
            className="md:hidden p-2 text-foreground rounded-xl hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-2 py-4 px-2 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50">
            <a 
              href="#philosophy" 
              className="text-muted-foreground hover:text-violet hover:bg-secondary/50 font-medium transition-all duration-300 px-4 py-3 rounded-xl"
            >
              Philosophy
            </a>
            <a 
              href="#programs" 
              className="text-muted-foreground hover:text-violet hover:bg-secondary/50 font-medium transition-all duration-300 px-4 py-3 rounded-xl"
            >
              Programs
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-violet hover:bg-secondary/50 font-medium transition-all duration-300 px-4 py-3 rounded-xl"
            >
              About
            </a>
            <div className="px-2 pt-2">
              <Button variant="hero" size="default" className="w-full">
                Join Waitlist
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
