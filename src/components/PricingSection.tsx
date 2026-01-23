import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Start",
    description: "Para provedores em fase de estruturação.",
    price: "Sob consulta",
    highlights: ["ERP completo", "Financeiro e cobrança", "Suporte por chat"],
  },
  {
    title: "Growth",
    description: "Escala com automações e integrações.",
    price: "Sob consulta",
    highlights: ["Régua de cobrança", "BI avançado", "App do assinante"],
    featured: true,
  },
  {
    title: "Enterprise",
    description: "Alta performance e governança robusta.",
    price: "Sob consulta",
    highlights: ["SLA dedicado", "Consultoria estratégica", "Módulos sob medida"],
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Planos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos flexíveis para cada fase do seu provedor.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal e tenha acompanhamento dedicado durante toda a implantação.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border p-8 shadow-sm transition-all ${
                plan.featured
                  ? "border-primary bg-white shadow-xl"
                  : "border-border bg-white"
              }`}
            >
              <p className="text-sm font-semibold uppercase text-primary">{plan.title}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{plan.price}</h3>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.highlights.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 w-full rounded-full"
                variant={plan.featured ? "default" : "outline"}
                asChild
              >
                <a href="#contato">Solicitar proposta</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
