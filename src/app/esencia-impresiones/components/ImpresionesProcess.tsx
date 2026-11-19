import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Consulta y Brief',
    description: 'Nos cuentas sobre tu proyecto: qué necesitas, para cuándo, dónde se va a instalar y el presupuesto aproximado.',
    icon: 'ChatBubbleLeftRightIcon',
  },
  {
    number: '02',
    title: 'Diseño y Arte Final',
    description: 'Nuestro equipo de diseño crea el arte o adapta el tuyo a las especificaciones técnicas de impresión.',
    icon: 'PencilSquareIcon',
  },
  {
    number: '03',
    title: 'Aprobación de Prueba',
    description: 'Te enviamos una prueba digital para tu revisión y aprobación antes de proceder con la producción.',
    icon: 'CheckBadgeIcon',
  },
  {
    number: '04',
    title: 'Producción e Instalación',
    description: 'Imprimimos con equipos de alta resolución y realizamos la instalación en el punto acordado.',
    icon: 'WrenchScrewdriverIcon',
  },
];

const benefits = [
  'Equipos de impresión de última generación',
  'Materiales de alta durabilidad',
  'Colores vibrantes y fieles al diseño',
  'Entrega en tiempo y forma',
  'Instalación profesional incluida',
  'Garantía en todos los trabajos',
];

export default function ImpresionesProcess() {
  return (
    <section className="py-24 px-6 bg-secondary" aria-labelledby="imp-process-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Process */}
          <div>
            <p className="section-label mb-4">Cómo trabajamos</p>
            <h2 id="imp-process-heading" className="text-card-xl font-bold tracking-tight text-foreground mb-12">
              Proceso simple,{' '}
              <span className="font-serif italic font-normal text-accent">resultados extraordinarios.</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-6 items-start">
                  {i < steps.length - 1 && (
                    <div
                      className="process-step-line"
                      aria-hidden="true"
                    />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 relative z-10">
                    <Icon name={step.icon as 'ChatBubbleLeftRightIcon'} size={18} className="text-accent" variant="outline" />
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-accent/60 tracking-widest">{step.number}</span>
                      <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-3xl p-8 border border-border">
            <p className="section-label mb-6">Beneficios</p>
            <h3 className="text-xl font-bold text-foreground mb-8">¿Por qué elegirnos para tu impresión?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                    <Icon name="CheckIcon" size={12} className="text-accent" variant="outline" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">Materiales disponibles</p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {['Lona Flex', 'Lona Mesh', 'Vinilo Autoadhesivo', 'Microperforado', 'Acrílico', 'PVC Rígido', 'Cartón Corrugado', 'Canvas Textil'].map((mat) => (
                  <span key={mat} className="text-xs text-muted-foreground py-1">· {mat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}