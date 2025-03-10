
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 button-hover-effect';
  
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:opacity-90 active:transform active:scale-95',
    outline: 'border border-primary/30 bg-transparent hover:bg-primary/10 hover:text-primary active:transform active:scale-95 text-primary-foreground',
    ghost: 'hover:bg-primary/10 hover:text-primary active:transform active:scale-95 text-primary-foreground',
    minimal: 'text-primary-foreground hover:text-primary hover:underline underline-offset-4 active:transform active:scale-95',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-8 py-3',
  };

  return (
    <button
      className={cn(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
