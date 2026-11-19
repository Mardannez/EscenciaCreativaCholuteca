import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const serviceLinks = [
  { label: 'Esencia Impresiones', href: '/esencia-impresiones' },
  { label: 'Esencia Film', href: '/esencia-film' },
  { label: 'Esencia Digital', href: '/esencia-digital' },
  { label: 'Esencia Vallas', href: '/esencia-vallas' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/esenciacreativa.net/',
    icon: 'GlobeAltIcon',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/esencia.creativa/',
    icon: 'CameraIcon',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCfPT9QHhl_XEo1aa7OiPhYg',
    icon: 'PlayCircleIcon',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <AppLogo size={40} />
              <span className="font-bold text-xl tracking-tight text-foreground">
                Esencia<span className="font-serif italic text-accent font-normal"> Creativa</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Ideas que comunican, marcas que trascienden. Agencia creativa en Choluteca, Honduras.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
                >
                  <Icon name={s.icon as 'GlobeAltIcon'} size={16} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="section-label mb-5">Servicios</p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="section-label mb-5">Contacto</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="PhoneIcon" size={16} className="text-accent mt-0.5 shrink-0" variant="outline" />
                <a href="tel:+50427800441" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +504 2780-0441
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="EnvelopeIcon" size={16} className="text-accent mt-0.5 shrink-0" variant="outline" />
                <a href="mailto:info@esenciacreativa.net" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  info@esenciacreativa.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={16} className="text-accent mt-0.5 shrink-0" variant="outline" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Barrio Guadalupe, Choluteca, Honduras
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            © 2026 Esencia Creativa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Política de Privacidad
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Términos de Uso
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}