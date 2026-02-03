
import React, { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { BusinessType, PropertyType } from '../types';

const SearchFilter: React.FC = () => {
  const [businessType, setBusinessType] = useState<BusinessType>(BusinessType.COMPRAR);

  return (
    <div id="buscar" className="container mx-auto px-4 -mt-24 relative z-20">
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
        {/* Toggle Business Type */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setBusinessType(BusinessType.COMPRAR)}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${businessType === BusinessType.COMPRAR ? 'bg-luxury-green text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            Comprar
          </button>
          <button 
            onClick={() => setBusinessType(BusinessType.ALUGAR)}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${businessType === BusinessType.ALUGAR ? 'bg-luxury-green text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            Alugar
          </button>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {/* Property Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Tipo do Imóvel</label>
            <div className="relative">
              <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gold-500/20">
                <option value="">Todos os tipos</option>
                {Object.values(PropertyType).map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* City / Neighborhood */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Cidade / Bairro</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ex: Jardim Europa" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 lg:col-span-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Faixa de Preço</label>
            <div className="grid grid-cols-2 gap-2">
              <input 
                type="text" 
                placeholder="Mínimo" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
              />
              <input 
                type="text" 
                placeholder="Máximo" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-gold-500 hover:bg-gold-600 text-white h-[48px] rounded-xl flex items-center justify-center space-x-2 font-bold transition-all shadow-lg shadow-gold-500/20">
            <Search size={18} />
            <span>Buscar Imóveis</span>
          </button>
        </div>

        {/* Advanced Row */}
        <div className="mt-8 pt-6 border-t border-gray-50 flex flex-wrap gap-6 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-400">Dormitórios:</span>
            {[1, 2, 3, '4+'].map(n => (
              <button key={n} className="w-10 h-10 rounded-lg border border-gray-100 text-sm font-medium hover:border-gold-500 hover:text-gold-500 transition-colors">
                {n}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 flex-grow">
            <span className="text-xs font-bold text-gray-400">Código:</span>
            <input type="text" placeholder="REF000" className="w-24 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-xs focus:outline-none" />
          </div>

          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2">
               <span className="text-xs font-bold text-gray-400">Ordenar:</span>
               <select className="text-xs bg-transparent border-none font-bold text-luxury-dark focus:outline-none">
                 <option>Mais recentes</option>
                 <option>Menor preço</option>
                 <option>Maior preço</option>
               </select>
             </div>
             <button className="text-luxury-green flex items-center space-x-2 text-xs font-bold hover:text-gold-600">
               <Filter size={14} />
               <span>Mais Filtros</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
