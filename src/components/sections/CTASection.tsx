import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet/5 to-secondary/30" />
      
      {/* Animated blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet/20 to-transparent rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-soft/30 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <span className="inline-block px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-semibold">
            Get Started
          </span>
          
          <h2 className="healer-title text-4xl md:text-5xl lg:text-6xl">
            Start your healing journey <span className="gradient-text">differently</span>
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="healer-body text-xl">
              This isn't another app to consume.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              It's a space to come home to yourself.
            </p>
          </div>

          <div className="pt-4">
            <a href="https://form.typeform.com/to/Uujm1fxF" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <span className="relative z-10 flex items-center gap-2">
                  Join Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </a>
          </div>

          {/* CTA Image */}
          <div className="pt-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-cyan-soft/20 rounded-3xl blur-3xl scale-95" />
              <img
                src={ctaImage}
                alt="Walking toward healing and coming home"
                className="w-full max-w-3xl mx-auto rounded-3xl shadow-glow relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
