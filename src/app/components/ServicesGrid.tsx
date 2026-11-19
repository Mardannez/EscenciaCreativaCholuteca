'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  id: 'impresiones',
  title: 'Esencia Impresiones',
  subtitle: 'Impresión Profesional',
  description:
  'Soluciones impresas para marcas, negocios, eventos y campañas publicitarias que necesitan presencia visual profesional.',
  href: '/esencia-impresiones',
  icon: 'PrinterIcon',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_11705ec3a-1784351701103.png",
  imageAlt:
  'Impresión de banner publicitario de gran formato con colores vibrantes en taller profesional',
  tags: ['Banners', 'Lonas', 'Rótulos', 'Vinilos'],
  accentColor: 'rgba(232,184,75,0.15)'
},
{
  id: 'film',
  title: 'Esencia Film',
  subtitle: 'Producción Audiovisual',
  description:
  'Producción audiovisual para contar historias, promocionar marcas y crear contenido visual de alto impacto.',
  href: '/esencia-film',
  icon: 'FilmIcon',
  image:
  "https://images.unsplash.com/photo-1675635069927-cf0522ccdf6e",
  imageAlt:
  'Filmación cinematográfica con cámara profesional en estudio de producción con iluminación dramática',
  tags: ['Videos', 'Spots', 'Reels', 'Fotografía'],
  accentColor: 'rgba(180,120,220,0.12)'
},
{
  id: 'digital',
  title: 'Esencia Digital',
  subtitle: 'Marketing Digital',
  description:
  'Estrategias digitales para fortalecer la presencia online de marcas, negocios y empresas.',
  href: '/esencia-digital',
  icon: 'ComputerDesktopIcon',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1aa9dc19f-1773143932552.png",
  imageAlt:
  'Pantalla de computadora con diseño de redes sociales y estrategia de marketing digital sobre escritorio moderno',
  tags: ['Redes Sociales', 'Páginas Web', 'Branding', 'Campañas'],
  accentColor: 'rgba(80,180,120,0.12)'
},
{
  id: 'vallas',
  title: 'Esencia Vallas',
  subtitle: 'Publicidad Exterior',
  description:
  'Espacios publicitarios estratégicos en puntos geográficos de alto tránsito para dar visibilidad a marcas.',
  href: '/esencia-vallas',
  icon: 'MapPinIcon',
  image:
  "https://images.unsplash.com/photo-1616799896177-ed9081861015",
  imageAlt:
  'Valla publicitaria grande en avenida principal con tráfico vehicular intenso y cielo azul',
  tags: ['Vallas', 'Ubicaciones', 'Instalación', 'Diseño'],
  accentColor: 'rgba(80,140,220,0.12)'
}];


export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-28 px-6"
      aria-labelledby="services-heading">
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Nuestros Servicios</p>
            <h2
              id="services-heading"
              className="text-section-xl font-bold tracking-tight text-foreground">
              
              Cuatro líneas,{' '}
              <span className="font-serif italic font-normal text-accent">
                un solo propósito.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            Desde la impresión hasta la pantalla, cubrimos cada punto de contacto de tu marca.
          </p>
        </div>

        {/* BENTO GRID: 2 cols × 2 rows */}
        {/* Row 1: [col-1: Esencia Impresiones cs-1 rs-1] [col-2: Esencia Film cs-1 rs-1] */}
        {/* Row 2: [col-1: Esencia Digital cs-1 rs-1]    [col-2: Esencia Vallas cs-1 rs-1] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) =>
          <div
            key={service.id}
            ref={(el) => {cardRefs.current[i] = el;}}
            style={{ transitionDelay: `${i * 120}ms` }}>
            
              <Link href={service.href} className="block group" aria-label={`Ver detalles de ${service.title}`}>
                <article
                className="service-card glass-card rounded-3xl overflow-hidden border border-border h-full"
                aria-label={service.title}>
                
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <AppImage
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Floating label */}
                    <div className="absolute top-4 left-4">
                      <span className="section-label px-3 py-1.5 rounded-full glass-card border border-border">
                        {service.subtitle}
                      </span>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Icon name={service.icon as 'PrinterIcon'} size={18} className="text-accent" variant="outline" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="accent-line mb-5" />
                    <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {service.tags.map((tag) =>
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-border text-muted-foreground">
                      
                          {tag}
                        </span>
                    )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                      <span>Ver Detalle</span>
                      <Icon name="ArrowRightIcon" size={16} className="text-accent" variant="outline" />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>);

}