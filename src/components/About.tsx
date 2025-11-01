import { Shield, Award, Users, TrendingUp } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

const About = () => {
  const qualities = [
    {
      icon: Shield,
      title: "Compromisso com Resultados",
      description: "Dedicação total para alcançar os melhores resultados para nossos clientes."
    },
    {
      icon: Award,
      title: "Excelência Jurídica",
      description: "Equipe altamente qualificada com expertise em diversas áreas do direito."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada caso é único e merece atenção individualizada e estratégias sob medida."
    },
    {
      icon: TrendingUp,
      title: "Visão Estratégica",
      description: "Abordagem moderna e eficiente para resolver questões jurídicas complexas."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-[hsl(40_60%_45%_/_0.03)]">
      <div className="container px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lawyer Photo */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(40_85%_55%)] to-[hsl(40_60%_45%)] rounded-2xl opacity-20 blur-2xl" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border-2 border-[hsl(40_85%_55%_/_0.2)]">
                <img 
                  src={lawyerPortrait} 
                  alt="Advogado responsável pelo escritório" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[hsl(40_85%_55%_/_0.1)] to-transparent rounded-full border border-[hsl(40_85%_55%_/_0.3)]">
              <span className="text-sm font-semibold text-[hsl(40_60%_45%)] tracking-wider">SOBRE O ESCRITÓRIO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Excelência e Ética em Cada Caso
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nosso escritório é especializado em oferecer soluções jurídicas estratégicas e personalizadas, 
              sempre pautadas pela ética profissional, transparência e comprometimento com o sucesso de nossos clientes.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Com uma abordagem moderna e acolhedora, trabalhamos lado a lado com você para defender seus direitos 
              e interesses, transformando desafios jurídicos em oportunidades de crescimento e segurança.
            </p>

            {/* Qualities Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div 
                  key={index} 
                  className="group p-5 rounded-xl bg-card border border-border hover:border-[hsl(40_85%_55%_/_0.4)] hover:shadow-lg transition-all duration-300"
                >
                  <quality.icon className="h-8 w-8 mb-3 text-[hsl(40_60%_45%)] group-hover:text-[hsl(40_85%_55%)] transition-colors" />
                  <h3 className="font-semibold text-foreground mb-2">{quality.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
