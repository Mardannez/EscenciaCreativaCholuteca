'use client';

import React, { useState, useEffect } from 'react';
import CaseStudyCard from './CaseStudyCard';
import FilterBar from './FilterBar';
import TestimonialCard from './TestimonialCard';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  alt: string;
  problem: string;
  solution: string;
  metrics: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
  tags: string[];
  resultType: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
}

const CaseStudiesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedResultType, setSelectedResultType] = useState('all');
  const [filteredCases, setFilteredCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const caseStudies: CaseStudy[] = [
  {
    id: 'restaurante-sabor-local',
    title: 'Restaurante Sabor Local: 250% Aumento en Reservaciones',
    client: 'Restaurante Sabor Local',
    industry: 'Restaurantes',
    image: "https://images.unsplash.com/photo-1552342294-b6cac11f3cec",
    alt: 'Interior moderno de restaurante con mesas de madera y decoración elegante con luces cálidas',
    problem: 'Restaurante familiar con baja visibilidad online y dependencia de clientes ocasionales. Solo 15% de ocupación en días laborales.',
    solution: 'Implementamos estrategia de marketing digital integral: Google My Business optimizado, campañas de Facebook Ads segmentadas, sistema de reservaciones online y programa de fidelización digital.',
    metrics: [
    { label: 'Reservaciones', value: '+250%', icon: 'CalendarIcon' },
    { label: 'Engagement', value: '+180%', icon: 'HeartIcon' },
    { label: 'ROI', value: '420%', icon: 'ChartBarIcon' }],

    tags: ['Google Ads', 'Redes Sociales', 'SEO Local'],
    resultType: 'sales'
  },
  {
    id: 'clinica-salud-integral',
    title: 'Clínica Salud Integral: 300+ Nuevos Pacientes en 3 Meses',
    client: 'Clínica Salud Integral',
    industry: 'Clínicas',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14589476d-1766294695509.png",
    alt: 'Recepción moderna de clínica médica con escritorio blanco y sala de espera luminosa',
    problem: 'Clínica nueva con cero presencia digital y dificultad para atraer pacientes en mercado competitivo.',
    solution: 'Desarrollamos estrategia de contenido educativo, campañas de Google Ads para servicios específicos, optimización SEO local y sistema de agendamiento online con recordatorios automáticos.',
    metrics: [
    { label: 'Pacientes', value: '+300', icon: 'UserGroupIcon' },
    { label: 'Citas Online', value: '65%', icon: 'DevicePhoneMobileIcon' },
    { label: 'Costo/Lead', value: '-45%', icon: 'ArrowTrendingDownIcon' }],

    tags: ['Google Ads', 'SEO Local', 'Marketing de Contenido'],
    resultType: 'leads'
  },
  {
    id: 'boutique-estilo-urbano',
    title: 'Boutique Estilo Urbano: Ventas Online Superan Tienda Física',
    client: 'Boutique Estilo Urbano',
    industry: 'Retail',
    image: "https://images.unsplash.com/photo-1621261027519-a71ac66d5a68",
    alt: 'Interior de boutique de ropa con perchas de madera y ropa colgada en exhibición moderna',
    problem: 'Tienda de ropa con ventas estancadas y sin presencia en comercio electrónico. Competencia de grandes cadenas.',
    solution: 'Creamos tienda online integrada con Instagram Shopping, campañas de influencer marketing local, contenido de moda semanal y programa de descuentos exclusivos digitales.',
    metrics: [
    { label: 'Ventas Online', value: '+380%', icon: 'ShoppingCartIcon' },
    { label: 'Seguidores', value: '+2.5K', icon: 'UserPlusIcon' },
    { label: 'Ticket Promedio', value: '+35%', icon: 'CurrencyDollarIcon' }],

    tags: ['E-commerce', 'Instagram Marketing', 'Influencers'],
    resultType: 'sales'
  },
  {
    id: 'salon-belleza-moderna',
    title: 'Salón Belleza Moderna: Agenda Completa por 2 Meses',
    client: 'Salón Belleza Moderna',
    industry: 'Belleza',
    image: "https://images.unsplash.com/photo-1633681122703-3ce20f1e978d",
    alt: 'Interior de salón de belleza con sillas de estilista modernas y espejos iluminados',
    problem: 'Salón de belleza con alta rotación de clientes y dificultad para mantener agenda llena. Dependencia de referencias boca a boca.',
    solution: 'Implementamos sistema de reservas online con recordatorios, campañas de Facebook e Instagram con antes/después, programa de referidos digital y promociones exclusivas para clientes recurrentes.',
    metrics: [
    { label: 'Reservas', value: '+220%', icon: 'ClockIcon' },
    { label: 'Retención', value: '85%', icon: 'ArrowPathIcon' },
    { label: 'Referidos', value: '+150%', icon: 'UserGroupIcon' }],

    tags: ['Redes Sociales', 'Sistema de Reservas', 'Programa de Referidos'],
    resultType: 'engagement'
  },
  {
    id: 'academia-idiomas-global',
    title: 'Academia Idiomas Global: 180 Nuevas Inscripciones',
    client: 'Academia Idiomas Global',
    industry: 'Educación',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100b79617-1764669441684.png",
    alt: 'Aula moderna de academia con estudiantes en clase de idiomas con pizarra interactiva',
    problem: 'Academia de idiomas con inscripciones bajas y competencia de plataformas online. Necesidad de diferenciación.',
    solution: 'Desarrollamos estrategia de contenido educativo gratuito, webinars semanales, campañas de Google Ads para cursos específicos y programa de prueba gratuita con seguimiento automatizado.',
    metrics: [
    { label: 'Inscripciones', value: '+180', icon: 'AcademicCapIcon' },
    { label: 'Webinars', value: '1.2K', icon: 'VideoCameraIcon' },
    { label: 'Conversión', value: '28%', icon: 'ChartBarIcon' }],

    tags: ['Google Ads', 'Webinars', 'Marketing de Contenido'],
    resultType: 'leads'
  },
  {
    id: 'ferreteria-construccion-pro',
    title: 'Ferretería Construcción Pro: Líder en Búsquedas Locales',
    client: 'Ferretería Construcción Pro',
    industry: 'Retail',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_198e3293c-1764682167687.png",
    alt: 'Interior de ferretería con estantes organizados de herramientas y materiales de construcción',
    problem: 'Ferretería tradicional perdiendo clientes ante competencia de grandes cadenas. Baja visibilidad en búsquedas locales.',
    solution: 'Optimizamos presencia en Google My Business, creamos catálogo digital de productos, implementamos WhatsApp Business para consultas y desarrollamos contenido de tutoriales de construcción.',
    metrics: [
    { label: 'Búsquedas', value: '+340%', icon: 'MagnifyingGlassIcon' },
    { label: 'Consultas', value: '+280%', icon: 'ChatBubbleLeftRightIcon' },
    { label: 'Ventas', value: '+165%', icon: 'ArrowTrendingUpIcon' }],

    tags: ['SEO Local', 'WhatsApp Business', 'Marketing de Contenido'],
    resultType: 'brand'
  }];


  const testimonials: Testimonial[] = [
  {
    name: 'María González',
    position: 'Propietaria',
    company: 'Restaurante Sabor Local',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138c375ea-1763300060914.png",
    alt: 'Mujer hispana de mediana edad con cabello castaño sonriendo en uniforme de chef',
    testimonial: 'Esencia Creativa transformó completamente nuestro negocio. Pasamos de tener mesas vacías a estar completamente reservados. Su estrategia digital nos dio la visibilidad que necesitábamos.',
    rating: 5
  },
  {
    name: 'Dr. Carlos Martínez',
    position: 'Director Médico',
    company: 'Clínica Salud Integral',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f147df5d-1763301649610.png",
    alt: 'Hombre profesional con bata médica blanca y estetoscopio sonriendo en consultorio',
    testimonial: 'En solo 3 meses logramos más de 300 nuevos pacientes. El equipo de Esencia Creativa entiende perfectamente el mercado local y sabe cómo generar resultados reales.',
    rating: 5
  },
  {
    name: 'Ana Rodríguez',
    position: 'Dueña',
    company: 'Boutique Estilo Urbano',
    image: "https://images.unsplash.com/photo-1650603697000-18d771fe3a7e",
    alt: 'Mujer joven con cabello largo oscuro sonriendo en boutique de ropa moderna',
    testimonial: 'Nunca imaginé que nuestras ventas online superarían a la tienda física. Esencia Creativa nos ayudó a construir una presencia digital sólida y rentable.',
    rating: 5
  }];


  useEffect(() => {
    if (!isHydrated) return;

    let filtered = caseStudies;

    if (selectedIndustry !== 'all') {
      const industryMap: {[key: string]: string;} = {
        restaurant: 'Restaurantes',
        clinic: 'Clínicas',
        retail: 'Retail',
        beauty: 'Belleza',
        education: 'Educación'
      };
      filtered = filtered.filter((cs) => cs.industry === industryMap[selectedIndustry]);
    }

    if (selectedResultType !== 'all') {
      filtered = filtered.filter((cs) => cs.resultType === selectedResultType);
    }

    setFilteredCases(filtered);
  }, [selectedIndustry, selectedResultType, isHydrated]);

  const handleReset = () => {
    setSelectedIndustry('all');
    setSelectedResultType('all');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-secondary to-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-primary-foreground mb-6">
            Casos de Éxito Comprobados
          </h1>
          <p className="text-xl font-source text-primary-foreground opacity-90 max-w-3xl mx-auto mb-8">
            Descubre cómo hemos transformado negocios locales en Choluteca con estrategias digitales que generan resultados medibles y crecimiento sostenible.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary-foreground">
            <Icon name="CheckBadgeIcon" size={24} variant="solid" />
            <span className="font-inter font-semibold">Resultados Reales • Clientes Satisfechos • ROI Comprobado</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 -mt-8">
        <FilterBar
          selectedIndustry={selectedIndustry}
          selectedResultType={selectedResultType}
          onIndustryChange={setSelectedIndustry}
          onResultTypeChange={setSelectedResultType}
          onReset={handleReset} />

      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredCases.length > 0 ?
        <>
            <div className="text-center mb-8">
              <p className="text-lg font-inter text-text-secondary">
                Mostrando <span className="font-bold text-primary">{filteredCases.length}</span> casos de éxito
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseStudy) =>
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            )}
            </div>
          </> :

        <div className="text-center py-16">
            <Icon name="FaceFrownIcon" size={64} variant="outline" className="text-text-tertiary mx-auto mb-4" />
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
              No se encontraron casos
            </h3>
            <p className="text-lg font-source text-text-secondary mb-6">
              Intenta ajustar los filtros para ver más resultados
            </p>
            <button
            onClick={handleReset}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-nunito font-bold hover:bg-opacity-90 transition-all duration-300">

              Limpiar Filtros
            </button>
          </div>
        }
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg font-source text-text-secondary max-w-2xl mx-auto">
              Testimonios reales de empresarios locales que han transformado sus negocios con nuestras estrategias digitales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
            <TestimonialCard key={index} {...testimonial} />
            )}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Nuestro Proceso Comprobado
          </h2>
          <p className="text-lg font-source text-text-secondary max-w-2xl mx-auto">
            Metodología transparente que garantiza resultados medibles en cada etapa del proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
          {
            step: '01',
            title: 'Análisis Profundo',
            description: 'Evaluamos tu negocio, competencia y oportunidades de mercado.',
            icon: 'MagnifyingGlassIcon'
          },
          {
            step: '02',
            title: 'Estrategia Personalizada',
            description: 'Diseñamos plan de acción específico para tus objetivos.',
            icon: 'LightBulbIcon'
          },
          {
            step: '03',
            title: 'Implementación',
            description: 'Ejecutamos campañas con monitoreo constante y optimización.',
            icon: 'RocketLaunchIcon'
          },
          {
            step: '04',
            title: 'Resultados Medibles',
            description: 'Reportes transparentes con métricas claras de ROI.',
            icon: 'ChartBarIcon'
          }].
          map((process, index) =>
          <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={process.icon as any} size={40} variant="solid" className="text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-brand-accent text-brand-accent-foreground rounded-full flex items-center justify-center font-poppins font-bold text-lg">
                  {process.step}
                </div>
              </div>
              <h3 className="text-xl font-poppins font-bold text-text-primary mb-3">
                {process.title}
              </h3>
              <p className="text-sm font-source text-text-secondary">
                {process.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-surface py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-brand p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-poppins font-bold text-text-primary mb-4">
                  Descarga Nuestro Portafolio Completo
                </h2>
                <p className="text-lg font-source text-text-secondary mb-6">
                  Obtén acceso a casos de estudio detallados, métricas completas y estrategias implementadas en formato PDF.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                  'Análisis detallado de cada proyecto',
                  'Métricas y resultados específicos',
                  'Estrategias implementadas paso a paso',
                  'Testimonios completos de clientes'].
                  map((item, index) =>
                  <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0" />
                      <span className="font-source text-text-secondary">{item}</span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-source text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Juan Pérez" />

                  </div>
                  <div>
                    <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
                      Email Empresarial *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-source text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="juan@empresa.com" />

                  </div>
                  <div>
                    <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-source text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Mi Empresa S.A." />

                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-brand-accent text-brand-accent-foreground rounded-md font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-md">

                    <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
                    <span>Descargar Portafolio PDF</span>
                  </button>
                  <p className="text-xs font-inter text-text-tertiary text-center">
                    Al descargar, aceptas recibir información sobre nuestros servicios
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default CaseStudiesInteractive;