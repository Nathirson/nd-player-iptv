import HeroSection from "@/components/HeroSection";
import ContentStats from "@/components/ContentStats";
import AppsSection from "@/components/AppsSection";
import ClientsSection from "@/components/ClientsSection";
import PricingSection from "@/components/PricingSection";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContentStats />
      <AppsSection />
      <ClientsSection />
      <PricingSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default Index;
