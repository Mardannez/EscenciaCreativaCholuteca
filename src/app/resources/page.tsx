import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourcesInteractive from './components/ResourcesInteractive';

export const metadata: Metadata = {
  title: 'Recursos de Marketing - EsenciaCreativa',
  description: 'Accede a guías prácticas, herramientas descargables y conocimientos especializados para impulsar el crecimiento de tu negocio local en Choluteca. Recursos gratuitos de marketing digital, SEO local y redes sociales.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ResourcesInteractive />
      </main>
    </>
  );
}