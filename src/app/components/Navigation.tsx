import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import logoPlaceholder from 'figma:asset/43accade86d1c34aa2c4d943b1a896780588cc2a.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Consultorias', id: 'services' },
    { name: 'Fale Conosco', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 duration-300" 
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logoPlaceholder} 
              alt="Consultorias Incomplexas Logo" 
              className="h-10 w-auto"
            />
            <span className="font-['Montserrat'] font-semibold text-lg hidden sm:block">
              Consultorias Incomplexas
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`font-['Lato'] transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === link.id ? 'text-primary after:w-full' : 'text-foreground'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Button
              onClick={() => onNavigate('contact')}
              className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground font-['Montserrat'] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Agendar Diagnóstico
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-['Lato'] text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === link.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="sm:hidden bg-primary hover:bg-primary/90 text-primary-foreground font-['Montserrat'] transition-all duration-300"
              >
                Agendar Diagnóstico
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}