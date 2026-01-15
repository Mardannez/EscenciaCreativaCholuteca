import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Inicio', path: '/homepage' },
      { name: 'Soluciones', path: '/solutions' },
      { name: 'Casos de Éxito', path: '/case-studies' },
      { name: 'Recursos', path: '/resources' }
    ],
    support: [
      { name: 'Contacto', path: '/contact' },
      { name: 'Nosotros', path: '/about' }
    ],
    social: [
      { name: 'Facebook', icon: 'ShareIcon', url: 'https://facebook.com' },
      { name: 'Instagram', icon: 'CameraIcon', url: 'https://instagram.com' },
      { name: 'LinkedIn', icon: 'BriefcaseIcon', url: 'https://linkedin.com' }
    ]
  };

  return (
    <footer className={`bg-primary text-white ${className}`}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
                  <path d="M24 12L32 20L24 28L16 20L24 12Z" fill="#2E7D5A" />
                  <circle cx="24" cy="24" r="6" fill="#E67E22" />
                  <path d="M24 18V30M18 24H30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold font-poppins text-white">Esencia</span>
                <span className="text-xl font-bold font-poppins text-accent">Creativa</span>
              </div>
            </div>
            <p className="font-source-sans text-white text-opacity-80 text-sm leading-relaxed">
              Transformamos ideas en resultados medibles para negocios locales en Choluteca, Honduras.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="font-inter text-sm text-white text-opacity-80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="font-inter text-sm text-white text-opacity-80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={20} variant="outline" className="text-accent flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-white text-opacity-80">Choluteca, Honduras</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="PhoneIcon" size={20} variant="outline" className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+50498765432" className="font-inter text-sm text-white text-opacity-80 hover:text-accent transition-colors duration-300">
                  +504 9876-5432
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="EnvelopeIcon" size={20} variant="outline" className="text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@esenciacreativa.hn" className="font-inter text-sm text-white text-opacity-80 hover:text-accent transition-colors duration-300">
                  info@esenciacreativa.hn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-white text-opacity-80">
              &copy; {currentYear} Esencia Creativa. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;