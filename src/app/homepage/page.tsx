import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ServicesPreview from './components/ServicesPreview';
import PerformanceMetrics from './components/PerformanceMetrics';
import LeadCaptureModal from './components/LeadCaptureModal';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PortfolioCarouselSection from "./components/PortfolioCarouselSection";
import "../../styles/carousel.css";

export const metadata: Metadata = {
  title: 'Esencia Creativa - Agencia de Marketing Digital en Choluteca, Honduras',
  description: 'Transformamos ideas en resultados medibles. Agencia de marketing digital que impulsa el crecimiento de negocios locales en Choluteca con estrategias comprobadas y ROI transparente.',
};

export default function HomePage() {

  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
           {/* ✅ aquí va el client component */}
        <PortfolioCarouselSection />
        <SocialProofSection />
        <ServicesPreview />
        <PerformanceMetrics />
        <TestimonialCarousel />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
      <LeadCaptureModal />
    </div>
  );
}