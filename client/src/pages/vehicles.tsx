import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
// Car images from public folder
const mercedesImage = "/Mercedes_luxury_sedan_showroom_a582117c.png";
const porscheImage = "/Red_Porsche_sports_car_afac8338.png";
const bmwImage = "/Blue_BMW_performance_sedan_0e589d84.png";
const audiImage = "/White_Audi_luxury_SUV_e1f6f55b.png";
const teslaImage = "/Silver_Tesla_electric_sedan_62882bc5.png";
const rangeRoverImage = "/Green_Range_Rover_luxury_SUV_85b8eefb.png";
const jaguarImage = "/Green_Jaguar_sports_convertible_da95bc67.png";
const maseratiImage = "/Gray_Maserati_luxury_sedan_3ee8da71.png";
const bentleyImage = "/Blue_Bentley_luxury_coupe_ef574268.png";
const lexusImage = "/White_Lexus_luxury_sedan_6ae5aebd.png";
const astonMartinImage = "/Silver_Aston_Martin_sports_car_ad543668.png";
const rollsRoyceImage = "/Black_Rolls-Royce_luxury_sedan_89eec9b5.png";

//todo: remove mock functionality
const allCars = [
  {
    image: mercedesImage,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: "₺3.750.000",
  },
  {
    image: porscheImage,
    make: "Porsche",
    model: "911 Carrera",
    year: 2024,
    price: "₺4.160.000",
  },
  {
    image: bmwImage,
    make: "BMW",
    model: "M5 Competition",
    year: 2024,
    price: "₺3.500.000",
  },
  {
    image: audiImage,
    make: "Audi",
    model: "Q8 Premium",
    year: 2024,
    price: "₺2.680.000",
  },
  {
    image: teslaImage,
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: "₺3.300.000",
  },
  {
    image: rangeRoverImage,
    make: "Range Rover",
    model: "Sport HSE",
    year: 2024,
    price: "₺2.960.000",
  },
  {
    image: jaguarImage,
    make: "Jaguar",
    model: "F-Type R",
    year: 2023,
    price: "₺3.100.000",
  },
  {
    image: maseratiImage,
    make: "Maserati",
    model: "Quattroporte",
    year: 2024,
    price: "₺3.380.000",
  },
  {
    image: bentleyImage,
    make: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: "₺7.350.000",
  },
  {
    image: lexusImage,
    make: "Lexus",
    model: "LS 500",
    year: 2024,
    price: "₺2.700.000",
  },
  {
    image: astonMartinImage,
    make: "Aston Martin",
    model: "DB11",
    year: 2023,
    price: "₺6.450.000",
  },
  {
    image: rollsRoyceImage,
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: "₺10.950.000",
  },
];

export default function Vehicles() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  //todo: remove mock functionality
  const uniqueMakes = Array.from(
    new Set(allCars.map((car) => car.make))
  ).sort();
  const uniqueYears = Array.from(new Set(allCars.map((car) => car.year))).sort(
    (a, b) => b - a
  );

  //todo: remove mock functionality
  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = selectedMake === "all" || car.make === selectedMake;
    const matchesYear =
      selectedYear === "all" || car.year.toString() === selectedYear;
    return matchesSearch && matchesMake && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-testid="text-inventory-title"
          >
            {t("inventory.title")}
          </h1>

          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("inventory.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>

            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger data-testid="select-filter-make">
                <SelectValue placeholder={t("inventory.filterMake")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("inventory.allMakes")}</SelectItem>
                {uniqueMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger data-testid="select-filter-year">
                <SelectValue placeholder={t("inventory.filterYear")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("inventory.allYears")}</SelectItem>
                {uniqueYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p
                className="text-muted-foreground text-lg"
                data-testid="text-no-results"
              >
                No vehicles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
