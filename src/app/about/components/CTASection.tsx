import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-8 lg:p-16 shadow-2xl max-w-5xl mx-auto">
          <div className="text-center text-white">
            <Icon name="RocketLaunchIcon" size={64} variant="solid" className="mx-auto mb-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-lg lg:text-xl font-source-sans text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a los más de 50 negocios locales que han confiado en nosotros para impulsar su crecimiento con estrategias medibles y resultados comprobados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-nunito font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center space-x-2"
              >
                <Icon name="CalendarDaysIcon" size={24} variant="solid" />
                <span>Agenda tu Consulta Gratis</span>
              </Link>
              <a
                href="https://wa.me/50498765432"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary rounded-lg font-nunito font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center space-x-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                <span>Chatea con Nosotros</span>
              </a>
            </div>
            <p className="mt-6 text-sm font-inter text-white text-opacity-80">
              Respuesta en menos de 24 horas • Sin compromiso • Consulta 100% gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;