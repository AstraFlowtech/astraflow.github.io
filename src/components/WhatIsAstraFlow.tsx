import { Bot, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatIsAstraFlow = () => {
  return (
    <section id="what-is-astraflow" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que é a <span className="gradient-text">Astra Flow</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa especializada em IA e automação que transforma negócios através da tecnologia inteligente. 
            Nossa missão é revolucionar a forma como empresas vendem e atendem seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-lg mb-6">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">SDR Virtual com IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Agente de vendas inteligente que trabalha 24/7, qualifica leads e agenda reuniões automaticamente.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-lg mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automação Inteligente</h3>
              <p className="text-gray-600 leading-relaxed">
                Processos otimizados que eliminam tarefas repetitivas e maximizam a eficiência operacional.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-lg mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados Mensuráveis</h3>
              <p className="text-gray-600 leading-relaxed">
                Dashboards em tempo real com métricas que impulsionam decisões estratégicas e crescimento.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
          💭Imagine ter um vendedor que <span className="gradient-text">nunca para de trabalhar</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Enquanto você dorme, nosso assistente de IA está respondendo leads, qualificando prospects 
            e agendando reuniões. É como ter o melhor vendedor do mundo trabalhando exclusivamente 
            para você, 24 horas por dia, por uma fração do custo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAstraFlow; 