import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission - in real app, this would connect to backend
    const whatsappMessage = `Olá! Me chamo ${formData.name}.\n\nMeu telefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511981657377?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Redirecionando para o WhatsApp..."
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="display-font text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para tornar seus momentos ainda mais doces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient shadow-card">
              <CardHeader>
                <CardTitle className="display-font text-2xl text-foreground">
                  Fale Conosco Agora
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">Resposta imediata</p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://wa.me/5511981657377" target="_blank" rel="noopener noreferrer">
                        (11) 98165-73777
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <p className="text-muted-foreground">Veja nossas criações</p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="https://instagram.com/artesanaldumi" target="_blank" rel="noopener noreferrer">
                        @artesanaldumi
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 98165-7377</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">---------</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="card-gradient shadow-card">
              <CardHeader>
                <CardTitle className="display-font text-xl text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Segunda a Sexta</span>
                    <span className="text-muted-foreground">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Sábado</span>
                    <span className="text-muted-foreground">8h às 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Domingo</span>
                    <span className="text-muted-foreground">8h às 14h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-gradient shadow-card">
              <CardHeader>
                <CardTitle className="display-font text-xl text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Atendemos grande parte da Zona Sul - São Paulo
                </p>
                <p className="text-sm text-muted-foreground">
                  📍 Entrega disponível para regiões próximas<br />
                  🚗 Consulte taxa de entrega via WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="display-font text-2xl text-foreground">
                Envie sua Mensagem
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato rapidamente
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="transition-smooth focus:shadow-soft"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="transition-smooth focus:shadow-soft"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seu pedido, dúvidas ou sugestões..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-32 transition-smooth focus:shadow-soft"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Enviar via WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;