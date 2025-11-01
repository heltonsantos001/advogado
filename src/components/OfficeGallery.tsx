import { useState } from "react";
import officeInterior1 from "@/assets/office-interior-1.jpg";
import officeInterior2 from "@/assets/office-interior-2.jpg";
import officeExterior from "@/assets/office-exterior.jpg";

const OfficeGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: officeInterior1,
      alt: "Interior elegante do escritório com biblioteca jurídica",
      title: "Ambiente Profissional"
    },
    {
      src: officeInterior2,
      alt: "Sala de reuniões moderna e sofisticada",
      title: "Sala de Reuniões"
    },
    {
      src: officeExterior,
      alt: "Fachada externa do edifício",
      title: "Nossa Localização"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(0_0%_8%)] to-[hsl(0_0%_5%)]">
      <div className="container px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[hsl(40_85%_55%_/_0.15)] to-transparent rounded-full border border-[hsl(40_85%_55%_/_0.3)]">
            <span className="text-sm font-semibold text-[hsl(40_85%_55%)] tracking-wider">NOSSO ESPAÇO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça Nosso Escritório
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Um ambiente moderno e sofisticado, projetado para proporcionar conforto e confiança em cada atendimento.
          </p>
        </div>

        {/* Main Image */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border border-[hsl(40_85%_55%_/_0.2)]">
            <img 
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white">{images[activeImage].title}</h3>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                  activeImage === index 
                    ? 'ring-4 ring-[hsl(40_85%_55%)] shadow-[var(--shadow-gold)] scale-105' 
                    : 'ring-2 ring-white/10 hover:ring-white/30 hover:scale-102'
                }`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  activeImage === index ? 'bg-[hsl(40_85%_55%_/_0.1)]' : 'bg-black/40 hover:bg-black/20'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
