import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-illustration.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="healer-section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-beige/30 rounded-full blur-3xl" />
      </div>

      <div 
        ref={ref}
        className={cn(
          "healer-container relative z-10",
          isVisible ? "animate-fade-in-slow" : "opacity-0"
        )}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="healer-title text-4xl md:text-5xl">
            Start your healing journey differently
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="healer-body text-xl">
              This isn't another app to consume.
            </p>
            <p className="healer-body text-xl font-medium text-foreground">
              It's a space to come home to yourself.
            </p>
          </div>

          <div className="pt-4">
            <Button variant="hero" size="xl">
              Join Early Access
            </Button>
          </div>

          {/* CTA Image */}
          <div className="pt-12">
            <img
              src={ctaImage}
              alt="Walking toward healing and coming home"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
