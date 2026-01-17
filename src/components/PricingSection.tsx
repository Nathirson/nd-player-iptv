import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const features = [
  "Acesso a todos os canais",
  "Mais de 34.000 filmes",
  "Mais de 7.800 séries",
  "Qualidade HD/4K",
  "Suporte 24/7",
  "Multi-dispositivos",
  "Atualizações constantes",
  "Sem travamentos",
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 inline-block">💎</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plano de Assinatura
          </h2>
          <p className="text-muted-foreground text-lg">
            Entretenimento ilimitado por um preço acessível
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-background to-accent/20 border-2 border-primary rounded-3xl p-8 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Zap className="w-4 h-4" />
                Mais Popular
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Plano Mensal</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-xl">R$</span>
                <span className="text-6xl font-bold text-primary">35</span>
                <span className="text-muted-foreground text-xl">/mês</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-lg shadow-primary/30"
              asChild
            >
              <a href="https://invoice.infinitepay.io/plans/nathirson-de-jesus-alves/mvSs4RMnN" target="_blank" rel="noopener noreferrer">
                Assinar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
