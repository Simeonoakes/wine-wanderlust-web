import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RegionsSection from "@/components/RegionsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExpeditionsSection from "@/components/ExpeditionsSection";
import CorporateSection from "@/components/CorporateSection";
import SimsSamplesSection from "@/components/SimsSamplesSection";
import SeasonsSection from "@/components/SeasonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RegionsSection />
      <PhilosophySection />
      <ExpeditionsSection />
      <SeasonsSection />
      <CorporateSection />
      <SimsSamplesSection />
      <Footer />
    </div>
  );
};

export default Index;
