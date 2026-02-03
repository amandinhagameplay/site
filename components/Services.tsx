
import React from 'react';
import { Home, Banknote, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Imóvel sob Encomenda",
      description: "Não encontrou o que procura? Descreva seu imóvel ideal e faremos a curadoria exclusiva.",
      cta: "Encomendar Agora"
    },
    {
      icon: <Banknote size={32} />,
      title: "Financiamento",
      description: "Simulação com as melhores condições de crédito e suporte completo na aprovação.",
      cta: "Simular agora"
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Cadastre seu Imóvel",
      description: "Venda ou alugue com segurança, visibilidade premium e total transparência.",
      cta: "Cadastrar agora"
    }
  ];

  return (
    <section className="py-24 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">Serviços Exclusivos</h2>
            <p className="text-gray-500 max-w-lg">Soluções completas para cada etapa da sua jornada no mercado imobiliário.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 overflow-hidden">
              <div className="mb-8 text-gold-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-luxury-dark mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">{service.description}</p>
              
              <button className="flex items-center space-x-2 text-luxury-green font-bold text-sm uppercase tracking-widest hover:text-gold-500 transition-colors">
                <span>{service.cta}</span>
                <ArrowUpRight size={18} />
              </button>

              <div className="absolute top-0 right-0 p-8 text-luxury-green/5 group-hover:text-luxury-green/10 transition-colors">
                 <div className="text-9xl font-serif font-bold -mr-4 -mt-4 opacity-5">0{idx+1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
