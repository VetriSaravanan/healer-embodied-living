import founderImage from "@/assets/founder-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-lavender/30 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet/30 to-cyan-soft/30 rounded-3xl blur-3xl scale-95" />
                <img
                  src={founderImage}
                  alt="Mira, Founder of Healer"
                  className="w-full max-w-xs mx-auto rounded-3xl shadow-glow relative z-10"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-8">
              <span className="inline-block px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-semibold">
                Our Story
              </span>
              
              <h2 className="healer-title">
                Why <span className="gradient-text">Healer</span> was born
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-violet/20" />
                <div className="space-y-4 pl-8">
                  <p className="healer-body">
                    Healer was created from lived pain, loss, and years inside the personal growth world.
                  </p>
                  <p className="healer-body">
                    Understanding alone didn't translate into living.
                  </p>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-violet/10 to-cyan-soft/10 border border-violet/20">
                    <p className="text-lg md:text-xl font-semibold text-foreground">
                      Healer exists to bridge that gap.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-violet-bright flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">Mira</p>
                  <p className="text-sm text-muted-foreground">Founder of Healer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
