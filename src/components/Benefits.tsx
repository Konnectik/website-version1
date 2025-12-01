import { motion } from "framer-motion";
import { DollarSign, Navigation, Signal } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "90% Cost Savings",
    description: "Pay a fraction of traditional mobile data costs with our time-based pricing model.",
    highlight: "Save hundreds per year on connectivity expenses.",
  },
  {
    icon: Navigation,
    title: "Seamless Movement",
    description: "Move freely within your community without connection dropouts or interruptions.",
    highlight: "One network, unlimited movement within zones.",
  },
  {
    icon: Signal,
    title: "Always Connected",
    description: "Satellite-backed infrastructure ensures you're never without reliable internet access.",
    highlight: "99.9% uptime guaranteed in all zones.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Why Choose <span className="text-primary">Konnectik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform how you connect with affordable, reliable, community-wide Wi-Fi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card border-2 border-primary/20 rounded-3xl p-10 shadow-strong hover:border-primary/40 transition-smooth h-full">
                {/* Icon */}
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <benefit.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-black mb-4">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlight */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-primary">{benefit.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-card border-2 rounded-3xl p-8 md:p-12 shadow-strong">
            <h3 className="text-3xl font-black text-center mb-8">Cost Comparison</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Mobile Data */}
              <div className="text-center">
                <div className="text-muted-foreground font-semibold mb-4">Traditional Mobile Data</div>
                <div className="text-5xl font-black text-muted-foreground mb-2">$50</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="mt-4 text-sm text-muted-foreground">Limited data, high costs</div>
              </div>

              {/* Konnectik */}
              <div className="text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
                <div className="text-primary font-semibold mb-4">Konnectik</div>
                <div className="text-5xl font-black text-primary mb-2">$5</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="mt-4 text-sm font-semibold text-primary">Unlimited in zones</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
