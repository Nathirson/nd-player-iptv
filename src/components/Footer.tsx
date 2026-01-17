import { Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Play className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold text-foreground">
              ND <span className="text-primary">Player</span>
            </span>
          </div>
          
          <p className="text-muted-foreground text-center">
            A melhor experiência em streaming de TV, filmes e séries.
          </p>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://guiadeconteudo.blog/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Guia de Conteúdo
            </a>
            <a href="https://guiadeconteudo.blog/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Área do Cliente
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm mt-4">
            © {new Date().getFullYear()} ND Player. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
