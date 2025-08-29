import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511981657377"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fazer Pedido
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/artesanaldumi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Seguir no Instagram"
      >
        <Instagram className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Seguir no Instagram
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;