import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SolutionHeroProps {
  className?: string;
}

const SolutionHero = ({ className = '' }: SolutionHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary py-20 lg:py-28 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-white font-inter font-semibold text-sm">Soluciones de Marketing Digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
            Transformamos Ideas en{' '}
            <span className="text-accent">Resultados Medibles</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/90 font-inter mb-8 max-w-3xl mx-auto">
            Soluciones estratégicas de marketing digital diseñadas específicamente para negocios locales en Choluteca. Cada servicio está enfocado en generar crecimiento real y medible para tu empresa.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: 'ChartBarIcon', text: 'ROI Medible' },
              { icon: 'UserGroupIcon', text: 'Enfoque Local' },
              { icon: 'CheckBadgeIcon', text: 'Resultados Garantizados' }
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
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Consulta Gratis</span>
            </a>
            <a
              href="#solutions-grid"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Icon name="ArrowDownIcon" size={24} variant="outline" />
              <span>Ver Soluciones</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;