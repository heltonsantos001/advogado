import { Card } from "@/components/ui/card";
import { Briefcase, Users, Building2, Home, FileText, Gavel } from "lucide-react";

const areas = [
  {
    icon: FileText,
    title: "Direito Civil",
    description: "Contratos, indenizações, responsabilidade civil e questões patrimoniais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Defesa de direitos trabalhistas, ações e acordos com expertise comprovada.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Consultoria jurídica para empresas, contratos comerciais e societário.",
  },
  {
    icon: Users,
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão alimentícia e questões sucessórias.",
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Compra, venda, locação e regularização de imóveis.",
  },
  {
    icon: Gavel,
    title: "Direito Penal",
    description: "Defesa criminal em todas as instâncias com estratégia personalizada.",
  },
];

const AreasAtuacao = () => {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções jurídicas especializadas para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 bg-accent rounded-lg group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
