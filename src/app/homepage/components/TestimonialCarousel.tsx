'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  role: string;
  image: string;
  alt: string;
  quote: string;
  result: string;
}

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    business: "Restaurante El Buen Sabor",
    role: "Propietaria",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b95d368b-1763293781944.png",
    alt: "Hispanic woman with long dark hair wearing white chef's coat smiling in restaurant kitchen",
    quote: "Esencia Creativa transformó completamente nuestro negocio. En solo 3 meses, nuestras reservas aumentaron un 180% gracias a su estrategia de redes sociales y publicidad local.",
    result: "+180% en reservas"
  },
  {
    id: 2,
    name: "Dr. Carlos Martínez",
    business: "Clínica Salud Integral",
    role: "Director Médico",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f147df5d-1763301649610.png",
    alt: "Middle-aged Hispanic male doctor in white coat with stethoscope smiling in medical office",
    quote: "El equipo de Esencia Creativa entiende perfectamente el mercado local. Nos ayudaron a posicionarnos como la clínica líder en Choluteca con una estrategia digital integral.",
    result: "+250 pacientes nuevos"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    business: "Boutique Moda Elegante",
    role: "Gerente General",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137b59cc0-1763295397951.png",
    alt: "Young Hispanic woman with shoulder-length brown hair in elegant black blazer smiling in fashion boutique",
    quote: "Increíble trabajo. No solo aumentaron nuestras ventas online, sino que también mejoraron nuestra imagen de marca. Son verdaderos profesionales que entregan resultados reales.",
    result: "+320% ventas online"
  },
  {
    id: 4,
    name: "Roberto Hernández",
    business: "Academia Futuro Brillante",
    role: "Director Académico",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1de7408f8-1763293603960.png",
    alt: "Hispanic man in his forties wearing blue button-down shirt and glasses smiling in classroom setting",
    quote: "La campaña de inscripciones que diseñaron superó todas nuestras expectativas. Llenamos todas las plazas disponibles en tiempo récord. Altamente recomendados.",
    result: "100% ocupación"
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg font-inter text-primary-foreground opacity-90 max-w-2xl mx-auto">
            Historias reales de negocios locales que han alcanzado el éxito con nuestras estrategias
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <Icon name="ChatBubbleLeftRightIcon" size={40} variant="solid" className="text-brand-accent mx-auto lg:mx-0" />
                </div>
                <p className="text-lg lg:text-xl font-inter text-text-primary mb-6 italic">
                  "{currentTestimonial.quote}"
                </p>
                <div className="space-y-2">
                  <p className="text-xl font-bold font-poppins text-primary">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-base font-inter text-text-secondary">
                    {currentTestimonial.role} - {currentTestimonial.business}
                  </p>
                  <div className="inline-block px-4 py-2 bg-brand-accent rounded-full">
                    <p className="text-sm font-nunito font-bold text-brand-accent-foreground">
                      {currentTestimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {isHydrated &&
          <>
              <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} variant="solid" className="text-primary" />
              </button>
              <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial">

                <Icon name="ChevronRightIcon" size={24} variant="solid" className="text-primary" />
              </button>
            </>
          }

          {/* Indicators */}
          {isHydrated &&
          <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-brand-accent w-8' : 'bg-card opacity-50'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
            </div>
          }
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;