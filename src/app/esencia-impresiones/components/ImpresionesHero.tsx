import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function ImpresionesHero() {
  return (
    <section className="inner-page-hero pt-32 min-h-[60vh]" aria-label="Esencia Impresiones - Hero">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_13e14e0fc-1775187941352.png"
          alt="Taller de impresión con máquinas de gran formato y banners coloridos en proceso de producción"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.70) 0%, rgba(11,18,32,0.50) 40%, rgba(11,18,32,0.92) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-foreground/50" aria-label="Ruta de navegación">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <Icon name="ChevronRightIcon" size={14} className="text-foreground/30" variant="outline" />
          <span className="text-accent">Esencia Impresiones</span>
        </nav>

        <div className="max-w-3xl">
          <p className="section-label mb-5">Impresión Publicitaria</p>
          <h1 className="text-hero-xl font-bold tracking-tight text-foreground mb-6">
            Presencia visual{' '}
            <span className="font-serif italic font-normal text-accent">que impacta.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
            Soluciones impresas de gran formato para marcas, negocios, eventos y campañas publicitarias que necesitan presencia visual profesional en Choluteca y toda Honduras.
          </p>
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20cotizar%20un%20servicio%20de%20impresión."
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