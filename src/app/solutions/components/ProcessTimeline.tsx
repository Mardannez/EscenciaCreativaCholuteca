import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessTimelineProps {
  className?: string;
}

const ProcessTimeline = ({ className = '' }: ProcessTimelineProps) => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tu negocio, objetivos y desafíos actuales para diseñar una estrategia personalizada.',
      icon: 'ChatBubbleLeftRightIcon',
      duration: '1-2 días'
    },
    {
      number: '02',
      title: 'Estrategia y Propuesta',
      description: 'Desarrollamos un plan detallado con objetivos medibles, tácticas específicas y proyección de ROI.',
      icon: 'DocumentTextIcon',
      duration: '3-5 días'
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Ejecutamos la estrategia con creatividad profesional, configuración técnica y lanzamiento coordinado.',
      icon: 'RocketLaunchIcon',
      duration: '2-4 semanas'
    },
    {
      number: '04',
      title: 'Optimización Continua',
      description: 'Monitoreamos resultados, ajustamos estrategias y maximizamos el rendimiento de tus campañas.',
      icon: 'ChartBarIcon',
      duration: 'Mensual'
    }
  ];

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto">
            Un enfoque estructurado y transparente para garantizar resultados medibles
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                {/* Card */}
                <div className="relative bg-card rounded-xl shadow-md p-6 hover:shadow-brand transition-all duration-300 z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold font-poppins text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                    <Icon name={step.icon as any} size={28} variant="solid" className="text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary font-inter mb-4">{step.description}</p>

                  {/* Duration */}
                  <div className="flex items-center space-x-2 text-xs text-text-tertiary font-inter">
                    <Icon name="ClockIcon" size={16} variant="outline" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/50498765432"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-white rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Iniciar mi Proyecto</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;