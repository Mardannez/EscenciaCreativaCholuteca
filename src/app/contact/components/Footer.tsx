import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Marketing Digital', path: '/solutions' },
      { name: 'Redes Sociales', path: '/solutions' },
      { name: 'Publicidad Digital', path: '/solutions' },
      { name: 'Diseño Web', path: '/solutions' }
    ],
    empresa: [
      { name: 'Nosotros', path: '/about' },
      { name: 'Casos de Éxito', path: '/case-studies' },
      { name: 'Recursos', path: '/resources' },
      { name: 'Contacto', path: '/contact' }
    ],
    legal: [
      { name: 'Política de Privacidad', path: '#' },
      { name: 'Términos de Servicio', path: '#' },
      { name: 'Política de Cookies', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <Link href="/homepage" className="flex items-center space-x-2 mb-6 group">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                >
                  <circle cx="24" cy="24" r="22" fill="white" fillOpacity="0.1" />
                  <path
                    d="M24 12L32 20L24 28L16 20L24 12Z"
                    fill="#2E7D5A"
                    className="transition-all duration-300 group-hover:fill-[#E67E22]"
                  />
                  <circle cx="24" cy="24" r="6" fill="#E67E22" />
                  <path
                    d="M24 18V30M18 24H30"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold font-poppins block">Esencia</span>
                <span className="text-xl font-bold font-poppins block">Creativa</span>
              </div>
            </Link>
            <p className="text-sm text-white/80 font-inter mb-4">
              Transformamos ideas en resultados medibles. Tu socio de crecimiento en Choluteca, Honduras.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  aria-label={social?.name}
                >
                  <Icon name="ShareIcon" size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks?.servicios?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.path}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-inter"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks?.empresa?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.path}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-inter"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Icon name="MapPinIcon" size={20} variant="solid" className="flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 font-inter">
                  Choluteca, Honduras<br />Barrio El Centro
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={20} variant="solid" className="flex-shrink-0" />
                <a href="tel:+50498765432" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-inter">
                  +504 9876-5432
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={20} variant="solid" className="flex-shrink-0" />
                <a href="mailto:contacto@esenciacreativa.hn" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-inter">
                  contacto@esenciacreativa.hn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-white/70 font-inter text-center md:text-left">
              &copy; {currentYear} Esencia Creativa. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks?.legal?.map((link, index) => (
                <Link
                  key={index}
                  href={link?.path}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-inter"
                >
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;