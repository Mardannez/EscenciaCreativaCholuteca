import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
  description: string;
}

const ContactInfo = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'PhoneIcon',
      title: 'Teléfono',
      value: '+504 9876-5432',
      link: 'tel:+50498765432',
      description: 'Lunes a Viernes, 8:00 AM - 6:00 PM'
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Email',
      value: 'contacto@esenciacreativa.hn',
      link: 'mailto:contacto@esenciacreativa.hn',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: 'MapPinIcon',
      title: 'Oficina',
      value: 'Choluteca, Honduras',
      link: '#location',
      description: 'Barrio El Centro, Edificio Plaza'
    },
    {
      icon: 'ClockIcon',
      title: 'Horario',
      value: 'Lun - Vie: 8:00 AM - 6:00 PM',
      link: '#',
      description: 'Sábados con cita previa'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
              Múltiples Formas de Contactarnos
            </h2>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Elige el canal que prefieras. Estamos listos para ayudarte a crecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-brand transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={method.icon as any} 
                      size={28} 
                      variant="solid" 
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold font-inter text-text-primary mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {method.value}
                  </p>
                  
                  <p className="text-sm text-text-tertiary font-inter">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;