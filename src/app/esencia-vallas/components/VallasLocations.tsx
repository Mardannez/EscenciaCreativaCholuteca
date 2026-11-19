'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { vallasData, type VallaPunto } from '../data/vallasData';

// ─── Gallery Modal ────────────────────────────────────────────────────────────

interface GalleryModalProps {
  valla: VallaPunto;
  onClose: () => void;
}

function GalleryModal({ valla, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [valla.id]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? valla.fotos.length - 1 : i - 1));
  }, [valla.fotos.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === valla.fotos.length - 1 ? 0 : i + 1));
  }, [valla.fotos.length]);

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

  const currentFoto = valla.fotos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${valla.nombre}`}
    >
      <div
        className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Icon name="MapPinIcon" size={16} className="text-accent" variant="outline" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">{valla.nombre}</h3>
              <p className="text-xs text-muted-foreground">
                {currentIndex + 1} / {valla.fotos.length} · {currentFoto.angulo}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Cerrar galería"
          >
            <Icon name="XMarkIcon" size={18} className="text-current" variant="outline" />
          </button>
        </div>

        {/* Carousel Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <AppImage
            key={`${valla.id}-${currentIndex}`}
            src={currentFoto.src}
            alt={currentFoto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
            <p className="text-white text-sm leading-snug">{currentFoto.alt}</p>
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Foto anterior"
          >
            <Icon name="ChevronLeftIcon" size={20} className="text-white" variant="outline" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Foto siguiente"
          >
            <Icon name="ChevronRightIcon" size={20} className="text-white" variant="outline" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 py-3 px-6">
          {valla.fotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-accent' :'w-2 h-2 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-6 pb-5 overflow-x-auto">
          {valla.fotos.map((foto, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex ? 'border-accent' : 'border-border hover:border-accent/50'
              }`}
              aria-label={`Ver ${foto.angulo}`}
            >
              <AppImage
                src={foto.src}
                alt={foto.angulo}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Google Maps Footer */}
        <div className="px-6 pb-5">
          <a
            href={valla.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-accent/30 bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
          >
            <Icon name="MapPinIcon" size={15} className="text-accent" variant="outline" />
            Ver ubicación en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Valla Card ───────────────────────────────────────────────────────────────

function VallasCard({ valla }: { valla: VallaPunto }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hola, me interesa cotizar la valla "${valla.nombre}" ubicada en ${valla.ubicacion}. ¿Está disponible?`
  );
  const infoMsg = encodeURIComponent(
    `Hola, quisiera más información sobre la valla "${valla.nombre}" en ${valla.ubicacion}.`
  );

  return (
    <>
      <article
        className="glass-card rounded-3xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 group"
        aria-label={`Valla: ${valla.nombre}`}
      >
        {/* Photo Gallery */}
        <div
          className="relative h-56 overflow-hidden cursor-pointer"
          onClick={() => setGalleryOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setGalleryOpen(true)}
          aria-label={`Ver galería de ${valla.nombre}`}
        >
          <AppImage
            src={valla.fotos[activePhoto].src}
            alt={valla.fotos[activePhoto].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Gallery hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="PhotoIcon" size={16} className="text-white" variant="outline" />
              <span className="text-white text-sm font-medium">Ver galería</span>
            </div>
          </div>

          {/* Availability badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                valla.disponible
                  ? 'bg-green-500/20 text-green-400 border-green-500/30' :'bg-red-500/20 text-red-400 border-red-500/30'
              }`}
            >
              {valla.disponible ? '✓ Disponible' : '✗ Ocupada'}
            </span>
          </div>

          {/* Photo switcher */}
          {valla.fotos.length > 1 && (
            <div
              className="absolute bottom-4 right-4 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {valla.fotos.map((foto, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  aria-label={`Ver ${foto.angulo}`}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                    activePhoto === i
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'bg-card/80 text-foreground/60 border-border hover:border-accent/50'
                  }`}
                >
                  {foto.angulo}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="accent-line mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-1">{valla.nombre}</h3>

          <div className="flex items-start gap-2 mb-3">
            <Icon name="MapPinIcon" size={14} className="text-accent mt-0.5 shrink-0" variant="outline" />
            <p className="text-xs text-muted-foreground">{valla.ubicacion}</p>
          </div>

          {/* Google Maps link */}
          <a
            href={valla.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 font-medium mb-4 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="MapIcon" size={13} className="text-accent" variant="outline" />
            Ver en Google Maps
          </a>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{valla.descripcion}</p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-secondary rounded-xl p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent/70 mb-1">Medidas</p>
              <p className="text-sm font-bold text-foreground">{valla.medidas}</p>
            </div>
            <div className="bg-secondary rounded-xl p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent/70 mb-1">Tráfico</p>
              <p className="text-sm font-bold text-foreground">{valla.trafico}</p>
            </div>
            <div className="col-span-2 bg-secondary rounded-xl p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent/70 mb-1">Estructura</p>
              <p className="text-sm font-medium text-foreground">{valla.estructura}</p>
            </div>
          </div>

          {/* Zone tag */}
          <div className="flex items-center gap-2 mb-6">
            <Icon name="TagIcon" size={13} className="text-muted-foreground" variant="outline" />
            <span className="text-xs text-muted-foreground">{valla.zona}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={`https://wa.me/50427800441?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 btn-primary justify-center text-xs py-2.5 ${!valla.disponible ? 'opacity-50 pointer-events-none' : ''}`}
              aria-disabled={!valla.disponible}
            >
              <Icon name="CurrencyDollarIcon" size={14} variant="outline" />
              Cotizar
            </a>
            <a
              href={`https://wa.me/50427800441?text=${infoMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-outline justify-center text-xs py-2.5"
            >
              <Icon name="InformationCircleIcon" size={14} variant="outline" />
              Más Info
            </a>
          </div>
        </div>
      </article>

      {galleryOpen && (
        <GalleryModal valla={valla} onClose={() => setGalleryOpen(false)} />
      )}
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function VallasLocations() {
  const disponibles = vallasData.filter((v) => v.disponible).length;

  return (
    <section id="ubicaciones" className="py-24 px-6" aria-labelledby="vallas-locations-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Puntos Disponibles</p>
            <h2
              id="vallas-locations-heading"
              className="text-section-xl font-bold tracking-tight text-foreground"
            >
              Ubicaciones{' '}
              <span className="font-serif italic font-normal text-accent">estratégicas.</span>
            </h2>
          </div>
          <div className="glass-card rounded-2xl px-6 py-4 border border-border flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
              <Icon name="MapPinIcon" size={18} className="text-green-400" variant="outline" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{disponibles} / {vallasData.length}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Puntos disponibles</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vallasData.map((valla) => (
            <VallasCard key={valla.id} valla={valla} />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          * La disponibilidad puede cambiar. Contáctanos para confirmar el estado actual de cada punto.
        </p>
      </div>
    </section>
  );
}