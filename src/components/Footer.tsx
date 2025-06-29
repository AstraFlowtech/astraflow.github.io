
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Contato via site Astra Flow";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/5812792c-1a37-47ab-8429-a619da955ba0.png" 
                alt="Astra Flow Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold gradient-text">Astra Flow</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em IA, automação e ciência de dados. 
              Transformamos negócios através da tecnologia inteligente.
            </p>
            <div className="text-sm text-gray-400">
              <strong>Consultoria & Automação</strong>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  SDR Virtual com IA
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-primary transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-primary transition-colors">
                  Dashboards Inteligentes
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-primary transition-colors">
                  Ciência de Dados
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  WhatsApp - Resposta Imediata
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">contato@astraflow.com.br</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
              <p className="text-sm font-medium mb-2">🚀 Transforme seu negócio hoje!</p>
              <p className="text-xs text-gray-300">
                Consultoria gratuita para avaliar seu potencial de crescimento
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Astra Flow. Todos os direitos reservados. | 
            <span className="text-primary"> Consultoria & Automação</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
