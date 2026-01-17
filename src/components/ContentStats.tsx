import { Tv, Film, Clapperboard } from "lucide-react";

const stats = [
  {
    icon: Tv,
    value: "5859",
    label: "Canais",
    color: "text-primary",
  },
  {
    icon: Film,
    value: "34438",
    label: "Filmes",
    color: "text-accent",
  },
  {
    icon: Clapperboard,
    value: "7872",
    label: "Séries",
    color: "text-secondary",
  },
];

const ContentStats = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 inline-block">🎬</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Total de Conteúdos
          </h2>
          <p className="text-muted-foreground text-lg">
            Milhares de opções de entretenimento esperando por você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background/50 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                {stat.value.toLocaleString()}
              </div>
              <div className="text-xl text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStats;
