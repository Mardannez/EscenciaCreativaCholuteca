import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function DigitalHero() {
  return (
    <section className="inner-page-hero pt-32 min-h-[60vh]" aria-label="Esencia Digital - Hero">
      <div className="absolute inset-0 -z-10">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1b41de59b-1775703916367.png"
          alt="Pantallas de computadora con gráficas de métricas digitales y análisis de marketing en oficina oscura moderna"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.42) 40%, rgba(11,18,32,0.93) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-foreground/50" aria-label="Ruta de navegación">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <Icon name="ChevronRightIcon" size={14} className="text-foreground/30" variant="outline" />
          <span className="text-accent">Esencia Digital</span>
        </nav>

        <div className="max-w-3xl">
          <p className="section-label mb-5">Marketing Digital</p>
          <h1 className="text-hero-xl font-bold tracking-tight text-foreground mb-6">
            Tu marca,{' '}
            <span className="font-serif italic font-normal text-accent">siempre visible.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
            Estrategias digitales para fortalecer la presencia online de tu marca. Redes sociales, páginas web, branding y campañas que generan resultados reales en Honduras.
          </p>
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20conocer%20sus%20planes%20de%20marketing%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary">
            
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>);

}