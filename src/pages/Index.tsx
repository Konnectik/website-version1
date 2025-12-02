import { Hero } from "@/components/Hero";
import { LearnMore } from "@/components/LearnMore";
import { ExpansionJourney } from "@/components/ExpansionJourney";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* ===== Hidden Dummy Form for Netlify ===== */}
      <form
        name="pitch-deck-access"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="hidden"
      >
        <input type="hidden" name="form-name" value="pitch-deck-access" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="company" />
      </form>

      <Hero />
      <LearnMore />
      <ExpansionJourney />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
