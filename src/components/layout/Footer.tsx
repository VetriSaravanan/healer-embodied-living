import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";

const footerLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
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

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="text-foreground font-semibold text-lg">Need help with our apps?</h4>
            <a
              href="mailto:support@astralbeat.in"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Email: support@astralbeat.in
            </a>
            <p className="text-sm text-muted-foreground">
              We usually respond within 24–48 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} © {new Date().getFullYear()} AstralBeat Innovations Pvt Ltd
            </p>
            <p className="text-sm text-muted-foreground">
              Contact: <a href="mailto:support@astralbeat.in" className="hover:text-primary transition-colors">support@astralbeat.in</a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for your journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
