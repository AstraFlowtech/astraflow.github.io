
import { CheckCircle, Target, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Target,
      title: "Conversão Maximizada",
      description: "Nosso SDR virtual nunca dorme, nunca tira férias e converte leads 24 horas por dia com precisão cirúrgica."
    },
    {
      icon: Users,
      title: "Atendimento Humanizado por IA",
      description: "Tecnologia que conversa como humano, entende contexto e cria conexões reais com seus prospects."
    },
    {
      icon: Rocket,
      title: "ROI Comprovado",
      description: "Resultados mensuráveis desde o primeiro mês, com relatórios completos e métricas que importam."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher a <span className="gradient-text">Astra Flow</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em transformar negócios através da tecnologia. 
            Nossos clientes veem resultados reais, mensuráveis e sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-lg mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                O Que Nossos Clientes Conquistam:
              </h3>
              <div className="space-y-4">
                {[
                  "Redução significativa no tempo de resposta aos leads",
                  "Aumento expressivo na taxa de conversão",
                  "Grande economia em custos de equipe de vendas",
                  "Automação completa de processos repetitivos",
                  "Dashboards inteligentes para tomada de decisão"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block p-8 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Atendimento</div>
                <div className="text-gray-600">Ininterrupto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
