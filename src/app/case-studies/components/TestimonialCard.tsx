'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  position,
  company,
  image,
  alt,
  testimonial,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-poppins font-bold text-text-primary">{name}</h4>
          <p className="text-sm font-inter text-text-secondary">{position}</p>
          <p className="text-sm font-inter text-text-tertiary">{company}</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={20}
            variant={index < rating ? 'solid' : 'outline'}
            className={index < rating ? 'text-brand-accent' : 'text-text-tertiary'}
          />
        ))}
      </div>

      <p className="text-sm font-source text-text-secondary leading-relaxed italic">
        "{testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;