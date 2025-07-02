import { CheckCircle, TrendingUp, DollarSign, Clock, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ClientResults = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Aumento de 212%",
      subtitle: "na Taxa de Conversão",
      description: "Leads qualificados automaticamente resultam em mais vendas fechadas"
    },
    {
      icon: DollarSign,
      title: "Redução para 80%",
      subtitle: "dos seus Custos Operacionais",
      description: "Elimine gastos com equipe de vendas para tarefas repetitivas"
    },
    {
      icon: Clock,
      title: "Resposta em 10s",
      subtitle: "para Todos os Leads",
      description: "Nunca mais perca oportunidades por demora no atendimento"
    },
    {
      icon: Users,
      title: "Atendimento 24/7",
      subtitle: "Sem Interrupções",
      description: "Vendas acontecendo mesmo quando sua equipe não está disponível"
    },
    {
      icon: Target,
      title: "Qualificação 95%",
      subtitle: "Mais Precisão",
      description: "Converta a maior parte dos leads em clientes"
    },
    {
      icon: CheckCircle,
      title: "ROI Positivo",
      subtitle: "em 30 Dias",
      description: "Veja resultados mensuráveis desde o primeiro mês de uso"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">clientes conquistam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais e mensuráveis que transformam negócios e impulsionam o crescimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-lg mb-6">
                  <result.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{result.title}</div>
                <div className="text-lg font-semibold text-gray-800 mb-3">{result.subtitle}</div>
                <p className="text-gray-600 leading-relaxed">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Histórias de sucesso reais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">R$ 500K+</div>
              <div className="text-gray-600 font-medium">Em Vendas Geradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600 font-medium">Score NPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults; 