import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const services: Service[] = [
    {
      id: 1,
      icon: "MegaphoneIcon",
      title: "Marketing Digital Integral",
      description: "Estrategias completas que combinan redes sociales, publicidad pagada y contenido optimizado para maximizar tu alcance y conversiones.",
      benefits: ["Gestión de redes sociales", "Publicidad en Facebook e Instagram", "Análisis y reportes mensuales"]
    },
    {
      id: 2,
      icon: "MagnifyingGlassIcon",
      title: "SEO Local",
      description: "Posicionamiento estratégico en Google para que tu negocio sea encontrado por clientes locales cuando más te necesitan.",
      benefits: ["Optimización Google My Business", "Keywords locales", "Reseñas y reputación online"]
    },
    {
      id: 3,
      icon: "DevicePhoneMobileIcon",
      title: "Diseño Web Profesional",
      description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes reales de tu negocio.",
      benefits: ["Diseño responsive", "Optimización de velocidad", "Integración con WhatsApp"]
    },
    {
      id: 4,
      icon: "VideoCameraIcon",
      title: "Producción Audiovisual",
      description: "Contenido visual de alta calidad que cuenta la historia de tu marca y conecta emocionalmente con tu audiencia.",
      benefits: ["Videos promocionales", "Fotografía de producto", "Contenido para redes"]
    },
    {
      id: 5,
      icon: "ChartBarIcon",
      title: "Análisis y Estrategia",
      description: "Datos reales que guían decisiones inteligentes. Medimos, analizamos y optimizamos constantemente tus campañas.",
      benefits: ["Reportes detallados", "KPIs personalizados", "Recomendaciones estratégicas"]
    },
    {
      id: 6,
      icon: "PencilSquareIcon",
      title: "Gestión de Contenido",
      description: "Creación y publicación consistente de contenido relevante que mantiene a tu audiencia comprometida y activa.",
      benefits: ["Calendario editorial", "Copywriting profesional", "Diseño gráfico"]
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4">
            Soluciones que Impulsan tu Crecimiento
          </h2>
          <p className="text-lg font-inter text-text-secondary max-w-2xl mx-auto">
            Servicios diseñados específicamente para las necesidades de negocios locales en Choluteca
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-brand-accent"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.icon as any} size={32} variant="solid" className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-poppins text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-base font-inter text-text-secondary mb-4">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-inter text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="/solutions"
                className="inline-flex items-center space-x-2 text-brand-accent font-nunito font-bold text-sm hover:underline"
              >
                <span>Conocer más</span>
                <Icon name="ArrowRightIcon" size={16} variant="solid" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/solutions"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todas las Soluciones
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;