import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-purple-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 glow-purple-hover',
    secondary: 'bg-gray-950 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl hover:shadow-purple-500/30',
    outline: 'text-purple-400 bg-black hover:bg-primary hover:text-white ring-2 ring-purple-500 hover:ring-purple-400 shadow-lg hover:shadow-xl hover:shadow-purple-500/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
