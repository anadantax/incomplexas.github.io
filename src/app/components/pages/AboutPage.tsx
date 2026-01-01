import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ScrollReveal } from '../ScrollReveal';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Traduzir o mundo dos negócios para uma linguagem humana, tornando a gestão acessível e prática para empreendedores que buscam clareza.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em consultorias que simplificam sem perder profundidade, empoderando negócios através de organização e estratégia estruturada.',
    },
    {
      icon: Award,
      title: 'Valores',
      description: 'Autonomia, transparência, personalização e foco em resultados práticos. Acreditamos que organização é liberdade.',
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
                Sobre as Consultorias Incomplexas
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Geometric Composition */}
            <ScrollReveal direction="left" className="relative h-[400px] lg:h-[500px]">
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary/15 rounded-lg transition-all duration-500 hover:scale-105"></div>
              <div className="absolute top-12 left-12 w-64 h-64 bg-secondary/25 rounded-lg transition-all duration-500 hover:scale-105"></div>
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-accent/35 rounded-lg transition-all duration-500 hover:scale-105"></div>
              <div className="absolute bottom-12 right-12 w-48 h-48 bg-primary/20 rounded-lg transition-all duration-500 hover:scale-105"></div>
            </ScrollReveal>

            {/* Right - Content */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold">
                  Nossa História
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Nascemos da necessidade de traduzir o mundo dos negócios para uma linguagem humana. 
                    Em um mercado saturado de fórmulas prontas e jargões vazios, percebemos que 
                    empreendedores precisavam de algo diferente: <strong className="text-foreground">clareza</strong>.
                  </p>
                  <p>
                    Estamos prontos para estruturar seu crescimento. Não oferecemos soluções genéricas, 
                    mas sim consultoria personalizada que respeita a realidade única de cada negócio.
                  </p>
                  <p>
                    Acreditamos que <strong className="text-foreground">organização é liberdade</strong>. 
                    Quando processos estão claros, decisões se tornam mais assertivas e o empreendedor 
                    ganha autonomia para focar no que realmente importa.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-card py-16 lg:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-center mb-12">
              Nossos Pilares
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-['Montserrat'] text-2xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-center mb-8">
                Nossa Abordagem
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Trabalhamos com uma metodologia que une <strong className="text-foreground">estrutura e 
                  flexibilidade</strong>. Cada consultoria é desenhada sob medida, respeitando o estágio 
                  do negócio, os recursos disponíveis e os objetivos do empreendedor.
                </p>
                <p>
                  Não acreditamos em fórmulas mágicas. Acreditamos em <strong className="text-foreground">diagnóstico 
                  preciso, planejamento realista e execução acompanhada</strong>. Nosso compromisso é com a 
                  transformação prática, não com teorias que ficam no papel.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    { title: 'Personalização Total', desc: 'Cada solução é única porque cada negócio é único.' },
                    { title: 'Foco em Autonomia', desc: 'Capacitamos você para tomar decisões com segurança.' },
                    { title: 'Metodologia Prática', desc: 'Ferramentas e processos que funcionam no dia a dia.' },
                    { title: 'Resultados Mensuráveis', desc: 'Acompanhamento com métricas claras e objetivas.' }
                  ].map((item, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div className="bg-muted/50 p-6 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-105">
                        <h4 className="font-['Montserrat'] font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}