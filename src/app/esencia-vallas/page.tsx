import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import VallasHero from './components/VallasHero';
import VallasLocations from './components/VallasLocations';
import VallasServices from './components/VallasServices';
import VallasCTA from './components/VallasCTA';

export const metadata: Metadata = {
  title: 'Esencia Vallas — Publicidad Exterior en Honduras',
  description: 'Vallas publicitarias en ubicaciones estratégicas de alto tránsito en Choluteca y Honduras. Diseño, producción e instalación incluidos.',
};

export default function EsenciaVallasPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <VallasHero />
      <VallasLocations />
      <VallasServices />
      <VallasCTA />
      <Footer />
      <WhatsAppFloat message="Hola, me interesa cotizar un espacio de valla publicitaria." />
    </main>
  );
}