'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los primeros resultados medibles generalmente se observan entre 30-60 días, dependiendo del servicio. Las campañas de publicidad digital pueden mostrar resultados en 2-3 semanas, mientras que el SEO orgánico requiere 3-6 meses para resultados significativos. Proporcionamos reportes mensuales detallados para que puedas seguir el progreso.'
    },
    {
      question: '¿Cuál es la inversión mínima requerida?',
      answer: 'Nuestros paquetes comienzan desde L. 5,000 mensuales, diseñados específicamente para pequeños negocios locales. Esta inversión incluye gestión de redes sociales básica y publicidad digital. Ofrecemos planes escalables que crecen con tu negocio, y siempre priorizamos el ROI sobre el gasto.'
    },
    {
      question: '¿Trabajan con negocios fuera de Choluteca?',
      answer: 'Sí, aunque nuestra oficina está en Choluteca, trabajamos con clientes en todo Honduras y Centroamérica. Ofrecemos consultas virtuales, reuniones por videollamada y comunicación constante por WhatsApp. Nuestra experiencia local nos permite entender mejor el mercado hondureño, sin importar tu ubicación.'
    },
    {
      question: '¿Qué incluye la consulta gratuita?',
      answer: 'La consulta gratuita de 45-60 minutos incluye: análisis de tu presencia digital actual, identificación de oportunidades de crecimiento, recomendaciones estratégicas personalizadas, y una propuesta preliminar sin compromiso. Es una oportunidad para conocernos y determinar si somos el socio adecuado para tu negocio.'
    },
    {
      question: '¿Necesito tener presencia digital previa?',
      answer: 'No es necesario. Trabajamos con negocios en todas las etapas, desde aquellos que están comenzando su presencia digital hasta empresas que buscan optimizar sus estrategias existentes. Si no tienes redes sociales o sitio web, podemos crear todo desde cero con una estrategia integral.'
    },
    {
      question: '¿Cómo miden el éxito de las campañas?',
      answer: 'Utilizamos KPIs específicos según tus objetivos: ventas generadas, leads capturados, tráfico web, engagement en redes sociales, ROI de publicidad, y más. Proporcionamos reportes mensuales detallados con métricas claras y recomendaciones de optimización. La transparencia en resultados es fundamental para nosotros.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios y proceso de trabajo.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-brand"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 hover:bg-muted"
                >
                  <span className="text-base lg:text-lg font-semibold text-text-primary font-inter pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    variant="outline"
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-base text-text-secondary font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary to-secondary p-8 rounded-xl shadow-brand text-center">
            <h3 className="text-2xl font-bold font-poppins text-white mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-base text-white/90 font-inter mb-6 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos directamente y resolveremos todas tus dudas.
            </p>
            <a
              href="https://wa.me/50498765432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Chatea con Nosotros</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;