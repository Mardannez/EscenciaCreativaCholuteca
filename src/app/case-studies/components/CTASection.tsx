import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-foreground mb-4">
          ¿Listo para Ser Nuestro Próximo Caso de Éxito?
        </h2>
        <p className="text-lg font-source text-primary-foreground opacity-90 mb-8 max-w-2xl mx-auto">
          Transformemos tu negocio con estrategias probadas y resultados medibles. Agenda tu consulta gratuita hoy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-brand-accent text-brand-accent-foreground rounded-md font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            <Icon name="CalendarIcon" size={20} variant="solid" />
            <span>Agendar Consulta Gratis</span>
          </Link>
          <a
            href="https://wa.me/50498765432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-card text-primary rounded-md font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;