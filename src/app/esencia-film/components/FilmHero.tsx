import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function FilmHero() {
  return (
    <section className="inner-page-hero pt-32 min-h-[60vh]" aria-label="Esencia Film - Hero">
      <div className="absolute inset-0 -z-10">
        <AppImage
          src="https://images.unsplash.com/photo-1702126952856-f366d8cb5462"
          alt="Equipo de filmación en estudio cinematográfico con cámara de cine y luces de producción en atmósfera oscura"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.75) 0%, rgba(11,18,32,0.45) 40%, rgba(11,18,32,0.94) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-foreground/50" aria-label="Ruta de navegación">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <Icon name="ChevronRightIcon" size={14} className="text-foreground/30" variant="outline" />
          <span className="text-accent">Esencia Film</span>
        </nav>

        <div className="max-w-3xl">
          <p className="section-label mb-5">Producción Audiovisual</p>
          <h1 className="text-hero-xl font-bold tracking-tight text-foreground mb-6">
            Historias que{' '}
            <span className="font-serif italic font-normal text-accent">emocionan.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
            Producción audiovisual para contar historias, promocionar marcas y crear contenido visual de alto impacto. Desde spots publicitarios hasta videos institucionales en Honduras.
          </p>
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20cotizar%20una%20producción%20audiovisual."
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