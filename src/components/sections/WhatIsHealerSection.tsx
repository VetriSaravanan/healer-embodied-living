import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Sparkles, Check } from "lucide-react";

const benefits = [
  "Subscription-based wellness & longevity app",
  "Multiple programs for real-world integration",
  "No content bingeing — just embodied living",
];

const WhatIsHealerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-soft/20 to-transparent rounded-full blur-3xl" />
      
      <div 
        ref={ref} 
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              The Solution
            </span>
            
            <h2 className="healer-title">
              A new category of <span className="gradient-text">wellness app</span>
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/50 to-transparent"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet to-violet-bright flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-foreground font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet/30 to-blue-ocean/30 rounded-3xl blur-3xl scale-90 opacity-50" />
              
              <img 
                alt="Healer mobile app interface" 
                className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-3xl shadow-glow animate-float object-scale-down relative z-10" 
                src="/lovable-uploads/d7ed1105-72bb-4b95-9257-1c73ad192fd5.png" 
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 shadow-card hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-foreground">Live Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHealerSection;
