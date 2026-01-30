import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import purposeVideo from "@/assets/Carl Jung - How to Find Your Purpose.mp4";
import { Sparkles, Play } from "lucide-react";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="healer-section relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Animated background blobs */}
      <div className="blob absolute top-20 left-10 w-[400px] h-[400px] bg-primary/8 opacity-60" />
      <div className="blob absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/10 opacity-50" style={{ animationDelay: '-5s' }} />
      <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/15 opacity-40" style={{ animationDelay: '-10s' }} />

      <div ref={ref} className={cn("healer-container relative z-10", isVisible ? "animate-fade-in-slow" : "opacity-0")}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Video Side - Now on the left */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Multiple layered glows for depth */}
            <div className="absolute w-72 h-[30rem] md:w-80 md:h-[36rem] rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-accent/15 to-lavender/25 blur-3xl animate-pulse-soft" />
            <div className="absolute w-64 h-[28rem] md:w-72 md:h-[32rem] rounded-[2rem] bg-gradient-to-tr from-lavender/30 to-primary/20 blur-2xl animate-pulse-soft" style={{ animationDelay: '-2s' }} />
            
            {/* Floating orbs */}
            <div className="absolute -top-6 right-8 w-16 h-16 bg-gradient-to-br from-accent to-lavender rounded-full blur-sm opacity-80 animate-float" />
            <div className="absolute top-1/3 -left-6 w-12 h-12 bg-gradient-to-br from-primary/60 to-accent/60 rounded-full blur-sm opacity-70 animate-float" style={{ animationDelay: '-3s' }} />
            <div className="absolute -bottom-4 left-1/4 w-20 h-20 bg-gradient-to-br from-lavender/70 to-primary/40 rounded-full blur-md opacity-60 animate-float" style={{ animationDelay: '-6s' }} />
            <div className="absolute bottom-1/4 -right-4 w-14 h-14 bg-gradient-to-br from-accent/70 to-lavender/70 rounded-full blur-sm opacity-50 animate-float" style={{ animationDelay: '-4s' }} />
            
            {/* Main video container */}
            <div className="relative group">
              {/* Outer glass ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-white/30 via-white/10 to-white/20 backdrop-blur-sm opacity-80" />
              
              {/* Video container - 9:16 portrait */}
              <div className="relative w-60 md:w-72 aspect-[9/16] rounded-[2rem] overflow-hidden shadow-glow border-2 border-white/50 bg-gradient-to-b from-white/20 to-white/5">
                <video 
                  src={purposeVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Play indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
              
              {/* Corner accent dots */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-lavender" />
            </div>
          </div>

          {/* Text Content - Now on the right */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Transform Your Life</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                How <span className="gradient-text">Astralbeat</span> Works
              </h2>
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-lavender" />
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Enhance Every Area of Your Life from Mind to Body & Soul
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Daily 20mins lessons from life coaches to transform your life
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Mind', 'Body', 'Soul'].map((item, index) => (
                <div 
                  key={item}
                  className="px-5 py-2.5 rounded-2xl bg-card border border-border/50 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;