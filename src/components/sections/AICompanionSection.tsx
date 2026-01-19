import { Heart, Lightbulb, Rocket } from "lucide-react";
import aiCompanionImage from "@/assets/ai-companion-riyan.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Heart,
    title: "A life coach that's always there",
    description:
      "When life feels confusing, overwhelming, or heavy, this AI is there to listen, guide, and support you — anytime you need it.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Helps you through real moments, not just theory",
    description:
      "Arguments, stress, self-doubt, money worries, grief — it helps you think clearly and respond better in real situations as they happen.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Turns knowing into doing",
    description:
      "It helps you apply what you learn — what to say, what to choose, and what to do next — so growth actually shows up in daily life.",
    gradient: "from-violet to-violet-bright",
  },
];

const AICompanionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-soft/20 to-transparent rounded-full blur-3xl" />

      <div className="healer-container relative z-10">
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-semibold mb-6">
            AI Companion
          </span>
          <h2 className="healer-title">
            Meet <span className="gradient-text">Riyan</span> — Your AI Companion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-4">
            An emotionally intelligent AI that walks with you through life's real moments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet/30 to-cyan-soft/30 rounded-3xl blur-3xl scale-95 opacity-60" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-glow border border-border/50">
                <img
                  src={aiCompanionImage}
                  alt="AI Companion Riyan - Transformation through AI Life Coaching"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 glass-card rounded-2xl p-4 shadow-hover">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-violet-bright flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Always Available</p>
                    <p className="text-xs text-muted-foreground">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-violet/30 transition-all duration-500 hover-lift",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br",
                      feature.gradient
                    )}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICompanionSection;
