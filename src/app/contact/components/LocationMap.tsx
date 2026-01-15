import React from 'react';
import Icon from '@/components/ui/AppIcon';

const LocationMap = () => {
  return (
    <section id="location" className="py-16 lg:py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-text-primary mb-4">
              Visítanos en Choluteca
            </h2>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Estamos ubicados en el corazón de Choluteca, listos para atenderte personalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl shadow-md overflow-hidden h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Esencia Creativa - Choluteca, Honduras"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=13.3089,-87.1910&z=15&output=embed"
                className="w-full h-full"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-inter text-text-primary mb-2">
                      Dirección
                    </h3>
                    <p className="text-base text-text-secondary font-inter">
                      Barrio El Centro, Edificio Plaza<br />
                      Segundo Piso, Oficina 201<br />
                      Choluteca, Honduras
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="ClockIcon" size={24} variant="solid" className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-inter text-text-primary mb-2">
                      Horario de Atención
                    </h3>
                    <div className="space-y-1 text-base text-text-secondary font-inter">
                      <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 1:00 PM (Con cita previa)</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-inter text-text-primary mb-2">
                      Cómo Llegar
                    </h3>
                    <p className="text-base text-text-secondary font-inter">
                      Ubicados a 2 cuadras del Parque Central, frente a Banco Atlántida. Estacionamiento disponible en el edificio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-inter text-white mb-2">
                      ¿Prefieres una reunión virtual?
                    </h3>
                    <p className="text-sm text-white/90 font-inter">
                      También ofrecemos consultas por videollamada
                    </p>
                  </div>
                  <a
                    href="https://wa.me/50498765432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-primary rounded-lg font-nunito font-bold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center space-x-2 whitespace-nowrap"
                  >
                    <Icon name="VideoCameraIcon" size={20} variant="solid" />
                    <span>Agendar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;