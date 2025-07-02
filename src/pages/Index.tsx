import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsAstraFlow from "@/components/WhatIsAstraFlow";
import HowItWorks from "@/components/HowItWorks";
import ClientResults from "@/components/ClientResults";
import AIAdvantages from "@/components/AIAdvantages";
import ReduceCosts from "@/components/ReduceCosts";
import CallToAction from "@/components/CallToAction";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatIsAstraFlow />
      <HowItWorks />
      <ClientResults />
      <AIAdvantages />
      <ReduceCosts />
      <CallToAction />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default Index;
