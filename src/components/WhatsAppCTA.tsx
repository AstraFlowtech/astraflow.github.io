import { MessageCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LeadFormModal from "./LeadFormModal";

const WhatsAppCTA = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale conosco <span className="gradient-text">agora</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nosso time está pronto para atender você!
            </p>
          </div>
          <div className="flex justify-center">
            <LeadFormModal triggerText="Conversar com a Astra Flow" buttonProps={{ size: "lg", className: "gradient-bg hover:opacity-90 text-white text-lg px-8 py-4 w-full sm:w-auto" }} />
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-green-600 font-medium">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online agora - Resposta imediata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;