
import { Bot, Zap, BarChart3, Database, Brain, Cog, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero saber mais sobre os serviços da Astra Flow";

  const mainService = {
    icon: Bot,
    title: "SDR Virtual com IA Humanizada",
    subtitle: "Nosso Produto Estrela",
    description: "Agente de IA especializado em conversão de leads que trabalha 24/7 em todas as suas redes sociais. Conversa naturalmente, qualifica prospects e agenda reuniões automaticamente.",
    features: [
      "Atendimento humanizado em WhatsApp, Instagram, Facebook",
      "Qualificação automática de leads quentes",
      "Agendamento inteligente de reuniões",
      "Integração com seu CRM existente",
      "Relatórios detalhados de performance"
    ],
    highlight: true
  };

  const additionalServices = [
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas, workflows complexos e integre sistemas para máxima eficiência operacional.",
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
      description: "Visualize seus dados de forma clara e tome decisões baseadas em insights reais e atualizados em tempo real.",
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
      description: "Criação, organização e manutenção de bancos de dados otimizados para performance e segurança.",
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
      description: "Estudos avançados de previsão que antecipam tendências e oportunidades do seu mercado.",
      features: [
        "Previsão de vendas",
        "Análise de comportamento do cliente",
        "Identificação de oportunidades",
        "Modelagem estatística avançada"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em IA, automação e ciência de dados para revolucionar seu negócio
          </p>
        </div>

        {/* Serviço Principal - SDR Virtual */}
        <div className="mb-16">
          <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="gradient-bg text-white p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <mainService.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-sm font-medium opacity-90">{mainService.subtitle}</div>
                    <h3 className="text-2xl font-bold">{mainService.title}</h3>
                  </div>
                </div>
                <Button 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Quero Testar Grátis
                </Button>
              </div>
            </div>
            
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {mainService.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mainService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outros Serviços */}
        <div id="solucoes">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Outras <span className="gradient-text">Soluções</span> Profissionais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 gradient-bg rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Cog className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
