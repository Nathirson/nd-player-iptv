import { Badge } from "@/components/ui/badge";

const clients = [
  "Alfa Telecom",
  "BlueNet Fibra",
  "Connecta ISP",
  "NovaLink",
  "Skywave",
  "VivaNet",
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Clientes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Provedores que crescem com a suíte IXC.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de cinco mil ISPs confiam na plataforma para operar com segurança,
            eficiência e escala.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {clients.map((client) => (
            <Badge
              key={client}
              variant="outline"
              className="rounded-full border-primary/30 px-6 py-2 text-sm text-muted-foreground"
            >
              {client}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
