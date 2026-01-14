import differentiatorImage from "@/assets/differentiator-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const differentiators = [
  "Curated depth.",
  "Nervous system safety.",
  "Real-life integration.",
];

const DifferentiatorSection = () => {
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
              src={differentiatorImage}
              alt="Contrast between chaos and calm grounded space"
              className="w-full rounded-3xl shadow-soft"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="healer-title">
              Not just content.
              <span className="block text-primary">A living ecosystem.</span>
            </h2>
            
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <p key={index} className="text-xl text-muted-foreground font-light flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
