import React from 'react';
import AppImage from '@/components/ui/AppImage';


interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  image: string;
  alt: string;
  bio: string;
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
  {
    name: 'Carlos Mendoza',
    role: 'Director Creativo & Fundador',
    expertise: ['Estrategia Digital', 'Branding', 'Producción Audiovisual'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
    alt: 'Professional Hispanic man with short dark hair wearing navy blue suit smiling confidently in modern office',
    bio: 'Con más de 8 años de experiencia en producción audiovisual y marketing digital, Carlos lidera la visión estratégica de Esencia Creativa.'
  },
  {
    name: 'María Rodríguez',
    role: 'Directora de Marketing Digital',
    expertise: ['Google Ads', 'Facebook Ads', 'Analytics'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10099ac9e-1763300731841.png",
    alt: 'Professional Hispanic woman with long dark hair in white blouse working on laptop in bright modern workspace',
    bio: 'Certificada en Google Ads y Facebook Blueprint, María transforma datos en estrategias de crecimiento medibles para nuestros clientes.'
  },
  {
    name: 'Roberto Flores',
    role: 'Especialista en SEO & Content',
    expertise: ['SEO Local', 'Content Marketing', 'Copywriting'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100afe953-1763294659192.png",
    alt: 'Young Hispanic man with beard wearing casual shirt smiling while working on computer in creative office space',
    bio: 'Experto en posicionamiento local y creación de contenido estratégico que conecta marcas con audiencias hondureñas.'
  },
  {
    name: 'Ana Martínez',
    role: 'Diseñadora Gráfica & UI/UX',
    expertise: ['Diseño Gráfico', 'UI/UX', 'Identidad Visual'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_170deb1ce-1763300485528.png",
    alt: 'Creative Hispanic woman with glasses and brown hair in casual attire working on design project with tablet',
    bio: 'Ana crea experiencias visuales que capturan la esencia de cada marca y conectan emocionalmente con los clientes.'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <p className="text-sm font-inter font-semibold text-primary">Nuestro Equipo</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Expertos Comprometidos con tu Éxito
          </h2>
          <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
            Un equipo multidisciplinario con experiencia local y certificaciones internacionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) =>
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-brand transition-all duration-300 group">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-nunito font-bold text-text-primary mb-1">{member.name}</h3>
                <p className="text-sm font-inter text-secondary font-semibold mb-3">{member.role}</p>
                <p className="text-sm font-source-sans text-text-secondary mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  <p className="text-xs font-inter font-semibold text-text-tertiary uppercase tracking-wider">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) =>
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-surface text-xs font-inter font-semibold text-primary rounded-full">

                        {skill}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;