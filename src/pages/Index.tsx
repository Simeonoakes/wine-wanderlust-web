import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RegionsSection from "@/components/RegionsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExpeditionsSection from "@/components/ExpeditionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RegionsSection />
      <PhilosophySection />
      <ExpeditionsSection />
      <Footer />
    </div>
  );
};

export default Index;
