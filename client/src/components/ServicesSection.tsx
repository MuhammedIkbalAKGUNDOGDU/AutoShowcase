import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, DollarSign, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const services = [
    {
      icon: CheckCircle,
      title: t("services.inspection.title"),
      description: t("services.inspection.description"),
      testId: "inspection",
    },
    {
      icon: DollarSign,
      title: t("services.financing.title"),
      description: t("services.financing.description"),
      testId: "financing",
    },
    {
      icon: Shield,
      title: t("services.warranty.title"),
      description: t("services.warranty.description"),
      testId: "warranty",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-testid="text-services-title"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {t("services.title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={scaleIn}>
                <Card
                  className="hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-service-${service.testId}`}
                >
                  <CardHeader>
                    <motion.div
                      className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <CardTitle
                      className="text-xl"
                      data-testid={`text-service-title-${service.testId}`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-muted-foreground"
                      data-testid={`text-service-desc-${service.testId}`}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
