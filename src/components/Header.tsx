import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="display-font text-2xl md:text-3xl font-bold text-primary">
            Du&Mi
            <span className="text-secondary text-lg block leading-none">
              Bolos & Doces Artesanais
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection("avaliacoes")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contato
            </button>
          </nav>

          {/* Social Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://instagram.com/artesanaldumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href="https://wa.me/5511981657377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection("avaliacoes")}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth"
              >
                Contato
              </button>
              <div className="flex space-x-3 pt-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://instagram.com/artesanaldumi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button variant="whatsapp" size="sm" asChild>
                  <a
                    href="https://wa.me/5511981657377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;