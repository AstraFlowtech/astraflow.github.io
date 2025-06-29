
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import AIAdvantages from "@/components/AIAdvantages";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueProposition />
      <AIAdvantages />
      <Services />
      <CallToAction />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default Index;
