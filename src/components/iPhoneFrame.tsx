
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/AnimatedSection';

interface iPhoneFrameProps {
  screenshots: Array<{
    id: string;
    image: string;
    alt: string;
  }>;
  className?: string;
}

const iPhoneFrame: React.FC<iPhoneFrameProps> = ({ screenshots, className }) => {
  return (
    <AnimatedSection 
      className={cn("relative w-full max-w-[280px] mx-auto", className)}
      direction="up"
      delay={400}
    >
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-full rounded-[42px] bg-black pt-12 pb-14 px-4 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-36 h-6 bg-black rounded-b-3xl"></div>
          </div>
          
          {/* Side Button */}
          <div className="absolute top-24 -right-1 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute top-44 -right-1 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute top-24 -left-1 w-1 h-16 bg-gray-800 rounded-r-sm"></div>
          
          {/* Screen */}
          <div className="relative aspect-[9/19.5] bg-gray-900 rounded-3xl overflow-hidden shadow-inner">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black/20 backdrop-blur-sm z-10 flex justify-between items-center px-4">
              <div className="text-white text-xs">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Screenshot Carousel */}
            <div className="w-full h-full">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={screenshot.id}
                  className="absolute inset-0 w-full h-full transition-opacity duration-500"
                  style={{ 
                    opacity: 1,
                    zIndex: screenshots.length - index
                  }}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </AnimatedSection>
  );
};

export default iPhoneFrame;
