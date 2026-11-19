import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Briefing Creativo',
    description: 'Entendemos tu objetivo, audiencia, mensaje y plazos. Definimos el tipo de producción ideal para tu marca.',
    icon: 'LightBulbIcon',
  },
  {
    number: '02',
    title: 'Pre-producción',
    description: 'Desarrollamos el guión, storyboard, plan de rodaje, selección de locaciones y logística de producción.',
    icon: 'ClipboardDocumentListIcon',
  },
  {
    number: '03',
    title: 'Producción',
    description: 'Grabación con equipos profesionales, dirección de arte, actuación o locución según el tipo de proyecto.',
    icon: 'VideoCameraIcon',
  },
  {
    number: '04',
    title: 'Post-producción',
    description: 'Edición, color grading, efectos visuales, música, subtítulos y revisiones hasta tu aprobación final.',
    icon: 'FilmIcon',
  },
  {
    number: '05',
    title: 'Entrega y Distribución',
    description: 'Entregamos en los formatos que necesitas: TV, web, redes sociales, pantallas digitales o presentaciones.',
    icon: 'ArrowUpTrayIcon',
  },
];

export default function FilmProcess() {
  return (
    <section className="py-24 px-6 bg-secondary" aria-labelledby="film-process-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Nuestro proceso</p>
          <h2 id="film-process-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            De la idea a{' '}
            <span className="font-serif italic font-normal text-accent">la pantalla.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-full w-full h-px border-t border-dashed border-accent/20 z-0" style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }} aria-hidden="true" />
              )}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-5">
                  <Icon name={step.icon as 'LightBulbIcon'} size={18} className="text-accent" variant="outline" />
                </div>
                <span className="text-xs font-bold text-accent/50 tracking-widest block mb-2">{step.number}</span>
                <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment highlight */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cámaras Cinema 4K', icon: 'VideoCameraIcon' },
              { label: 'Drones Profesionales', icon: 'PaperAirplaneIcon' },
              { label: 'Iluminación LED', icon: 'SunIcon' },
              { label: 'Audio Profesional', icon: 'MicrophoneIcon' },
            ].map((eq) => (
              <div key={eq.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon name={eq.icon as 'VideoCameraIcon'} size={20} className="text-accent" variant="outline" />
                </div>
                <span className="text-sm font-semibold text-foreground/80">{eq.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}