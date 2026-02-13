import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { DemoModal } from "./DemoModal";
import mockup1 from "@/assets/konnectik_mockup2.png";
import mockup2 from "@/assets/konnectik_mockup3.png";

export const CTA = () => {
  // --- added state and countdown logic ---
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="download"
      className="py-24 relative overflow-hidden">
      {/* Animated Background + repeating decorative image (with vertical mirror) */}
      <div className="absolute inset-0 gradient-dark opacity-90">
        {/* Decorative repeating image layer (normal + vertically mirrored) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-0 flex w-full justify-between items-start h-full opacity-[0.06] px-10">

            {[...Array(1)].map((_, i) => (
              <React.Fragment key={i}>
                {/* Original */}
                <img
                  src={mockup1}
                  alt=""
                  className="h-full object-cover"
                  style = {{ width: "425px"}}
                />

                {/* Mirrored */}
                <img
                  src={mockup2}
                  alt=""
                  className="h-full object-cover"
                  style={{ width: "425px", transform: "scaleX(-1)"}}
                />
              </React.Fragment>
            ))}

          </div>
        </div>

        {/* animated dots (kept on top of decorative layers) */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main CTA Content */}
          <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-12 md:p-16 shadow-strong">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Ready to Get <span className="text-primary">Connected?</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands who've switched to affordable, reliable Wi-Fi.
              Download the app and start saving today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              {/* Download Button (opens modal) */}
              <Button
                size="lg"
                className="text-lg px-10 py-7 gradient-primary shadow-glow hover:shadow-strong transition-smooth group"
                onClick={() => setShowModal(true)}
                aria-haspopup="dialog"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download App
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>

              {/* Demo Button */}
              <DemoModal />
            </div>

            {/* Modal: Coming Soon */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-label="App coming soon modal"
              >
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setShowModal(false)}
                />
                <div className="relative bg-card rounded-xl p-8 max-w-sm w-full z-10 border border-primary/30 text-center">
                  <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The Konnectik app is currently in development. We'll notify you when it's ready to download!
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowModal(false)}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Got it
                  </Button>
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free reward on sign up</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
