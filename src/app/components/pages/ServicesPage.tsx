import { FileText, Layers, GraduationCap, Brain, Search, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ScrollReveal } from '../ScrollReveal';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: FileText,
      title: 'Plano de Negócios Incomplexo',
      description: 'Validação e modelagem estratégica para transformar sua ideia em um plano de ação estruturado e realista.',
      features: ['Canvas de modelo de negócios', 'Análise de viabilidade', 'Projeções financeiras', 'Estratégia de entrada'],
    },
    {
      icon: Layers,
      title: 'Organização Empresarial',
      description: 'Estruturação de processos, finanças e rotinas operacionais para trazer ordem e eficiência ao seu negócio.',
      features: ['Mapeamento de processos', 'Organização financeira', 'Fluxos de trabalho', 'KPIs personalizados'],
    },
    {
      icon: GraduationCap,
      title: 'Instrutorias & Tutoriais',
      description: 'Treinamento técnico prático para capacitar sua equipe em ferramentas e metodologias específicas.',
      features: ['Workshops customizados', 'Treinamento in-company', 'Material didático', 'Acompanhamento pós-treinamento'],
    },
    {
      icon: Brain,
      title: 'Comportamento Empreendedor',
      description: 'Mentoria focada em desenvolvimento comportamental e inteligência emocional aplicada aos negócios.',
      features: ['Gestão de mindset', 'Inteligência emocional', 'Tomada de decisão', 'Liderança autêntica'],
    },
    {
      icon: Search,
      title: 'Diagnóstico Express',
      description: 'Análise pontual e rápida de gargalos específicos do seu negócio com recomendações práticas.',
      features: ['Diagnóstico em 48h', 'Relatório detalhado', 'Plano de ação imediato', 'Follow-up opcional'],
    },
    {
      icon: Calendar,
      title: 'Gestão de Rotina',
      description: 'Otimização de tempo, agenda e prioridades para empreendedores que precisam ganhar produtividade.',
      features: ['Planejamento semanal', 'Matriz de prioridades', 'Time blocking', 'Automações práticas'],
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
                Nossas Consultorias
              </h1>
              <p className="text-lg text-muted-foreground">
                Soluções personalizadas para cada momento do seu negócio. 
                Estrutura, estratégia e execução em serviços desenhados para sua realidade.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card 
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 space-y-6">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat'] text-xl font-bold">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={() => onNavigate('contact')}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-['Montserrat'] transition-all duration-300"
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold">
              Não encontrou o que precisa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada negócio é único. Podemos criar uma solução sob medida para suas necessidades específicas.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-['Montserrat'] text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Fale Conosco
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}