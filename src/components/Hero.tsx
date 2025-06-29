
import { ArrowRight, Bot, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero transformar meu negócio com IA e automação";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex items-center justify-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              IA Revolucionária para Negócios
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transforme{" "}
            <span className="gradient-text">Leads em Vendas</span>{" "}
            com IA Humanizada
          </h1>

          <p className="mb-8 text-xl text-gray-600 sm:text-2xl max-w-3xl mx-auto">
            <strong>Maximize suas vendas</strong> com nosso SDR virtual que trabalha 24/7, 
            automações inteligentes e soluções em ciência de dados que revolucionam seu negócio.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 text-white text-lg px-8 py-4 pulse-glow"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <Zap className="mr-2 h-5 w-5" />
              Começar Agora - Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-primary hover:bg-primary hover:text-white"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Como Funciona
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="float-animation">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SDR Virtual 24/7</h3>
              <p className="text-gray-600">IA que converte leads automaticamente</p>
            </div>
            
            <div className="float-animation" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automação Total</h3>
              <p className="text-gray-600">Processos otimizados e eficientes</p>
            </div>
            
            <div className="float-animation" style={{ animationDelay: '1s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Dados Inteligentes</h3>
              <p className="text-gray-600">Insights que impulsionam resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
