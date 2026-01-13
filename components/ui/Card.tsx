import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden border border-[#D4AF37]/20 ${
        hover ? 'transition-all duration-300 hover:shadow-2xl hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
