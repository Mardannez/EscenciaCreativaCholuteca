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
      { name: 'Nosotros', path: '/about' },
      { name: 'Casos de Éxito', path: '/case-studies' },
      { name: 'Recursos', path: '/resources' },
      { name: 'Contacto', path: '/contact' }
    ],
    services: [
      { name: 'Marketing Digital', path: '/solutions' },
      { name: 'SEO Local', path: '/solutions' },
      { name: 'Diseño Web', path: '/solutions' },
      { name: 'Producción Audiovisual', path: '/solutions' }
    ],
    legal: [
      { name: 'Política de Privacidad', path: '#' },
      { name: 'Términos de Servicio', path: '#' },
      { name: 'Política de Cookies', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'CameraIcon', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'VideoCameraIcon', url: 'https://youtube.com' }
  ];

  return (
    <footer className={`bg-primary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
                  <path d="M24 12L32 20L24 28L16 20L24 12Z" fill="#2E7D5A" />
                  <circle cx="24" cy="24" r="6" fill="#E67E22" />
                  <path
                    d="M24 18V30M18 24H30"
                    stroke="#1B4B73"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold font-poppins">Esencia</span>
                <span className="text-lg font-bold font-poppins text-secondary">Creativa</span>
              </div>
            </div>
            <p className="text-sm font-inter opacity-80 mb-4">
              Transformamos ideas en resultados medibles. Tu socio de crecimiento en Choluteca, Honduras.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={16} variant="solid" />
                <span className="text-sm font-inter">Choluteca, Honduras</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={16} variant="solid" />
                <a href="tel:+50498765432" className="text-sm font-inter hover:underline">
                  +504 9876-5432
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={16} variant="solid" />
                <a href="mailto:info@esenciacreativa.com" className="text-sm font-inter hover:underline">
                  info@esenciacreativa.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-nunito font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm font-inter opacity-80 hover:opacity-100 hover:underline transition-opacity duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-base font-nunito font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm font-inter opacity-80 hover:opacity-100 hover:underline transition-opacity duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-nunito font-bold mb-4">Mantente Informado</h3>
            <p className="text-sm font-inter opacity-80 mb-4">
              Recibe tips de marketing y noticias de la industria
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 rounded-lg bg-card text-foreground border-2 border-transparent focus:border-brand-accent focus:outline-none transition-colors duration-300 font-inter text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-brand-accent text-brand-accent-foreground rounded-lg font-nunito font-bold text-sm hover:bg-opacity-90 transition-all duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon name={social.icon as any} size={20} variant="solid" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-inter opacity-80 text-center md:text-left">
              &copy; {currentYear} Esencia Creativa. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-sm font-inter opacity-80 hover:opacity-100 hover:underline transition-opacity duration-300"
                >
                  {link.name}
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