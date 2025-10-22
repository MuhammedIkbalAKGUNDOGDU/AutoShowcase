import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  Users,
  Settings,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Mock car data - in real app this would come from API
const getCarDetails = (carId: string, t: any) => {
  const cars = {
    "mercedes-s-class": {
      id: "mercedes-s-class",
      image: "/Mercedes_luxury_sedan_showroom_a582117c.png",
      make: "Mercedes-Benz",
      model: "S-Class",
      year: 2024,
      price: "₺3.750.000",
      description: t("carDetail.descriptions.mercedes-s-class"),
      features: [
        "4MATIC All-Wheel Drive",
        "Burmester 4D Surround Sound",
        "MBUX Hyperscreen",
        "Active Body Control",
        "ENERGIZING Comfort Control",
        "DISTRONIC Active Proximity Control",
      ],
      specifications: {
        engine: "3.0L V6 Hybrid",
        power: "367 HP",
        torque: "500 Nm",
        acceleration: "5.1 s (0-100 km/h)",
        topSpeed: "250 km/h",
        fuelConsumption: "7.8 L/100km",
        transmission: "9G-TRONIC",
        driveType: "4MATIC AWD",
        seats: "5",
        doors: "4",
      },
      colors: ["Obsidian Black", "Diamond White", "Selenite Grey", "Ruby Red"],
      gallery: ["/Mercedes_luxury_sedan_showroom_a582117c.png"],
    },
    "porsche-911-carrera": {
      id: "porsche-911-carrera",
      image: "/Red_Porsche_sports_car_afac8338.png",
      make: "Porsche",
      model: "911 Carrera",
      year: 2024,
      price: "₺4.160.000",
      description: t("carDetail.descriptions.porsche-911-carrera"),
      features: [
        "Porsche Doppelkupplung (PDK)",
        "Porsche Active Suspension Management",
        "Porsche Torque Vectoring Plus",
        "Sport Chrono Package",
        "Porsche Communication Management",
        "BOSE Surround Sound System",
      ],
      specifications: {
        engine: "3.0L Twin-Turbo Flat-6",
        power: "385 HP",
        torque: "450 Nm",
        acceleration: "4.2 s (0-100 km/h)",
        topSpeed: "293 km/h",
        fuelConsumption: "10.8 L/100km",
        transmission: "8-Speed PDK",
        driveType: "Rear-Wheel Drive",
        seats: "4",
        doors: "2",
      },
      colors: ["Guards Red", "Jet Black", "Carrara White", "GT Silver"],
      gallery: ["/Red_Porsche_sports_car_afac8338.png"],
    },
    "bmw-m5-competition": {
      id: "bmw-m5-competition",
      image: "/Blue_BMW_performance_sedan_0e589d84.png",
      make: "BMW",
      model: "M5 Competition",
      year: 2024,
      price: "₺3.500.000",
      description: t("carDetail.descriptions.bmw-m5-competition"),
      features: [
        "xDrive All-Wheel Drive",
        "M TwinPower Turbo V8",
        "M Sport Differential",
        "Adaptive M Suspension",
        "M Carbon Ceramic Brakes",
        "BMW Live Cockpit Professional",
      ],
      specifications: {
        engine: "4.4L Twin-Turbo V8",
        power: "625 HP",
        torque: "750 Nm",
        acceleration: "3.3 s (0-100 km/h)",
        topSpeed: "305 km/h",
        fuelConsumption: "10.5 L/100km",
        transmission: "8-Speed M Steptronic",
        driveType: "xDrive AWD",
        seats: "5",
        doors: "4",
      },
      colors: [
        "Marina Bay Blue",
        "Alpine White",
        "Sapphire Black",
        "Frozen Brilliant White",
      ],
      gallery: ["/Blue_BMW_performance_sedan_0e589d84.png"],
    },
    "audi-q8-premium": {
      id: "audi-q8-premium",
      image: "/White_Audi_luxury_SUV_e1f6f55b.png",
      make: "Audi",
      model: "Q8 Premium",
      year: 2024,
      price: "₺2.680.000",
      description: t("carDetail.descriptions.audi-q8-premium"),
      features: [
        "quattro All-Wheel Drive",
        "Virtual Cockpit Plus",
        "Bang & Olufsen 3D Sound",
        "Audi Pre Sense",
        "Adaptive Air Suspension",
        "Matrix LED Headlights",
      ],
      specifications: {
        engine: "3.0L TFSI V6",
        power: "340 HP",
        torque: "500 Nm",
        acceleration: "5.9 s (0-100 km/h)",
        topSpeed: "250 km/h",
        fuelConsumption: "8.7 L/100km",
        transmission: "8-Speed Tiptronic",
        driveType: "quattro AWD",
        seats: "5",
        doors: "5",
      },
      colors: [
        "Glacier White",
        "Mythos Black",
        "Florett Silver",
        "Navarra Blue",
      ],
      gallery: ["/White_Audi_luxury_SUV_e1f6f55b.png"],
    },
    "tesla-model-s-plaid": {
      id: "tesla-model-s-plaid",
      image: "/Silver_Tesla_electric_sedan_62882bc5.png",
      make: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      price: "₺3.300.000",
      description: t("carDetail.descriptions.tesla-model-s-plaid"),
      features: [
        "Tri-Motor All-Wheel Drive",
        "17-inch Touchscreen Display",
        "Autopilot & Full Self-Driving",
        "Premium Audio System",
        "Glass Roof",
        "Supercharger Network Access",
      ],
      specifications: {
        engine: "Tri-Motor Electric",
        power: "1020 HP",
        torque: "1420 Nm",
        acceleration: "2.1 s (0-100 km/h)",
        topSpeed: "322 km/h",
        fuelConsumption: "0 L/100km (Electric)",
        transmission: "Single Speed",
        driveType: "All-Wheel Drive",
        seats: "5",
        doors: "4",
      },
      colors: [
        "Pearl White Multi-Coat",
        "Solid Black",
        "Midnight Silver Metallic",
        "Deep Blue Metallic",
      ],
      gallery: ["/Silver_Tesla_electric_sedan_62882bc5.png"],
    },
    "range-rover-sport-hse": {
      id: "range-rover-sport-hse",
      image: "/Green_Range_Rover_luxury_SUV_85b8eefb.png",
      make: "Range Rover",
      model: "Sport HSE",
      year: 2024,
      price: "₺2.960.000",
      description:
        "Off-road yetenekleri ve lüks konforun birleşimi. Range Rover Sport HSE, her koşulda üstün performans sunar.",
      features: [
        "Terrain Response 2",
        "Adaptive Dynamics",
        "Meridian Sound System",
        "InControl Touch Pro Duo",
        "Wade Sensing",
        "All-Terrain Progress Control",
      ],
      specifications: {
        engine: "3.0L Inline-6 Mild Hybrid",
        power: "400 HP",
        torque: "550 Nm",
        acceleration: "5.9 s (0-100 km/h)",
        topSpeed: "225 km/h",
        fuelConsumption: "9.1 L/100km",
        transmission: "8-Speed Automatic",
        driveType: "All-Wheel Drive",
        seats: "5",
        doors: "5",
      },
      colors: [
        "British Racing Green",
        "Fuji White",
        "Santorini Black",
        "Lantau Bronze",
      ],
      gallery: ["/Green_Range_Rover_luxury_SUV_85b8eefb.png"],
    },
    "jaguar-f-type-r": {
      id: "jaguar-f-type-r",
      image: "/Green_Jaguar_sports_convertible_da95bc67.png",
      make: "Jaguar",
      model: "F-Type R",
      year: 2023,
      price: "₺3.100.000",
      description:
        "İngiliz zarafeti ve güçlü performansın buluşması. Jaguar F-Type R, spor otomobil tutkunları için tasarlandı.",
      features: [
        "Supercharged V8 Engine",
        "Adaptive Dynamics",
        "Meridian Sound System",
        "Jaguar InControl Touch Pro",
        "Active Exhaust System",
        "Configurable Dynamics",
      ],
      specifications: {
        engine: "5.0L Supercharged V8",
        power: "575 HP",
        torque: "700 Nm",
        acceleration: "3.7 s (0-100 km/h)",
        topSpeed: "300 km/h",
        fuelConsumption: "11.9 L/100km",
        transmission: "8-Speed Quickshift",
        driveType: "All-Wheel Drive",
        seats: "2",
        doors: "2",
      },
      colors: [
        "British Racing Green",
        "Firenze Red",
        "Santorini Black",
        "Fuji White",
      ],
      gallery: ["/Green_Jaguar_sports_convertible_da95bc67.png"],
    },
    "maserati-quattroporte": {
      id: "maserati-quattroporte",
      image: "/Gray_Maserati_luxury_sedan_3ee8da71.png",
      make: "Maserati",
      model: "Quattroporte",
      year: 2024,
      price: "₺3.380.000",
      description:
        "İtalyan lüksünün ve performansın simgesi. Maserati Quattroporte, zarafet ve gücü mükemmel şekilde harmanlar.",
      features: [
        "Ferrari-Designed V8 Engine",
        "Skyhook Adaptive Suspension",
        "Harman Kardon Premium Audio",
        "Maserati Touch Control Plus",
        "Active Torque Vectoring",
        "Bowers & Wilkins Sound System",
      ],
      specifications: {
        engine: "3.0L Twin-Turbo V6",
        power: "430 HP",
        torque: "580 Nm",
        acceleration: "4.8 s (0-100 km/h)",
        topSpeed: "286 km/h",
        fuelConsumption: "9.6 L/100km",
        transmission: "8-Speed Automatic",
        driveType: "All-Wheel Drive",
        seats: "5",
        doors: "4",
      },
      colors: ["Grigio Maratea", "Nero Ribelle", "Bianco Audace", "Blu Nobile"],
      gallery: ["/Gray_Maserati_luxury_sedan_3ee8da71.png"],
    },
    "bentley-continental-gt": {
      id: "bentley-continental-gt",
      image: "/Blue_Bentley_luxury_coupe_ef574268.png",
      make: "Bentley",
      model: "Continental GT",
      year: 2024,
      price: "₺7.350.000",
      description:
        "Ultra lüks grand tourer. Bentley Continental GT, el yapımı detayları ve güçlü performansı ile eşsiz bir deneyim sunar.",
      features: [
        "W12 Twin-Turbo Engine",
        "Bentley Dynamic Ride",
        "Naim for Bentley Audio",
        "Bentley Rotating Display",
        "Mulliner Driving Specification",
        "Bentley Safeguard Plus",
      ],
      specifications: {
        engine: "6.0L W12 Twin-Turbo",
        power: "635 HP",
        torque: "900 Nm",
        acceleration: "3.6 s (0-100 km/h)",
        topSpeed: "333 km/h",
        fuelConsumption: "12.2 L/100km",
        transmission: "8-Speed Dual-Clutch",
        driveType: "All-Wheel Drive",
        seats: "4",
        doors: "2",
      },
      colors: ["Beluga", "Onyx", "Dragon Red II", "Glacier White"],
      gallery: ["/Blue_Bentley_luxury_coupe_ef574268.png"],
    },
    "lexus-ls-500": {
      id: "lexus-ls-500",
      image: "/White_Lexus_luxury_sedan_6ae5aebd.png",
      make: "Lexus",
      model: "LS 500",
      year: 2024,
      price: "₺2.700.000",
      description:
        "Japon lüksünün zirvesi. Lexus LS 500, sessizlik ve konforu en üst seviyede sunar.",
      features: [
        "Lexus Safety System+ 2.0",
        "Mark Levinson Premium Audio",
        "Lexus Enform Remote",
        "Adaptive Variable Suspension",
        "Intelligent Clearance Sonar",
        "Panoramic View Monitor",
      ],
      specifications: {
        engine: "3.5L Twin-Turbo V6",
        power: "416 HP",
        torque: "600 Nm",
        acceleration: "4.6 s (0-100 km/h)",
        topSpeed: "250 km/h",
        fuelConsumption: "9.5 L/100km",
        transmission: "10-Speed Automatic",
        driveType: "Rear-Wheel Drive",
        seats: "5",
        doors: "4",
      },
      colors: [
        "Sonic Chrome",
        "Obsidian",
        "Nebula Gray Pearl",
        "Matador Red Mica",
      ],
      gallery: ["/White_Lexus_luxury_sedan_6ae5aebd.png"],
    },
    "aston-martin-db11": {
      id: "aston-martin-db11",
      image: "/Silver_Aston_Martin_sports_car_ad543668.png",
      make: "Aston Martin",
      model: "DB11",
      year: 2023,
      price: "₺6.450.000",
      description:
        "İngiliz spor otomobil geleneğinin modern yorumu. Aston Martin DB11, zarafet ve performansı birleştirir.",
      features: [
        "Aston Martin V12 Engine",
        "Adaptive Damping System",
        "Bowers & Wilkins Audio",
        "Aston Martin Infotainment",
        "Torque Vectoring",
        "Carbon Ceramic Brakes",
      ],
      specifications: {
        engine: "5.2L Twin-Turbo V12",
        power: "630 HP",
        torque: "700 Nm",
        acceleration: "3.9 s (0-100 km/h)",
        topSpeed: "335 km/h",
        fuelConsumption: "11.4 L/100km",
        transmission: "8-Speed Automatic",
        driveType: "Rear-Wheel Drive",
        seats: "2+2",
        doors: "2",
      },
      colors: ["Silver Birch", "Onyx Black", "Frosted Glass Blue", "Flugplatz"],
      gallery: ["/Silver_Aston_Martin_sports_car_ad543668.png"],
    },
    "rolls-royce-ghost": {
      id: "rolls-royce-ghost",
      image: "/Black_Rolls-Royce_luxury_sedan_89eec9b5.png",
      make: "Rolls-Royce",
      model: "Ghost",
      year: 2024,
      price: "₺10.950.000",
      description:
        "Ultra lüksün tanımı. Rolls-Royce Ghost, el yapımı detayları ve eşsiz konforu ile dünyanın en prestijli sedanlarından biridir.",
      features: [
        "V12 Twin-Turbo Engine",
        "Magic Carpet Ride",
        "Bespoke Audio System",
        "Rolls-Royce Connected",
        "Starlight Headliner",
        "Bespoke Clock",
      ],
      specifications: {
        engine: "6.75L V12 Twin-Turbo",
        power: "563 HP",
        torque: "850 Nm",
        acceleration: "4.8 s (0-100 km/h)",
        topSpeed: "250 km/h",
        fuelConsumption: "15.2 L/100km",
        transmission: "8-Speed Automatic",
        driveType: "Rear-Wheel Drive",
        seats: "5",
        doors: "4",
      },
      colors: ["Black Badge", "Diamond Black", "Titanium", "Arctic White"],
      gallery: ["/Black_Rolls-Royce_luxury_sedan_89eec9b5.png"],
    },
  };

  return cars[carId as keyof typeof cars] || null;
};

export default function CarDetail() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const { id } = useParams();

  // Get car ID from URL params
  const car = getCarDetails(id || "", t);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex-1 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold mb-4">
              {t("carDetail.notFound")}
            </h1>
            <Link href="/vehicles">
              <Button>{t("carDetail.backToVehicles")}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="flex-1 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/vehicles">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("carDetail.backToVehicles")}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Car Image */}
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src={car.image}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Color Options */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("carDetail.colors")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.colors.map((color, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <Badge variant="secondary" className="mb-2">
                  {car.year} Model
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {car.make} {car.model}
                </h1>
                <p className="text-3xl font-bold text-primary mb-4">
                  {car.price}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t("carDetail.features")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {t("carDetail.specifications")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("carDetail.engine")}
                        </p>
                        <p className="font-medium">
                          {car.specifications.engine}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("carDetail.power")}
                        </p>
                        <p className="font-medium">
                          {car.specifications.power}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Fuel className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("carDetail.fuelConsumption")}
                        </p>
                        <p className="font-medium">
                          {car.specifications.fuelConsumption}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t("carDetail.seats")}
                        </p>
                        <p className="font-medium">
                          {car.specifications.seats}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="flex-1 w-full">
                    {t("carDetail.contactUs")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="flex-1 w-full">
                    {t("carDetail.testDrive")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
