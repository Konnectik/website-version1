import { motion } from "framer-motion";
import { Wifi, ArrowRight, Building2, Smartphone, Users, Rocket, Mail, User } from "lucide-react";
import { Button } from "./ui/button";
import { SurveyModal } from "./SurveyModal";
import { useState } from "react";
import { Input } from "./ui/input";

const ComingSoonModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
    <div className="absolute inset-0 bg-black/50" onClick={onClose} />
    <div className="relative bg-card rounded-xl p-8 max-w-sm w-full z-10 border border-primary/30 text-center">
      <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
      <p className="text-sm text-muted-foreground mb-6">
        The Konnectik provider platform is under development. We'll notify you when it's ready!
      </p>
      <Button size="sm" variant="outline" onClick={onClose} className="border-primary text-primary hover:bg-primary/10">
        Got it
      </Button>
    </div>
  </div>
);

const WaitingListForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-3">
        <p className="text-sm font-semibold text-primary">🎉 You're on the list!</p>
        <p className="text-xs text-muted-foreground mt-1">We'll notify you when the app is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <p className="text-xs font-semibold text-muted-foreground mb-1">Join the waiting list</p>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="pl-8 h-9 text-sm" required />
        </div>
        <div className="relative flex-1">
          <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="pl-8 h-9 text-sm" required />
        </div>
      </div>
      <Button type="submit" size="sm" className="gradient-primary text-primary-foreground shadow-glow hover:shadow-strong transition-smooth w-full">
        Notify Me
      </Button>
    </form>
  );
};

export const AudienceSection = () => {
  const [showPlatformModal, setShowPlatformModal] = useState(false);

  const userCard = {
    icon: Smartphone,
    badge: "For Users",
    badgeIcon: Users,
    title: "Stay Connected Anywhere",
    description:
      "Find affordable Wi-Fi hotspots near you, pay only for the time you need, and enjoy seamless connectivity across all K-Zones.",
    features: ["Time-based pricing", "Mobile payments", "Find nearby hotspots"],
    surveyUrl: "https://forms.gle/LsyTCFsarwadPe9H9",
    surveyLabel: "User Survey",
  };

  const providerCard = {
    icon: Wifi,
    badge: "For Providers",
    badgeIcon: Building2,
    title: "Monetize Your Wi-Fi",
    description:
      "Register your Wi-Fi infrastructure on the Konnectik network, reach more customers, and earn revenue from your existing setup.",
    features: ["Management dashboard", "Revenue analytics", "Automated billing"],
    surveyUrl: "https://forms.gle/TGnerw5oTn7ww96S6",
    surveyLabel: "Provider Survey",
  };

  return (
    <section id="audience" className="py-24 relative">
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Who is Konnectik for?
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Two Sides, <span className="text-primary">One Network</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need internet access or want to provide it — Konnectik connects you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[userCard, providerCard].map((card, index) => (
            <motion.div
              key={card.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-8 md:p-10 shadow-subtle hover:shadow-glow transition-smooth flex flex-col"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                  <card.badgeIcon className="w-4 h-4" />
                  {card.badge}
                </div>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-3">
                {index === 0 ? (
                  <WaitingListForm />
                ) : (
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground shadow-glow hover:shadow-strong transition-smooth group w-full"
                    onClick={() => setShowPlatformModal(true)}
                  >
                    <Smartphone className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
                    Download App
                  </Button>
                )}
                <SurveyModal
                  formUrl={card.surveyUrl}
                  buttonLabel={card.surveyLabel}
                  buttonClassName="text-sm px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group w-full"
                  buttonSize="lg"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Validation note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto"
        >
          🚀 We're currently in early stages — your feedback helps us build exactly what you need.
        </motion.p>
      </div>

      {showPlatformModal && <ComingSoonModal onClose={() => setShowPlatformModal(false)} />}
    </section>
  );
};
