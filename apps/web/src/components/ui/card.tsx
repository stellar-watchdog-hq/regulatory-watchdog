import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ className = '', children, glow = false, ...props }) => (
  <div 
    className={`bg-[#1E293B] rounded-[20px] border border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] ${glow ? 'critical-glow' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={`px-6 py-4 border-b border-white/5 bg-[#243041]/30 flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={`px-6 py-5 ${className}`} {...props}>
    {children}
  </div>
);