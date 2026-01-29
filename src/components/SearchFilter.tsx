import { Search } from "lucide-react";
import { useState } from "react";

const SearchFilter = () => {
  const [make, setMake] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [yearRange, setYearRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to vehicles section
    const vehiclesSection = document.getElementById("vehicles");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-card/95 backdrop-blur-md rounded-lg p-4 md:p-6 shadow-2xl border border-border"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Make Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Make
          </label>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="bg-input border border-border rounded-md px-3 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">All Makes</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes Benz</option>
            <option value="opel">Opel</option>
            <option value="toyota">Toyota</option>
            <option value="chevrolet">Chevrolet</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="bg-input border border-border rounded-md px-3 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Any Price</option>
            <option value="0-250000">Under R250,000</option>
            <option value="250000-500000">R250,000 - R500,000</option>
            <option value="500000-1000000">R500,000 - R1,000,000</option>
            <option value="1000000+">R1,000,000+</option>
          </select>
        </div>

        {/* Year Range */}
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Year
          </label>
          <select
            value={yearRange}
            onChange={(e) => setYearRange(e.target.value)}
            className="bg-input border border-border rounded-md px-3 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Any Year</option>
            <option value="1970-1979">1970 - 1979</option>
            <option value="1980-1989">1980 - 1989</option>
            <option value="1990-1999">1990 - 1999</option>
            <option value="2000+">2000+</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-widest py-2.5 px-4 rounded-md btn-glow transition-all text-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
