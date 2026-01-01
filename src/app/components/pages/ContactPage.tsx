import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ScrollReveal } from '../ScrollReveal';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'consultoriasincomplexas@gmail.com',
      href: 'mailto:consultoriasincomplexas@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(62) 99937-5950',
      href: 'tel:+5562999375950',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Goiânia, GO - Brasil',
      href: '#',
    },
  ];

  return (
    <div className="font-['Lato']">
      {/* Header Section */}
      <section className="bg-muted/30 py-16 lg:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-['Montserrat'] text-4xl sm:text-5xl lg:text-6xl font-bold">
                Fale Conosco
              </h1>
              <p className="text-lg text-muted-foreground">
                Pronto para estruturar seu negócio? Entre em contato e vamos conversar sobre 
                como podemos ajudar você a alcançar seus objetivos.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Information */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-['Montserrat'] text-3xl font-bold mb-4">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Estamos prontos para ouvir você. Escolha o canal que preferir ou preencha 
                    o formulário ao lado.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <a
                          href={info.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-['Montserrat'] font-semibold mb-1">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Geometric Decoration */}
                <div className="relative h-64 hidden lg:block">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-primary/15 rounded-lg transition-all duration-500 hover:scale-105"></div>
                  <div className="absolute top-8 left-8 w-32 h-32 bg-secondary/25 rounded-lg transition-all duration-500 hover:scale-105"></div>
                  <div className="absolute bottom-0 right-0 w-36 h-36 bg-accent/20 rounded-lg transition-all duration-500 hover:scale-105"></div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Contact Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-['Montserrat'] text-2xl font-bold mb-6">
                    Envie uma Mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-['Montserrat']">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-['Montserrat']">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 font-['Montserrat']">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(62) 99999-9999"
                        className="w-full transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 font-['Montserrat']">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Como podemos ajudar?"
                        className="w-full transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-['Montserrat']">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Conte-nos mais sobre sua necessidade..."
                        className="w-full min-h-[150px] transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-['Montserrat'] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-white">
              Prefere conversar agora?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp ou Instagram e inicie uma conversa direta conosco.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}