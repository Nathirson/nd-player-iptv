import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users } from "lucide-react";

const links = [
  {
    icon: BookOpen,
    title: "Academia IXC",
    description: "Treinamentos e certificações para sua equipe.",
    buttonText: "Ver conteúdos",
    href: "#contato",
  },
  {
    icon: Users,
    title: "Cases de Sucesso",
    description: "Resultados reais de ISPs que cresceram com a suíte.",
    buttonText: "Ler cases",
    href: "#clientes",
  },
  {
    icon: FileText,
    title: "Central de Ajuda",
    description: "Base de conhecimento e suporte técnico.",
    buttonText: "Acessar central",
    href: "#contato",
  },
];

const LinksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Recursos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conteúdos que apoiam o crescimento do seu ISP.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{link.title}</h3>
                  <p className="text-muted-foreground">{link.description}</p>
                </div>
              </div>
              
              <Button className="rounded-full" asChild>
                <a href={link.href}>
                  {link.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
