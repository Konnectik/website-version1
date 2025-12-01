import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Wifi, Satellite, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Connectivity Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="font-grotesk font-bold text-lg tracking-wider text-primary">
                KONNECTIK
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            Affordable Wi-Fi
            <br />
            <span className="text-primary">For Everyone</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light"
          >
            Seamless, time-based internet access through smart hyperlocal zones 
            backed by satellite connectivity—at a fraction of mobile data costs.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border shadow-subtle">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Hyperlocal Zones</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border shadow-subtle">
              <Satellite className="w-5 h-5 text-primary" />
              <span className="font-medium">Satellite-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border shadow-subtle">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="font-medium">No Dropouts</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-6 gradient-primary shadow-glow hover:shadow-strong transition-smooth">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/5">
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground font-medium">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Coverage in Zones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Always Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
