import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import RoundsSection from "@/components/home/RoundsSection";
import VenueSection from "@/components/home/VenueSection";
import CoordinatorsSection from "@/components/home/CoordinatorsSection";
import RegisterCTA from "@/components/home/RegisterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoundsSection />
        <VenueSection />
        <CoordinatorsSection />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
