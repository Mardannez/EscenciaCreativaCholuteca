'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

interface GalleryVideo {
  youtubeId: string;
  title: string;
}

interface FilmService {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  duration: string;
  includes: string[];
  galleryColor: string;
  gallery: GalleryVideo[];
}

const filmServices: FilmService[] = [
{
  id: 'spots-publicitarios',
  title: 'Spots Publicitarios',
  description: 'Comerciales de televisión y redes sociales diseñados para capturar atención y generar conversión.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f28400e3-1772149102501.png',
  imageAlt: 'Grabación de spot publicitario con actores y equipo de producción en set de iluminación profesional',
  icon: 'TvIcon',
  duration: '15-60 seg',
  includes: ['Concepto creativo', 'Casting', 'Producción', 'Post-producción'],
  galleryColor: 'from-amber-500/20 to-yellow-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Spot publicitario ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Spot publicitario ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Spot publicitario ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Spot publicitario ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Spot publicitario ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Spot publicitario ejemplo 6' },
  ]
},
{
  id: 'reels-redes',
  title: 'Reels para Redes',
  description: 'Contenido vertical y dinámico para Instagram, TikTok y Facebook que genera engagement real.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b0948c90-1771909777566.png',
  imageAlt: 'Grabación de reel para redes sociales con smartphone profesional y ring light en estudio pequeño',
  icon: 'DevicePhoneMobileIcon',
  duration: '15-90 seg',
  includes: ['Formato vertical', 'Subtítulos', 'Música tendencia', 'Efectos'],
  galleryColor: 'from-pink-500/20 to-rose-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Reel para redes ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Reel para redes ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Reel para redes ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Reel para redes ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Reel para redes ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Reel para redes ejemplo 6' },
  ]
},
{
  id: 'animaciones',
  title: 'Animaciones',
  description: 'Motion graphics, animaciones 2D y videos explicativos para comunicar conceptos complejos de forma visual.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bb542a12-1772654175243.png',
  imageAlt: 'Diseñador trabajando en animación motion graphics en pantalla de computadora con software profesional',
  icon: 'CpuChipIcon',
  duration: '30 seg - 3 min',
  includes: ['Storyboard', 'Animación', 'Voz en off', 'Efectos sonoros'],
  galleryColor: 'from-purple-500/20 to-violet-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Animación ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Animación ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Animación ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Animación ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Animación ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Animación ejemplo 6' },
  ]
},
{
  id: 'videos-corporativos',
  title: 'Videos Corporativos',
  description: 'Presenta tu empresa, cultura y valores de forma profesional. Ideal para presentaciones, sitios web y redes sociales.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1597b72f9-1765819001401.png',
  imageAlt: 'Grabación de video corporativo en sala de reuniones moderna con ejecutivos en ambiente profesional',
  icon: 'BuildingOffice2Icon',
  duration: '2-5 min',
  includes: ['Guión', 'Grabación', 'Edición', 'Música'],
  galleryColor: 'from-blue-500/20 to-cyan-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Video corporativo ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Video corporativo ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Video corporativo ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Video corporativo ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Video corporativo ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Video corporativo ejemplo 6' },
  ]
},
{
  id: 'fotografia-comercial',
  title: 'Fotografía Comercial',
  description: 'Fotografía de productos, gastronomía, arquitectura y retratos profesionales para tu marca.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1df13d240-1773207154179.png',
  imageAlt: 'Fotografía comercial de producto con iluminación de estudio profesional y fondo neutro',
  icon: 'PhotoIcon',
  duration: 'Sesión 4-8 hrs',
  includes: ['Estudio o locación', 'Retoque', 'Galería digital', 'Licencia comercial'],
  galleryColor: 'from-orange-500/20 to-amber-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Fotografía comercial ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Fotografía comercial ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Fotografía comercial ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Fotografía comercial ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Fotografía comercial ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Fotografía comercial ejemplo 6' },
  ]
},
{
  id: 'cobertura-eventos',
  title: 'Cobertura de Eventos',
  description: 'Cobertura fotográfica y videográfica profesional de eventos corporativos, lanzamientos y activaciones.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fb372d00-1772191472873.png',
  imageAlt: 'Fotógrafo profesional capturando evento corporativo con equipo de iluminación en salón de convenciones',
  icon: 'CameraIcon',
  duration: 'Según evento',
  includes: ['Foto y video', 'Edición exprés', 'Entrega digital', 'Resumen highlight'],
  galleryColor: 'from-green-500/20 to-emerald-600/10',
  gallery: [
    { youtubeId: 'LXb3EKWsInQ', title: 'Cobertura de evento ejemplo 1' },
    { youtubeId: 'ysz5S6PUM-U', title: 'Cobertura de evento ejemplo 2' },
    { youtubeId: 'dQw4w9WgXcQ', title: 'Cobertura de evento ejemplo 3' },
    { youtubeId: 'ScMzIvxBSi4', title: 'Cobertura de evento ejemplo 4' },
    { youtubeId: '9bZkp7q19f0', title: 'Cobertura de evento ejemplo 5' },
    { youtubeId: 'kJQP7kiw5Fk', title: 'Cobertura de evento ejemplo 6' },
  ]
}];


interface GalleryModalProps {
  service: FilmService;
  onClose: () => void;
}

function GalleryModal({ service, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [service.id]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => i === 0 ? service.gallery.length - 1 : i - 1);
  }, [service.gallery.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => i === service.gallery.length - 1 ? 0 : i + 1);
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const currentVideo = service.gallery[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${service.title}`}>

      <div
        className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <AppIcon name={service.icon as 'CameraIcon'} size={16} className="text-accent" variant="outline" />
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
            aria-label="Cerrar galería">
            <AppIcon name="XMarkIcon" size={18} className="text-current" variant="outline" />
          </button>
        </div>

        {/* Carousel YouTube Video */}
        <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
          <iframe
            key={`${service.id}-${currentIndex}`}
            src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Video anterior">
            <AppIcon name="ChevronLeftIcon" size={20} className="text-white" variant="outline" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Video siguiente">
            <AppIcon name="ChevronRightIcon" size={20} className="text-white" variant="outline" />
          </button>
        </div>

        {/* Video Title */}
        <div className="px-6 pt-3 pb-1">
          <p className="text-sm text-muted-foreground leading-snug">{currentVideo.title}</p>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 py-3 px-6">
          {service.gallery.map((_, idx) =>
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-accent' :'w-2 h-2 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a video ${idx + 1}`}
            />
          )}
        </div>

        {/* Video Thumbnails */}
        <div className="flex gap-2 px-6 pb-5 overflow-x-auto">
          {service.gallery.map((video, idx) =>
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-black ${
                idx === currentIndex ? 'border-accent' : 'border-border hover:border-accent/50'
              }`}
              aria-label={`Miniatura video ${idx + 1}`}>
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-black ml-0.5" fill="currentColor" viewBox="0 0 8 10">
                    <path d="M0 0l8 5-8 5V0z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FilmServices() {
  const [activeService, setActiveService] = useState<FilmService | null>(null);

  return (
    <section className="py-24 px-6" aria-labelledby="film-services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Producción Audiovisual</p>
          <h2 id="film-services-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            Contenido que{' '}
            <span className="font-serif italic font-normal text-accent">conecta.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filmServices.map((service) =>
            <article
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden border border-border group hover:border-accent/30 transition-all duration-300 cursor-pointer"
              aria-label={service.title}
              onClick={() => setActiveService(service)}>

              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                    {service.duration}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-card/80 border border-border flex items-center justify-center">
                  <AppIcon name={service.icon as 'CameraIcon'} size={16} className="text-accent" variant="outline" />
                </div>
                {/* Gallery hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span className="text-white text-sm font-medium">Ver videos</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent/70">Incluye:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.includes.map((item) =>
                      <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                        {item}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeService &&
        <GalleryModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      }
    </section>
  );
}
