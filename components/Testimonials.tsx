
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-500">Histórias de sucesso e conquistas compartilhadas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative bg-luxury-beige p-12 rounded-[48px] overflow-hidden">
              <Quote className="absolute top-8 left-8 text-gold-500/20" size={80} />
              <div className="relative z-10">
                <p className="text-xl italic text-luxury-dark mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-luxury-green">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
