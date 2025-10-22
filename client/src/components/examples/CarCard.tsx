import CarCard from "../CarCard";
const mercedesImage = "/Mercedes_luxury_sedan_showroom_a582117c.png";

export default function CarCardExample() {
  return (
    <div className="max-w-sm">
      <CarCard
        image={mercedesImage}
        make="Mercedes-Benz"
        model="S-Class"
        year={2024}
        price="₺3.750.000"
      />
    </div>
  );
}
