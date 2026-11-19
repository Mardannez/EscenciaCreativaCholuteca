import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FilmHero from './components/FilmHero';
import FilmServices from './components/FilmServices';
import FilmProcess from './components/FilmProcess';
import FilmCTA from './components/FilmCTA';

export const metadata: Metadata = {
  title: 'Esencia Film — Producción Audiovisual en Honduras',
  description: 'Videos corporativos, spots publicitarios, reels, animaciones y fotografía comercial en Choluteca, Honduras. Producción audiovisual de alto impacto.',
};

export default function EsenciaFilmPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <FilmHero />
      <FilmServices />
      <FilmProcess />
      <FilmCTA />
      <Footer />
      <WhatsAppFloat message="Hola, me interesa cotizar un servicio de producción audiovisual." />
    </main>
  );
}