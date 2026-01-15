'use client';

import React, { useState } from 'react';
import SolutionCard from './SolutionCard';
import SolutionFinder from './SolutionFinder';
import ROICalculator from './ROICalculator';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  benefits: string[];
  priceRange: string;
  caseStudyLink: string;
  ctaText: string;
  industry: string[];
  budget: string;
  goal: string[];
}

interface FilterState {
  industry: string;
  budget: string;
  goal: string;
}

const SolutionsInteractive = () => {
  const [filters, setFilters] = useState<FilterState>({
    industry: 'all',
    budget: 'all',
    goal: 'all'
  });

  const solutions: Solution[] = [
  {
    id: 'social-media',
    title: 'Marketing en Redes Sociales',
    description: 'Construye una comunidad activa y genera ventas constantes a través de estrategias de contenido y publicidad en Facebook, Instagram y TikTok.',
    icon: 'ChatBubbleLeftEllipsisIcon',
    image: "https://images.unsplash.com/photo-1652305310391-3d4a118170de",
    alt: 'Persona usando smartphone con iconos de redes sociales flotando sobre la pantalla',
    benefits: [
    'Gestión completa de perfiles sociales',
    'Contenido creativo y profesional',
    'Campañas publicitarias optimizadas',
    'Análisis de métricas y reportes mensuales',
    'Respuesta a comentarios y mensajes'],

    priceRange: 'L. 8.000/mes',
    caseStudyLink: '/case-studies',
    ctaText: 'Ver Casos de Éxito',
    industry: ['restaurant', 'retail', 'beauty', 'all'],
    budget: 'low',
    goal: ['brand', 'engagement', 'sales']
  },
  {
    id: 'google-ads',
    title: 'Publicidad en Google',
    description: 'Aparece primero cuando tus clientes buscan tus servicios. Campañas de Google Ads optimizadas para máximo ROI y conversiones.',
    icon: 'MagnifyingGlassIcon',
    image: "https://images.unsplash.com/photo-1586125674857-4eb86880905d",
    alt: 'Pantalla de computadora mostrando resultados de búsqueda de Google con anuncios destacados',
    benefits: [
    'Campañas de búsqueda y display',
    'Segmentación geográfica local',
    'Optimización de palabras clave',
    'Seguimiento de conversiones',
    'Reportes de rendimiento detallados'],

    priceRange: 'L. 12.000/mes',
    caseStudyLink: '/case-studies',
    ctaText: 'Solicitar Análisis',
    industry: ['clinic', 'services', 'education', 'all'],
    budget: 'medium',
    goal: ['leads', 'sales']
  },
  {
    id: 'web-design',
    title: 'Diseño Web Profesional',
    description: 'Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Diseño responsive y SEO incluido.',
    icon: 'ComputerDesktopIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f764f3ac-1764655547252.png",
    alt: 'Diseñador trabajando en laptop mostrando mockups de sitio web moderno y responsive',
    benefits: [
    'Diseño personalizado y moderno',
    'Optimización para móviles',
    'SEO básico incluido',
    'Formularios de contacto',
    'Integración con redes sociales'],

    priceRange: 'L. 15.000 - L. 35.000',
    caseStudyLink: '/case-studies',
    ctaText: 'Ver Portafolio',
    industry: ['clinic', 'services', 'education', 'retail', 'all'],
    budget: 'medium',
    goal: ['brand', 'leads']
  },
  {
    id: 'content-creation',
    title: 'Creación de Contenido',
    description: 'Fotografía, video y diseño gráfico profesional que cuenta la historia de tu marca y atrae a tu audiencia ideal.',
    icon: 'CameraIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c181dbc-1763292525559.png",
    alt: 'Fotógrafo profesional con cámara DSLR capturando imágenes de productos en estudio',
    benefits: [
    'Sesiones fotográficas profesionales',
    'Videos promocionales y reels',
    'Diseño gráfico para redes',
    'Edición y post-producción',
    'Banco de contenido mensual'],

    priceRange: 'L. 6.000/mes',
    caseStudyLink: '/case-studies',
    ctaText: 'Ver Galería',
    industry: ['restaurant', 'beauty', 'retail', 'all'],
    budget: 'low',
    goal: ['brand', 'engagement']
  },
  {
    id: 'seo-local',
    title: 'SEO Local',
    description: 'Domina las búsquedas locales en Google. Optimización para aparecer en Google Maps y búsquedas de "cerca de mí".',
    icon: 'MapPinIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc49d2b1-1767818906205.png",
    alt: 'Mapa digital con marcadores de ubicación y resultados de búsqueda local',
    benefits: [
    'Optimización de Google My Business',
    'Gestión de reseñas',
    'Citaciones en directorios locales',
    'Contenido optimizado para búsquedas locales',
    'Reportes de posicionamiento'],

    priceRange: 'L. 7.500/mes',
    caseStudyLink: '/case-studies',
    ctaText: 'Auditoría Gratis',
    industry: ['restaurant', 'clinic', 'beauty', 'services', 'all'],
    budget: 'low',
    goal: ['leads', 'brand']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Mantén contacto con tus clientes y genera ventas recurrentes con campañas de email automatizadas y personalizadas.',
    icon: 'EnvelopeIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_188b832b6-1767145415457.png",
    alt: 'Persona revisando emails en tablet con gráficos de campaña de marketing',
    benefits: [
    'Diseño de newsletters atractivos',
    'Automatización de campañas',
    'Segmentación de audiencias',
    'A/B testing de contenidos',
    'Análisis de tasas de apertura y clics'],

    priceRange: 'L. 5.500/mes',
    caseStudyLink: '/case-studies',
    ctaText: 'Comenzar Campaña',
    industry: ['retail', 'education', 'services', 'all'],
    budget: 'low',
    goal: ['sales', 'engagement']
  }];


  const filteredSolutions = solutions.filter((solution) => {
    const industryMatch = filters.industry === 'all' || solution.industry.includes(filters.industry);
    const budgetMatch = filters.budget === 'all' || solution.budget === filters.budget;
    const goalMatch = filters.goal === 'all' || solution.goal.includes(filters.goal);

    return industryMatch && budgetMatch && goalMatch;
  });

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Solution Finder */}
        <SolutionFinder onFilterChange={setFilters} />

        {/* Solutions Grid */}
        <div id="solutions-grid" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
              Nuestras Soluciones
            </h2>
            <p className="text-lg text-text-secondary font-inter">
              {filteredSolutions.length} {filteredSolutions.length === 1 ? 'solución encontrada' : 'soluciones encontradas'}
            </p>
          </div>

          {filteredSolutions.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) =>
            <SolutionCard key={solution.id} solution={solution} />
            )}
            </div> :

          <div className="text-center py-12">
              <p className="text-text-secondary font-inter text-lg mb-4">
                No se encontraron soluciones con los filtros seleccionados
              </p>
              <button
              onClick={() => setFilters({ industry: 'all', budget: 'all', goal: 'all' })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-semibold hover:bg-opacity-90 transition-all duration-300">

                Limpiar Filtros
              </button>
            </div>
          }
        </div>

        {/* ROI Calculator */}
        <ROICalculator />
      </div>
    </div>);

};

export default SolutionsInteractive;