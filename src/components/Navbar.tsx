
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ai-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">AI FOR YOU</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('process')}
              className="text-ai-light hover:text-ai-blue transition-colors font-medium"
            >
              Как это работает
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-ai-light hover:text-ai-blue transition-colors font-medium"
            >
              Стоимость
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-ai-light hover:text-ai-blue transition-colors font-medium"
            >
              О нас
            </button>
            <Button 
              onClick={() => scrollToSection('contact-form')}
              className="btn-primary"
            >
              Записаться
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-ai-light focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 bg-ai-dark/95 backdrop-blur-lg shadow-lg space-y-3">
          <button
            onClick={() => scrollToSection('process')}
            className="block w-full text-left py-2 text-ai-light hover:text-ai-blue"
          >
            Как это работает
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="block w-full text-left py-2 text-ai-light hover:text-ai-blue"
          >
            Стоимость
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-ai-light hover:text-ai-blue"
          >
            О нас
          </button>
          <Button 
            onClick={() => scrollToSection('contact-form')}
            className="w-full btn-primary mt-2"
          >
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
