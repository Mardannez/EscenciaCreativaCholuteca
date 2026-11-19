'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  specs: string[];
  galleryColor: string;
  gallery: GalleryImage[];
}

const services: Service[] = [
  {
    id: 'banners-lonas',
    title: 'Banners y Lonas',
    description: 'Impresión de alta resolución en lona flex, mesh y vinilo para exteriores e interiores. Resistentes a la intemperie.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12594104d-1782838139496.png',
    imageAlt: 'Banner publicitario de lona flex instalado en fachada de negocio con gráficos vibrantes',
    icon: 'RectangleGroupIcon',
    specs: ['Hasta 5m de ancho', 'Resolución 720-1440 dpi', 'Lona, Mesh, Vinilo'],
    galleryColor: 'from-amber-500/20 to-yellow-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12594104d-1782838139496.png', alt: 'Banner publicitario de lona flex instalado en fachada de negocio con gráficos vibrantes' },
      { src: 'https://images.unsplash.com/photo-1647707343317-743a7fbb4568', alt: 'Lona publicitaria de gran formato en estructura metálica exterior' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f88ed927-1772580317390.png', alt: 'Banner de evento corporativo con diseño colorido y tipografía llamativa' },
      { src: 'https://images.unsplash.com/photo-1602884884559-da8f58ad3ec7', alt: 'Lona mesh instalada en andamio de construcción con publicidad de marca' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1435c5d42-1766237611488.png', alt: 'Banner horizontal de alta resolución en sala de conferencias empresarial' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_167ebcb8c-1772546460505.png', alt: 'Lona publicitaria de vinilo para evento al aire libre con colores brillantes' },
    ],
  },
  {
    id: 'rotulos-comerciales',
    title: 'Rótulos Comerciales',
    description: 'Rótulos para negocios, locales comerciales y empresas. Luminosos, acrílicos, letras corpóreas y más.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14645a4e8-1772221544505.png',
    imageAlt: 'Rótulo luminoso de negocio comercial con letras corpóreas iluminadas en fachada nocturna',
    icon: 'BuildingStorefrontIcon',
    specs: ['Luminosos LED', 'Letras corpóreas', 'Acrílico y PVC'],
    galleryColor: 'from-blue-500/20 to-cyan-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14645a4e8-1772221544505.png', alt: 'Rótulo luminoso de negocio comercial con letras corpóreas iluminadas en fachada nocturna' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_111b55346-1784013106115.png', alt: 'Letrero comercial de acrílico iluminado con logo de empresa en fachada moderna' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_179aa7b5e-1784208670476.png', alt: 'Rótulo de tienda retail con letras corpóreas doradas sobre fondo oscuro' },
      { src: 'https://images.unsplash.com/photo-1725760926519-b01b46fb8ec2', alt: 'Señalización de restaurante con rótulo luminoso LED en entrada principal' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a8198119-1785758427092.png', alt: 'Rótulo corporativo de oficina con logo en relieve sobre pared de recepción' },
      { src: 'https://images.unsplash.com/photo-1607629121862-2ee27433a9d9', alt: 'Letras corpóreas metálicas con iluminación posterior en fachada de empresa' },
    ],
  },
  {
    id: 'vinil-adhesivo',
    title: 'Vinil Adhesivo',
    description: 'Vinil para ventanas, paredes, vehículos y superficies especiales. Microperforado, espejado y de colores.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dc110937-1766503737898.png',
    imageAlt: 'Rotulación vehicular con vinil adhesivo de colores en camioneta de empresa',
    icon: 'SwatchIcon',
    specs: ['Microperforado', 'Espejado', 'Rotulación vehicular'],
    galleryColor: 'from-purple-500/20 to-violet-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dc110937-1766503737898.png', alt: 'Rotulación vehicular con vinil adhesivo de colores en camioneta de empresa' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f09e2e9a-1772237779991.png', alt: 'Vinil adhesivo decorativo aplicado en ventana de local comercial con diseño geométrico' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c722e8c7-1777844814276.png', alt: 'Vinil microperforado en cristal de vehículo con publicidad de marca visible desde exterior' },
      { src: 'https://images.unsplash.com/photo-1613050118698-9194f6d51281', alt: 'Vinil adhesivo de pared con mural decorativo en oficina moderna' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_113864bdd-1772222240398.png', alt: 'Stickers de vinil personalizados en diferentes formas y tamaños sobre superficie blanca' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dc110937-1766503737898.png', alt: 'Rotulación completa de automóvil con vinil de color sólido y logotipo corporativo' },
    ],
  },
  {
    id: 'material-pop',
    title: 'Material POP y Displays',
    description: 'Roll ups, displays, exhibidores, afiches y todo el material para puntos de venta y eventos.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15d1a104e-1765380916501.png',
    imageAlt: 'Roll up publicitario en stand de exposición con diseño corporativo elegante',
    icon: 'PresentationChartBarIcon',
    specs: ['Roll ups', 'Exhibidores', 'Señalética'],
    galleryColor: 'from-green-500/20 to-emerald-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_15d1a104e-1765380916501.png', alt: 'Roll up publicitario en stand de exposición con diseño corporativo elegante' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_131f2452b-1779436762832.png', alt: 'Stand de exhibición con displays y material POP en feria comercial' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_131d64cd8-1785925255091.png', alt: 'Roll up retráctil con diseño de producto en punto de venta de supermercado' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b602bbd7-1772116630922.png', alt: 'Display de cartón corrugado para exhibición de productos en tienda retail' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ff8c4dd3-1786981416945.png', alt: 'Exhibidor de piso con material POP para campaña promocional de marca' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cfacc77f-1772132485649.png', alt: 'Backdrop fotográfico con diseño corporativo para evento de empresa' },
    ],
  },
  {
    id: 'impresos-corporativos',
    title: 'Impresos Corporativos',
    description: 'Tarjetas de presentación, brochures, flyers, afiches y toda la papelería corporativa de tu empresa.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13c17b42c-1770483920366.png',
    imageAlt: 'Tarjetas de presentación y brochures corporativos impresos con acabado premium sobre mesa',
    icon: 'DocumentTextIcon',
    specs: ['Tarjetas', 'Brochures', 'Flyers y Afiches'],
    galleryColor: 'from-rose-500/20 to-pink-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_13c17b42c-1770483920366.png', alt: 'Tarjetas de presentación y brochures corporativos impresos con acabado premium sobre mesa' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_199b39942-1772743387121.png', alt: 'Brochure corporativo trifold abierto mostrando diseño interior con fotografías e información' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ea64fc0f-1767794282554.png', alt: 'Flyers promocionales apilados con diseño colorido para campaña de marketing' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_16c84489b-1772813046011.png', alt: 'Tarjetas de presentación premium con acabado mate y foil dorado sobre fondo oscuro' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b9bebac1-1767956635199.png', alt: 'Catálogo corporativo impreso con fotografías de productos y descripción detallada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b0cfd6e9-1767763571291.png', alt: 'Papelería corporativa completa con membrete, sobres y carpetas con identidad visual' },
    ],
  },
  {
    id: 'senaletica',
    title: 'Señalética Empresarial',
    description: 'Sistema de señalización para oficinas, hospitales, centros comerciales y espacios corporativos.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c2d1e864-1775852146668.png',
    imageAlt: 'Señalética corporativa en pasillo de oficina moderna con indicadores direccionales claros',
    icon: 'MapIcon',
    specs: ['Directorios', 'Señales de seguridad', 'Mapas'],
    galleryColor: 'from-orange-500/20 to-amber-600/10',
    gallery: [
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c2d1e864-1775852146668.png', alt: 'Señalética corporativa en pasillo de oficina moderna con indicadores direccionales claros' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e7e3168f-1786981415060.png', alt: 'Sistema de señalización de seguridad en planta industrial con iconografía estandarizada' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10f75ad0b-1786981416930.png', alt: 'Directorio de pisos en lobby de edificio corporativo con letras en relieve' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_136d16ff0-1772061545208.png', alt: 'Señales de evacuación y emergencia instaladas en corredor de hospital' },
      { src: 'https://images.unsplash.com/photo-1717525053420-301762050b1d', alt: 'Señalética de identificación de áreas en centro comercial moderno' },
      { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1107d130d-1783228036545.png', alt: 'Placa de identificación de sala de reuniones con nombre grabado en acrílico' },
    ],
  },
];

interface GalleryModalProps {
  service: Service;
  onClose: () => void;
}

function GalleryModal({ service, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when service changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [service.id]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? service.gallery.length - 1 : i - 1));
  }, [service.gallery.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === service.gallery.length - 1 ? 0 : i + 1));
  }, [service.gallery.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, prev, next]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const currentImage = service.gallery[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${service.title}`}
    >
      <div
        className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <AppIcon name={service.icon as 'MapIcon'} size={16} className="text-accent" variant="outline" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">{service.title}</h3>
              <p className="text-xs text-muted-foreground">
                {currentIndex + 1} / {service.gallery.length}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Cerrar galería"
          >
            <AppIcon name="XMarkIcon" size={18} className="text-current" variant="outline" />
          </button>
        </div>

        {/* Carousel Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <AppImage
            key={`${service.id}-${currentIndex}`}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          {/* Gradient overlay for caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
            <p className="text-white text-sm leading-snug">{currentImage.alt}</p>
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Imagen anterior"
          >
            <AppIcon name="ChevronLeftIcon" size={20} className="text-white" variant="outline" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Imagen siguiente"
          >
            <AppIcon name="ChevronRightIcon" size={20} className="text-white" variant="outline" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 py-4 px-6">
          {service.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-accent' :'w-2 h-2 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 px-6 pb-5 overflow-x-auto">
          {service.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                idx === currentIndex ? 'border-accent scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={`Miniatura ${idx + 1}`}
            >
              <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ImpresionesServices() {
  const [modalService, setModalService] = useState<Service | null>(null);

  function handleCardClick(service: Service) {
    setModalService(service);
  }

  return (
    <section className="py-24 px-6" aria-labelledby="imp-services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Lo que ofrecemos</p>
          <h2 id="imp-services-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            Servicios de{' '}
            <span className="font-serif italic font-normal text-accent">impresión.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm">
            Haz clic en cualquier servicio para explorar la galería de trabajos realizados.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="glass-card rounded-3xl overflow-hidden border border-border group transition-all duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
              aria-label={`${service.title} — ver galería`}
            >
              <div className="relative h-44 overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <AppIcon name={service.icon as 'RectangleGroupIcon'} size={16} className="text-accent" variant="outline" />
                </div>
                {/* Play/Gallery indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center">
                    <AppIcon name="PhotoIcon" size={22} className="text-background" variant="outline" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Ver galería
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.specs.map((spec) => (
                    <span key={spec} className="text-xs font-semibold px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {modalService && (
        <GalleryModal
          service={modalService}
          onClose={() => setModalService(null)}
        />
      )}
    </section>
  );
}
