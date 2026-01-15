'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface EvolutionTimelineProps {
  className?: string;
}

const EvolutionTimeline = ({ className = '' }: EvolutionTimelineProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2019',
      title: 'Inicio de la Visión',
      description: 'Fundación de Esencia Creativa como estudio de producción audiovisual, enfocado en crear contenido visual de alta calidad para negocios locales.',
      icon: 'SparklesIcon',
      color: 'bg-brand-primary'
    },
    {
      year: '2020',
      title: 'Expansión Digital',
      description: 'Incorporación de servicios de marketing digital y gestión de redes sociales, respondiendo a las necesidades emergentes de nuestros clientes.',
      icon: 'GlobeAltIcon',
      color: 'bg-secondary'
    },
    {
      year: '2021',
      title: 'Enfoque en Resultados',
      description: 'Transformación hacia una agencia orientada a ROI, implementando sistemas de medición y reportes transparentes para demostrar valor real.',
      icon: 'ChartBarIcon',
      color: 'bg-accent'
    },
    {
      year: '2022',
      title: 'Certificaciones Profesionales',
      description: 'Obtención de certificaciones Google Ads y Facebook Blueprint, consolidando nuestra expertise técnica y credibilidad profesional.',
      icon: 'AcademicCapIcon',
      color: 'bg-brand-secondary'
    },
    {
      year: '2023',
      title: 'Liderazgo Local',
      description: 'Reconocimiento como agencia líder en Choluteca, con portfolio de casos de éxito medibles y testimonios de clientes satisfechos.',
      icon: 'TrophyIcon',
      color: 'bg-warning'
    },
    {
      year: '2024',
      title: 'Innovación Continua',
      description: 'Implementación de estrategias avanzadas de marketing automation y análisis predictivo para maximizar el crecimiento de nuestros clientes.',
      icon: 'RocketLaunchIcon',
      color: 'bg-primary'
    }
  ];

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-surface ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
              Nuestra Evolución
            </h2>
            <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
              Un viaje de transformación continua hacia la excelencia en marketing digital
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className={`flex-shrink-0 w-16 h-16 ${event.color} rounded-full flex items-center justify-center`}>
                    <Icon name={event.icon as any} size={28} variant="solid" className="text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-poppins font-bold text-primary">{event.year}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="text-xl font-nunito font-bold text-text-primary mb-2">{event.title}</h3>
                    <p className="font-source-sans text-text-secondary leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Nuestra Evolución
          </h2>
          <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
            Un viaje de transformación continua hacia la excelencia en marketing digital
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2" />
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-brand transition-shadow duration-300">
                    <span className="text-2xl font-poppins font-bold text-primary">{event.year}</span>
                    <h3 className="text-xl font-nunito font-bold text-text-primary mt-2 mb-3">{event.title}</h3>
                    <p className="font-source-sans text-text-secondary leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
                    <Icon name={event.icon as any} size={28} variant="solid" className="text-white" />
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-border" />
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className={`flex-shrink-0 w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
                  <Icon name={event.icon as any} size={28} variant="solid" className="text-white" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-poppins font-bold text-primary">{event.year}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-xl font-nunito font-bold text-text-primary mb-2">{event.title}</h3>
                  <p className="font-source-sans text-text-secondary leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;