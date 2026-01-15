import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

interface SocialProofSectionProps {
  className?: string;
}

const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  const clients: Client[] = [
  {
    id: 1,
    name: "Restaurante El Buen Sabor",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_158bceeda-1768342493276.png",
    alt: "Logo of El Buen Sabor restaurant featuring fork and knife design in warm orange tones"
  },
  {
    id: 2,
    name: "Clínica Salud Integral",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9cba0ec-1767941529446.png",
    alt: "Medical clinic logo with blue cross symbol and modern typography"
  },
  {
    id: 3,
    name: "Boutique Moda Elegante",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8969f8d-1764779131785.png",
    alt: "Fashion boutique logo with elegant script lettering in black and gold"
  },
  {
    id: 4,
    name: "Academia Futuro Brillante",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_188b55698-1764762898972.png",
    alt: "Educational academy logo featuring graduation cap and book symbols in navy blue"
  },
  {
    id: 5,
    name: "Salón de Belleza Glamour",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_194d6a8b5-1765539531173.png",
    alt: "Beauty salon logo with stylized scissors and comb in pink and purple gradient"
  },
  {
    id: 6,
    name: "Ferretería Construcción Total",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a651fcc6-1766750962628.png",
    alt: "Hardware store logo with hammer and wrench tools in industrial gray and orange"
  }];


  const stats = [
  { value: "50+", label: "Clientes Satisfechos" },
  { value: "150%", label: "Crecimiento Promedio" },
  { value: "95%", label: "Tasa de Retención" },
  { value: "24/7", label: "Soporte Disponible" }];


  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-lg font-inter text-text-secondary max-w-2xl mx-auto">
            Negocios locales de Choluteca que han transformado su presencia digital y aumentado sus ventas con nuestras estrategias
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client) =>
          <div
            key={client.id}
            className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">

              <div className="relative w-full h-16 grayscale hover:grayscale-0 transition-all duration-300">
                <AppImage
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain" />

              </div>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) =>
          <div
            key={index}
            className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">

              <p className="text-4xl lg:text-5xl font-bold font-poppins text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-base font-inter text-text-secondary">
                {stat.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SocialProofSection;