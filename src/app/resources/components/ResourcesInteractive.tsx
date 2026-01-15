'use client';

import React, { useState, useEffect } from 'react';
import ResourceHero from './ResourceHero';
import ResourceCategories from './ResourceCategories';
import ResourceCard from './ResourceCard';
import DownloadModal from './DownloadModal';
import NewsletterSection from './NewsletterSection';
import FeaturedResources from './FeaturedResources';
import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

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

interface FeaturedResource {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  color: string;
}

const ResourcesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  {
    id: 'all',
    name: 'Todos los Recursos',
    icon: 'RectangleStackIcon',
    count: 15,
    description: 'Ver todos los recursos disponibles'
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    icon: 'MegaphoneIcon',
    count: 5,
    description: 'Estrategias y guías de marketing'
  },
  {
    id: 'social',
    name: 'Redes Sociales',
    icon: 'ShareIcon',
    count: 4,
    description: 'Gestión de redes sociales'
  },
  {
    id: 'seo',
    name: 'SEO Local',
    icon: 'MagnifyingGlassIcon',
    count: 3,
    description: 'Optimización para búsquedas locales'
  },
  {
    id: 'content',
    name: 'Creación de Contenido',
    icon: 'PencilSquareIcon',
    count: 3,
    description: 'Guías de contenido efectivo'
  }];


  const resources: Resource[] = [
  {
    id: '1',
    title: 'Guía Completa de Marketing para Restaurantes',
    description: 'Estrategias probadas para atraer más clientes a tu restaurante local. Incluye tácticas de redes sociales, promociones efectivas y gestión de reseñas.',
    category: 'marketing',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1571143427369-fefcdbead97a",
    alt: 'Interior de restaurante moderno con mesas elegantes y decoración contemporánea',
    downloadUrl: '/downloads/restaurant-marketing-guide.pdf',
    pages: 32,
    readTime: '45 min',
    featured: true
  },
  {
    id: '2',
    title: 'Checklist de Marketing para Clínicas',
    description: 'Lista completa de acciones de marketing para clínicas médicas y dentales. Desde presencia online hasta captación de pacientes.',
    category: 'marketing',
    type: 'checklist',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14589476d-1766294695509.png",
    alt: 'Recepción de clínica moderna con personal médico atendiendo pacientes',
    downloadUrl: '/downloads/clinic-marketing-checklist.pdf',
    pages: 12,
    readTime: '20 min',
    featured: false
  },
  {
    id: '3',
    title: 'Toolkit de Redes Sociales para Negocios Locales',
    description: 'Herramientas, plantillas y calendarios de contenido para gestionar tus redes sociales de manera efectiva.',
    category: 'social',
    type: 'toolkit',
    image: "https://images.unsplash.com/photo-1684570862144-1b0e1f392428",
    alt: 'Persona usando smartphone con iconos de redes sociales flotando en pantalla',
    downloadUrl: '/downloads/social-media-toolkit.pdf',
    pages: 24,
    readTime: '30 min',
    featured: true
  },
  {
    id: '4',
    title: 'Reporte: Tendencias de Marketing Digital 2026',
    description: 'Análisis de las últimas tendencias en marketing digital y cómo aplicarlas a negocios locales en Honduras.',
    category: 'marketing',
    type: 'report',
    image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0",
    alt: 'Gráficos de análisis de datos y tendencias en pantalla de computadora',
    downloadUrl: '/downloads/digital-trends-2026.pdf',
    pages: 18,
    readTime: '25 min',
    featured: false
  },
  {
    id: '5',
    title: 'Guía de SEO Local para Choluteca',
    description: 'Optimiza tu presencia en búsquedas locales de Google. Estrategias específicas para negocios en Choluteca.',
    category: 'seo',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1586125674857-4eb86880905d",
    alt: 'Pantalla de computadora mostrando resultados de búsqueda de Google',
    downloadUrl: '/downloads/local-seo-guide.pdf',
    pages: 28,
    readTime: '40 min',
    featured: true
  },
  {
    id: '6',
    title: 'Checklist de Contenido para Redes Sociales',
    description: 'Planifica y crea contenido atractivo para tus redes sociales con esta lista de verificación completa.',
    category: 'content',
    type: 'checklist',
    image: "https://images.unsplash.com/photo-1676276376474-74ab06e89307",
    alt: 'Escritorio con laptop, café y notas de planificación de contenido',
    downloadUrl: '/downloads/content-checklist.pdf',
    pages: 10,
    readTime: '15 min',
    featured: false
  },
  {
    id: '7',
    title: 'Guía de Instagram para Negocios Locales',
    description: 'Aprende a usar Instagram efectivamente para promocionar tu negocio local y conectar con clientes.',
    category: 'social',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1698399480524-c6b256c2fe80",
    alt: 'Smartphone mostrando aplicación de Instagram con feed de fotos',
    downloadUrl: '/downloads/instagram-business-guide.pdf',
    pages: 22,
    readTime: '35 min',
    featured: false
  },
  {
    id: '8',
    title: 'Toolkit de Email Marketing',
    description: 'Plantillas, ejemplos y estrategias para crear campañas de email marketing efectivas.',
    category: 'marketing',
    type: 'toolkit',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a4fa173-1766771803479.png",
    alt: 'Pantalla de computadora con interfaz de email marketing y estadísticas',
    downloadUrl: '/downloads/email-marketing-toolkit.pdf',
    pages: 26,
    readTime: '38 min',
    featured: false
  },
  {
    id: '9',
    title: 'Reporte de Comportamiento del Consumidor Local',
    description: 'Datos y análisis sobre cómo los consumidores locales toman decisiones de compra.',
    category: 'marketing',
    type: 'report',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e54b4b6b-1768342492926.png",
    alt: 'Gráficos de barras y estadísticas de comportamiento del consumidor',
    downloadUrl: '/downloads/consumer-behavior-report.pdf',
    pages: 20,
    readTime: '28 min',
    featured: false
  },
  {
    id: '10',
    title: 'Guía de Google My Business',
    description: 'Optimiza tu perfil de Google My Business para aparecer en búsquedas locales y atraer más clientes.',
    category: 'seo',
    type: 'guide',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1077f57d5-1766763262723.png",
    alt: 'Mapa de Google mostrando ubicaciones de negocios locales',
    downloadUrl: '/downloads/google-my-business-guide.pdf',
    pages: 16,
    readTime: '22 min',
    featured: false
  },
  {
    id: '11',
    title: 'Checklist de Publicidad en Facebook',
    description: 'Pasos esenciales para crear y optimizar campañas publicitarias efectivas en Facebook.',
    category: 'social',
    type: 'checklist',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1cfcf41-1766268357915.png",
    alt: 'Interfaz de Facebook Ads Manager con campañas publicitarias',
    downloadUrl: '/downloads/facebook-ads-checklist.pdf',
    pages: 14,
    readTime: '18 min',
    featured: false
  },
  {
    id: '12',
    title: 'Guía de Fotografía para Negocios',
    description: 'Consejos prácticos para tomar fotos profesionales de tus productos y servicios con tu smartphone.',
    category: 'content',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1620983391545-01aa94dd5d38",
    alt: 'Fotógrafo tomando fotos de productos con cámara profesional',
    downloadUrl: '/downloads/business-photography-guide.pdf',
    pages: 19,
    readTime: '26 min',
    featured: false
  },
  {
    id: '13',
    title: 'Toolkit de Análisis de Competencia',
    description: 'Herramientas y metodologías para analizar a tu competencia y encontrar oportunidades de mercado.',
    category: 'marketing',
    type: 'toolkit',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdfc708b-1768342490142.png",
    alt: 'Documentos de análisis competitivo con gráficos y notas',
    downloadUrl: '/downloads/competitor-analysis-toolkit.pdf',
    pages: 21,
    readTime: '32 min',
    featured: false
  },
  {
    id: '14',
    title: 'Guía de Palabras Clave Locales',
    description: 'Encuentra y utiliza las palabras clave correctas para que tu negocio aparezca en búsquedas locales.',
    category: 'seo',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1724690683713-f7bdcf4dbb66",
    alt: 'Persona investigando palabras clave en laptop con notas',
    downloadUrl: '/downloads/local-keywords-guide.pdf',
    pages: 17,
    readTime: '24 min',
    featured: false
  },
  {
    id: '15',
    title: 'Checklist de Lanzamiento de Campaña',
    description: 'Verifica todos los elementos antes de lanzar tu próxima campaña de marketing digital.',
    category: 'content',
    type: 'checklist',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1475422f0-1765622117591.png",
    alt: 'Lista de verificación en tablet con elementos marcados',
    downloadUrl: '/downloads/campaign-launch-checklist.pdf',
    pages: 8,
    readTime: '12 min',
    featured: false
  }];


  const featuredResources: FeaturedResource[] = [
  {
    id: '1',
    title: 'Guía de Marketing para Restaurantes',
    description: 'El recurso más completo para restaurantes locales',
    image: "https://images.unsplash.com/photo-1571143427369-fefcdbead97a",
    alt: 'Interior de restaurante moderno con mesas elegantes y decoración contemporánea',
    icon: 'BookOpenIcon',
    color: 'bg-brand-primary'
  },
  {
    id: '3',
    title: 'Toolkit de Redes Sociales',
    description: 'Herramientas completas para gestionar tus redes',
    image: "https://images.unsplash.com/photo-1684570862144-1b0e1f392428",
    alt: 'Persona usando smartphone con iconos de redes sociales flotando en pantalla',
    icon: 'WrenchScrewdriverIcon',
    color: 'bg-secondary'
  },
  {
    id: '5',
    title: 'Guía de SEO Local',
    description: 'Optimiza tu presencia en búsquedas locales',
    image: "https://images.unsplash.com/photo-1586125674857-4eb86880905d",
    alt: 'Pantalla de computadora mostrando resultados de búsqueda de Google',
    icon: 'MagnifyingGlassIcon',
    color: 'bg-brand-accent'
  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-96 bg-gradient-to-br from-primary via-primary to-secondary animate-pulse" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <div key={i} className="h-12 bg-muted rounded" />
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) =>
                <div key={i} className="bg-card rounded-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (email: string, name: string, business: string) => {
    console.log('Download request:', { email, name, business, resource: selectedResource?.title });
    setIsModalOpen(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log('Newsletter subscription:', email);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleFeaturedResourceClick = (resourceId: string) => {
    const resource = resources.find((r) => r.id === resourceId);
    if (resource) {
      handleDownload(resource);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ResourceHero />

      {showSuccessMessage &&
      <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-6 py-4 rounded-lg shadow-brand flex items-center space-x-3 animate-slide-in">
          <Icon name="CheckCircleIcon" size={24} variant="solid" />
          <div>
            <p className="font-inter font-semibold">¡Éxito!</p>
            <p className="text-sm font-inter">Tu solicitud ha sido procesada correctamente</p>
          </div>
        </div>
      }

      <FeaturedResources
        resources={featuredResources}
        onResourceClick={handleFeaturedResourceClick}
        className="mt-0" />


      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar recursos por nombre o descripción..."
                className="w-full px-4 py-4 pl-12 border border-input rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />

              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                variant="outline"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary" />

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ResourceCategories
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory} />

            </div>

            <div className="lg:col-span-3">
              {filteredResources.length === 0 ?
              <div className="text-center py-16">
                  <Icon name="DocumentMagnifyingGlassIcon" size={64} variant="outline" className="mx-auto text-text-tertiary mb-4" />
                  <h3 className="text-xl font-bold font-poppins text-text-primary mb-2">
                    No se encontraron recursos
                  </h3>
                  <p className="text-sm font-inter text-text-secondary">
                    Intenta con otra búsqueda o categoría
                  </p>
                </div> :

              <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-inter text-text-secondary">
                      Mostrando {filteredResources.length} {filteredResources.length === 1 ? 'recurso' : 'recursos'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.map((resource) =>
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    onDownload={handleDownload} />

                  )}
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection onSubscribe={handleNewsletterSubscribe} />

      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
                ¿Necesitas Ayuda Personalizada?
              </h2>
              <p className="text-lg font-inter text-text-secondary">
                Nuestro equipo está listo para ayudarte a implementar estas estrategias en tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/50498765432"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-accent-foreground p-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-brand flex items-center space-x-4 group">

                <div className="flex-shrink-0">
                  <Icon name="ChatBubbleLeftRightIcon" size={32} variant="solid" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-lg mb-1">Consulta Gratis</h3>
                  <p className="text-sm opacity-90">Habla con un experto por WhatsApp</p>
                </div>
                <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-auto group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              <a
                href="/contact"
                className="bg-primary text-primary-foreground p-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-brand flex items-center space-x-4 group">

                <div className="flex-shrink-0">
                  <Icon name="EnvelopeIcon" size={32} variant="solid" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-lg mb-1">Contáctanos</h3>
                  <p className="text-sm opacity-90">Envíanos un mensaje detallado</p>
                </div>
                <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-auto group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <DownloadModal
        resource={selectedResource}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit} />


      <a
        href="https://wa.me/50498765432"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-brand-accent text-brand-accent-foreground p-4 rounded-full shadow-brand hover:shadow-xl transition-all duration-300 z-40 animate-pulse-scale"
        aria-label="Contactar por WhatsApp">

        <Icon name="ChatBubbleLeftRightIcon" size={28} variant="solid" />
      </a>
    </div>);

};

export default ResourcesInteractive;