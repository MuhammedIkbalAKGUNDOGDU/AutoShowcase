import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Shield,
  Star,
  Car,
  Heart,
  Target,
  Globe,
} from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
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

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilirlik",
      description:
        "Müşterilerimize en güvenilir hizmeti sunmak için sürekli çalışıyoruz.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Kalite",
      description: "Sadece en kaliteli araçları müşterilerimize sunuyoruz.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti bizim önceliğimizdir.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hedef Odaklılık",
      description: "Her projede mükemmellik hedefliyoruz.",
    },
  ];

  const stats = [
    { number: "500+", label: "Mutlu Müşteri" },
    { number: "1000+", label: "Satılan Araç" },
    { number: "15+", label: "Yıllık Deneyim" },
    { number: "50+", label: "Marka" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge variant="secondary" className="mb-4">
                  Premium Auto Showcase
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                data-testid="text-about-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("nav.about")}
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Premium otomobil dünyasında 15 yılı aşkın deneyimimizle, en
                kaliteli araçları müşterilerimize sunuyoruz. Güvenilirlik,
                kalite ve müşteri memnuniyeti bizim önceliğimizdir.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={scaleIn}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInLeft}>
                <Card>
                  <CardContent className="p-8">
                    <motion.div
                      className="flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Misyonumuz</h2>
                    </motion.div>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Premium otomobil sektöründe müşterilerimize en kaliteli
                      araçları sunarak, onların hayallerini gerçeğe dönüştürmek.
                      Güvenilir, şeffaf ve müşteri odaklı hizmet anlayışımızla
                      sektörde öncü olmaya devam ediyoruz.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <Card>
                  <CardContent className="p-8">
                    <motion.div
                      className="flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Vizyonumuz</h2>
                    </motion.div>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Türkiye'nin en güvenilir premium otomobil platformu olmak.
                      Teknolojik yeniliklerle müşteri deneyimini sürekli
                      geliştirerek, sektörde standartları belirleyen bir marka
                      haline gelmek.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Değerlerimiz
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                İş yapış şeklimizi belirleyen temel değerlerimiz
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="text-center">
                    <CardContent className="p-8">
                      <motion.div
                        className="flex justify-center mb-4 text-primary"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ekibimiz</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Alanında uzman, deneyimli ve müşteri odaklı ekibimiz
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Users className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Satış Ekibi</h3>
                    <p className="text-muted-foreground text-sm">
                      Premium araçlar konusunda uzman satış danışmanlarımız,
                      size en uygun seçenekleri sunmak için burada.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Award className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Teknik Ekip</h3>
                    <p className="text-muted-foreground text-sm">
                      Sertifikalı teknisyenlerimiz, araçlarınızın bakım ve
                      onarımında en yüksek kaliteyi garanti eder.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Car className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      Müşteri Hizmetleri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      7/24 müşteri hizmetlerimiz, her türlü sorunuzda yanınızda
                      olmaya devam ediyor.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
