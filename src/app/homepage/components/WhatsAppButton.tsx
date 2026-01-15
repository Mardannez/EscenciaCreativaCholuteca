'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton = ({ className = '' }: WhatsAppButtonProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://wa.me/50498765432', '_blank');
    }
  };

  if (!isHydrated) return null;

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 w-14 h-14 lg:w-16 lg:h-16 bg-brand-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 animate-pulse-scale ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={28} variant="solid" className="text-brand-secondary-foreground" />
    </button>
  );
};

export default WhatsAppButton;