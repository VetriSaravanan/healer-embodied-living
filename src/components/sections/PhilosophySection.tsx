import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Sparkles, Eye, Shield } from "lucide-react";

const beliefs = [
  {
    icon: Sparkles,
    title: "Your outer reality reflects inner patterns",
  },
  {
    icon: Eye,
    title: "Awareness without embodiment keeps you stuck",
  },
  {
    icon: Shield,
    title: "You don't need fixing — you need safety",
  },
];

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section bg-muted/30">
      <div 
        ref={ref}
        className={cn(
          "healer-container",
          isVisible ? "" : ""
        )}
      >
        <div className="text-center mb-16">
          <h2 className={cn(
            "healer-title",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Healing doesn't end. It integrates.
          </h2>
        </div>

        <div className={cn(
          "grid md:grid-cols-3 gap-8 stagger-children",
          isVisible ? "visible" : ""
        )}>
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="healer-card text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sage-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <belief.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {belief.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
