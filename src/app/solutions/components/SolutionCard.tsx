import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SolutionCardProps {
  solution: {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    alt: string;
    benefits: string[];
    priceRange: string;
    caseStudyLink: string;
    ctaText: string;
  };
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-md hover:shadow-brand transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={solution.image}
          alt={solution.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
            <Icon name={solution.icon as any} size={24} variant="solid" className="text-white" />
          </div>
          <h3 className="text-xl font-bold font-poppins text-white">{solution.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p className="text-text-secondary font-inter mb-4 line-clamp-2">{solution.description}</p>

        {/* Benefits */}
        <div className="space-y-2 mb-4">
          {solution.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-text-primary font-inter">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <span className="text-sm text-text-tertiary font-inter">Inversión desde:</span>
          <span className="text-lg font-bold font-poppins text-primary">{solution.priceRange}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={solution.caseStudyLink}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-inter font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 text-center"
          >
            {solution.ctaText}
          </Link>
          <a
            href="https://wa.me/50498765432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-accent text-white rounded-lg font-inter font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 text-center flex items-center justify-center space-x-1"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;