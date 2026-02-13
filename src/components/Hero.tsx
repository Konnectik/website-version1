import { motion } from "framer-motion";
import { Wifi, Satellite, MapPin, Clock } from "lucide-react";
import { DemoModal } from "./DemoModal";
import heroBg from "@/assets/hero-bg.jpg";
import heroLogo from "@/assets/hero-logo.svg";
import mockupImage from "@/assets/konnectik_mockup1.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Connectivity Network" 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = 3 + Math.floor(Math.random() * 6);
          const baseOpacity = 0.18 + Math.random() * 0.22;
          return (
            <motion.div
              key={i}
              className="absolute bg-primary rounded-full filter blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: baseOpacity,
              }}
              animate={{
                y: [0, -12 - Math.random() * 8, 0],
                opacity: [baseOpacity, Math.min(0.55, baseOpacity + 0.2), baseOpacity],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <img src={heroLogo} alt="Konnectik logo" className="h-12 md:h-16" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/*Left Column*/}
          <div className="max-w-2xl">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-6xl lg:text-6xl font-black mb-8 leading-tight"
            >
              Powering the{' '}
              <span className="text-primary">Future</span>
              <br /> of Connectivity
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light"
            >
              We're building a bold network to connect underserved communities, 
              drive economic growth, and bridge the digital divide.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-subtle text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Hyperlocal Zones</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-subtle text-sm">
                <Satellite className="w-4 h-4 text-primary" />
                <span className="font-medium">Fibre · 5G · Satellite</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-subtle text-sm">
                <Wifi className="w-4 h-4 text-primary" />
                <span className="font-medium">No Dropouts</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-subtle text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">Time-Based Access</span>
              </div>
            </motion.div>
          </div>

          {/*Right Column - Mockup Image + Demo Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <img 
              src={mockupImage} 
              alt="Konnectik App Mockup" 
              className="w-full h-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="mt-6"
            >
              <DemoModal 
                buttonLabel="Test Prototype" 
                buttonClassName="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
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
