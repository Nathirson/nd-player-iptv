import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe2, PhoneCall, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-24 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="container mx-auto flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold">
              IX
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">IXC Soft</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Telecom Suite
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
            <a className="hover:text-foreground transition-colors" href="#solucoes">Soluções</a>
            <a className="hover:text-foreground transition-colors" href="#beneficios">Benefícios</a>
            <a className="hover:text-foreground transition-colors" href="#planos">Planos</a>
            <a className="hover:text-foreground transition-colors" href="#clientes">Clientes</a>
          </nav>
          <Button className="rounded-full px-6" asChild>
            <a href="#contato">Falar com especialista</a>
          </Button>
        </header>

        <div className="container mx-auto grid items-center gap-12 px-4 pb-20 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary">
              <ShieldCheck className="h-4 w-4" />
              Plataforma líder para provedores e operadoras regionais
            </div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Tudo o que o seu provedor precisa para operar com eficiência.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Uma suíte completa com ERP, financeiro, atendimento, billing, automações e apps
              para escalar sua operação e encantar seus assinantes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#contato">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="#solucoes">Ver soluções</a>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                "Implantação assistida",
                "Migração segura",
                "Treinamentos contínuos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Dashboard em tempo real</p>
                <h2 className="text-2xl font-semibold text-foreground">Operação sob controle</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Globe2 className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase text-muted-foreground">Faturamento mensal</p>
                <p className="text-2xl font-semibold text-foreground">R$ 5,8M</p>
                <p className="text-xs text-emerald-500">+18% vs. mês anterior</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border p-4">
                  <p className="text-xs uppercase text-muted-foreground">Atendimentos</p>
                  <p className="text-xl font-semibold text-foreground">12.450</p>
                  <p className="text-xs text-muted-foreground">SLA 93%</p>
                </div>
                <div className="rounded-2xl border border-border p-4">
                  <p className="text-xs uppercase text-muted-foreground">Cobrança</p>
                  <p className="text-xl font-semibold text-foreground">1.840</p>
                  <p className="text-xs text-muted-foreground">boletos emitidos hoje</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4 text-sm">
                <PhoneCall className="h-5 w-5 text-primary" />
                Suporte dedicado + consultoria estratégica para seu crescimento.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
