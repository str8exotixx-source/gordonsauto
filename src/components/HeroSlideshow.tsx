import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import SearchFilter from "./SearchFilter";

const heroImages = [hero1, hero2, hero3];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt={`Gordons AutoTraders Showroom ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-8 pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mb-8"
        >
          <h1 className="font-display text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider mb-4">
            <span className="text-chrome">Premium</span>{" "}
            <span className="text-primary">Classics</span>
          </h1>
          <p className="text-foreground/80 text-base md:text-lg lg:text-xl font-body font-light max-w-2xl mx-auto px-4">
            Discover exceptional vintage and collector vehicles at Cape Town's premier classic car dealership
          </p>
        </motion.div>

        {/* Slide Navigation */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-primary transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-primary transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Overlapping Search Filter - Positioned at bottom, fully visible */}
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <SearchFilter />
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
