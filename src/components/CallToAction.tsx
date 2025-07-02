import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadFormModal from "./LeadFormModal";

const CallToAction = () => {
  const whatsappLink = "https://wa.me/message/PQNKHCMYWWU4B1";

  return (
    <section className="py-20 gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-medium">Avaliação 5 Estrelas</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para revolucionar seu negócio?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            <strong>Consultoria gratuita</strong> para analisar seu negócio e 
            mostrar exatamente como nossa IA pode <strong>transformar suas vendas</strong>.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">O que você vai descobrir:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Gargalos que estão custando vendas",
                "Oportunidades não exploradas",
                "ROI estimado com nossa solução",
                "Plano personalizado para seu negócio"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ArrowRight className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LeadFormModal 
              triggerText="Agendar Consultoria Grátis"
              buttonProps={{
                size: "lg",
                className: "bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold pulse-glow"
              }}
            />
            
            <div className="text-center sm:text-left">
              <div className="text-sm opacity-75">✅ Sem compromisso</div>
              <div className="text-sm opacity-75">✅ 100% personalizada</div>
            </div>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Mais de 50 empresas já transformaram seus resultados conosco
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
