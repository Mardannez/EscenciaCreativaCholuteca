import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Industry {
  id: string;
  name: string;
  icon: string;
  image: string;
  alt: string;
  description: string;
  solutions: string[];
  caseStudyLink: string;
}

interface IndustryShowcaseProps {
  className?: string;
}

const IndustryShowcase = ({ className = '' }: IndustryShowcaseProps) => {
  const industries: Industry[] = [
  {
    id: 'restaurant',
    name: 'Restaurantes',
    icon: 'BuildingStorefrontIcon',
    image: "https://images.unsplash.com/photo-1552342294-b6cac11f3cec",
    alt: 'Interior moderno de restaurante con mesas de madera y decoración elegante',
    description: 'Aumenta reservaciones y pedidos con estrategias digitales especializadas para el sector gastronómico.',
    solutions: ['Marketing en Redes Sociales', 'Fotografía de Menú', 'Gestión de Reseñas', 'Publicidad Local'],
    caseStudyLink: '/case-studies'
  },
  {
    id: 'clinic',
    name: 'Clínicas y Salud',
    icon: 'HeartIcon',
    image: "https://images.unsplash.com/photo-1643660526741-094639fbe53a",
    alt: 'Consultorio médico moderno con equipo profesional y ambiente limpio',
    description: 'Atrae más pacientes con presencia digital profesional y estrategias de confianza.',
    solutions: ['Sitio Web Médico', 'SEO Local', 'Gestión de Citas Online', 'Marketing de Contenidos'],
    caseStudyLink: '/case-studies'
  },
  {
    id: 'retail',
    name: 'Tiendas y Retail',
    icon: 'ShoppingBagIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129b86a1b-1766822398971.png",
    alt: 'Tienda retail moderna con productos organizados y ambiente acogedor',
    description: 'Incrementa ventas con estrategias omnicanal y experiencias de compra digitales.',
    solutions: ['E-commerce', 'Publicidad en Redes', 'Email Marketing', 'Programas de Lealtad'],
    caseStudyLink: '/case-studies'
  },
  {
    id: 'beauty',
    name: 'Salones de Belleza',
    icon: 'SparklesIcon',
    image: "https://images.unsplash.com/photo-1633681121751-e4a0392602b8",
    alt: 'Salón de belleza elegante con espejos iluminados y sillas de estilista',
    description: 'Llena tu agenda con marketing visual y gestión de citas automatizada.',
    solutions: ['Instagram Marketing', 'Sistema de Reservas', 'Fotografía Profesional', 'Promociones'],
    caseStudyLink: '/case-studies'
  },
  {
    id: 'education',
    name: 'Escuelas y Educación',
    icon: 'AcademicCapIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb4b1ccd-1766828893934.png",
    alt: 'Aula moderna con estudiantes usando tecnología educativa',
    description: 'Aumenta inscripciones con presencia digital educativa y comunicación efectiva.',
    solutions: ['Marketing Educativo', 'Gestión de Redes', 'Eventos Virtuales', 'Contenido de Valor'],
    caseStudyLink: '/case-studies'
  },
  {
    id: 'services',
    name: 'Servicios Profesionales',
    icon: 'BriefcaseIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e08e7de-1767006831776.png",
    alt: 'Oficina profesional moderna con escritorios y ambiente corporativo',
    description: 'Genera leads calificados con estrategias B2B y posicionamiento de autoridad.',
    solutions: ['LinkedIn Marketing', 'Content Marketing', 'Lead Generation', 'Branding Corporativo'],
    caseStudyLink: '/case-studies'
  }];


  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
            Soluciones por Industria
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto">
            Estrategias especializadas diseñadas para los desafíos únicos de tu sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) =>
          <div
            key={industry.id}
            className="bg-card rounded-xl shadow-md hover:shadow-brand transition-all duration-300 overflow-hidden group">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={industry.image}
                alt={industry.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name={industry.icon as any} size={20} variant="solid" className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-white">{industry.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-text-secondary font-inter mb-4 text-sm">{industry.description}</p>

                {/* Solutions List */}
                <div className="space-y-2 mb-4">
                  {industry.solutions.map((solution, index) =>
                <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0" />
                      <span className="text-xs text-text-primary font-inter">{solution}</span>
                    </div>
                )}
                </div>

                {/* CTA */}
                <Link
                href={industry.caseStudyLink}
                className="block w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-inter font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 text-center">

                  Ver Casos de Éxito
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default IndustryShowcase;