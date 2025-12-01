import { motion } from "framer-motion";
import { Zap, Shield, Layers, Users, Globe, Battery } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience high-speed connectivity with minimal latency across all hyperlocal zones.",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Your data is protected with enterprise-grade encryption and security protocols.",
  },
  {
    icon: Layers,
    title: "Hyperlocal Zones",
    description: "Strategically placed Wi-Fi zones ensure seamless coverage in your community.",
  },
  {
    icon: Users,
    title: "Community-Powered",
    description: "Built for communities, enabling shared access and collaborative connectivity.",
  },
  {
    icon: Globe,
    title: "Satellite Backup",
    description: "Reliable satellite connectivity ensures you're never without internet access.",
  },
  {
    icon: Battery,
    title: "Energy Efficient",
    description: "Low-power infrastructure designed for sustainability and long-term reliability.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for reliable, affordable, and seamless connectivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-8 shadow-subtle hover:shadow-strong transition-smooth h-full relative overflow-hidden">
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
