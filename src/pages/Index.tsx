import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import WhatIsHealerSection from "@/components/sections/WhatIsHealerSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AICompanionSection from "@/components/sections/AICompanionSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import FounderSection from "@/components/sections/FounderSection";
import CTASection from "@/components/sections/CTASection";
import PartnershipSection from "@/components/sections/PartnershipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <section id="philosophy">
          <PhilosophySection />
        </section>
        <WhatIsHealerSection />
        <section id="programs">
          <ProgramsSection />
        </section>
        <AICompanionSection />
        <DifferentiatorSection />
        <PartnershipSection />
        <section id="about">
          <FounderSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
