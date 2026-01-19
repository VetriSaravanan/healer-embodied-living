import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";

const footerLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      
      <div className="healer-container relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Healer" className="h-12 w-auto" />
              <span className="text-xl font-bold text-foreground">Healer</span>
            </div>
            <p className="text-muted-foreground text-base">
              Because healing is meant to be lived.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-violet font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Healer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for your journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
