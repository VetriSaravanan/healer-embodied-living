import founderImage from "@/assets/founder-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section bg-muted/30">
      <div 
        ref={ref}
        className={cn(
          "healer-container",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src={founderImage}
                alt="Mira, Founder of Healer"
                className="w-full max-w-xs mx-auto rounded-3xl shadow-card"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="healer-title">
                Why Healer was born
              </h2>
              
              <div className="space-y-4">
                <p className="healer-body">
                  Healer was created from lived pain, loss, and years inside the personal growth world.
                </p>
                <p className="healer-body">
                  Understanding alone didn't translate into living.
                </p>
                <p className="healer-body font-medium text-foreground">
                  Healer exists to bridge that gap.
                </p>
              </div>

              <p className="text-lg italic text-primary font-medium pt-4">
                — Mira, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
