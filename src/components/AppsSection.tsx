import { Badge } from "@/components/ui/badge";
import { BarChart3, Bolt, Headset, Layers3, ShieldCheck, Smartphone } from "lucide-react";

const apps = [
  {
    name: "ERP Operacional",
    platform: "Core",
    platformColor: "bg-primary",
    icon: Layers3,
    description: "Cadastros, contratos, estoque e gestão completa do provedor.",
  },
  {
    name: "Cobrança Inteligente",
    platform: "Financeiro",
    platformColor: "bg-secondary",
    icon: Bolt,
    description: "Emissão automática, régua de cobrança e conciliação bancária.",
  },
  {
    name: "Atendimento Omnichannel",
    platform: "Suporte",
    platformColor: "bg-sky-500",
    icon: Headset,
    description: "Tickets, SLA e comunicação centralizada com seus assinantes.",
  },
  {
    name: "Autoatendimento",
    platform: "App",
    platformColor: "bg-emerald-500",
    icon: Smartphone,
    description: "Aplicativo personalizado para pagamentos, abertura de chamados e consumo.",
  },
  {
    name: "BI e Analytics",
    platform: "Dados",
    platformColor: "bg-indigo-500",
    icon: BarChart3,
    description: "Dashboards em tempo real para decisões estratégicas.",
  },
  {
    name: "Segurança e Compliance",
    platform: "Governança",
    platformColor: "bg-rose-500",
    icon: ShieldCheck,
    description: "Auditoria, LGPD e controles avançados de acesso.",
  },
];

const AppsSection = () => {
  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Soluções
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uma plataforma completa para toda a jornada do assinante.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Módulos integrados e especializados para cada área da sua operação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <app.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-foreground">{app.name}</h3>
                    <Badge className={`${app.platformColor} text-primary-foreground`}>
                      {app.platform}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
