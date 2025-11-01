import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-[hsl(40_85%_55%_/_0.1)] to-transparent rounded-full border border-[hsl(40_85%_55%_/_0.3)]">
            <span className="text-sm font-semibold text-[hsl(40_60%_45%)] tracking-wider">CONTATO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Visite Nosso Escritório
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Compact Info Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 hover:shadow-md transition-all duration-300 border-[hsl(40_85%_55%_/_0.15)]">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-gradient-to-br from-[hsl(40_85%_55%_/_0.15)] to-transparent rounded-lg">
                  <MapPin className="h-5 w-5 text-[hsl(40_60%_45%)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">Endereço</h3>
                  <p className="text-xs text-muted-foreground">
                    Av. Paulista, 1000<br />São Paulo - SP
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all duration-300 border-[hsl(40_85%_55%_/_0.15)]">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-gradient-to-br from-[hsl(40_85%_55%_/_0.15)] to-transparent rounded-lg">
                  <Phone className="h-5 w-5 text-[hsl(40_60%_45%)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">Telefone</h3>
                  <p className="text-xs text-muted-foreground">
                    (11) 3000-0000<br />(11) 98000-0000
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all duration-300 border-[hsl(40_85%_55%_/_0.15)]">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-gradient-to-br from-[hsl(40_85%_55%_/_0.15)] to-transparent rounded-lg">
                  <Mail className="h-5 w-5 text-[hsl(40_60%_45%)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">E-mail</h3>
                  <p className="text-xs text-muted-foreground">
                    contato@escritorio.adv.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all duration-300 border-[hsl(40_85%_55%_/_0.15)]">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-gradient-to-br from-[hsl(40_85%_55%_/_0.15)] to-transparent rounded-lg">
                  <Clock className="h-5 w-5 text-[hsl(40_60%_45%)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">Horário</h3>
                  <p className="text-xs text-muted-foreground">
                    Seg-Sex: 9h-18h<br />Sáb: 9h-13h
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Compact Map */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-[hsl(40_85%_55%_/_0.2)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974739945455!2d-46.6561854!3d-23.5613647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
            />
          </div>
          
          {/* Route Button */}
          <div className="text-center mt-6">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(40_60%_45%)] to-[hsl(40_85%_55%)] text-white font-semibold rounded-lg hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
