import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Globe, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PitchDeckForm } from "@/components/PitchDeckForm";

const phases = [
  {
    phase: 1,
    title: "PoC in Douala",
    description: "Validate tech and service model.",
    icon: MapPin,
    status: "active",
  },
  {
    phase: 2,
    title: "Regional Expansion",
    description: "Scale to regional hubs.",
    icon: Building2,
    status: "upcoming",
  },
  {
    phase: 3,
    title: "National Reach",
    description: "Nationwide coverage, underserved areas first.",
    icon: Globe,
    status: "upcoming",
  },
];

const PhaseCard = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const Icon = phase.icon;
  const isActive = phase.status === "active";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-elegant ${
        isActive 
          ? "bg-primary/5 border-primary/30 shadow-md" 
          : "bg-card border-border/50 hover:border-primary/20"
      }`}
    >
      {isActive && (
        <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          Current
        </span>
      )}
      
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      }`}>
        <Icon className="w-7 h-7" />
      </div>
      
      <span className="text-sm font-medium text-muted-foreground">Phase {phase.phase}</span>
      <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{phase.title}</h3>
      <p className="text-muted-foreground">{phase.description}</p>
    </motion.div>
  );
};

export const ExpansionJourney = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coverage Expansion Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us on our mission to bring affordable connectivity across Cameroon, 
            starting from Douala and expanding nationwide.
          </p>
        </motion.div>

        {/* Timeline connector for desktop */}
        <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-primary via-primary/50 to-muted rounded-full" />

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.phase} phase={phase} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="group">
            Invest in our Expansion Journey
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setIsFormOpen(true)}>
            <FileText className="mr-2 w-5 h-5" />
            View Pitch Deck
          </Button>
        </motion.div>
      </div>

      <PitchDeckForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};
