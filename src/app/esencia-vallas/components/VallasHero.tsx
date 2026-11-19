import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function VallasHero() {
  return (
    <section className="inner-page-hero pt-32 min-h-[60vh]" aria-label="Esencia Vallas - Hero">
      <div className="absolute inset-0 -z-10">
        <AppImage
          src="https://images.unsplash.com/photo-1727189424443-1d857da2a264"
          alt="Valla publicitaria de gran formato en avenida principal con tráfico vehicular intenso bajo cielo nublado oscuro"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(180deg, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.45) 40%, rgba(11,18,32,0.93) 100%)'
          }} />
        
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav
          className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-foreground/50"
          aria-label="Ruta de navegación">
          
          <Link href="/" className="hover:text-accent transition-colors">
            Inicio
          </Link>
          <Icon name="ChevronRightIcon" size={14} className="text-foreground/30" variant="outline" />
          <span className="text-accent">Esencia Vallas</span>
        </nav>

        <div className="max-w-3xl">
          <p className="section-label mb-5">Publicidad Exterior</p>
          <h1 className="text-hero-xl font-bold tracking-tight text-foreground mb-6">
            Tu marca en los{' '}
            <span className="font-serif italic font-normal text-accent">puntos que importan.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
            Espacios publicitarios estratégicos en puntos geográficos de alto tránsito en Choluteca y Honduras. Diseño, producción e instalación de lona incluidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#ubicaciones" className="btn-primary">
              <Icon name="MapPinIcon" size={18} variant="outline" />
              Ver Ubicaciones
            </a>
            <a
              href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20cotizar%20un%20espacio%20de%20valla%20publicitaria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline">
              
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>);

}