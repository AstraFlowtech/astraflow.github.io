import { DollarSign, Zap, BarChart3, Database, Brain, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadFormModal from "./LeadFormModal";

const ReduceCosts = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Reduza custos operacionais automatizando tarefas repetitivas e workflows complexos.",
      savings: "Redução de 60% nos custos operacionais",
      features: [
        "Automação de workflows de vendas",
        "Integração entre plataformas",
        "Processos de onboarding automatizados",
        "Notificações e alertas inteligentes"
      ]
    },
    {
      icon: BarChart3,
      title: "Dashboards Inteligentes",
      description: "Otimize decisões com dados em tempo real e reduza desperdícios de recursos.",
      savings: "Economia de 40% em recursos mal direcionados",
      features: [
        "Dashboards personalizados",
        "Métricas em tempo real",
        "Relatórios automatizados",
        "Análises preditivas"
      ]
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description: "Elimine redundâncias e otimize o uso de dados para reduzir custos de armazenamento.",
      savings: "Redução de 50% nos custos de infraestrutura",
      features: [
        "Estruturação de bancos de dados",
        "Migração e limpeza de dados",
        "Backup e segurança",
        "Otimização de performance"
      ]
    },
    {
      icon: Brain,
      title: "Análises Preditivas",
      description: "Antecipe tendências e otimize investimentos para maximizar ROI.",
      savings: "Aumento de 35% na eficiência de investimentos",
      features: [
        "Previsão de vendas",
        "Análise de comportamento do cliente",
        "Identificação de oportunidades",
        "Modelagem estatística avançada"
      ]
    }
  ];

  return (
    <section id="reduce-costs" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reduza seus <span className="gradient-text">custos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções inteligentes que otimizam recursos e maximizam o retorno sobre investimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 gradient-bg rounded-lg">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-green-800 font-semibold text-sm">{solution.savings}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Cog className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <LeadFormModal 
                  triggerText="Marcar Diagnóstico Grátis"
                  buttonProps={{ variant: "outline", className: "w-full border-primary text-primary hover:bg-primary hover:text-white" }}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Economia total estimada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-700 bg-clip-text text-transparent mb-2">R$ 45K+</div>
              <div className="text-gray-600">Economia Anual Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent mb-2">5x</div>
              <div className="text-gray-600">Mais Eficiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">6 Meses</div>
              <div className="text-gray-600">Payback Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReduceCosts; 