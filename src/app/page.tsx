import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const pillars = [
  { name: 'Esencia Impresiones', href: '/esencia-impresiones', image: '/assets/images/esencia-impresiones.webp' },
  { name: 'Esencia Films', href: '/esencia-film', image: '/assets/images/esencia-film.webp' },
  { name: 'Esencia Digital', href: '/esencia-digital', image: '/assets/images/esencia-digital.webp' },
  { name: 'Esencia Vallas', href: '/esencia-vallas', image: '/assets/images/esencia-vallas.webp' },
];

function PillarIcon({ href }: { href: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {href === '/esencia-impresiones' && (
        <>
          <rect x="8" y="16" width="48" height="32" rx="4" />
          <rect x="16" y="8" width="32" height="8" rx="2" strokeWidth={2} />
          <rect x="16" y="40" width="32" height="12" rx="2" strokeWidth={2} />
          <circle cx="14" cy="32" r="3" fill="currentColor" stroke="none" />
          <path d="M22 44h20M22 48h14" strokeWidth={2} />
        </>
      )}
      {href === '/esencia-film' && (
        <>
          <rect x="6" y="14" width="52" height="36" rx="4" />
          <path d="M14 14v36M50 14v36" strokeWidth={2} />
          {[19, 29, 39].map((y) => (
            <React.Fragment key={y}>
              <rect x="10" y={y} width="4" height="6" rx="1" fill="currentColor" stroke="none" />
              <rect x="50" y={y} width="4" height="6" rx="1" fill="currentColor" stroke="none" />
            </React.Fragment>
          ))}
          <polygon points="26,24 26,40 42,32" fill="currentColor" stroke="none" opacity={0.8} />
        </>
      )}
      {href === '/esencia-digital' && (
        <>
          <rect x="8" y="10" width="48" height="34" rx="4" />
          <path d="M20 54h24M32 44v10M16 30l8-8 6 6 8-10 10 8" />
          <circle cx="48" cy="26" r="3" fill="currentColor" stroke="none" />
        </>
      )}
      {href === '/esencia-vallas' && (
        <>
          <rect x="6" y="12" width="52" height="28" rx="3" />
          <path d="M20 40l-4 16M44 40l4 16M32 40v12" />
          <rect x="14" y="18" width="16" height="16" rx="2" strokeWidth={2} />
          <path d="M36 22h14M36 28h14M36 34h8" strokeWidth={2} />
        </>
      )}
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#112240] overflow-x-hidden">
      <section
        className="relative min-h-[70svh] md:min-h-screen bg-white flex items-center justify-center px-4 py-16 sm:px-6"
        aria-label="Esencia Creativa — Publicidad 360 grados"
      >
        <h1 className="sr-only">Esencia Creativa — Publicidad 360 grados</h1>
        <div className="home-hero-motion home-hero-shine relative overflow-hidden w-full max-w-7xl mx-auto">
          <AppImage
            src="/assets/images/esencia-creativa-portada.webp"
            alt="Esencia Creativa, Publicidad 360°: Esencia Films, Esencia Impresiones, Esencia Digital y Esencia Vallas"
            width={2400}
            height={1350}
            className="block w-full h-auto object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
        <a
          href="#areas"
          aria-label="Ver nuestras cuatro áreas de servicio"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[#2A4A6E] motion-safe:animate-bounce rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A4A6E]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      <section id="areas" className="bg-[#F3EEE5] py-16 px-4 sm:px-6" aria-label="Nuestras áreas de servicio">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              aria-label={`Conocer los servicios de ${pillar.name}`}
              className="group block rounded-2xl border border-[#DED5C6] bg-white shadow-sm hover:shadow-lg hover:border-[#2A4A6E]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A4A6E] transition-all duration-300 overflow-hidden"
            >
              <AppImage
                src={pillar.image}
                alt={pillar.name}
                width={1200}
                height={675}
                className="block w-full h-auto object-contain"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1280px) 25vw, 302px"
              />
              <div className="flex justify-center px-5 py-6 text-[#2A4A6E] group-hover:text-[#112240] transition-colors duration-300">
                <PillarIcon href={pillar.href} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  );
}
