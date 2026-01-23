import { Award, Building2, Users2 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "5.000+",
    label: "ISPs ativos",
    color: "text-primary",
  },
  {
    icon: Users2,
    value: "52 milhões",
    label: "Assinantes gerenciados",
    color: "text-secondary",
  },
  {
    icon: Award,
    value: "23 anos",
    label: "De inovação no mercado",
    color: "text-accent",
  },
];

const ContentStats = () => {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operações mais eficientes, clientes mais felizes.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automatize processos críticos, reduza churn e aumente a rentabilidade com uma plataforma
            completa e integrada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStats;
