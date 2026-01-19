import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Sparkles, Eye, Shield } from "lucide-react";

const beliefs = [
  {
    icon: Sparkles,
    title: "Your outer reality reflects inner patterns",
    gradient: "from-violet to-violet-bright",
  },
  {
    icon: Eye,
    title: "Awareness without embodiment keeps you stuck",
    gradient: "from-blue-ocean to-cyan-soft",
  },
  {
    icon: Shield,
    title: "You don't need fixing — you need safety",
    gradient: "from-violet-bright to-pink-500",
  },
];

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden" id="philosophy">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet/10 to-transparent rounded-full blur-3xl" />
      
      <div 
        ref={ref}
        className="healer-container relative z-10"
      >
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-semibold mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}>
            Our Philosophy
          </span>
          <h2 className={cn(
            "healer-title transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}>
            Healing doesn't end. <span className="gradient-text">It integrates.</span>
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
              <div className={cn(
                "w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br",
                belief.gradient,
                "group-hover:scale-110 group-hover:shadow-lg"
              )}>
                <belief.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-semibold text-foreground leading-relaxed">
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
