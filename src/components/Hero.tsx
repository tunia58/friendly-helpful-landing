
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for decorative elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      const rect = heroRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      elements.forEach((element) => {
        const speed = Number((element as HTMLElement).dataset.speed || '0.02');
        const x = (mouseX - rect.width / 2) * speed;
        const y = (mouseY - rect.height / 2) * speed;
        
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={cn(
        'relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden wine-to-black-gradient',
        className
      )}
    >
      {/* Decorative blobs */}
      <div className="blob-animation w-96 h-96 bg-primary/10 top-1/4 left-1/4"></div>
      <div className="blob-animation w-80 h-80 bg-primary/5 bottom-1/4 right-1/4 animation-delay-2000"></div>
      
      {/* Decorative shapes with parallax effect */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-primary/10 top-1/3 left-1/4 parallax-element opacity-60" 
        data-speed="0.04"
      ></div>
      <div 
        className="absolute w-12 h-12 rounded-md rotate-45 bg-primary/5 bottom-1/3 right-1/4 parallax-element opacity-60" 
        data-speed="0.03"
      ></div>
      <div 
        className="absolute w-20 h-20 rounded-2xl bg-primary/5 top-2/3 right-1/3 parallax-element opacity-70" 
        data-speed="0.05"
      ></div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <AnimatedSection stagger={true} className="text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/20 text-primary-foreground">
            The future of AI personal assistance
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-primary-foreground">
            Your Personal Digital Butler <br className="hidden md:block" /> 
            <span className="text-primary">At Your Service</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 text-balance">
            Meet Butler.io, the elegantly designed AI assistant that simplifies your digital life with 
            personalized task management, seamless scheduling, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="lg">
              Try Butler.io Free
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={300} className="mt-8 relative">
          <div className="relative glass-card p-1 md:p-2 rounded-2xl shadow-2xl mx-auto max-w-4xl overflow-hidden bg-black/30 backdrop-blur-md border border-primary/20">
            <img 
              src="https://placehold.co/1200x800/2c0a16/e3e8f4?text=Butler.io+Dashboard" 
              alt="Butler.io Dashboard" 
              className="w-full h-auto rounded-xl object-cover shadow-inner"
            />
            
            {/* UI highlights/accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20 opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-primary/40 to-primary/20 opacity-70"></div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <span className="text-xs mb-2 opacity-80 text-primary-foreground">Scroll</span>
        <div className="w-0.5 h-6 bg-primary-foreground/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
