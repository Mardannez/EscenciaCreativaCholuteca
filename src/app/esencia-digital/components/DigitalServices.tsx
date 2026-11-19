import React from 'react';
import Icon from '@/components/ui/AppIcon';

const additionalServices = [
  {
    icon: 'GlobeAltIcon',
    title: 'Diseño de Páginas Web',
    description: 'Sitios web modernos, responsivos y orientados a conversión. Desde landing pages hasta portales corporativos.',
    items: ['Landing pages', 'Sitios corporativos', 'Catálogos digitales', 'Portafolios online'],
  },
  {
    icon: 'PaintBrushIcon',
    title: 'Identidad Visual y Branding',
    description: 'Creación y desarrollo de identidad de marca completa: logotipo, paleta de colores, tipografía y manual de marca.',
    items: ['Diseño de logotipo', 'Manual de marca', 'Papelería corporativa', 'Branding digital'],
  },
  {
    icon: 'MegaphoneIcon',
    title: 'Campañas Digitales',
    description: 'Anuncios pagados en Facebook, Instagram y Google para llegar a tu audiencia ideal con resultados medibles.',
    items: ['Facebook Ads', 'Instagram Ads', 'Segmentación avanzada', 'Reportes de ROI'],
  },
  {
    icon: 'PhotoIcon',
    title: 'Creación de Contenido',
    description: 'Diseño gráfico, fotografía de productos y contenido visual para todas tus plataformas digitales.',
    items: ['Diseño para redes', 'Fotografía de productos', 'Stories y banners', 'Infografías'],
  },
];

export default function DigitalServices() {
  return (
    <section className="py-24 px-6 bg-secondary" aria-labelledby="digital-services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Más Servicios</p>
          <h2 id="digital-services-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            Soluciones digitales{' '}
            <span className="font-serif italic font-normal text-accent">a tu medida.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalServices.map((service) => (
            <article
              key={service.title}
              className="glass-card rounded-3xl p-8 border border-border hover:border-accent/30 transition-all duration-300 group"
              aria-label={service.title}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon name={service.icon as 'GlobeAltIcon'} size={22} className="text-accent" variant="outline" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="text-xs font-semibold px-3 py-1 rounded-full border border-border text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}