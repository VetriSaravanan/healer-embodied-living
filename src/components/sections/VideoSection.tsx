import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import purposeVideo from "@/assets/Carl Jung - How to Find Your Purpose.mp4";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden bg-gradient-to-br from-lavender/20 via-background to-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-violet/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-soft/20 to-transparent rounded-full blur-3xl" />

      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight italic text-foreground">
              Unlock the Life<br />
              You Were Born<br />
              to Live
            </h2>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                One Membership.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                100+ Breakthrough Programs.
              </p>
            </div>

            <a href="https://form.typeform.com/to/Uujm1fxF" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="hero" 
                size="xl" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-orange-500/30"
              >
                Become a member
              </Button>
            </a>
          </div>

          {/* Video Side */}
          <div className="relative flex items-center justify-center">
            {/* Decorative glass shapes */}
            <div className="absolute -top-8 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-soft/40 to-lavender/40 rounded-full blur-sm opacity-70 animate-float" />
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-violet/30 to-cyan-soft/30 rounded-full blur-sm opacity-60" style={{ animationDelay: '-2s' }} />
            <div className="absolute -bottom-4 right-1/4 w-24 h-24 bg-gradient-to-br from-lavender/50 to-violet/30 rounded-full blur-sm opacity-50 animate-float" style={{ animationDelay: '-4s' }} />
            
            {/* Main video container with glass circle effect */}
            <div className="relative">
              {/* Glass circle background */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-cyan-soft/20 via-lavender/30 to-violet/20 blur-xl" />
              
              {/* Video container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-white/30">
                <video
                  src={purposeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet/10 via-transparent to-cyan-soft/10 pointer-events-none" />
              </div>
              
              {/* Floating decorative petals/shapes around */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-soft/60 to-lavender/60 rounded-full blur-[2px] opacity-80" />
              <div className="absolute top-8 -right-8 w-10 h-10 bg-gradient-to-br from-lavender/70 to-violet/50 rounded-full blur-[2px] opacity-70" />
              <div className="absolute bottom-12 -left-6 w-14 h-14 bg-gradient-to-br from-violet/40 to-cyan-soft/40 rounded-full blur-[2px] opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
