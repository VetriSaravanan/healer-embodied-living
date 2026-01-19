import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="blob top-20 left-10 w-[500px] h-[500px] opacity-30"
          style={{ background: 'linear-gradient(135deg, hsl(262 68% 50% / 0.3), hsl(195 93% 77% / 0.3))' }}
        />
        <div 
          className="blob bottom-20 right-10 w-[600px] h-[600px] opacity-20"
          style={{ 
            background: 'linear-gradient(135deg, hsl(274 89% 58% / 0.3), hsl(205 94% 54% / 0.3))',
            animationDelay: '-7s'
          }}
        />
        <div 
          className="blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
          style={{ 
            background: 'linear-gradient(135deg, hsl(262 68% 50% / 0.2), hsl(266 60% 88% / 0.2))',
            animationDelay: '-14s'
          }}
        />
      </div>

      <div 
        ref={ref} 
        className={cn(
          "healer-container relative z-10 pt-28 pb-20",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="healer-headline">
                Healing isn't fixing yourself.
                <span className="block gradient-text mt-3">It's learning how to live.</span>
              </h1>
              
              <p className="healer-subheadline max-w-xl">
                Access world-class life coaching content and an emotionally intelligent AI companion to transform every area of your wheel of life.
              </p>
            </div>

            <Button variant="hero" size="xl" className="group">
              <span className="relative z-10">Join the Waitlist</span>
            </Button>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">1000+ on waitlist</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-sm text-muted-foreground">Launching Soon</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end flex items-center justify-center">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 bg-gradient-to-br from-violet to-cyan-soft scale-95" />
              
              <div className="relative animate-float">
                <img 
                  alt="Programs wheel showing wellness categories" 
                  src={heroImage} 
                  className="w-full max-w-sm sm:max-w-md rounded-3xl shadow-glow object-contain"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet/30 to-violet-bright/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-soft/40 to-blue-ocean/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
