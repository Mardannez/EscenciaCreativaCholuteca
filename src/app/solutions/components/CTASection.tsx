import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="RocketLaunchIcon" size={40} variant="solid" className="text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-white mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de crecimiento con estrategias digitales comprobadas.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: 'CheckBadgeIcon', text: 'Consulta 100% Gratis' },
              { icon: 'ClockIcon', text: 'Respuesta en 24 Horas' },
              { icon: 'ShieldCheckIcon', text: 'Sin Compromiso' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Icon name={item.icon as any} size={24} variant="solid" className="text-accent" />
                <span className="text-white font-inter font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/50498765432"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-lg font-nunito font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Consulta Gratis por WhatsApp</span>
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-lg font-nunito font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <Icon name="CalendarIcon" size={24} variant="outline" />
              <span>Agendar Reunión</span>
            </a>
          </div>

          {/* Trust Badge */}
          <p className="text-white/80 font-inter text-sm mt-8">
            Únete a más de 50 negocios locales que ya están creciendo con Esencia Creativa
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;