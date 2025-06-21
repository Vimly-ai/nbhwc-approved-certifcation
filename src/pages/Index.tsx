
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SocialProof } from "@/components/SocialProof";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <SocialProof />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
