import { MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LeadFormModal from "./LeadFormModal";

const Header = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // 100px acima da seção
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/logo.png" 
            alt="Astra Flow Logo" 
            className="h-10 w-auto rounded-lg"
          />
          <span className="text-xl font-bold gradient-text">Astra Flow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => handleSmoothScroll('what-is-astraflow')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            O que é
          </button>
          <button 
            onClick={() => handleSmoothScroll('ai-advantages')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Por que?
          </button>
          <button 
            onClick={() => handleSmoothScroll('contato')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <LeadFormModal 
            triggerText="Falar no WhatsApp"
            buttonProps={{ 
              className: "hidden md:inline-flex gradient-bg hover:opacity-90 text-white"
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </LeadFormModal>

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
                  onClick={() => handleSmoothScroll('what-is-astraflow')}
                  className="text-lg font-medium text-left"
                >
                  O que é
                </button>
                <button 
                  onClick={() => handleSmoothScroll('ai-advantages')}
                  className="text-lg font-medium text-left"
                >
                  Por que?
                </button>
                <button 
                  onClick={() => handleSmoothScroll('contato')}
                  className="text-lg font-medium text-left"
                >
                  Contato
                </button>
                <LeadFormModal 
                  triggerText="Falar no WhatsApp"
                  buttonProps={{ 
                    className: "gradient-bg hover:opacity-90 text-white mt-4"
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </LeadFormModal>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
