import problemImage from "@/assets/problem-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-lavender/30 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-cyan-soft/20 rounded-3xl blur-3xl scale-95" />
              <img
                src={problemImage}
                alt="Illustration of information overload in self-help"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-card relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold">
              The Problem
            </span>
            
            <h2 className="healer-title">
              Why healing feels <span className="gradient-text">exhausting</span> today
            </h2>
            
            <div className="space-y-6">
              <p className="healer-body">
                People have read the books, watched the videos, and tried mindset work.
              </p>
              <p className="healer-body">
                Yet healing feels like another task, another identity, another loop.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet/10 to-cyan-soft/10 border border-violet/20">
                <p className="text-lg md:text-xl font-semibold text-foreground">
                  Most platforms teach what to think or what to fix — not how to live healed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
