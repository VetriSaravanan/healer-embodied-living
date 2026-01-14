import { Leaf } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "For Creators", href: "#creators" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="healer-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Healer</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Because healing is meant to be lived.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Healer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
