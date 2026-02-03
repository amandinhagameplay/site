
import React from 'react';
import { MessageCircle, PhoneCall, Mail } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="bg-luxury-green rounded-[60px] p-8 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Pronto para sua próxima <br />
              <span className="text-gold-500 italic">conquista imobiliária?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Fale com uma especialista que cuida do seu patrimônio como se fosse dela. Atendimento exclusivo e consultoria completa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5519989789694" 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
              >
                <MessageCircle size={24} />
                <span>Conversar no WhatsApp</span>
              </a>
              <a 
                href="tel:+5519989789694" 
                className="w-full sm:w-auto bg-white text-luxury-green px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all hover:bg-gray-100"
              >
                <PhoneCall size={20} />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center space-x-2 text-white/50 text-sm">
              <Mail size={16} />
              <span>contato@renatasorci.com.br</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
