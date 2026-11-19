import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ImpresionesHero from './components/ImpresionesHero';
import ImpresionesServices from './components/ImpresionesServices';
import ImpresionesProcess from './components/ImpresionesProcess';
import ImpresionsCTA from './components/ImpresionsCTA';

export const metadata: Metadata = {
  title: 'Esencia Impresiones — Impresión Publicitaria en Honduras',
  description: 'Banners, lonas, rótulos, vinilos, stickers y material POP en Choluteca, Honduras. Soluciones impresas profesionales para tu marca.',
};

export default function EsenciaImpresionesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ImpresionesHero />
      <ImpresionesServices />
      <ImpresionesProcess />
      <ImpresionsCTA />
      <Footer />
      <WhatsAppFloat message="Hola, me interesa cotizar un servicio de impresión." />
    </main>
  );
}