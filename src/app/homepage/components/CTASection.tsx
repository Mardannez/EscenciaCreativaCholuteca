import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-brand-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center mb-6">
            <Icon name="RocketLaunchIcon" size={40} variant="solid" className="text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins text-primary-foreground mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl font-inter text-primary-foreground opacity-90 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de crecimiento con estrategias comprobadas
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "ClockIcon",
                title: "Consulta de 30 min",
                description: "Sin compromiso"
              },
              {
                icon: "ChartBarIcon",
                title: "Análisis Gratuito",
                description: "De tu situación actual"
              },
              {
                icon: "LightBulbIcon",
                title: "Plan Personalizado",
                description: "Para tu negocio"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 mx-auto bg-brand-accent rounded-lg flex items-center justify-center mb-3">
                  <Icon name={benefit.icon as any} size={24} variant="solid" className="text-brand-accent-foreground" />
                </div>
                <p className="text-base font-nunito font-bold text-primary-foreground mb-1">
                  {benefit.title}
                </p>
                <p className="text-sm font-inter text-primary-foreground opacity-80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-accent text-brand-accent-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Icon name="CalendarIcon" size={20} variant="solid" />
              <span>Agendar Consulta Gratis</span>
            </Link>
            <a
              href="https://wa.me/50498765432"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-card text-primary rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-primary-foreground" />
              <span className="text-sm font-inter text-primary-foreground">Sin Contratos Largos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-primary-foreground" />
              <span className="text-sm font-inter text-primary-foreground">Resultados Garantizados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="UserGroupIcon" size={20} variant="solid" className="text-primary-foreground" />
              <span className="text-sm font-inter text-primary-foreground">50+ Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;