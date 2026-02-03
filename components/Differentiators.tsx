
import React from 'react';
import { Shield, Sparkles, LineChart, Bookmark } from 'lucide-react';

const Differentiators: React.FC = () => {
  const items = [
    {
      icon: <Shield className="text-gold-500" size={36} />,
      title: "Profissionalismo e Credibilidade",
      description: "Atuação ética, segura e 100% dentro das normas legais."
    },
    {
      icon: <Sparkles className="text-gold-500" size={36} />,
      title: "Atendimento Elegante e Personalizado",
      description: "Cada cliente é único, cada negociação é exclusiva."
    },
    {
      icon: <LineChart className="text-gold-500" size={36} />,
      title: "Visão Técnica Aprofundada",
      description: "Análise de mercado, valorização e aspectos jurídicos."
    },
    {
      icon: <Bookmark className="text-gold-500" size={36} />,
      title: "Portfólio Selecionado",
      description: "Imóveis escolhidos com critério e estratégia."
    }
  ];

  return (
    <section className="py-24 bg-luxury-dark text-white">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Por que escolher Renata Sorci?</h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-8 rounded-[32px] border border-white/5 hover:bg-white/5 transition-all duration-500">
              <div className="mb-8 p-6 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
