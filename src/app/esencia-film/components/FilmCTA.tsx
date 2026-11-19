import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function FilmCTA() {
  return (
    <section className="py-24 px-6" aria-label="CTA Esencia Film">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 border border-accent/20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,184,75,0.1) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <p className="section-label mb-6">¿Listo para producir?</p>
          <h2 className="text-card-xl font-bold tracking-tight text-foreground mb-6">
            Cuenta tu historia con{' '}
            <span className="font-serif italic font-normal text-accent">Esencia Film.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Desde un reel para redes hasta una producción completa. Contáctanos y hablemos de tu proyecto audiovisual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20cotizar%20una%20producción%20audiovisual%20con%20Esencia%20Film."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
              Cotizar por WhatsApp
            </a>
            <a href="mailto:ventas@esenciacreativa.net" className="btn-outline">
              <Icon name="EnvelopeIcon" size={18} variant="outline" />
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}