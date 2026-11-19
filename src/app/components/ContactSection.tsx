'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactInfo = [
  {
    icon: 'PhoneIcon',
    label: 'Teléfono',
    value: '+504 2780-0441',
    href: 'tel:+50427800441',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email Principal',
    value: 'info@esenciacreativa.net',
    href: 'mailto:info@esenciacreativa.net',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Ventas',
    value: 'ventas@esenciacreativa.net',
    href: 'mailto:ventas@esenciacreativa.net',
  },
  {
    icon: 'MapPinIcon',
    label: 'Dirección',
    value: 'Barrio Guadalupe, media cuadra al Oeste de Televida canal 63, Choluteca, Honduras.',
    href: 'https://maps.google.com/?q=Choluteca,Honduras',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.name}. Me interesa el servicio de ${formData.service}. ${formData.message}`;
    window.open(`https://wa.me/50427800441?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-28 px-6" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Contáctanos</p>
          <h2
            id="contact-heading"
            className="text-section-xl font-bold tracking-tight text-foreground"
          >
            ¿Listo para{' '}
            <span className="font-serif italic font-normal text-accent">destacar tu marca?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cuéntanos sobre tu proyecto. Estamos listos para crear algo extraordinario juntos.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-accent/40 hover:bg-secondary/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon name={item.icon as 'PhoneIcon'} size={18} className="text-accent" variant="outline" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-relaxed">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20cotizar%20un%20servicio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/esenciacreativa.net/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Esencia Creativa" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Icon name="GlobeAltIcon" size={18} variant="outline" />
              </a>
              <a href="https://www.instagram.com/esencia.creativa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Esencia Creativa" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Icon name="CameraIcon" size={18} variant="outline" />
              </a>
              <a href="https://www.youtube.com/channel/UCfPT9QHhl_XEo1aa7OiPhYg" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Esencia Creativa" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Icon name="PlayCircleIcon" size={18} variant="outline" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 border border-border space-y-6"
            aria-label="Formulario de contacto"
          >
            <h3 className="text-xl font-bold text-foreground">Cuéntanos sobre tu proyecto</h3>
            <div className="accent-line" />

            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Tu Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Tu Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Servicio de Interés
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Selecciona un servicio</option>
                <option value="Esencia Impresiones">Esencia Impresiones</option>
                <option value="Esencia Film">Esencia Film</option>
                <option value="Esencia Digital">Esencia Digital</option>
                <option value="Esencia Vallas">Esencia Vallas</option>
                <option value="Todos los servicios">Varios / No sé aún</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Tu Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto, presupuesto o cualquier pregunta..."
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <Icon name="PaperAirplaneIcon" size={18} variant="outline" />
              Enviar por WhatsApp
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}