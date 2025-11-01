import Hero from "@/components/Hero";
import AreasAtuacao from "@/components/AreasAtuacao";
import About from "@/components/About";
import OfficeGallery from "@/components/OfficeGallery";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <AreasAtuacao />
      <OfficeGallery />
      <Location />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
