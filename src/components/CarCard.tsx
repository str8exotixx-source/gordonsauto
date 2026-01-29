import { Gauge, Calendar, Cog, Fuel } from "lucide-react";
import type { Car } from "./CarListings";

interface CarCardProps {
  car: Car;
}

// Helper to calculate rough finance estimate (72 months, 11.5% interest)
const calculateFinance = (price: string | null): string | null => {
  if (!price) return null;
  const numericPrice = parseInt(price.replace(/[^\d]/g, ""));
  if (isNaN(numericPrice)) return null;
  // Simple monthly calculation: P * (r(1+r)^n) / ((1+r)^n - 1)
  const r = 0.115 / 12; // monthly rate
  const n = 72; // months
  const monthly = (numericPrice * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  return `R ${Math.round(monthly).toLocaleString()} pm`;
};

const CarCard = ({ car }: CarCardProps) => {
  const financeEstimate = calculateFinance(car.price);

  return (
    <article className="group bg-card rounded-lg overflow-hidden card-hover border border-border">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model} ${car.variant}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Title */}
        <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-foreground mb-1 line-clamp-1">
          {car.make} {car.model}
        </h3>
        <p className="text-chrome font-body text-sm mb-4">{car.variant}</p>

        {/* Specs Grid - 2x2 layout like reference */}
        <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-border">
          {/* Mileage */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Gauge className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs font-body">Mileage</span>
              <span className="text-foreground text-sm font-body font-medium">{car.mileage}</span>
            </div>
          </div>

          {/* Year */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs font-body">Year</span>
              <span className="text-foreground text-sm font-body font-medium">{car.year}</span>
            </div>
          </div>

          {/* Transmission */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Cog className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs font-body">Transmission</span>
              <span className="text-foreground text-sm font-body font-medium">{car.transmission}</span>
            </div>
          </div>

          {/* Fuel */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Fuel className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs font-body">Fuel</span>
              <span className="text-foreground text-sm font-body font-medium">{car.fuel}</span>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex items-center justify-between pt-4">
          <div>
            {car.price ? (
              <span className="text-primary font-display text-xl md:text-2xl">
                {car.price}
              </span>
            ) : (
              <span className="text-chrome font-display text-xl md:text-2xl">
                POA
              </span>
            )}
          </div>
          {financeEstimate && (
            <div className="text-right">
              <span className="text-muted-foreground text-xs font-body block">Finance from</span>
              <span className="text-primary font-display text-sm">{financeEstimate}</span>
            </div>
          )}
        </div>

        {/* View Button */}
        <a
          href="#contact"
          className="mt-4 w-full block text-center py-3 bg-primary text-primary-foreground font-display uppercase tracking-widest text-sm rounded hover:bg-primary/90 transition-all duration-300"
        >
          View Car
        </a>
      </div>
    </article>
  );
};

export default CarCard;
