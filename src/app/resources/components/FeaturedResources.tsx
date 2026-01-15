import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FeaturedResource {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  color: string;
}

interface FeaturedResourcesProps {
  resources: FeaturedResource[];
  onResourceClick: (resourceId: string) => void;
  className?: string;
}

const FeaturedResources = ({ resources, onResourceClick, className = '' }: FeaturedResourcesProps) => {
  return (
    <section className={`py-16 lg:py-20 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
            Recursos Más Populares
          </h2>
          <p className="text-lg font-inter text-text-secondary max-w-2xl mx-auto">
            Los recursos más descargados por negocios locales en Choluteca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              onClick={() => onResourceClick(resource.id)}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-brand transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={resource.image}
                  alt={resource.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${resource.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`} />
                <div className={`absolute top-4 right-4 ${resource.color} text-white p-3 rounded-full`}>
                  <Icon name={resource.icon as any} size={24} variant="solid" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-sm font-inter text-text-secondary mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-primary font-inter font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Descargar ahora</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;