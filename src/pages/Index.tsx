import { Hero } from "@/components/Hero";
import { LearnMore } from "@/components/LearnMore";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ExpansionJourney } from "@/components/ExpansionJourney";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <LearnMore />
      <HowItWorks />
      <Features />
      <ExpansionJourney />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
