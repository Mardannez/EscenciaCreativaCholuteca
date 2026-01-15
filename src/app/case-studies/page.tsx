import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CaseStudiesInteractive from './components/CaseStudiesInteractive';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Casos de Éxito - EsenciaCreativa',
  description: 'Descubre casos de éxito comprobados de negocios locales en Choluteca que han transformado sus resultados con estrategias digitales medibles. Testimonios reales, métricas transparentes y ROI demostrado.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <CaseStudiesInteractive />
        <StatsSection />
        <CTASection />
      </main>
    </>
  );
}