import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";

const links = [
  {
    icon: BookOpen,
    title: "Guia de Conteúdo",
    description: "Navegue pela programação disponível",
    buttonText: "Acessar Guia",
    href: "https://guiadeconteudo.blog/",
  },
  {
    icon: User,
    title: "Área do Cliente",
    description: "Acesso exclusivo com lista ativa",
    buttonText: "Entrar",
    href: "https://guiadeconteudo.blog/",
  },
];

const LinksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 inline-block">⭐</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Links Importantes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-muted rounded-xl">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{link.title}</h3>
                  <p className="text-muted-foreground">{link.description}</p>
                </div>
              </div>
              
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
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
