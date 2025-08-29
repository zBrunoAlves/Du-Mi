import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Bruno Oliveira",
      rating: 5,
      comment: "Muito bom os bolos, ja comprei um monte. O de ninho com morango é o melhor.",
      date: "Há 2 dias"
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      comment: "Encomendei mini bolos para o aniversário da minha filha. Todos os convidados elogiaram muito. Qualidade excepcional!",
      date: "Há 1 semana"
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      comment: "Os brigadeiros são incríveis! Sabor caseiro de verdade, lembra a casa da vovó. Recomendo demais!",
      date: "Há 2 semanas"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      rating: 5,
      comment: "Bolo de cenoura maravilhoso! Textura perfeita e sabor inesquecível. Já virei cliente fiel.",
      date: "Há 3 semanas"
    },
    {
      id: 5,
      name: "Fernanda Lima",
      rating: 5,
      comment: "Atendimento excelente e produtos de altíssima qualidade. O bolo de Ninho é o melhor que já comi!",
      date: "Há 1 mês"
    },
    {
      id: 6,
      name: "Roberto Mendes",
      rating: 5,
      comment: "Encomendei para uma reunião de trabalho e foi um sucesso total. Todos perguntaram onde eu comprei!",
      date: "Há 1 mês"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="display-font text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A felicidade dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        {/* Statistics */}
        <div className="flex justify-center mb-16">
          <div className="card-gradient rounded-xl p-8 shadow-card">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary display-font">5.0</div>
                <div className="flex justify-center mt-1">
                  <StarRating rating={5} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">Avaliação Média</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary display-font">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes Felizes</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary display-font">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Doces Entregues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="card-gradient shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-foreground leading-relaxed">
                  "{review.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="display-font text-2xl font-bold text-foreground mb-4">
              Faça parte da nossa família!
            </h3>
            <p className="text-muted-foreground mb-6">
              Experimente nossos doces artesanais e descubra por que somos tão amados pelos nossos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511981657377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-smooth shadow-card hover:shadow-glow"
              >
                📱 Fazer meu primeiro pedido
              </a>
              <a
                href="https://instagram.com/artesanaldumi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-smooth shadow-card hover:shadow-glow"
              >
                📸 Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;