import { Clock, Users, DollarSign, Headphones, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIAdvantages = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero saber mais sobre o SDR virtual da Astra Flow";

  const advantages = [
    {
      icon: Users,
      title: "Atende Múltiplos Clientes Simultaneamente",
      description: "Enquanto um funcionário tradicional consegue atender apenas um cliente por vez, nosso assistente de IA pode manter conversas com centenas de prospects ao mesmo tempo, sem perder qualidade no atendimento."
    },
    {
      icon: Clock,
      title: "Disponível 24 Horas, 7 Dias por Semana",
      description: "Não importa se é feriado, final de semana ou madrugada. Nosso SDR virtual está sempre ativo, capturando leads e convertendo oportunidades enquanto sua concorrência dorme."
    },
    {
      icon: DollarSign,
      title: "Custo Muito Inferior a um Funcionário",
      description: "Sem salário mensal, férias, décimo terceiro ou encargos trabalhistas. O investimento em nosso assistente de IA é uma fração do custo de manter um funcionário tradicional."
    },
    {
      icon: Headphones,
      title: "Nunca Perde a Paciência ou se Cansa",
      description: "Mantém sempre o mesmo nível de energia, educação e profissionalismo em cada conversa. Não tem dias ruins, não fica doente e nunca precisa de pausas para o café."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Nosso <span className="gradient-text">Assistente de IA</span> é Superior?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens revolucionárias de ter um SDR virtual trabalhando incansavelmente para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Imagine Ter um Vendedor que Nunca Para de Trabalhar
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Enquanto você dorme, nosso assistente de IA está respondendo leads, qualificando prospects 
            e agendando reuniões. É como ter o melhor vendedor do mundo trabalhando exclusivamente 
            para você, 24 horas por dia, por uma fração do custo.
          </p>
          
          <Button 
            size="lg" 
            className="gradient-bg hover:opacity-90 text-white text-lg px-8 py-4"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Quero Conhecer o Assistente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantages;