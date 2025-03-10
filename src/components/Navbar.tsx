
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled
          ? 'py-3 glass-effect backdrop-blur-md border-b border-white/10'
          : 'py-5 bg-transparent',
        className
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-semibold tracking-tight z-10"
        >
          butler.io
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <a href="#features" className="animated-link text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#product" className="animated-link text-sm font-medium transition-colors">
              Product
            </a>
            <a href="#contact" className="animated-link text-sm font-medium transition-colors">
              Contact
            </a>
          </div>
          
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )} 
          />
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="#features" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#product" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              size="md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
