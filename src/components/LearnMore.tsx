import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TabContent {
  id: string;
  label: string;
  title: string;
  content: React.ReactNode;
}

interface TabButtonProps {
  tab: TabContent;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onClick }) => (
  <button
    role="tab"
    aria-selected={isActive}
    aria-controls={`panel-${tab.id}`}
    id={`tab-${tab.id}`}
    onClick={onClick}
    className={cn(
      "px-6 py-2.5 rounded-full text-sm font-semibold font-grotesk uppercase tracking-wider transition-all duration-300",
      isActive
        ? "bg-primary text-primary-foreground shadow-lg"
        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
    )}
  >
    {tab.label}
  </button>
);

interface TabPanelProps {
  tab: TabContent;
  isActive: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({ tab, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        key={tab.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        role="tabpanel"
        id={`panel-${tab.id}`}
        aria-labelledby={`tab-${tab.id}`}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold font-grotesk text-foreground">
          {tab.title}
        </h2>
        <div className="text-muted-foreground leading-relaxed space-y-3">
          {tab.content}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AboutContent: React.FC = () => (
  <>
    <p>
      <strong className="text-foreground">Why now?</strong> Millions in Cameroon still lack reliable, affordable connectivity. This gap limits education, healthcare, and entrepreneurship. Our PoC in Douala proves a model that can scale.
    </p>
    <p>A survey conducted with students in the PK17 residential zone revealed widespread dissatisfaction with existing data plans. Key needs raised were:</p>
    <ul className="list-none space-y-2 pl-0">
      {['Speed', 'Affordability', 'Quantity'].map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  </>
);

const HowContent: React.FC = () => (
  <>
    <p>
      <strong className="text-foreground">Lean, modular radio networks + local partnerships + data-driven planning.</strong> We optimize coverage per franc, onboard communities, and keep pricing transparent.
    </p>
    <p>
      <strong className="text-foreground">Delivering seamless connectivity right to your hands.</strong>
    </p>
  </>
);

const WhatContent: React.FC = () => (
  <>
    <p><strong className="text-foreground">A scalable connectivity platform</strong></p>
    <p>Core infrastructure, last-mile access, and a simple mobile app for top-ups and support—designed to grow from neighborhood deployments to nationwide coverage.</p>
    <div className="pt-4 border-t border-border/50">
      <p className="text-sm text-muted-foreground mb-1">Our Founder</p>
      <p>
        <strong className="text-foreground">Karol Konarski</strong>, a visionary leader, reimagined the old model of cyber cafés into <strong className="text-primary">Cyber Wi-Fis</strong>: affordable, unlimited data bundles you can subscribe to straight from your phone and enjoy from the comfort of your home.
      </p>
    </div>
  </>
);

const tabs: TabContent[] = [
  {
    id: 'why',
    label: 'WHY',
    title: 'About Us',
    content: <AboutContent />,
  },
  {
    id: 'how',
    label: 'HOW',
    title: 'How we solve it',
    content: <HowContent />,
  },
  {
    id: 'what',
    label: 'WHAT',
    title: "What we're building",
    content: <WhatContent />,
  },
];

export const LearnMore: React.FC = () => {
  const [activeTab, setActiveTab] = useState('why');

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <article className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* LEFT: Tabs + content */}
              <div className="p-8 md:p-12 space-y-8">
                <div 
                  role="tablist" 
                  aria-label="About sections"
                  className="flex flex-wrap gap-3"
                >
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.id}
                      tab={tab}
                      isActive={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </div>

                <div className="min-h-[280px]">
                  {tabs.map((tab) => (
                    <TabPanel
                      key={tab.id}
                      tab={tab}
                      isActive={activeTab === tab.id}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Visual element */}
              <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hidden md:flex items-center justify-center p-12">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Abstract visual based on active tab */}
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute inset-4 bg-card border border-border/50 rounded-2xl shadow-2xl flex items-center justify-center">
                      <span className="text-6xl font-bold font-grotesk text-primary">
                        {activeTab === 'why' && '?'}
                        {activeTab === 'how' && '→'}
                        {activeTab === 'what' && '◆'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};
