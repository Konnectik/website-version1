import { motion } from "framer-motion";
import { Smartphone, Wifi, Clock, TrendingDown } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download the App",
    description: "Get Konnectik on your mobile device and create your account in seconds.",
  },
  {
    icon: Clock,
    title: "Choose Your Time",
    description: "Purchase affordable, time-based unlimited Wi-Fi access that fits your needs.",
  },
  {
    icon: Wifi,
    title: "Connect Anywhere",
    description: "Access hyperlocal Wi-Fi zones powered by satellite and local network hardware.",
  },
  {
    icon: TrendingDown,
    title: "Save Big",
    description: "Enjoy seamless connectivity at a fraction of traditional mobile data costs.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, hsl(var(--primary)) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get connected in four simple steps and start saving on your internet costs today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}

              <div className="bg-card border rounded-2xl p-8 shadow-subtle hover:shadow-strong transition-smooth h-full">
                {/* Step Number */}
                <div className="text-7xl font-black text-primary/10 absolute top-4 right-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
