import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6">
              <p className="text-sm font-inter font-semibold">Nuestra Historia</p>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold mb-6 leading-tight">
              De Producción Audiovisual a <span className="text-accent">Catalizador de Crecimiento</span>
            </h1>
            <p className="text-lg lg:text-xl font-source-sans mb-8 text-white text-opacity-90 leading-relaxed">
              Esencia Creativa representa la evolución de la creatividad auténtica combinada con resultados medibles para negocios locales en Choluteca, Honduras.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <div>
                  <p className="text-sm font-inter text-white text-opacity-80">Años de</p>
                  <p className="font-nunito font-bold">Experiencia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <div>
                  <p className="text-sm font-inter text-white text-opacity-80">Clientes</p>
                  <p className="font-nunito font-bold">Satisfechos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ae780d81-1767115221580.png"
                alt="Professional team meeting in modern office with diverse group collaborating on digital marketing strategy"
                className="w-full h-[400px] lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-brand p-6 max-w-xs">
              <p className="text-sm font-inter text-text-secondary mb-2">Nuestro Compromiso</p>
              <p className="font-nunito font-bold text-primary text-lg">Transparencia, Resultados y Crecimiento Genuino</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;