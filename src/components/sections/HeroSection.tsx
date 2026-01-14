import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-light/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige/40 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10 pt-24 pb-16",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="healer-headline">
              Healing isn't fixing yourself.
              <span className="block text-primary mt-2">It's learning how to live.</span>
            </h1>
            
            <p className="healer-subheadline max-w-xl">
              A holistic wellness & longevity app for embodied healing, clarity, and aligned living.
            </p>

            <Button variant="hero" size="xl">
              Join the Waitlist
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Serene illustration of embodied healing and wellness"
                className="w-full max-w-lg rounded-3xl shadow-card"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-light/50 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-beige/60 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
