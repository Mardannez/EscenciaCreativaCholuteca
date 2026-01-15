import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MediaMention {
  outlet: string;
  title: string;
  date: string;
  category: string;
  icon: string;
}

interface MediaMentionsSectionProps {
  className?: string;
}

const MediaMentionsSection = ({ className = '' }: MediaMentionsSectionProps) => {
  const mediaMentions: MediaMention[] = [
    {
      outlet: 'Diario La Tribuna',
      title: 'Esencia Creativa: Transformando el Marketing Digital en Choluteca',
      date: 'Marzo 2024',
      category: 'Negocios',
      icon: 'NewspaperIcon'
    },
    {
      outlet: 'Radio HRN',
      title: 'Entrevista: El Futuro del Marketing Digital para PYMES Hondureñas',
      date: 'Enero 2024',
      category: 'Entrevista',
      icon: 'MicrophoneIcon'
    },
    {
      outlet: 'Cámara de Comercio Choluteca',
      title: 'Reconocimiento a la Innovación Empresarial 2023',
      date: 'Diciembre 2023',
      category: 'Reconocimiento',
      icon: 'TrophyIcon'
    },
    {
      outlet: 'El Heraldo',
      title: 'Casos de Éxito: Cómo las Agencias Locales Impulsan Negocios',
      date: 'Octubre 2023',
      category: 'Reportaje',
      icon: 'DocumentTextIcon'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent bg-opacity-10 rounded-full mb-4">
            <p className="text-sm font-inter font-semibold text-accent">Reconocimientos</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Presencia en Medios Locales
          </h2>
          <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
            Nuestro trabajo ha sido reconocido por medios de comunicación y organizaciones empresariales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mediaMentions.map((mention, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-brand transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:bg-opacity-100 transition-all duration-300">
                  <Icon
                    name={mention.icon as any}
                    size={24}
                    variant="outline"
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-surface text-xs font-inter font-semibold text-secondary rounded-full">
                      {mention.category}
                    </span>
                    <span className="text-xs font-inter text-text-tertiary">{mention.date}</span>
                  </div>
                  <h3 className="text-lg font-nunito font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {mention.title}
                  </h3>
                  <p className="text-sm font-inter text-text-secondary font-semibold">{mention.outlet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-md max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Icon name="StarIcon" size={48} variant="solid" className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
              Reconocimiento de la Industria
            </h3>
            <p className="font-source-sans text-text-secondary">
              Miembro activo de asociaciones empresariales y cámaras de comercio locales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-surface rounded-lg">
              <Icon name="BuildingOfficeIcon" size={32} variant="outline" className="text-primary mx-auto mb-3" />
              <p className="font-inter font-semibold text-text-primary">Cámara de Comercio</p>
              <p className="text-sm font-source-sans text-text-secondary mt-1">Miembro Activo</p>
            </div>
            <div className="text-center p-4 bg-surface rounded-lg">
              <Icon name="UserGroupIcon" size={32} variant="outline" className="text-secondary mx-auto mb-3" />
              <p className="font-inter font-semibold text-text-primary">Asociación PYMES</p>
              <p className="text-sm font-source-sans text-text-secondary mt-1">Socio Estratégico</p>
            </div>
            <div className="text-center p-4 bg-surface rounded-lg">
              <Icon name="AcademicCapIcon" size={32} variant="outline" className="text-accent mx-auto mb-3" />
              <p className="font-inter font-semibold text-text-primary">Capacitación</p>
              <p className="text-sm font-source-sans text-text-secondary mt-1">Talleres Empresariales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaMentionsSection;