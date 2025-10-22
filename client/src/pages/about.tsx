import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" data-testid="text-about-title">
            {t('nav.about')}
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center">
              About page content coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
