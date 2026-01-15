'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const headlines = [
    {
      title: "Transformamos Ideas en Resultados Medibles",
      subtitle: "Agencia de marketing digital que impulsa el crecimiento de negocios locales en Choluteca con estrategias comprobadas y ROI transparente"
    },
    {
      title: "Tu Socio de Crecimiento Local",
      subtitle: "Más que una agencia: somos el aliado estratégico que entiende los desafíos únicos de tu negocio en Honduras"
    },
    {
      title: "Creatividad con Propósito",
      subtitle: "De la producción audiovisual al marketing integral: evolución que genera resultados reales para empresas reales"
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, headlines.length]);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://wa.me/50498765432', '_blank');
    }
  };

  const headline = headlines[currentHeadline];

  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Headline with A/B Testing */}
            <div className="min-h-[180px] lg:min-h-[200px]">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-primary-foreground mb-6 transition-opacity duration-500">
                {headline.title}
              </h1>
              <p className="text-lg lg:text-xl font-inter text-primary-foreground opacity-90 mb-8">
                {headline.subtitle}
              </p>
            </div>

            {/* Value Proposition Bullets */}
            <div className="space-y-4 mb-8">
              {[
                "Estrategias personalizadas para negocios locales",
                "Resultados medibles con reportes transparentes",
                "Equipo experto en el mercado hondureño"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1">
                    <Icon name="CheckIcon" size={16} variant="solid" className="text-brand-accent-foreground" />
                  </div>
                  <p className="text-base lg:text-lg font-inter text-primary-foreground">{item}</p>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-accent text-brand-accent-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Agenda tu Consulta Gratis
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-card text-primary rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                <span>Chatea con Nosotros</span>
              </button>
            </div>

            {/* Headline Indicators */}
            {isHydrated && (
              <div className="flex justify-center lg:justify-start space-x-2 mt-8">
                {headlines.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeadline(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentHeadline === index ? 'bg-brand-accent w-8' : 'bg-primary-foreground opacity-50'
                    }`}
                    aria-label={`Go to headline ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-brand-secondary opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="w-32 h-32 mx-auto bg-card rounded-full flex items-center justify-center shadow-xl">
                    <Icon name="ChartBarIcon" size={64} variant="solid" className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold font-poppins text-card">+150%</p>
                    <p className="text-xl font-inter text-card">Crecimiento Promedio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                  <Icon name="UserGroupIcon" size={24} variant="solid" className="text-brand-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-poppins text-primary">50+</p>
                  <p className="text-sm font-inter text-text-secondary">Clientes Activos</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                  <Icon name="StarIcon" size={24} variant="solid" className="text-brand-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-poppins text-primary">4.9/5</p>
                  <p className="text-sm font-inter text-text-secondary">Satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;