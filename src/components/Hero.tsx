import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Du&Mi Bolos e Doces Artesanais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 fade-in">
            <span className="text-primary">Du&Mi</span>
            <br />
            <span className="text-secondary text-3xl md:text-4xl lg:text-5xl">
              Bolos & Doces Artesanais
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 fade-in display-font">
            O sabor caseiro que desperta sua felicidade
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto text-black fade-in">
            Cada doce é feito com carinho e ingredientes selecionados,
            trazendo o sabor da tradição familiar para a sua mesa.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProducts}
              className="text-lg px-8 py-3"
            >
              Ver Cardápio
            </Button>
            <Button variant="contact" size="lg" asChild>
              <a
                href="https://wa.me/5511981657377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg px-8 py-3"
              >
                <MessageCircle className="h-5 w-5" />
                Fazer Pedido
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-black fade-in">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-primary">⭐</span>
              <span>Avaliação 5.0 estrelas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span>Feito com amor em casa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl floating-animation opacity-20">
        🧁
      </div>
      <div className="absolute top-40 right-16 text-5xl floating-animation opacity-20" style={{ animationDelay: "-2s" }}>
        🍰
      </div>
      <div className="absolute bottom-20 left-20 text-4xl floating-animation opacity-20" style={{ animationDelay: "-4s" }}>
        🍫
      </div>
      <div className="absolute bottom-40 right-10 text-5xl floating-animation opacity-20" style={{ animationDelay: "-1s" }}>
        🎂
      </div>
    </section>
  );
};

export default Hero;