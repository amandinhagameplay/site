
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/40 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold-500/10 border border-gold-500/20 backdrop-blur-md">
            <span className="text-white text-xs font-bold tracking-widest uppercase">Consultoria de Alto Padrão</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Renata Sorci – <br /> 
            <span className="text-gold-400 italic">Corretora de Imóveis</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-4 max-w-2xl">
            Excelência, segurança e sofisticação em cada negociação imobiliária
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
            Consultoria especializada para comprar, vender ou alugar imóveis com tranquilidade, estratégia e total transparência.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#buscar" 
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-5 rounded-2xl font-bold transition-all transform hover:translate-y-[-4px] shadow-xl shadow-gold-500/30"
            >
              <Search size={20} />
              <span>Buscar Imóvel</span>
            </a>
            <a 
              href="#especialista" 
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-bold transition-all"
            >
              <span>Falar com Especialista</span>
              <ArrowRight size={20} className="text-gold-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
