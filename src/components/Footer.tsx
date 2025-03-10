
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'py-12 px-4 border-t border-border bg-secondary/30',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-semibold tracking-tight block mb-4">
              butler.io
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Elegant AI assistance designed to simplify your digital life with sophistication and intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7.1 3.8A11.5 11.5 0 0 1 3 4.8a4.3 4.3 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5v.1c0 2 1.4 3.6 3.2 4-.4.1-.8.2-1.3.2l-.9-.1a4.1 4.1 0 0 0 3.9 2.9 8.3 8.3 0 0 1-5.1 1.7c-.3 0-.7 0-1-.1a11.7 11.7 0 0 0 6.3 1.9c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.5-1.3 2-2.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5A1.5 1.5 0 115 7a1.5 1.5 0 011.5 1.5zM19 19h-3v-4.7c0-1.2-.7-1.5-1-1.5-.6 0-1 .4-1 1.5v4.7h-3v-9h3v1.2a3 3 0 012.5-1.2c1.5 0 2.5 1 2.5 3v6z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.7.2 2.1.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.4 1 .4 2.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.7-.4 2.1-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .4-2.1.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.7-.2-2.1-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.4-1-.4-2.1-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1.1.2-1.7.4-2.1.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2.1-.4 1.1-.1 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.5.1 6.2.1 5.3.3 4.5.6a6 6 0 00-2.1 1.4A6 6 0 001 4.1C.7 4.9.5 5.8.5 7.1.4 8.5.4 8.9.4 11.6s0 3.1.1 4.5c0 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.1A6 6 0 004.5 22.4c.8.3 1.7.5 3 .5 1.4.1 1.8.1 4.5.1s3.1 0 4.5-.1c1.3 0 2.2-.2 3-.5a6 6 0 002.1-1.4 6 6 0 001.4-2.1c.3-.8.5-1.7.5-3 .1-1.4.1-1.8.1-4.5s0-3.1-.1-4.5c0-1.3-.2-2.2-.5-3a6 6 0 00-1.4-2.1A6 6 0 0019.5.6C18.7.3 17.8.1 16.5.1 15.1 0 14.7 0 12 0z"></path>
                  <path d="M12 5.8a6 6 0 100 12 6 6 0 000-12zm0 9.8a3.8 3.8 0 110-7.6 3.8 3.8 0 010 7.6zM19.4 5.6a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Butler.io. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
