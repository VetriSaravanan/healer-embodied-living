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
    gradient: "from-violet to-violet-bright",
  },
  {
    icon: Briefcase,
    title: "Career & World's Highest-Paid Skills",
    gradient: "from-blue-deep to-blue-ocean",
  },
  {
    icon: Heart,
    title: "Emotional Healing & Nervous System",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Leaf,
    title: "Health & Longevity",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Conscious Entrepreneurship",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Book Publishing & Expression",
    gradient: "from-violet-bright to-purple-600",
  },
];

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden" id="programs">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-soft/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-violet/20 to-transparent rounded-full blur-3xl" />
      
      <div 
        ref={ref}
        className="healer-container relative z-10"
      >
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block px-4 py-2 rounded-full bg-cyan-soft/20 text-blue-ocean text-sm font-semibold mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}>
            Programs
          </span>
          <h2 className={cn(
            "healer-title transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}>
            What you'll explore inside <span className="gradient-text">Healer</span>
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
              <div className={cn(
                "w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br",
                program.gradient,
                "group-hover:scale-110 group-hover:shadow-lg"
              )}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-foreground leading-snug">
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
