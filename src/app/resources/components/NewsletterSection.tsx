import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
  className?: string;
}

const NewsletterSection = ({ onSubscribe, className = '' }: NewsletterSectionProps) => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('El correo electrónico es requerido');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Correo electrónico inválido');
      return;
    }

    onSubscribe(email);
    setEmail('');
    setError('');
  };

  return (
    <section className={`bg-gradient-to-br from-secondary via-secondary to-primary py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={32} variant="solid" className="text-brand-accent-foreground" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-secondary-foreground mb-4">
            Recibe Recursos Exclusivos
          </h2>
          
          <p className="text-lg font-inter text-secondary-foreground opacity-90 mb-8">
            Suscríbete a nuestro boletín y recibe guías, consejos y estrategias de marketing directamente en tu correo
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="tu@correo.com"
                  className={`w-full px-4 py-3 rounded-lg font-inter text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                    error
                      ? 'border-2 border-error focus:ring-error' :'border-0 focus:ring-brand-accent'
                  }`}
                />
                {error && (
                  <p className="mt-2 text-xs font-inter text-error bg-white bg-opacity-20 px-3 py-1 rounded">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-brand-accent text-brand-accent-foreground rounded-lg font-inter font-bold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-brand whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>
          
          <p className="mt-4 text-xs font-inter text-secondary-foreground opacity-75">
            No spam. Solo contenido valioso para tu negocio. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;