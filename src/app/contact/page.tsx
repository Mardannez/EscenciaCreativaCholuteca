import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ConsultationForm from './components/ConsultationForm';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Contacto - Esencia Creativa',
  description: 'Agenda tu consulta gratuita con Esencia Creativa. Múltiples canales de contacto: WhatsApp, teléfono, email y formulario. Oficina en Choluteca, Honduras. Respuesta en 24 horas.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16 lg:pt-20">
        <ContactHero />
        <ContactInfo />
        <ConsultationForm />
        <LocationMap />
        <FAQSection />
      </div>

      <WhatsAppWidget />
      <Footer />
    </main>
  );
}