
import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';

const SectionInstitutional: React.FC = () => {
  return (
    <section id="renata" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/images/foto renata.jpeg" 
                alt="Renata Sorci" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Abstract Decorations */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-luxury-green/5 rounded-full blur-3xl z-0"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-luxury-green/5 border border-luxury-green/10">
              <span className="text-luxury-green text-xs font-bold tracking-widest uppercase">Autoridade Imobiliária</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-8 leading-tight">
              RENATA SORCI CORRETORA DE IMÓVEIS:<br />
              <span className="text-gold-600">Expertise e Elegância</span> em Suas Transações Imobiliárias
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Bem-vindo à Renata Sorci Corretora de Imóveis (CRECI 281628-F), onde a excelência encontra a paixão por conectar pessoas aos seus lares e investimentos ideais. Atuamos com a convicção de que cada transação imobiliária é um marco importante na vida de nossos clientes, e por isso, dedicamos nossa expertise para garantir um processo seguro, transparente e gratificante.
              </p>
              <p>
                Com uma atuação pautada na profissionalismo impecável e em um profundo conhecimento técnico do mercado imobiliário, Renata Sorci oferece um serviço distinto. Nossa metodologia alia a análise estratégica de mercado à uma comunicação clara e objetiva, assegurando que você tome as melhores decisões. Desde a avaliação precisa do imóvel até a finalização do negócio, cada etapa é conduzida com a devida diligência e atenção aos detalhes.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col space-y-3">
                <Award className="text-gold-500" size={32} />
                <h4 className="font-bold text-luxury-dark text-sm uppercase">Experiência Premium</h4>
              </div>
              <div className="flex flex-col space-y-3">
                <ShieldCheck className="text-gold-500" size={32} />
                <h4 className="font-bold text-luxury-dark text-sm uppercase">Segurança Jurídica</h4>
              </div>
              <div className="flex flex-col space-y-3">
                <Users className="text-gold-500" size={32} />
                <h4 className="font-bold text-luxury-dark text-sm uppercase">Atendimento Humano</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInstitutional;
