import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import purposeVideo from "@/assets/Carl Jung - How to Find Your Purpose.mp4";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="healer-section relative overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-lavender/20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-lavender/15 to-transparent rounded-full blur-3xl opacity-50" />

      <div ref={ref} className={cn("healer-container relative z-10", isVisible ? "animate-fade-in-slow" : "opacity-0")}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                Transform Your Life
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                How <span className="gradient-text">Astralbeat</span> Works
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Enhance Every Area of Your Life from Mind to Body & Soul
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Daily 20mins lessons from life coaches to transform your life
              </p>
            </div>

            {/* Decorative line */}
            <div className="hidden lg:flex items-center gap-4 pt-4">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
              <div className="h-1 w-8 rounded-full bg-primary/30" />
              <div className="h-1 w-4 rounded-full bg-primary/15" />
            </div>
          </div>

          {/* Video Side */}
          <div className="relative flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-lavender/30 blur-2xl animate-pulse-soft" />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-4 w-20 h-20 bg-gradient-to-br from-accent/50 to-lavender/50 rounded-full blur-sm opacity-70 animate-float" />
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-sm opacity-60 animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute -bottom-4 right-1/4 w-24 h-24 bg-gradient-to-br from-lavender/60 to-primary/30 rounded-full blur-sm opacity-50 animate-float" style={{ animationDelay: '-4s' }} />
            
            {/* Main video container */}
            <div className="relative">
              {/* Glass circle background */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-accent/25 via-lavender/35 to-primary/20 blur-xl" />
              
              {/* Video container with glass border */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-white/40 backdrop-blur-sm">
                <video 
                  src={purposeVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              </div>
              
              {/* Floating petals/shapes around video */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-accent/70 to-lavender/70 rounded-full blur-[2px] opacity-80" />
              <div className="absolute top-8 -right-8 w-10 h-10 bg-gradient-to-br from-lavender/80 to-primary/60 rounded-full blur-[2px] opacity-70" />
              <div className="absolute bottom-12 -left-6 w-14 h-14 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-[2px] opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;