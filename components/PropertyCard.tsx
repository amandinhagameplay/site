
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Car, Maximize2, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-luxury-green/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {property.businessType}
          </span>
          {property.isFeatured && (
            <span className="bg-gold-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Destaque
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4">
           <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl text-luxury-green shadow-lg">
             <Maximize2 size={16} />
           </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 text-gold-600 mb-2">
          <MapPin size={14} />
          <span className="text-xs font-bold uppercase tracking-tight">
            {property.location.neighborhood}, {property.location.city}
          </span>
        </div>
        
        <h3 className="text-lg font-serif font-bold text-luxury-dark mb-4 leading-snug group-hover:text-gold-600 transition-colors">
          {property.title}
        </h3>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center py-2 bg-gray-50 rounded-xl">
            <Bed size={16} className="text-luxury-green mb-1" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">{property.features.bedrooms} Dorms</span>
          </div>
          <div className="flex flex-col items-center py-2 bg-gray-50 rounded-xl">
            <Bath size={16} className="text-luxury-green mb-1" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">{property.features.bathrooms} Banheiros</span>
          </div>
          <div className="flex flex-col items-center py-2 bg-gray-50 rounded-xl">
            <Car size={16} className="text-luxury-green mb-1" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">{property.features.parkingSpots} Vagas</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Valor do Imóvel</span>
            <span className="text-xl font-bold text-luxury-green">{formattedPrice}</span>
          </div>
          <Link
            to={`/imovel/${property.id}`}
            className="bg-luxury-dark hover:bg-gold-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all transform active:scale-95"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
