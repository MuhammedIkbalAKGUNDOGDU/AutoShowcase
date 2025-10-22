import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  id?: string;
  image: string;
  make: string;
  model: string;
  year: number;
  price: string;
}

export default function CarCard({
  id,
  image,
  make,
  model,
  year,
  price,
}: CarCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group"
      data-testid={`card-car-${make}-${model}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3
            className="text-xl font-bold text-foreground"
            data-testid={`text-car-name-${make}-${model}`}
          >
            {year} {make} {model}
          </h3>
          <p
            className="text-2xl font-bold text-primary"
            data-testid={`text-car-price-${make}-${model}`}
          >
            {price}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={id ? `/car/${id}` : "/vehicles"}>
          <Button
            variant="outline"
            className="w-full"
            data-testid={`button-view-details-${make}-${model}`}
          >
            {t("featured.viewDetails")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
