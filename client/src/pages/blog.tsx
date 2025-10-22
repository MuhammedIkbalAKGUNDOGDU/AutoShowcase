import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

// Blog images from public folder
const blogImage1 = "/Mercedes_luxury_sedan_showroom_a582117c.png";
const blogImage2 = "/Red_Porsche_sports_car_afac8338.png";
const blogImage3 = "/Blue_BMW_performance_sedan_0e589d84.png";
const blogImage4 = "/White_Audi_luxury_SUV_e1f6f55b.png";
const blogImage5 = "/Silver_Tesla_electric_sedan_62882bc5.png";
const blogImage6 = "/Green_Range_Rover_luxury_SUV_85b8eefb.png";

const getBlogPosts = (t: any) => {
  const getTags = (postId: string) => {
    const tagMap: { [key: string]: string[] } = {
      "premium-arac-bakimi-2024": ["Bakım", "Premium", "Performans"],
      "elektrikli-araclarin-gelecegi": ["Elektrikli", "Teknoloji", "Gelecek"],
      "luxury-suv-secimi": ["SUV", "Lüks", "Rehber"],
      "spor-araba-karsilastirma": ["Spor Araba", "Karşılaştırma", "Performans"],
      "arac-finansman-secenekleri": ["Finansman", "Lüks", "Rehber"],
      "arac-sigortasi-rehberi": ["Sigorta", "Güvenlik", "Rehber"],
    };
    return tagMap[postId] || [];
  };

  return [
    {
      id: "premium-arac-bakimi-2024",
      title: t("blog.posts.premium-arac-bakimi-2024.title"),
      excerpt: t("blog.posts.premium-arac-bakimi-2024.excerpt"),
      image: blogImage1,
      author: "Ahmet Yılmaz",
      date: "2024-01-15",
      category: t("blog.posts.premium-arac-bakimi-2024.category"),
      readTime: "5 dk",
      tags: getTags("premium-arac-bakimi-2024"),
    },
    {
      id: "elektrikli-araclarin-gelecegi",
      title: t("blog.posts.elektrikli-araclarin-gelecegi.title"),
      excerpt: t("blog.posts.elektrikli-araclarin-gelecegi.excerpt"),
      image: blogImage5,
      author: "Elif Demir",
      date: "2024-01-12",
      category: t("blog.posts.elektrikli-araclarin-gelecegi.category"),
      readTime: "7 dk",
      tags: getTags("elektrikli-araclarin-gelecegi"),
    },
    {
      id: "luxury-suv-secimi",
      title: t("blog.posts.luxury-suv-secimi.title"),
      excerpt: t("blog.posts.luxury-suv-secimi.excerpt"),
      image: blogImage4,
      author: "Mehmet Kaya",
      date: "2024-01-10",
      category: t("blog.posts.luxury-suv-secimi.category"),
      readTime: "6 dk",
      tags: getTags("luxury-suv-secimi"),
    },
    {
      id: "spor-araba-karsilastirma",
      title: t("blog.posts.spor-araba-karsilastirma.title"),
      excerpt: t("blog.posts.spor-araba-karsilastirma.excerpt"),
      image: blogImage2,
      author: "Zeynep Özkan",
      date: "2024-01-08",
      category: t("blog.posts.spor-araba-karsilastirma.category"),
      readTime: "8 dk",
      tags: getTags("spor-araba-karsilastirma"),
    },
    {
      id: "arac-finansman-secenekleri",
      title: t("blog.posts.arac-finansman-secenekleri.title"),
      excerpt: t("blog.posts.arac-finansman-secenekleri.excerpt"),
      image: blogImage3,
      author: "Can Arslan",
      date: "2024-01-05",
      category: t("blog.posts.arac-finansman-secenekleri.category"),
      readTime: "4 dk",
      tags: getTags("arac-finansman-secenekleri"),
    },
    {
      id: "arac-sigortasi-rehberi",
      title: t("blog.posts.arac-sigortasi-rehberi.title"),
      excerpt: t("blog.posts.arac-sigortasi-rehberi.excerpt"),
      image: blogImage6,
      author: "Ayşe Yıldız",
      date: "2024-01-03",
      category: t("blog.posts.arac-sigortasi-rehberi.category"),
      readTime: "5 dk",
      tags: getTags("arac-sigortasi-rehberi"),
    },
  ];
};

export default function Blog() {
  const { t } = useTranslation();
  const blogPosts = getBlogPosts(t);

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
              <Badge variant="secondary" className="mb-4">
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t("blog.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("blog.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {blogPosts.map((post, index) => (
                <motion.div key={post.id} variants={scaleIn}>
                  <Link href={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-black"
                          >
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString("tr-TR")}
                            </div>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag: string) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                              <span className="text-sm font-medium">
                                {t("blog.readMore")}
                              </span>
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
