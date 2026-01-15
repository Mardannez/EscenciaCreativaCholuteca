import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-primary to-secondary py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="ChatBubbleLeftRightIcon" size={40} variant="solid" className="text-white" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-white mb-6">
            Hablemos de Tu Crecimiento
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio con estrategias de marketing digital que generan resultados medibles.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/50498765432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-accent text-brand-accent-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>WhatsApp Directo</span>
            </a>
            
            <a
              href="tel:+50498765432"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Icon name="PhoneIcon" size={24} variant="solid" />
              <span>+504 9876-5432</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;