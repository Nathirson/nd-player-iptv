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
    credentials: { codigo: "pfast", username: "usuário", password: "senha" },
  },
  {
    name: "Fun Play",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentials: { codigo: "pfast", username: "usuário", password: "senha" },
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
    credentials: { codigo: "pfast", username: "usuário", password: "senha" },
  },
  {
    name: "Blessed Player",
    platform: "Vários Dispositivos",
    platformColor: "bg-secondary",
    icon: Tablet,
    credentials: { codigo: "pfast", username: "usuário", password: "senha" },
  },
  {
    name: "IPTV Smarters",
    platform: "iOS",
    platformColor: "bg-gray-500",
    icon: Apple,
    description: "Disponível na Apple Store",
    serverInfo: { server: "http://fpn.one/", username: "usuário", password: "senha" },
  },
  {
    name: "XCIPTV Player",
    platform: "Android",
    platformColor: "bg-green-500",
    icon: Smartphone,
    description: "Para TV Box, Smartphone e Tablet",
    serverInfo: { xcApiUrl: "http://fpn.one/", usuario: "usuário", senha: "senha" },
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
              
              {app.credentials && (
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold text-foreground">Codigo:</span> <span className="text-muted-foreground">{app.credentials.codigo}</span></p>
                  <p><span className="font-semibold text-foreground">Username:</span> <span className="text-muted-foreground">{app.credentials.username}</span></p>
                  <p><span className="font-semibold text-foreground">Password:</span> <span className="text-muted-foreground">{app.credentials.password}</span></p>
                </div>
              )}
              
              {app.serverInfo && (
                <div className="space-y-1 text-sm">
                  {app.serverInfo.server && (
                    <p><span className="font-semibold text-foreground">Server:</span> <span className="text-muted-foreground">{app.serverInfo.server}</span></p>
                  )}
                  {app.serverInfo.xcApiUrl && (
                    <p><span className="font-semibold text-foreground">XC API URL:</span> <span className="text-muted-foreground">{app.serverInfo.xcApiUrl}</span></p>
                  )}
                  <p><span className="font-semibold text-foreground">Usuário:</span> <span className="text-muted-foreground">{app.serverInfo.usuario || app.serverInfo.username}</span></p>
                  <p><span className="font-semibold text-foreground">Senha:</span> <span className="text-muted-foreground">{app.serverInfo.senha || app.serverInfo.password}</span></p>
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
