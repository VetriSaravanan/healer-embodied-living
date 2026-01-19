import partnerDstNidhi from "@/assets/partner-dst-nidhi.jpg";
import partnerIitMadras from "@/assets/partner-iit-madras.png";
import partnerIitmResearchPark from "@/assets/partner-iitm-research-park.png";
import partnerVelTech from "@/assets/partner-vel-tech.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const partners = [
  { name: "DST NIDHI", logo: partnerDstNidhi },
  { name: "IIT Madras", logo: partnerIitMadras },
  { name: "IITM Research Park", logo: partnerIitmResearchPark },
  { name: "Vel Tech", logo: partnerVelTech },
];

const PartnershipSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="healer-container relative z-10">
        <div 
          ref={ref}
          className={cn(
            "text-center mb-14 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-soft/20 text-blue-ocean text-sm font-semibold mb-6">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Backed by <span className="gradient-text">Leading Institutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Partnering with India's most prestigious innovation ecosystems
          </p>
        </div>
        
        <div 
          className={cn(
            "flex flex-wrap items-center justify-center gap-6 md:gap-10 stagger-children",
            isVisible ? "visible" : ""
          )}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-violet/30 transition-all duration-500 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-cyan-soft/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-20 w-auto object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
