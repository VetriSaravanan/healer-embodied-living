import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { 
  Compass, 
  Briefcase, 
  Heart, 
  Leaf, 
  Lightbulb, 
  BookOpen 
} from "lucide-react";

const programs = [
  {
    icon: Compass,
    title: "Life Purpose & Inner Clarity",
  },
  {
    icon: Briefcase,
    title: "Career & World's Highest-Paid Skills",
  },
  {
    icon: Heart,
    title: "Emotional Healing & Nervous System",
  },
  {
    icon: Leaf,
    title: "Health & Longevity",
  },
  {
    icon: Lightbulb,
    title: "Conscious Entrepreneurship",
  },
  {
    icon: BookOpen,
    title: "Book Publishing & Expression",
  },
];

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section bg-muted/30">
      <div 
        ref={ref}
        className="healer-container"
      >
        <div className="text-center mb-16">
          <h2 className={cn(
            "healer-title",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            What you'll explore inside Healer
          </h2>
        </div>

        <div className={cn(
          "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children",
          isVisible ? "visible" : ""
        )}>
          {programs.map((program, index) => (
            <div
              key={index}
              className="healer-card flex items-center gap-5 group cursor-default"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-sage-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="text-lg font-medium text-foreground leading-snug">
                {program.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
