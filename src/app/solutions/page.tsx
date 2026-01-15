import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SolutionHero from './components/SolutionHero';
import SolutionsInteractive from './components/SolutionsInteractive';
import IndustryShowcase from './components/IndustryShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Soluciones de Marketing Digital - EsenciaCreativa',
  description: 'Descubre nuestras soluciones estratégicas de marketing digital diseñadas para negocios locales en Choluteca. Desde redes sociales hasta SEO local, transformamos ideas en resultados medibles con ROI comprobado.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <SolutionHero className="mt-16 lg:mt-20" />
      
      {/* Interactive Solutions Grid with Finder and ROI Calculator */}
      <SolutionsInteractive />
      
      {/* Industry-Specific Showcase */}
      <IndustryShowcase />
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="font-inter text-sm">
                &copy; {new Date().getFullYear()} Esencia Creativa. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/contact" className="font-inter text-sm hover:text-accent transition-colors duration-300">
                Contacto
              </a>
              <a href="/resources" className="font-inter text-sm hover:text-accent transition-colors duration-300">
                Recursos
              </a>
              <a href="/about" className="font-inter text-sm hover:text-accent transition-colors duration-300">
                Nosotros
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}