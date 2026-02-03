
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import CallbackForm from './CallbackForm';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicial', href: '#' },
    { name: 'Sobre Nós', href: '#renata' },
    { name: 'Comprar', href: '#comprar' },
    { name: 'Alugar', href: '#alugar' },
    { name: 'Fale Conosco', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Renata Sorci - Corretora de Imóveis" 
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="https://wa.me/5519989789694" target="_blank" className={`flex items-center space-x-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-luxury-green' : 'text-white'} hover:text-gold-500`}>
            <MessageCircle size={20} className="text-green-500" />
            <span>(19) 98978 - 9694</span>
          </a>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            Nós ligamos para você
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl py-6 px-8 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-luxury-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
             <button 
               onClick={() => {
                 setIsFormOpen(true);
                 setIsMenuOpen(false);
               }}
               className="w-full bg-gold-500 text-white px-6 py-4 rounded-xl font-bold"
             >
               Nós ligamos para você
             </button>
             <a href="https://wa.me/5519989789694" className="flex items-center justify-center space-x-2 text-luxury-green font-bold">
                <MessageCircle size={20} className="text-green-500" />
                <span>WhatsApp</span>
             </a>
          </div>
        </div>
      )}

      <CallbackForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
};

export default Header;
