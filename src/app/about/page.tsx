import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import EvolutionTimeline from './components/EvolutionTimeline';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import CertificationsSection from './components/CertificationsSection';
import MediaMentionsSection from './components/MediaMentionsSection';
import CommunitySection from './components/CommunitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Nosotros - Esencia Creativa',
  description: 'Conoce la historia de Esencia Creativa: nuestra evolución de producción audiovisual a agencia de marketing digital líder en Choluteca, Honduras. Equipo experto, certificaciones internacionales y compromiso con resultados medibles.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <EvolutionTimeline />
        <ValuesSection />
        <TeamSection />
        <CertificationsSection />
        <MediaMentionsSection />
        <CommunitySection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}