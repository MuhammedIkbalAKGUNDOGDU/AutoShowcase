import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DemoModal from "@/components/DemoModal";
import Hero from "@/components/Hero";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedVehicles />
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <DemoModal />
    </div>
  );
}
