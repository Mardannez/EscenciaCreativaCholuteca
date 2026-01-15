import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CommunityInitiative {
  title: string;
  description: string;
  impact: string;
  image: string;
  alt: string;
}

interface CommunitySectionProps {
  className?: string;
}

const CommunitySection = ({ className = '' }: CommunitySectionProps) => {
  const initiatives: CommunityInitiative[] = [
  {
    title: 'Talleres Gratuitos de Marketing Digital',
    description: 'Capacitación mensual para emprendedores locales sobre estrategias básicas de marketing digital y redes sociales.',
    impact: '200+ emprendedores capacitados',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1622a6dea-1767942253623.png",
    alt: 'Group of diverse entrepreneurs attending digital marketing workshop in community center with instructor presenting'
  },
  {
    title: 'Apoyo a Negocios Familiares',
    description: 'Programa de consultoría pro-bono para negocios familiares que buscan digitalizar sus operaciones.',
    impact: '15 negocios transformados',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1394b025f-1764660634348.png",
    alt: 'Small family-owned restaurant owners reviewing digital marketing materials with consultant in cozy dining space'
  },
  {
    title: 'Patrocinio de Eventos Locales',
    description: 'Apoyo activo a ferias empresariales, eventos culturales y actividades comunitarias en Choluteca.',
    impact: '10+ eventos apoyados anualmente',
    image: "https://images.unsplash.com/photo-1719258623558-9b3775bc7295",
    alt: 'Vibrant local community event with diverse crowd enjoying cultural festival with colorful decorations'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full mb-4">
            <p className="text-sm font-inter font-semibold text-white">Compromiso Comunitario</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">
            Impacto en Nuestra Comunidad
          </h2>
          <p className="text-lg font-source-sans text-white text-opacity-90 max-w-2xl mx-auto">
            Creemos en retribuir a la comunidad que nos ha apoyado desde el inicio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {initiatives.map((initiative, index) =>
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-brand hover:shadow-2xl transition-all duration-300 group">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={initiative.image}
                alt={initiative.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-nunito font-bold text-text-primary mb-3">{initiative.title}</h3>
                <p className="font-source-sans text-text-secondary mb-4 leading-relaxed">{initiative.description}</p>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" />
                  <span className="font-inter font-semibold text-sm">{initiative.impact}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Community Stats */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Icon name="AcademicCapIcon" size={48} variant="solid" className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-poppins font-bold mb-2">200+</div>
              <p className="font-source-sans text-white text-opacity-90">Emprendedores Capacitados</p>
            </div>
            <div>
              <Icon name="BuildingStorefrontIcon" size={48} variant="solid" className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-poppins font-bold mb-2">15</div>
              <p className="font-source-sans text-white text-opacity-90">Negocios Transformados</p>
            </div>
            <div>
              <Icon name="CalendarDaysIcon" size={48} variant="solid" className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-poppins font-bold mb-2">10+</div>
              <p className="font-source-sans text-white text-opacity-90">Eventos Apoyados</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunitySection;