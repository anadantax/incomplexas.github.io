import { Instagram } from 'lucide-react';
import logoPlaceholder from 'figma:asset/43accade86d1c34aa2c4d943b1a896780588cc2a.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Consultorias', id: 'services' },
    { name: 'Fale Conosco', id: 'contact' },
  ];

  return (
    <footer className="relative mt-auto">
      {/* Main Footer Section - Dark Gradient */}
      <div className="bg-gradient-to-br from-[#1F3D5B] via-[#2F6FA3] to-[#3FB7B2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1 - Brand */}
            <div className="space-y-6">
              <img 
                src={logoPlaceholder} 
                alt="Consultorias Incomplexas Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-white/90 font-['Lato'] text-sm leading-relaxed max-w-xs">
                Transformando o complexo em possível, com clareza e estratégia.
              </p>
            </div>

            {/* Column 2 - Navigation */}
            <div className="space-y-4">
              <h3 className="font-['Montserrat'] font-semibold text-lg">
                Navegação
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="font-['Lato'] text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Social & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="font-['Montserrat'] font-semibold text-lg mb-4">
                  Redes Sociais & Contato
                </h3>
                
                {/* Instagram */}
                <div className="mb-6">
                  <a
                    href="https://instagram.com/incomplexas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 group"
                  >
                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="font-['Lato'] text-white/90 group-hover:text-white transition-colors">
                      @incomplexas
                    </span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 font-['Lato'] text-sm">
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Email:</span>
                    <br />
                    <a 
                      href="mailto:consultoriasincomplexas@gmail.com" 
                      className="hover:text-white transition-colors duration-300"
                    >
                      consultoriasincomplexas@gmail.com
                    </a>
                  </p>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">WhatsApp:</span>
                    <br />
                    <a 
                      href="https://wa.me/5562999375950" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-300"
                    >
                      (62) 99937-5950
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-white/70 font-['Lato'] text-sm">
              Copyright © 2026 Consultorias Incomplexas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
