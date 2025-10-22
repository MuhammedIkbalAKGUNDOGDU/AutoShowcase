import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
const heroImage = "/Premium_luxury_sports_car_hero_fc308cb2.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          data-testid="text-hero-title"
        >
          {t("hero.title")}
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 font-light"
          data-testid="text-hero-subtitle"
        >
          {t("hero.subtitle")}
        </p>
        <Link href="/vehicles">
          <Button
            variant="default"
            size="lg"
            className="text-lg px-8 py-6"
            data-testid="button-hero-cta"
          >
            {t("hero.cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
