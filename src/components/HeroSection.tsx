import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Play className="w-12 h-12 text-primary fill-primary" />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            ND <span className="text-primary">Player</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A melhor experiência em IPTV com milhares de canais, filmes e séries em alta qualidade
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg shadow-primary/30"
            asChild
          >
            <a href="https://invoice.infinitepay.io/plans/nathirson-de-jesus-alves/mvSs4RMnN" target="_blank" rel="noopener noreferrer">
              Assinar Agora - R$ 35/mês
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6"
            asChild
          >
            <a href="https://guiadeconteudo.blog/" target="_blank" rel="noopener noreferrer">
              Ver Conteúdo
            </a>
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span>Qualidade HD/4K</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span>Suporte 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span>Multi-dispositivos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
