import { Clock, Users, DollarSign, Headphones, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LeadFormModal from "./LeadFormModal";

const AIAdvantages = () => {
  const whatsappLink = "https://wa.me/message/PQNKHCMYWWU4B1";

  const advantages = [
    {
      icon: DollarSign,
      title: "80% do custo de um Funcionário",
      description: "Sem atestado, férias, décimo terceiro ou encargos trabalhistas. O investimento é uma fração do custo de manter uma equipe tradicional."
    },
    {
      icon: Clock,
      title: "Trabalha 24/7 Sem Parar",
      description: "Não importa se é feriado, final de semana ou madrugada. Nosso SDR virtual está sempre ativo, capturando leads enquanto sua concorrência dorme."
    },
    {
      icon: Users,
      title: "Atende Centenas Simultaneamente",
      description: "Um assistente de IA pode manter conversas com centenas de pessoas ao mesmo tempo, enquanto um funcionário tradicional atende apenas um por vez."
    },

    {
      icon: Headphones,
      title: "Performance Consistente e Confiavel",
      description: "Mantém sempre o mesmo nível de energia, educação e profissionalismo. Não tem dias ruins, não fica doente e nunca precisa de pausas."
    }
  ];

  return (
    <section id="ai-advantages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que usar um <span className="gradient-text">assistente de IA</span>?
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

        <div className="text-center">
          <LeadFormModal 
            triggerText="Quero Conhecer o Assistente"
            buttonProps={{
              size: "lg",
              className: "gradient-bg hover:opacity-90 text-white text-2xl px-16 py-8 font-bold"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAdvantages;