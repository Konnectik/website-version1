import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import aboutWhy from '@/assets/img/about-why.jpg';
import aboutHow from '@/assets/img/about-how.jpg';
import aboutWhat from '@/assets/img/about-what.jpg';

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
      In Cameroon, <strong className="text-foreground">millions of students and remote workers</strong> rely on the internet to study, work, and build their future — yet access remains <strong className="text-foreground">expensive, unreliable, or inconsistent</strong>.
    </p>
    <p>
      Most people are forced to choose between costly mobile data bundles or unstable Wi-Fi connections, often switching between both just to stay connected.
    </p>
    <p>
      Through field research in Douala, including a survey conducted in the PK17 residential zone, we observed a clear pattern: people are already paying for internet — but they are <strong className="text-foreground">not satisfied with the value they receive</strong>.
    </p>
    <p>The most common needs expressed were:</p>
    <ul className="list-none space-y-2 pl-0">
      {['Better speed', 'Lower cost', 'More usable data'].map((item) => (
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
      Instead of building new infrastructure, <strong className="text-foreground">Konnectik unlocks existing Wi-Fi capacity</strong> already present in neighborhoods, campuses, cafés, and small businesses.
    </p>
    <p>
      We partner with local Wi-Fi providers and make their connectivity <strong className="text-foreground">discoverable, accessible, and easy to pay for</strong> through a simple digital experience.
    </p>
    <p>
      By combining <strong className="text-foreground">local partnerships</strong>, <strong className="text-foreground">time-based access</strong>, and <strong className="text-foreground">Mobile Money payments</strong>, we reduce costs for users while helping providers better monetize what they already have.
    </p>
  </>
);

const WhatContent: React.FC = () => (
  <>
    <p>
      <strong className="text-foreground">Konnectik is a connectivity marketplace.</strong>
    </p>
    <p>
      Through our mobile platform, users can find nearby Wi-Fi zones, purchase affordable time-based internet access, and get connected instantly — without long-term contracts or expensive data plans.
    </p>
    <p>
      For Wi-Fi providers, Konnectik offers visibility, new customers, and a simple way to generate additional revenue from their existing internet connection.
    </p>

    <div className="pt-4 border-t border-border/50">
      <p className="text-sm text-muted-foreground mb-1">Our Founder</p>
      <p>
        <strong className="text-foreground">Karol Konarski</strong> started Konnectik by reimagining a familiar concept — the cyber café — into a modern, flexible model we call <strong className="text-primary">Cyber Wi-Fi</strong>: 
        affordable, on-demand internet access you can subscribe to from your phone and use where you live, study, or work.
      </p>
    </div>
  </>
);

const tabs: TabContent[] = [
  {
    id: 'why',
    label: 'WHY',
    title: 'Why Now?',
    content: <AboutContent />,
  },
  {
    id: 'how',
    label: 'HOW',
    title: 'How we solve it?',
    content: <HowContent />,
  },
  {
    id: 'what',
    label: 'WHAT',
    title: "What we're building?",
    content: <WhatContent />,
  },
];

const images: Record<string, string> = {
  why: aboutWhy,
  how: aboutHow,
  what: aboutWhat,
};

export const LearnMore: React.FC = () => {
  const [activeTab, setActiveTab] = useState('why');

  return (
    <section id="learn-more" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-foreground">
              About <span className="text-primary">Us</span>
            </h1>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>

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

                {/* Mobile image viewer */}
                <div className="md:hidden rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab}
                      src={images[activeTab] ?? ''}
                      alt={
                        activeTab === 'why'
                          ? 'Community and students - why we exist'
                          : activeTab === 'how'
                          ? 'Network deployment and planning'
                          : 'Platform and founder overview'
                      }
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-48 object-contain block"
                    />
                  </AnimatePresence>
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

              {/* RIGHT: Visual element (desktop only) */}
              <div className="relative hidden md:flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                <div className="w-full flex items-center justify-center">
                  <div className="max-w-[420px] max-h-[360px] w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeTab}
                        src={images[activeTab] ?? ''}
                        alt={
                          activeTab === 'why'
                            ? 'Community and students - why we exist'
                            : activeTab === 'how'
                            ? 'Network deployment and planning'
                            : 'Platform and founder overview'
                        }
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.98, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-contain block"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};
