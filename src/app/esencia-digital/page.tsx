import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import DigitalHero from './components/DigitalHero';
import DigitalPlans from './components/DigitalPlans';
import DigitalServices from './components/DigitalServices';
import DigitalCTA from './components/DigitalCTA';

export const metadata: Metadata = {
  title: 'Esencia Digital — Marketing Digital en Honduras',
  description: 'Manejo de redes sociales, diseño web, branding digital y campañas para Facebook e Instagram en Choluteca, Honduras.',
};

export default function EsenciaDigitalPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <DigitalHero />
      <DigitalPlans />
      <DigitalServices />
      <DigitalCTA />
      <Footer />
      <WhatsAppFloat message="Hola, me interesa conocer sus planes de marketing digital." />
    </main>
  );
}