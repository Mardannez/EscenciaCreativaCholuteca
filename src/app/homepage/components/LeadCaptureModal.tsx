'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LeadCaptureModalProps {
  className?: string;
}

const LeadCaptureModal = ({ className = '' }: LeadCaptureModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const hasSeenModal = localStorage.getItem('leadCaptureModalSeen');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isHydrated]);

  const handleClose = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('leadCaptureModalSeen', 'true');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isHydrated || !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background bg-opacity-90"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors duration-300"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} variant="solid" className="text-text-primary" />
        </button>

        {/* Content */}
        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-accent to-brand-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name="GiftIcon" size={32} variant="solid" className="text-card" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-primary mb-2">
                  ¡Descarga Gratis!
                </h3>
                <p className="text-base font-inter text-text-secondary">
                  Guía Completa de Marketing para Negocios Locales
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-surface rounded-lg p-4 mb-6">
                <p className="text-sm font-nunito font-bold text-primary mb-3">
                  En esta guía aprenderás:
                </p>
                <ul className="space-y-2">
                  {[
                    "Estrategias de redes sociales que funcionan",
                    "Cómo atraer más clientes locales",
                    "Técnicas de publicidad efectivas",
                    "Medición de resultados y ROI"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-inter text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-semibold text-text-primary mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-brand-accent focus:outline-none transition-colors duration-300 font-inter"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-semibold text-text-primary mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-brand-accent focus:outline-none transition-colors duration-300 font-inter"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-inter font-semibold text-text-primary mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-brand-accent focus:outline-none transition-colors duration-300 font-inter"
                    placeholder="+504 9876-5432"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-inter font-semibold text-text-primary mb-2">
                    Nombre de tu Negocio *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-brand-accent focus:outline-none transition-colors duration-300 font-inter"
                    placeholder="Mi Negocio Local"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-brand-accent text-brand-accent-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Descargar Guía Gratis
                </button>

                <p className="text-xs font-inter text-text-tertiary text-center">
                  Al descargar, aceptas recibir información de Esencia Creativa
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto bg-brand-secondary rounded-full flex items-center justify-center mb-4">
                <Icon name="CheckIcon" size={40} variant="solid" className="text-brand-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-primary mb-2">
                ¡Gracias!
              </h3>
              <p className="text-base font-inter text-text-secondary">
                Revisa tu correo para descargar la guía
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;