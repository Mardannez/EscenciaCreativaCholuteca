import React from 'react';

import Icon from '@/components/ui/AppIcon';

interface Certification {
  name: string;
  issuer: string;
  description: string;
  icon: string;
  color: string;
}

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection = ({ className = '' }: CertificationsSectionProps) => {
  const certifications: Certification[] = [
    {
      name: 'Google Ads Certified',
      issuer: 'Google',
      description: 'Certificación oficial en gestión y optimización de campañas publicitarias en Google Ads.',
      icon: 'CheckBadgeIcon',
      color: 'bg-brand-primary'
    },
    {
      name: 'Facebook Blueprint',
      issuer: 'Meta',
      description: 'Certificación profesional en estrategias de marketing y publicidad en plataformas Meta.',
      icon: 'ShieldCheckIcon',
      color: 'bg-brand-secondary'
    },
    {
      name: 'Registro Comercial',
      issuer: 'Honduras',
      description: 'Empresa legalmente registrada y operando bajo normativas comerciales hondureñas.',
      icon: 'DocumentCheckIcon',
      color: 'bg-secondary'
    },
    {
      name: 'HubSpot Marketing',
      issuer: 'HubSpot Academy',
      description: 'Certificación en inbound marketing y automatización de procesos de marketing digital.',
      icon: 'AcademicCapIcon',
      color: 'bg-accent'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-secondary bg-opacity-10 rounded-full mb-4">
            <p className="text-sm font-inter font-semibold text-secondary">Certificaciones</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Respaldados por Certificaciones Profesionales
          </h2>
          <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia está validado por certificaciones internacionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 hover:shadow-brand transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={cert.icon as any} size={32} variant="solid" className="text-white" />
              </div>
              <h3 className="text-lg font-nunito font-bold text-text-primary mb-2">{cert.name}</h3>
              <p className="text-sm font-inter text-secondary font-semibold mb-3">{cert.issuer}</p>
              <p className="text-sm font-source-sans text-text-secondary leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2">100%</div>
              <p className="font-source-sans text-white text-opacity-90">Certificaciones Activas</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2">5+</div>
              <p className="font-source-sans text-white text-opacity-90">Años de Experiencia</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2">50+</div>
              <p className="font-source-sans text-white text-opacity-90">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;