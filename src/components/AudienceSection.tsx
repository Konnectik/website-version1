import { motion } from "framer-motion";
import { Wifi, Download, ArrowRight, Building2, Smartphone, Users } from "lucide-react";
import { Button } from "./ui/button";
import { SurveyModal } from "./SurveyModal";
import { useState, useEffect } from "react";

const CountdownModal = ({ onClose }: { onClose: () => void }) => {
  const releaseTime = new Date("2026-01-30T00:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const total = Math.max(0, releaseTime - Date.now());
      setTimeLeft({
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card rounded-xl p-6 max-w-md w-full z-10 border border-primary/30">
        <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Not yet available. Countdown to launch:
        </p>
        <div className="flex justify-center gap-4 text-center mb-4">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-semibold">{String(value).padStart(2, "0")}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button size="sm" variant="ghost" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export const AudienceSection = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [showPlatformModal, setShowPlatformModal] = useState(false);

  const cards = [
    {
      icon: Smartphone,
      badge: "For Users",
      badgeIcon: Users,
      title: "Stay Connected Anywhere",
      description:
        "Find affordable Wi-Fi hotspots near you, pay only for the time you need, and enjoy seamless connectivity across all K-Zones.",
      features: ["Time-based pricing", "Mobile payments", "Find nearby hotspots"],
      ctaLabel: "Download App",
      ctaIcon: Download,
      onCtaClick: () => setShowAppModal(true),
      surveyUrl: "https://forms.gle/LsyTCFsarwadPe9H9",
      surveyLabel: "User Survey",
    },
    {
      icon: Wifi,
      badge: "For Providers",
      badgeIcon: Building2,
      title: "Monetize Your Wi-Fi",
      description:
        "Register your Wi-Fi infrastructure on the Konnectik network, reach more customers, and earn revenue from your existing setup.",
      features: ["Management dashboard", "Revenue analytics", "Automated billing"],
      ctaLabel: "Access Platform",
      ctaIcon: ArrowRight,
      onCtaClick: () => setShowPlatformModal(true),
      surveyUrl: "https://forms.gle/TGnerw5oTn7ww96S6",
      surveyLabel: "Provider Survey",
    },
  ];

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
          {cards.map((card, index) => (
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
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground shadow-glow hover:shadow-strong transition-smooth group flex-1"
                  onClick={card.onCtaClick}
                >
                  <card.ctaIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
                  {card.ctaLabel}
                </Button>
                <SurveyModal
                  formUrl={card.surveyUrl}
                  buttonLabel={card.surveyLabel}
                  buttonClassName="text-sm px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group flex-1"
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

      {showAppModal && <CountdownModal onClose={() => setShowAppModal(false)} />}
      {showPlatformModal && <CountdownModal onClose={() => setShowPlatformModal(false)} />}
    </section>
  );
};
