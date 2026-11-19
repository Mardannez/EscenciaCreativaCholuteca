import React from 'react';
import Icon from '@/components/ui/AppIcon';

const plans = [
  {
    name: 'Plan Básico',
    price: 'Desde L. 2,500',
    period: '/mes',
    description: 'Ideal para negocios que están iniciando su presencia digital.',
    features: [
      '8 publicaciones al mes',
      'Diseño de contenido',
      'Manejo de 1 red social',
      'Reporte mensual',
      'Respuesta a comentarios',
    ],
    highlight: false,
    cta: 'Elegir Plan Básico',
  },
  {
    name: 'Plan Profesional',
    price: 'Desde L. 5,000',
    period: '/mes',
    description: 'Para marcas que quieren crecimiento consistente y presencia activa.',
    features: [
      '16 publicaciones al mes',
      'Diseño + fotografía básica',
      'Manejo de 2 redes sociales',
      'Calendario editorial',
      'Reporte semanal',
      'Atención a mensajes',
      '1 campaña pagada incluida',
    ],
    highlight: true,
    cta: 'Elegir Plan Profesional',
  },
  {
    name: 'Plan Premium',
    price: 'Desde L. 9,500',
    period: '/mes',
    description: 'Solución completa para empresas que exigen resultados medibles.',
    features: [
      '24 publicaciones al mes',
      'Diseño + producción de reels',
      'Manejo de 3 redes sociales',
      'Estrategia de contenido',
      'Reportes semanales + análisis',
      'Community management completo',
      '2 campañas pagadas incluidas',
      'Sesión fotográfica mensual',
    ],
    highlight: false,
    cta: 'Elegir Plan Premium',
  },
];

export default function DigitalPlans() {
  return (
    <section className="py-24 px-6" aria-labelledby="digital-plans-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Planes de Redes Sociales</p>
          <h2 id="digital-plans-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            Planes para cada{' '}
            <span className="font-serif italic font-normal text-accent">etapa de tu marca.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Todos los planes incluyen diseño profesional, estrategia de contenido y reportes de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans?.map((plan) => (
            <article
              key={plan?.name}
              className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                plan?.highlight
                  ? 'border-accent/50 bg-accent/5 relative' :'glass-card border-border hover:border-accent/30'
              }`}
              aria-label={plan?.name}
            >
              {plan?.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-2">{plan?.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold text-accent">{plan?.price}</span>
                  <span className="text-sm text-muted-foreground">{plan?.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan?.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan?.features?.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="CheckIcon" size={10} className="text-accent" variant="outline" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/50427800441?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(plan?.name)}%20de%20Esencia%20Digital.`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan?.highlight ? 'btn-primary justify-center' : 'btn-outline justify-center'}
              >
                {plan?.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * Los precios son orientativos. Contáctanos para un presupuesto personalizado según tus necesidades.
        </p>
      </div>
    </section>
  );
}