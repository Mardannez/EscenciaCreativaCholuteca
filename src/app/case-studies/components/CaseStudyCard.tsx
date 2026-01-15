'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudyMetric {
  label: string;
  value: string;
  icon: string;
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  alt: string;
  problem: string;
  solution: string;
  metrics: CaseStudyMetric[];
  tags: string[];
}

const CaseStudyCard = ({
  id,
  title,
  client,
  industry,
  image,
  alt,
  problem,
  solution,
  metrics,
  tags,
}: CaseStudyCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-brand transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-accent text-brand-accent-foreground px-3 py-1 rounded-full text-xs font-nunito font-bold">
          {industry}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-poppins font-bold text-text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm font-inter text-text-secondary mb-4">{client}</p>

        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="ExclamationTriangleIcon" size={16} variant="solid" className="text-error" />
              <span className="text-xs font-inter font-semibold text-text-tertiary uppercase">
                Problema
              </span>
            </div>
            <p className="text-sm font-source text-text-secondary line-clamp-2">{problem}</p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="LightBulbIcon" size={16} variant="solid" className="text-success" />
              <span className="text-xs font-inter font-semibold text-text-tertiary uppercase">
                Solución
              </span>
            </div>
            <p className="text-sm font-source text-text-secondary line-clamp-2">{solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <div className="flex justify-center mb-1">
                <Icon name={metric.icon as any} size={20} variant="solid" className="text-primary" />
              </div>
              <div className="text-lg font-poppins font-bold text-primary">{metric.value}</div>
              <div className="text-xs font-inter text-text-tertiary">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-surface text-text-secondary text-xs font-inter rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/case-studies/${id}`}
          className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-nunito font-bold text-sm hover:bg-opacity-90 transition-all duration-300"
        >
          <span>Ver Caso Completo</span>
          <Icon name="ArrowRightIcon" size={16} variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;