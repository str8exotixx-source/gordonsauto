import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import CarListings from "@/components/CarListings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlideshow />
        <CarListings />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
