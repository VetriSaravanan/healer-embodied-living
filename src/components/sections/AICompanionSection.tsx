import { Heart, Lightbulb, Rocket } from "lucide-react";
import aiCompanionImage from "@/assets/ai-companion-riyan.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Heart,
    title: "A life coach that's always there",
    description:
      "When life feels confusing, overwhelming, or heavy, this AI is there to listen, guide, and support you — anytime you need it.",
  },
  {
    icon: Lightbulb,
    title: "Helps you through real moments, not just theory",
    description:
      "Arguments, stress, self-doubt, money worries, grief — it helps you think clearly and respond better in real situations as they happen.",
  },
  {
    icon: Rocket,
    title: "Turns knowing into doing",
    description:
      "It helps you apply what you learn — what to say, what to choose, and what to do next — so growth actually shows up in daily life.",
  },
];

const AICompanionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="healer-container">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Meet Riyan — Your AI Companion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            An emotionally intelligent AI that walks with you through life's
            real moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aiCompanionImage}
                alt="AI Companion Riyan - Transformation through AI Life Coaching"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Features Side */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
