import { Instagram, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="display-font text-2xl font-bold mb-4">
              Du&Mi
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Bolos & Doces Artesanais feitos com amor e ingredientes selecionados. 
              Trazendo o sabor caseiro para sua mesa há mais de 5 anos.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://wa.me/5511981657377"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-smooth"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/artesanaldumi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('avaliacoes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>📱 (11) 98165-7377</p>
              <p>📧 contato@dumibolos.com.br</p>
              <p>📍 São Paulo - SP / Zona Sul</p>
              <p className="text-sm mt-4">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 16h<br />
                Domingo: 8h às 14h
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Du&Mi - Bolos & Doces Artesanais. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-400 fill-current" /> para você
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-secondary-foreground/60 text-xs">
            CNPJ: 00.000.000/0001-00 | Todos os preços sujeitos a alteração sem aviso prévio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;