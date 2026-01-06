import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Satellite, MapPin, Clock, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroLogo from "@/assets/hero-logo.svg";
import mockupImage from "@/assets/konnectik_mockup1.png";

export const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Connectivity Network" 
          className="w-full h-full object-cover opacity-75" // Background image opacity
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background"></div> {/* Decreased opacity of gradient */}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = 3 + Math.floor(Math.random() * 6); // 3-8px
          const baseOpacity = 0.18 + Math.random() * 0.22; // 0.18-0.4
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
          className="mb-6"
        >
          {/* plain logo image (no pill styling) */}
          <img src={heroLogo} alt="Konnectik logo" className="h-10 md:h-14 lg:h-16 mx-auto block" />
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
                <span className="font-medium">Satellite-Powered</span>
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

            {/* Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group"
                onClick={() => setShowDemoModal(true)}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/*Right Column - Mockup Image*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <img 
              src={mockupImage} 
              alt="Konnectik App Mockup" 
              className="w-full h-full"
            />
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

      {/* Demo Modal */}
      {showDemoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="App demo modal"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowDemoModal(false)}
          />
          <div className="relative bg-card sm:rounded-xl p-3 sm:p-4 w-full h-full sm:h-auto sm:max-w-4xl z-10 sm:border border-primary/30 flex flex-col">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold">App Demo</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowDemoModal(false)}
                className="text-sm"
              >
                Close
              </Button>
            </div>
            <div className="flex-1 sm:aspect-video w-full min-h-0">
              <iframe
                className="w-full h-full sm:rounded-lg border border-border"
                src="https://embed.figma.com/proto/RU16jcquksyerqVy3xQ8JM/Konnectik-Flutterflow?page-id=0%3A1&node-id=55-123&viewport=-206%2C400%2C0.38&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A7&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
