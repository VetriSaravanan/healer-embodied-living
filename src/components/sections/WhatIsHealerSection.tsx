import appImage from "@/assets/app-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const WhatIsHealerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section bg-background">
      <div 
        ref={ref}
        className={cn(
          "healer-container",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="healer-title">
              A new category of wellness app
            </h2>
            
            <div className="space-y-4">
              <p className="healer-body">
                Healer is a subscription-based wellness & longevity app.
              </p>
              <p className="healer-body">
                One subscription gives access to multiple programs designed for real-world integration — not content bingeing.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={appImage}
                alt="Healer mobile app interface"
                className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-3xl shadow-card animate-float"
              />
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-light/30 to-transparent rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHealerSection;
