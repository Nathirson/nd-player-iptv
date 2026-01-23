import { Mail, MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 font-bold">
                IX
              </div>
              <div>
                <p className="text-lg font-semibold">IXC Soft</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Telecom Suite
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Tecnologia e consultoria para ISPs que querem crescer com eficiência,
              controle financeiro e atendimento de excelência.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="text-base font-semibold text-white">Contato</p>
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-primary" />
              (48) 3024-8888
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              contato@ixcsoft.com.br
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              Rua dos Provedores, 1000 - Florianópolis/SC
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="text-base font-semibold text-white">Links rápidos</p>
            <a href="#solucoes" className="block hover:text-white transition-colors">
              Soluções
            </a>
            <a href="#planos" className="block hover:text-white transition-colors">
              Planos
            </a>
            <a href="#clientes" className="block hover:text-white transition-colors">
              Clientes
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} IXC Soft. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
