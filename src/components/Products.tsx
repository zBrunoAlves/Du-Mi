import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import boloChocolate from "@/assets/bolo-chocolate.jpg";
import boloCenoura from "@/assets/bolo-cenoura.jpg";
import boloNinho from "@/assets/bolo-ninho.jpg";
import brigadeiros from "@/assets/brigadeiros.jpg";

const Products = () => {
  const bolosCaseiros = [
    {
      id: 1,
      name: "Chocolate com Ganache",
      description: "Bolo úmido de chocolate com cobertura cremosa de ganache",
      price: "R$ 45,00",
      image: boloChocolate,
      ingredients: ["Chocolate 70%", "Ovos caipira", "Farinha especial", "Ganache artesanal"]
    },
    {
      id: 2,
      name: "Cenoura com Chocolate",
      description: "Clássico bolo de cenoura com cobertura de chocolate cremosa",
      price: "R$ 40,00",
      image: boloCenoura,
      ingredients: ["Cenoura fresca", "Chocolate meio amargo", "Ovos caipira", "Óleo de girassol"]
    },
    {
      id: 3,
      name: "Leite Ninho Nestlé",
      description: "Irresistível bolo com sabor marcante do Leite Ninho",
      price: "R$ 48,00",
      image: boloNinho,
      ingredients: ["Leite Ninho Nestlé", "Creme de leite", "Ovos frescos", "Farinha premium"]
    }
  ];

  const miniBolos = [
    {
      id: 4,
      name: "Mini Chocolate com Brigadeiro",
      description: "Mini bolo de chocolate com brigadeiro e granulado",
      price: "R$ 8,00",
      image: boloChocolate,
      ingredients: ["Chocolate", "Brigadeiro caseiro", "Granulado belga"]
    },
    {
      id: 5,
      name: "Mini Ninho com Morangos",
      description: "Mini bolo de Ninho decorado com morangos frescos",
      price: "R$ 10,00",
      image: boloNinho,
      ingredients: ["Leite Ninho", "Morangos frescos", "Chantilly"]
    }
  ];

  const brigadeirosGourmet = [
    {
      id: 6,
      name: "Brigadeiro Tradicional",
      description: "Brigadeiro cremoso com granulado belga",
      price: "R$ 3,50",
      image: brigadeiros,
      ingredients: ["Chocolate belga", "Leite condensado", "Granulado premium"]
    },
    {
      id: 7,
      name: "Brigadeiro de Coco",
      description: "Brigadeiro especial com coco ralado fresco",
      price: "R$ 3,50",
      image: brigadeiros,
      ingredients: ["Chocolate branco", "Coco ralado fresco", "Leite condensado"]
    }
  ];

  const handleOrder = (productName: string) => {
    const message = `Olá! Gostaria de fazer um pedido do ${productName}. Poderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5511981657377?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ProductCard = ({ product, category }: { product: any, category: string }) => (
    <Card className="card-gradient shadow-card hover:shadow-glow transition-smooth group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
            {product.name}
          </CardTitle>
          <span className="text-xl font-bold text-primary display-font">
            {product.price}
          </span>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">Ingredientes:</h4>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.map((ingredient: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
          <Button
            variant="contact"
            className="w-full"
            onClick={() => handleOrder(product.name)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Pedir via WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="produtos" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="display-font text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sabores únicos feitos com ingredientes selecionados e muito carinho
          </p>
        </div>

        {/* Bolos Caseiros */}
        <div className="mb-16">
          <h3 className="display-font text-3xl font-bold text-secondary mb-8 text-center">
            🎂 Bolos Caseiros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bolosCaseiros.map((produto) => (
              <ProductCard key={produto.id} product={produto} category="Bolo Caseiro" />
            ))}
          </div>
        </div>

        {/* Mini Bolos */}
        <div className="mb-16">
          <h3 className="display-font text-3xl font-bold text-secondary mb-8 text-center">
            🧁 Mini Bolos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniBolos.map((produto) => (
              <ProductCard key={produto.id} product={produto} category="Mini Bolo" />
            ))}
          </div>
        </div>

        {/* Brigadeiros Gourmet */}
        <div>
          <h3 className="display-font text-3xl font-bold text-secondary mb-8 text-center">
            🍫 Brigadeiros Gourmet
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brigadeirosGourmet.map((produto) => (
              <ProductCard key={produto.id} product={produto} category="Brigadeiro" />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://wa.me/5511981657377"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Cardápio Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;