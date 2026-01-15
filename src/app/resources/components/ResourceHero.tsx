import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ResourceHeroProps {
  className?: string;
}

const ResourceHero = ({ className = '' }: ResourceHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-brand-accent rounded-full mb-6 animate-pulse-scale">
            <Icon name="BookOpenIcon" size={32} variant="solid" className="text-brand-accent-foreground" />
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold font-poppins text-primary-foreground mb-6">
            Recursos de Marketing para Tu Negocio
          </h1>
          
          <p className="text-lg lg:text-xl font-inter text-primary-foreground opacity-90 mb-8 max-w-3xl mx-auto">
            Guías prácticas, herramientas descargables y conocimientos especializados para impulsar el crecimiento de tu negocio local en Choluteca
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Icon name="DocumentTextIcon" size={20} variant="solid" className="text-brand-accent" />
              <span className="font-inter font-semibold text-primary-foreground">15+ Guías</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Icon name="ChartBarIcon" size={20} variant="solid" className="text-brand-accent" />
              <span className="font-inter font-semibold text-primary-foreground">Reportes de Industria</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Icon name="AcademicCapIcon" size={20} variant="solid" className="text-brand-accent" />
              <span className="font-inter font-semibold text-primary-foreground">Contenido Actualizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHero;