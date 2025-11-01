import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Escritório de advocacia profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 py-20 animate-fade-in">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-slide-in-left">
            <Scale className="h-12 w-12 text-white" />
            <h2 className="text-2xl font-light text-white tracking-wider">ADVOCACIA</h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excelência em
            <span className="block mt-2">Assessoria Jurídica</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Defendendo seus direitos com ética, comprometimento e resultados comprovados há mais de 15 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              Agende uma Consulta
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 transition-all duration-300"
            >
              Áreas de Atuação
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
