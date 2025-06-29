
import { MessageCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppCTA = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Vim pelo site da Astra Flow";
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(whatsappLink);

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale Conosco <span className="gradient-text">Agora</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nosso time está pronto para atender você no WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                💬 Atendimento Direto no WhatsApp
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Resposta em menos de 5 minutos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Atendimento humanizado especializado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Proposta personalizada na hora</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Demonstração ao vivo gratuita</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="gradient-bg hover:opacity-90 text-white text-lg px-8 py-4 w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <Card className="inline-block p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <QrCode className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-lg">Escaneie o QR Code</h4>
                    <p className="text-gray-600 text-sm">e fale conosco diretamente</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                    <img 
                      src={qrCodeUrl} 
                      alt="QR Code para WhatsApp" 
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    Aponte a câmera do seu celular para o código acima
                  </p>
                </CardContent>
              </Card>
            </div>
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