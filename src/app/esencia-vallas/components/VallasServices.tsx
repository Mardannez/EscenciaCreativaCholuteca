import React from 'react';
import Icon from '@/components/ui/AppIcon';

const included = [
  {
    icon: 'PaintBrushIcon',
    title: 'Diseño de Arte',
    description: 'Creamos el arte de tu valla adaptado a las medidas exactas del punto elegido. Incluye revisiones hasta aprobación.',
  },
  {
    icon: 'PrinterIcon',
    title: 'Producción de Lona',
    description: 'Impresión de lona publicitaria de alta resolución con materiales resistentes al sol, lluvia y viento.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Instalación Profesional',
    description: 'Nuestro equipo técnico realiza la instalación de forma segura y profesional en el punto acordado.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Mantenimiento',
    description: 'Servicio de mantenimiento y reposición de lona durante el período contratado. Tu valla siempre en óptimas condiciones.',
  },
];

const formats = [
  { label: 'Valla Estándar', size: '8m × 4m', desc: 'El formato más común para carreteras y avenidas principales.' },
  { label: 'Valla Grande', size: '10m × 5m', desc: 'Máximo impacto para ubicaciones de alto tránsito en carreteras.' },
  { label: 'Valla Mediana', size: '6m × 3m', desc: 'Ideal para zonas urbanas, boulevards y avenidas secundarias.' },
  { label: 'Valla Pequeña', size: '5m × 2.5m', desc: 'Perfecta para zonas peatonales, mercados y locales comerciales.' },
];

export default function VallasServices() {
  return (
    <section className="py-24 px-6 bg-secondary" aria-labelledby="vallas-services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Included Services */}
          <div>
            <p className="section-label mb-4">Todo incluido</p>
            <h2
              id="vallas-services-heading"
              className="text-card-xl font-bold tracking-tight text-foreground mb-10"
            >
              De la idea a la{' '}
              <span className="font-serif italic font-normal text-accent">valla instalada.</span>
            </h2>
            <div className="space-y-6">
              {included.map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon name={item.icon as 'PaintBrushIcon'} size={20} className="text-accent" variant="outline" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div>
            <p className="section-label mb-4">Formatos disponibles</p>
            <h3 className="text-card-xl font-bold tracking-tight text-foreground mb-10">
              Medidas y{' '}
              <span className="font-serif italic font-normal text-accent">formatos.</span>
            </h3>
            <div className="space-y-4">
              {formats.map((fmt) => (
                <div
                  key={fmt.label}
                  className="glass-card rounded-2xl p-5 border border-border hover:border-accent/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-foreground">{fmt.label}</h4>
                    <span className="text-sm font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      {fmt.size}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{fmt.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-start gap-3">
                <Icon name="LightBulbIcon" size={18} className="text-accent mt-0.5 shrink-0" variant="outline" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <span className="font-bold text-accent">¿No encuentras el formato que necesitas?</span> Contáctanos. Trabajamos con medidas personalizadas según la estructura disponible en cada punto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}