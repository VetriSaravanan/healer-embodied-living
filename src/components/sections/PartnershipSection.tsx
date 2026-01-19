import partnerDstNidhi from "@/assets/partner-dst-nidhi.jpg";
import partnerIitMadras from "@/assets/partner-iit-madras.png";
import partnerIitmResearchPark from "@/assets/partner-iitm-research-park.png";
import partnerVelTech from "@/assets/partner-vel-tech.png";

const partners = [
  { name: "DST NIDHI", logo: partnerDstNidhi },
  { name: "IIT Madras", logo: partnerIitMadras },
  { name: "IITM Research Park", logo: partnerIitmResearchPark },
  { name: "Vel Tech", logo: partnerVelTech },
];

const PartnershipSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="healer-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by leading institutions and innovation ecosystems
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
