
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from '@/components/AnimatedSection';
import iPhoneFrame from '@/components/iPhoneFrame';

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const features = [
    {
      id: "dashboard",
      title: "Intelligent Dashboard",
      description: "A centralized hub for all your tasks, events, and priorities, presented with elegant simplicity.",
      image: "https://placehold.co/1200x800/f5f7ff/e3e8f4?text=Butler+Dashboard"
    },
    {
      id: "assistant",
      title: "Conversational Assistant",
      description: "Interact naturally with Butler.io through text or voice, with contextual understanding that grows over time.",
      image: "https://placehold.co/1200x800/f5f7ff/e3e8f4?text=Butler+Assistant"
    },
    {
      id: "schedule",
      title: "Adaptive Scheduling",
      description: "Butler.io intelligently suggests and adjusts your schedule based on your priorities and preferences.",
      image: "https://placehold.co/1200x800/f5f7ff/e3e8f4?text=Butler+Calendar"
    },
    {
      id: "automation",
      title: "Seamless Automation",
      description: "Create sophisticated workflows without complexity, handling repetitive tasks with minimum effort.",
      image: "https://placehold.co/1200x800/f5f7ff/e3e8f4?text=Butler+Automation"
    }
  ];

  const mobileScreenshots = [
    {
      id: "mobile1",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=1200&fit=crop",
      alt: "Mobile App Screenshot 1"
    },
    {
      id: "mobile2",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=1200&fit=crop",
      alt: "Mobile App Screenshot 2"
    },
    {
      id: "mobile3",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=1200&fit=crop",
      alt: "Mobile App Screenshot 3"
    }
  ];

  return (
    <section
      id="product"
      className={cn(
        'py-24 px-4 bg-secondary/50',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Product Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Elegantly Designed for Every Detail
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-balance">
            Discover how Butler.io transforms complexity into simplicity with its thoughtfully designed features.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-8">
            <AnimatedSection className="mt-10">
              <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-1 mb-8">
                  {features.map(feature => (
                    <TabsTrigger
                      key={feature.id}
                      value={feature.id}
                      className={cn(
                        "py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200",
                        "data-[state=inactive]:bg-background/80 data-[state=inactive]:border border-border"
                      )}
                    >
                      {feature.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {features.map(feature => (
                  <TabsContent
                    key={feature.id}
                    value={feature.id}
                    className="focus-visible:outline-none focus-visible:ring-0"
                  >
                    <div className="grid md:grid-cols-1 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground mb-6">{feature.description}</p>
                        
                        <ul className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {feature.id === "dashboard" && i === 1 && "Visual priority system with elegant indicators"}
                                {feature.id === "dashboard" && i === 2 && "Customizable widgets adapt to your usage patterns"}
                                {feature.id === "dashboard" && i === 3 && "Intelligent daily summaries and gentle reminders"}
                                
                                {feature.id === "assistant" && i === 1 && "Natural language processing with context awareness"}
                                {feature.id === "assistant" && i === 2 && "Voice interaction with nuanced understanding"}
                                {feature.id === "assistant" && i === 3 && "Learns from your preferences and communication style"}
                                
                                {feature.id === "schedule" && i === 1 && "AI-powered time allocation based on task importance"}
                                {feature.id === "schedule" && i === 2 && "Buffer time recommendations for realistic planning"}
                                {feature.id === "schedule" && i === 3 && "Adaptive rescheduling when priorities change"}
                                
                                {feature.id === "automation" && i === 1 && "Visual workflow builder requires no coding"}
                                {feature.id === "automation" && i === 2 && "Integrates with your favorite tools and services"}
                                {feature.id === "automation" && i === 3 && "Proactive suggestions for workflow improvements"}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </AnimatedSection>
          </div>
          
          {/* iPhone Frame with Screenshots */}
          <div className="md:col-span-4 flex justify-center">
            <iPhoneFrame screenshots={mobileScreenshots} />
          </div>
        </div>
        
        {/* Desktop Screenshots Section */}
        <AnimatedSection delay={200} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Seamless Experience Across Devices</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're on desktop or mobile, the experience is consistently elegant and intuitive,
                allowing you to manage your digital life with ease from anywhere.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Responsive design optimized for all screen sizes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Cloud synchronization across all your devices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Offline capabilities with seamless syncing when back online
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="glass-card p-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop"
                  alt="Desktop Interface"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductShowcase;
