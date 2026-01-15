import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ValuesSectionProps {
  className?: string;
}

const ValuesSection = ({ className = '' }: ValuesSectionProps) => {
  const values: Value[] = [
    {
      title: 'Transparencia',
      description: 'Reportes claros y honestos sobre el desempeño de cada campaña. Sin promesas vacías, solo resultados medibles.',
      icon: 'EyeIcon',
      color: 'bg-brand-primary'
    },
    {
      title: 'Resultados Medibles',
      description: 'Cada estrategia está diseñada para generar ROI comprobable. Medimos, analizamos y optimizamos constantemente.',
      icon: 'ChartBarIcon',
      color: 'bg-secondary'
    },
    {
      title: 'Comprensión Cultural',
      description: 'Entendemos el mercado hondureño, sus desafíos únicos y las oportunidades específicas de cada industria local.',
      icon: 'GlobeAmericasIcon',
      color: 'bg-accent'
    },
    {
      title: 'Asociación Genuina',
      description: 'No somos solo proveedores, somos socios de crecimiento comprometidos con el éxito a largo plazo de tu negocio.',
      icon: 'HandshakeIcon',
      color: 'bg-brand-secondary'
    },
    {
      title: 'Innovación Continua',
      description: 'Nos mantenemos actualizados con las últimas tendencias y tecnologías para ofrecer soluciones de vanguardia.',
      icon: 'LightBulbIcon',
      color: 'bg-warning'
    },
    {
      title: 'Excelencia Creativa',
      description: 'Combinamos creatividad auténtica con estrategia sólida para crear campañas que realmente conectan y convierten.',
      icon: 'SparklesIcon',
      color: 'bg-primary'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <p className="text-sm font-inter font-semibold text-primary">Nuestros Valores</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Los Principios que Nos Guían
          </h2>
          <p className="text-lg font-source-sans text-text-secondary max-w-2xl mx-auto">
            Valores fundamentales que definen nuestra forma de trabajar y relacionarnos con nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 hover:shadow-brand transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={value.icon as any} size={32} variant="solid" className="text-white" />
              </div>
              <h3 className="text-xl font-nunito font-bold text-text-primary mb-3">{value.title}</h3>
              <p className="font-source-sans text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;