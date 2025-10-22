import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, DollarSign, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: CheckCircle,
      title: t('services.inspection.title'),
      description: t('services.inspection.description'),
      testId: 'inspection',
    },
    {
      icon: DollarSign,
      title: t('services.financing.title'),
      description: t('services.financing.description'),
      testId: 'financing',
    },
    {
      icon: Shield,
      title: t('services.warranty.title'),
      description: t('services.warranty.description'),
      testId: 'warranty',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-services-title">
          {t('services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-service-${service.testId}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-service-title-${service.testId}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" data-testid={`text-service-desc-${service.testId}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
