import { motion } from "framer-motion";
import CarCard from "./CarCard";
import carBmwZ3m from "@/assets/car-bmw-z3m.jpg";
import carOpelKadett from "@/assets/car-opel-kadett.jpg";
import carChevrolet4100 from "@/assets/car-chevrolet-4100.jpg";
import carToyotaHiace from "@/assets/car-toyota-hiace.jpg";
import carMercedes300ce from "@/assets/car-mercedes-300ce.jpg";
import carToyotaCressida from "@/assets/car-toyota-cressida.jpg";

export interface Car {
  id: number;
  image: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: string;
  price: string | null;
  transmission: "Manual" | "Automatic";
  fuel: "Petrol" | "Diesel";
}

const cars: Car[] = [
  {
    id: 1,
    image: carBmwZ3m,
    year: 2002,
    make: "BMW",
    model: "Z3M Coupe",
    variant: "AC Schnitzer",
    mileage: "150 000 km",
    price: "R1 500 000",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 2,
    image: carOpelKadett,
    year: 1991,
    make: "Opel",
    model: "Kadett GSI",
    variant: "16v Superboss",
    mileage: "130 000 km",
    price: "R450 000",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 3,
    image: carChevrolet4100,
    year: 1975,
    make: "Chevrolet",
    model: "4100",
    variant: "Limited",
    mileage: "53 000 km",
    price: null,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 4,
    image: carToyotaHiace,
    year: 1991,
    make: "Toyota",
    model: "Hiace Super 16",
    variant: "Commuter",
    mileage: "68 000 km",
    price: null,
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 5,
    image: carMercedes300ce,
    year: 1990,
    make: "Mercedes Benz",
    model: "300CE Coupe",
    variant: "A/T",
    mileage: "176 000 km",
    price: "R350 000",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 6,
    image: carToyotaCressida,
    year: 1991,
    make: "Toyota",
    model: "Cressida",
    variant: "30i Auto",
    mileage: "90 000 km",
    price: null,
    transmission: "Automatic",
    fuel: "Petrol",
  },
];

const CarListings = () => {
  return (
    <section id="vehicles" className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-wider mb-4">
            <span className="text-chrome">Current</span>{" "}
            <span className="text-primary">Stock</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Explore our hand-picked selection of exceptional classic and collector vehicles
          </p>
        </motion.div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-widest py-4 px-8 rounded-md btn-glow transition-all"
          >
            Enquire About a Vehicle
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CarListings;
