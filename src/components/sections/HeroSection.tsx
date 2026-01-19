import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const HeroSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-light/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige/40 rounded-full blur-3xl animate-pulse-soft" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div ref={ref} className={cn("healer-container relative z-10 pt-24 pb-16", isVisible ? "animate-fade-in" : "opacity-0")}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="healer-headline">
              Healing isn't fixing yourself.
              <span className="block text-primary mt-2">It's learning how to live.</span>
            </h1>
            
            <p className="healer-subheadline max-w-xl">
              Access world-class life coaching content and an emotionally intelligent AI companion to transform every area of your wheel of life.
            </p>

            <Button variant="hero" size="xl">
              Join the Waitlist
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end flex items-center justify-center">
            <div className="relative animate-float">
              <img 
                alt="Programs wheel showing wellness categories" 
                src={heroImage} 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-card object-contain"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;