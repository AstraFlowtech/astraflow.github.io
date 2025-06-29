
import { MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Astra Flow";

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/5812792c-1a37-47ab-8429-a619da955ba0.png" 
            alt="Astra Flow Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold gradient-text">Astra Flow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => handleSmoothScroll('servicos')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleSmoothScroll('solucoes')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Soluções
          </button>
          <button 
            onClick={() => handleSmoothScroll('contato')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            className="hidden md:inline-flex gradient-bg hover:opacity-90 text-white"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => handleSmoothScroll('servicos')}
                  className="text-lg font-medium text-left"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => handleSmoothScroll('solucoes')}
                  className="text-lg font-medium text-left"
                >
                  Soluções
                </button>
                <button 
                  onClick={() => handleSmoothScroll('contato')}
                  className="text-lg font-medium text-left"
                >
                  Contato
                </button>
                <Button 
                  className="gradient-bg hover:opacity-90 text-white mt-4"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
