import { Scale, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8" />
              <span className="text-2xl font-bold">Advocacia</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Excelência em assessoria jurídica com comprometimento, ética e resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  Av. Paulista, 1000 - Sala 500<br />São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">contato@escritorio.adv.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} Escritório de Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            OAB/SP 000.000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
