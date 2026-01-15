'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Marketing Digital Integral',
    'Gestión de Redes Sociales',
    'Publicidad en Google Ads',
    'Diseño Web y SEO',
    'Producción Audiovisual',
    'Branding y Diseño Gráfico'
  ];

  const budgetRanges = [
    'L. 5,000 - L. 10,000',
    'L. 10,000 - L. 20,000',
    'L. 20,000 - L. 50,000',
    'Más de L. 50,000',
    'Por definir'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido';
    }

    if (!formData.business.trim()) {
      newErrors.business = 'El nombre del negocio es requerido';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    if (!formData.budget) {
      newErrors.budget = 'Selecciona un presupuesto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      service: '',
      budget: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
              Agenda Tu Consulta Gratuita
            </h2>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para discutir cómo podemos ayudarte a crecer.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-brand p-6 lg:p-10">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-success mb-1">¡Mensaje Enviado!</h3>
                  <p className="text-sm text-text-secondary">
                    Gracias por contactarnos. Nos comunicaremos contigo pronto.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.name ? 'border-error' : 'border-border'
                    }`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.email ? 'border-error' : 'border-border'
                    }`}
                    placeholder="juan@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.phone ? 'border-error' : 'border-border'
                    }`}
                    placeholder="+504 9876-5432"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Nombre del Negocio *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.business ? 'border-error' : 'border-border'
                    }`}
                    placeholder="Mi Empresa S.A."
                  />
                  {errors.business && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.business}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.service ? 'border-error' : 'border-border'
                    }`}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                    Presupuesto Mensual *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.budget ? 'border-error' : 'border-border'
                    }`}
                  >
                    <option value="">Selecciona un rango</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-error font-inter">{errors.budget}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2 font-inter">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Describe brevemente tus objetivos y desafíos actuales..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <p className="text-sm text-text-tertiary font-inter">
                  * Campos requeridos
                </p>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-brand disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} variant="solid" className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                      <span>Enviar Consulta</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;