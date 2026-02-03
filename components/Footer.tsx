
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Branding */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tight text-luxury-green">
                Renata Sorci
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold-600">
                Corretora de Imóveis
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Consultoria imobiliária premium focada em segurança, transparência e curadoria estratégica para os melhores investimentos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/renatasorci/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-luxury-green hover:bg-gold-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/renata.sorcicorrea" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-luxury-green hover:bg-gold-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-luxury-dark uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4">
              {['Inicial', 'Sobre Nós', 'Comprar', 'Alugar', 'Fale Conosco'].map(item => {
                const linkMap: { [key: string]: string } = {
                  'Inicial': '#',
                  'Sobre Nós': '#renata',
                  'Comprar': '#comprar',
                  'Alugar': '#alugar',
                  'Fale Conosco': '#'
                };
                return (
                  <li key={item}>
                    <a href={linkMap[item]} className="text-gray-500 hover:text-gold-600 text-sm transition-colors">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-luxury-dark uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-500 text-sm">
                  Rua Gabriel Ferreira nº 47 – Centro<br />
                  CEP: 13870-180 – São João da Boa Vista/SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="text-gold-500 flex-shrink-0" size={18} />
                <span className="text-gray-500 text-sm">(19) 98978 - 9694</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-luxury-dark uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-500 text-sm">Receba em primeira mão as melhores oportunidades de investimento.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-luxury-green text-white p-2 rounded-lg hover:bg-gold-500 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Renata Sorci Corretora de Imóveis – CRECI 281628-F. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gold-600">Privacidade</a>
            <a href="#" className="hover:text-gold-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
