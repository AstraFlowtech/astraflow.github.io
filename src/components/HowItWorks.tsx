import { Bot, MessageCircle, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: "1. Configuração Inteligente",
      description: "Nosso assistente de IA é treinado com suas informações, produtos e tom de voz da empresa."
    },
    {
      icon: MessageCircle,
      title: "2. Atendimento Automático",
      description: "O SDR virtual inicia conversas, qualifica leads e responde dúvidas 24 horas por dia."
    },
    {
      icon: Calendar,
      title: "3. Agendamento Inteligente",
      description: "Leads qualificados são automaticamente agendados para reuniões com sua equipe."
    },
    {
      icon: TrendingUp,
      title: "4. Resultados Mensuráveis",
      description: "Acompanhe métricas em tempo real e veja o crescimento das suas vendas."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente que transforma leads em vendas automaticamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="gradient-text">Maximize suas vendas</span> 🚀
            </h3>
            <p className="text-lg text-gray-600 mb-8">
            Com nosso SDR virtual que trabalha 24/7, automações inteligentes e soluções em ciência de dados que revolucionam seu negócio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-black-600">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5x</div>
                <div className="text-black-600">Mais Eficiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">80%</div>
                <div className="text-black-600">Redução de Custos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 