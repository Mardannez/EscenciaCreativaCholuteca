import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'checklist' | 'report' | 'toolkit';
  image: string;
  alt: string;
  downloadUrl: string;
  pages?: number;
  readTime?: string;
  featured?: boolean;
}

interface ResourceCardProps {
  resource: Resource;
  onDownload: (resource: Resource) => void;
  className?: string;
}

const ResourceCard = ({ resource, onDownload, className = '' }: ResourceCardProps) => {
  const typeConfig = {
    guide: { icon: 'BookOpenIcon', label: 'Guía', color: 'bg-brand-primary' },
    checklist: { icon: 'ClipboardDocumentCheckIcon', label: 'Checklist', color: 'bg-secondary' },
    report: { icon: 'ChartBarIcon', label: 'Reporte', color: 'bg-brand-accent' },
    toolkit: { icon: 'WrenchScrewdriverIcon', label: 'Toolkit', color: 'bg-accent' }
  };

  const config = typeConfig[resource.type];

  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden hover:shadow-brand transition-all duration-300 group ${className}`}>
      {resource.featured && (
        <div className="bg-brand-accent text-brand-accent-foreground px-4 py-2 text-xs font-inter font-bold uppercase tracking-wider">
          Recurso Destacado
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={resource.image}
          alt={resource.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 left-4 ${config.color} text-white px-3 py-1 rounded-full flex items-center space-x-2`}>
          <Icon name={config.icon as any} size={16} variant="solid" />
          <span className="text-xs font-inter font-bold">{config.label}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
          {resource.title}
        </h3>
        
        <p className="text-sm font-inter text-text-secondary mb-4 line-clamp-3">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          {resource.pages && (
            <div className="flex items-center space-x-2 text-text-tertiary">
              <Icon name="DocumentTextIcon" size={16} variant="outline" />
              <span className="text-xs font-inter">{resource.pages} páginas</span>
            </div>
          )}
          {resource.readTime && (
            <div className="flex items-center space-x-2 text-text-tertiary">
              <Icon name="ClockIcon" size={16} variant="outline" />
              <span className="text-xs font-inter">{resource.readTime}</span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => onDownload(resource)}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-inter font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-brand"
        >
          <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
          <span>Descargar Gratis</span>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;