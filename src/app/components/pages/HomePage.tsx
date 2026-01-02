import { CheckCircle2, Layers, Target, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ScrollReveal } from '../ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      title: 'Plano de Negócios',
      description: 'Validação e modelagem estratégica para transformar ideias em ação.',
      icon: Target,
    },
    {
      title: 'Organização Empresarial',
      description: 'Estruturação de processos, finanças e rotinas operacionais.',
      icon: Layers,
    },
    {
      title: 'Mentoria',
      description: 'Desenvolvimento comportamental e inteligência emocional aplicada.',
      icon: Users,
    },
  ];

  const benefits = [
    'Soluções Personalizadas',
    'Autonomia do Cliente',
    'Metodologia Prática',
    'Foco em Resultados',
  ];

  return (
    <div className="font-['Lato']">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h1 className="font-['Montserrat'] text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Organização, estratégia e soluções personalizadas.
                </h1>
                <p className="text-lg text-muted-foreground">
                  As Consultorias Incomplexas traduzem o complexo em planos estruturados. 
                  Foco na sua realidade, não em fórmulas prontas.
                </p>
                <Button
                  onClick={() => onNavigate('services')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-['Montserrat'] text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Conhecer Soluções
                </Button>
              </div>
            </ScrollReveal>

            {/* Right Geometric Composition */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-lg animate-float-1"></div>
                <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/30 rounded-lg animate-float-2"></div>
                <div className="absolute top-32 left-32 w-48 h-48 bg-accent/40 rounded-lg animate-float-3"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/30 rounded-lg animate-float-4"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-lg animate-float-5"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-muted/50 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold mb-6">
              Seu negócio não está errado. Ele só está desorganizado.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transformamos caos em clareza. Estruturamos processos, validamos ideias e 
              criamos estratégias práticas que funcionam na sua realidade.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-center mb-12">
              Nossas Soluções
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card 
                  className="border-2 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 group" 
                  onClick={() => onNavigate('services')}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-['Montserrat'] text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-card py-16 lg:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Geometric Shapes */}
            <ScrollReveal direction="left" className="relative h-[300px] lg:h-[400px] order-2 lg:order-1">
              <div className="absolute top-0 left-0 w-56 h-56 bg-secondary/20 rounded-lg animate-float-2"></div>
              <div className="absolute top-10 left-10 w-48 h-48 bg-primary/30 rounded-lg animate-float-4"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/40 rounded-lg animate-float-1"></div>
            </ScrollReveal>

            {/* Right - Benefits */}
            <ScrollReveal direction="right" className="space-y-6 order-1 lg:order-2">
              <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold">
                Por que escolher a Consultorias Incomplexas?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => onNavigate('about')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-['Montserrat'] mt-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Saiba Mais Sobre Nós
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}