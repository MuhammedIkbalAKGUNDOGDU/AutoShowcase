import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "./CarCard";
// Car images from public folder
const mercedesImage = "/Mercedes_luxury_sedan_showroom_a582117c.png";
const porscheImage = "/Red_Porsche_sports_car_afac8338.png";
const bmwImage = "/Blue_BMW_performance_sedan_0e589d84.png";
const audiImage = "/White_Audi_luxury_SUV_e1f6f55b.png";
const teslaImage = "/Silver_Tesla_electric_sedan_62882bc5.png";
const rangeRoverImage = "/Green_Range_Rover_luxury_SUV_85b8eefb.png";

//todo: remove mock functionality
const featuredCars = [
  {
    id: "mercedes-s-class",
    image: mercedesImage,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: "₺3.750.000",
  },
  {
    id: "porsche-911-carrera",
    image: porscheImage,
    make: "Porsche",
    model: "911 Carrera",
    year: 2024,
    price: "₺4.160.000",
  },
  {
    id: "bmw-m5-competition",
    image: bmwImage,
    make: "BMW",
    model: "M5 Competition",
    year: 2024,
    price: "₺3.500.000",
  },
  {
    id: "audi-q8-premium",
    image: audiImage,
    make: "Audi",
    model: "Q8 Premium",
    year: 2024,
    price: "₺2.680.000",
  },
  {
    id: "tesla-model-s-plaid",
    image: teslaImage,
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: "₺3.300.000",
  },
  {
    id: "range-rover-sport-hse",
    image: rangeRoverImage,
    make: "Range Rover",
    model: "Sport HSE",
    year: 2024,
    price: "₺2.960.000",
  },
];

export default function FeaturedVehicles() {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const [api, setApi] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-testid="text-featured-title"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {t("featured.title")}
        </motion.h2>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredCars.map((car, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <CarCard {...car} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel Navigation Buttons */}
          <div className="hidden md:flex absolute inset-0 pointer-events-none">
            <div className="flex justify-between items-center w-full px-4">
              <Button
                variant="outline"
                size="icon"
                className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:bg-gray-50 -ml-4"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                data-testid="button-carousel-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:bg-gray-50 -mr-4"
                onClick={scrollNext}
                disabled={!canScrollNext}
                data-testid="button-carousel-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
