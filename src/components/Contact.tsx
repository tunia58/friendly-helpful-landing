
import React from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import { AtSign, Mail, MessageSquare } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section
      id="contact"
      className={cn(
        'py-24 px-4 relative overflow-hidden',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Life?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-balance">
            Contact us to learn more about Butler.io or start your free trial today.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="I'm interested in learning more about Butler.io..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <div className="space-y-8 h-full flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Other Ways to Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Choose your preferred method to reach out. Our team is ready to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-1">For general inquiries and support</p>
                    <a href="mailto:hello@butler.io" className="text-primary animated-link">hello@butler.io</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Live Chat</h4>
                    <p className="text-sm text-muted-foreground mb-1">Speak with our team in real-time</p>
                    <a href="#" className="text-primary animated-link">Start a conversation</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AtSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Social Media</h4>
                    <p className="text-sm text-muted-foreground mb-1">Follow us for updates and tips</p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7.1 3.8A11.5 11.5 0 0 1 3 4.8a4.3 4.3 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5v.1c0 2 1.4 3.6 3.2 4-.4.1-.8.2-1.3.2l-.9-.1a4.1 4.1 0 0 0 3.9 2.9 8.3 8.3 0 0 1-5.1 1.7c-.3 0-.7 0-1-.1a11.7 11.7 0 0 0 6.3 1.9c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.5-1.3 2-2.2z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5A1.5 1.5 0 115 7a1.5 1.5 0 011.5 1.5zM19 19h-3v-4.7c0-1.2-.7-1.5-1-1.5-.6 0-1 .4-1 1.5v4.7h-3v-9h3v1.2a3 3 0 012.5-1.2c1.5 0 2.5 1 2.5 3v6z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.7.2 2.1.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.4 1 .4 2.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.7-.4 2.1-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .4-2.1.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.7-.2-2.1-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.4-1-.4-2.1-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1.1.2-1.7.4-2.1.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2.1-.4 1.1-.1 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.5.1 6.2.1 5.3.3 4.5.6a6 6 0 00-2.1 1.4A6 6 0 001 4.1C.7 4.9.5 5.8.5 7.1.4 8.5.4 8.9.4 11.6s0 3.1.1 4.5c0 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.1A6 6 0 004.5 22.4c.8.3 1.7.5 3 .5 1.4.1 1.8.1 4.5.1s3.1 0 4.5-.1c1.3 0 2.2-.2 3-.5a6 6 0 002.1-1.4 6 6 0 001.4-2.1c.3-.8.5-1.7.5-3 .1-1.4.1-1.8.1-4.5s0-3.1-.1-4.5c0-1.3-.2-2.2-.5-3a6 6 0 00-1.4-2.1A6 6 0 0019.5.6C18.7.3 17.8.1 16.5.1 15.1 0 14.7 0 12 0z"></path>
                          <path d="M12 5.8a6 6 0 100 12 6 6 0 000-12zm0 9.8a3.8 3.8 0 110-7.6 3.8 3.8 0 010 7.6zM19.4 5.6a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="hidden md:block absolute top-1/3 left-0 w-72 h-72 bg-indigo-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="hidden md:block absolute bottom-1/3 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Contact;
