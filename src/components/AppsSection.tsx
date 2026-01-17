import { Badge } from "@/components/ui/badge";
import { Globe, Monitor, Smartphone, Tablet, Apple } from "lucide-react";

const apps = [
  {
    name: "WebPlayer",
    platform: "Web",
    platformColor: "bg-primary",
    icon: Globe,
    description: "Acesse diretamente do navegador",
    link: "http://vouver.me",
  },
  {
    name: "LazerPlayer",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentialFields: ["Código", "Username", "Password"],
    description: "Suas credenciais serão enviadas após a assinatura",
  },
  {
    name: "Fun Play",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentialFields: ["Código", "Username", "Password"],
    description: "Suas credenciais serão enviadas após a assinatura",
  },
  {
    name: "FASTPRO",
    platform: "Android",
    platformColor: "bg-green-500",
    icon: Smartphone,
    link: "http://aftv.news/5279242",
  },
  {
    name: "FastWin",
    platform: "Windows",
    platformColor: "bg-blue-500",
    icon: Monitor,
    link: "https://appcliente.me/fastwin.exe",
  },
  {
    name: "XCLOUD",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentialFields: ["Código", "Username", "Password"],
    description: "Suas credenciais serão enviadas após a assinatura",
  },
  {
    name: "Blessed Player",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentialFields: ["Código", "Username", "Password"],
    description: "Suas credenciais serão enviadas após a assinatura",
  },
  {
    name: "IPTV Smarters",
    platform: "iOS",
    platformColor: "bg-gray-500",
    icon: Apple,
    description: "Disponível na Apple Store - Credenciais enviadas após assinatura",
    serverFields: ["Server", "Username", "Password"],
  },
  {
    name: "XCIPTV Player",
    platform: "Android",
    platformColor: "bg-green-500",
    icon: Smartphone,
    description: "Para TV Box, Smartphone e Tablet - Credenciais enviadas após assinatura",
    serverFields: ["XC API URL", "Usuário", "Senha"],
  },
];

const AppsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 inline-block">📱</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aplicativos Compatíveis
          </h2>
          <p className="text-muted-foreground text-lg">
            Assista em qualquer dispositivo com nossos apps recomendados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-muted rounded-xl">
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
              
              {app.description && (
                <p className="text-muted-foreground mb-3">{app.description}</p>
              )}
              
              {app.link && (
                <a 
                  href={app.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline break-all"
                >
                  {app.link}
                </a>
              )}
              
              {app.credentialFields && (
                <div className="space-y-1 text-sm bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground italic mb-2">Campos necessários:</p>
                  {app.credentialFields.map((field, idx) => (
                    <p key={idx}><span className="font-semibold text-foreground">{field}:</span> <span className="text-muted-foreground">••••••••</span></p>
                  ))}
                </div>
              )}
              
              {app.serverFields && (
                <div className="space-y-1 text-sm bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground italic mb-2">Campos necessários:</p>
                  {app.serverFields.map((field, idx) => (
                    <p key={idx}><span className="font-semibold text-foreground">{field}:</span> <span className="text-muted-foreground">••••••••</span></p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
