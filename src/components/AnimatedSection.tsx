
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  stagger?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  threshold = 0.2,
  delay = 0,
  stagger = false,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(section);
        }
      },
      { threshold }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [threshold, delay]);

  const directionClass = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12'
  }[direction];

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClass}`,
        stagger ? 'stagger-reveal' : '',
        isVisible && stagger ? 'revealed' : '',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
