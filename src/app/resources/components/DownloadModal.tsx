'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'checklist' | 'report' | 'toolkit';
  image: string;
  alt: string;
  downloadUrl: string;
  pages?: number;
  readTime?: string;
  featured?: boolean;
}

interface DownloadModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, name: string, business: string) => void;
}

const DownloadModal = ({ resource, isOpen, onClose, onSubmit }: DownloadModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    business: ''
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isOpen && isHydrated) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isHydrated]);

  if (!isHydrated || !isOpen || !resource) {
    return null;
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      business: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.business.trim()) {
      newErrors.business = 'El nombre del negocio es requerido';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.business;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData.email, formData.name, formData.business);
      setFormData({ name: '', email: '', business: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background bg-opacity-80 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-brand max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h3 className="text-xl font-bold font-poppins text-text-primary">
            Descargar Recurso
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            aria-label="Cerrar modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-muted rounded-lg p-4 mb-6">
            <h4 className="font-inter font-semibold text-text-primary mb-2">
              {resource.title}
            </h4>
            <p className="text-sm font-inter text-text-secondary">
              {resource.description}
            </p>
          </div>

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
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.name
                    ? 'border-error focus:ring-error' :'border-input focus:ring-primary'
                }`}
                placeholder="Juan Pérez"
              />
              {errors.name && (
                <p className="mt-1 text-xs font-inter text-error">{errors.name}</p>
              )}
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
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email
                    ? 'border-error focus:ring-error' :'border-input focus:ring-primary'
                }`}
                placeholder="juan@negocio.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs font-inter text-error">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-inter font-semibold text-text-primary mb-2">
                Nombre del Negocio *
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.business
                    ? 'border-error focus:ring-error' :'border-input focus:ring-primary'
                }`}
                placeholder="Mi Negocio Local"
              />
              {errors.business && (
                <p className="mt-1 text-xs font-inter text-error">{errors.business}</p>
              )}
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs font-inter text-text-secondary">
                  Al descargar este recurso, aceptas recibir correos con contenido de marketing y consejos para tu negocio. Puedes cancelar tu suscripción en cualquier momento.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-accent text-brand-accent-foreground py-3 rounded-lg font-inter font-bold text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-brand"
            >
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              <span>Descargar Ahora</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;