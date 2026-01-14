import problemImage from "@/assets/problem-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ProblemSection = () => {
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
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={problemImage}
              alt="Illustration of information overload in self-help"
              className="w-full max-w-md mx-auto rounded-3xl shadow-soft"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="healer-title">
              Why healing feels exhausting today
            </h2>
            
            <div className="space-y-4">
              <p className="healer-body">
                People have read the books, watched the videos, and tried mindset work.
              </p>
              <p className="healer-body">
                Yet healing feels like another task, another identity, another loop.
              </p>
              <p className="healer-body font-medium text-foreground">
                Most platforms teach what to think or what to fix — not how to live healed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
