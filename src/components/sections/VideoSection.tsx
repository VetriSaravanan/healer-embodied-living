import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import purposeVideo from "@/assets/Carl Jung - How to Find Your Purpose.mp4";
import { Sparkles } from "lucide-react";
const VideoSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section className="healer-section relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-lavender/15 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/30 via-transparent to-primary/5" />
      
      {/* Animated mesh gradient orbs */}
      <div className="blob absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/15 opacity-60" />
      <div className="blob absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-lavender/25 to-primary/10 opacity-50" style={{
      animationDelay: '-7s'
    }} />
      <div className="blob absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-lavender/20 opacity-40" style={{
      animationDelay: '-12s'
    }} />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

      <div ref={ref} className={cn("healer-container relative z-10", isVisible ? "animate-fade-in-slow" : "opacity-0")}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Mobile Mockup with Video */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Glow behind phone */}
            <div className="absolute w-72 h-[32rem] md:w-80 md:h-[38rem] rounded-[3rem] bg-gradient-to-br from-primary/30 via-accent/20 to-lavender/30 blur-3xl animate-pulse-soft" />
            
            {/* Floating elements */}
            <div className="absolute -top-8 right-4 w-20 h-20 bg-gradient-to-br from-accent/60 to-lavender/60 rounded-full blur-md opacity-70 animate-float" />
            <div className="absolute top-1/4 -left-10 w-16 h-16 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-md opacity-60 animate-float" style={{
            animationDelay: '-3s'
          }} />
            <div className="absolute -bottom-6 left-1/4 w-24 h-24 bg-gradient-to-br from-lavender/60 to-primary/40 rounded-full blur-lg opacity-50 animate-float" style={{
            animationDelay: '-6s'
          }} />
            
            {/* Phone Mockup */}
            <div className="relative group">
              {/* Phone outer frame */}
              <div className="relative w-64 md:w-72 aspect-[9/19] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl shadow-primary/20">
                {/* Phone bezel reflection */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-800" />
                  <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                </div>
                
                {/* Phone screen */}
                <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                  {/* Video inside screen */}
                  <video src={purposeVideo} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Screen glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                
                {/* Side buttons */}
                <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-1 top-52 w-1 h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-700 rounded-r-sm" />
              </div>
              
              {/* Reflection under phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-gradient-to-t from-primary/10 to-transparent blur-xl rounded-full" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-lavender/15 border border-primary/20 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Transform Your Life</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                How <span className="gradient-text">Healer</span> Works
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                <div className="w-8 h-1.5 rounded-full bg-gradient-to-r from-accent to-lavender" />
                <div className="w-4 h-1.5 rounded-full bg-lavender" />
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-5">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Enhance Every Area of Your Life from Mind to Body & Soul
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Daily 20mins lessons from life coaches to transform your life
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[{
              label: 'Mind',
              gradient: 'from-primary/20 to-primary/5'
            }, {
              label: 'Body',
              gradient: 'from-accent/20 to-accent/5'
            }, {
              label: 'Soul',
              gradient: 'from-lavender/30 to-lavender/10'
            }].map((item, index) => <div key={item.label} className={cn("px-6 py-3 rounded-2xl border border-border/50 shadow-soft backdrop-blur-sm", `bg-gradient-to-br ${item.gradient}`)} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;