
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Calendar, Clock, MessageSquare, BrainCircuit, Shield } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => (
  <AnimatedSection
    delay={delay}
    className="hover-lift p-6 rounded-xl glass-card"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </AnimatedSection>
);

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      icon: <Check className="h-6 w-6" />,
      title: "Task Management",
      description: "Intelligently organize and prioritize your tasks based on deadlines, importance, and your personal patterns."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Butler automatically finds the perfect time slots for your activities and adapts to changing circumstances."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Natural Conversations",
      description: "Communicate naturally with Butler as it understands context and remembers your preferences."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Optimization",
      description: "Analyze your productivity patterns and suggest improvements to your daily routines."
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Butler learns from your habits and preferences to provide increasingly personalized assistance."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy-First Design",
      description: "Built with privacy at its core, keeping your data secure and processing information locally."
    }
  ];

  return (
    <section
      id="features"
      className={cn(
        'py-24 px-4 relative overflow-hidden',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Designed to Simplify Your Life
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-balance">
            Butler.io combines sophisticated AI with elegantly simple design to transform how you manage your digital life.
          </p>
        </AnimatedSection>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Features;
