import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Share2, Heart, MapPin, Bed, Bath, Maximize2, DollarSign } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { PROPERTIES } from '../constants';
import { BusinessType } from '../types';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-luxury-dark mb-4">Imóvel não encontrado</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-bold transition-all"
            >
              Voltar ao Início
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = [
    property.imageUrl,
    'https://picsum.photos/id/200/800/600',
    'https://picsum.photos/id/201/800/600',
    'https://picsum.photos/id/202/800/600',
    'https://picsum.photos/id/203/800/600',
    'https://picsum.photos/id/204/800/600',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const businessTypeName = property.businessType === BusinessType.COMPRAR ? 'Compra' : 'Aluguel';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-24 bg-luxury-beige">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gold-500 hover:text-gold-600 mb-8 font-semibold transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Voltar</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Images */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft size={24} className="text-luxury-dark" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight size={24} className="text-luxury-dark" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-gold-500'
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-luxury-dark mb-4">Gostou? Compartilhe!</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all"
                  >
                    <Share2 size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${property.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center text-white transition-all"
                  >
                    <Share2 size={20} />
                  </a>
                  <a
                    href={`https://wa.me/5519989789694?text=${property.title} ${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white transition-all"
                  >
                    <Share2 size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-6">
              {/* Title and Location */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h1 className="text-3xl font-serif text-luxury-dark mb-4">{property.title}</h1>
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-500 text-sm">{property.location.neighborhood}</p>
                    <p className="text-gray-700 font-semibold">{property.location.city} - SP</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gold-500 rounded-xl p-6 text-white shadow-md">
                <p className="text-sm opacity-90 mb-2">Valor do Imóvel</p>
                <h2 className="text-3xl font-bold mb-2">{formatPrice(property.price)}</h2>
                <p className="text-sm opacity-90">Para {businessTypeName}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
                <h3 className="text-lg font-bold text-luxury-dark mb-4">Características</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Bed className="text-gold-500" size={24} />
                    <div>
                      <p className="text-gray-500 text-sm">Dormitórios</p>
                      <p className="font-semibold text-luxury-dark">{property.features.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bath className="text-gold-500" size={24} />
                    <div>
                      <p className="text-gray-500 text-sm">Banheiros</p>
                      <p className="font-semibold text-luxury-dark">{property.features.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Maximize2 className="text-gold-500" size={24} />
                    <div>
                      <p className="text-gray-500 text-sm">Área</p>
                      <p className="font-semibold text-luxury-dark">{property.features.area}m²</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-gold-500" size={24} />
                    <div>
                      <p className="text-gray-500 text-sm">Vagas</p>
                      <p className="font-semibold text-luxury-dark">{property.features.parkingSpots}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                  Solicitar Informações
                </button>
                <button className="w-full bg-white border-2 border-gold-500 hover:bg-gold-50 text-gold-500 px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center space-x-2">
                  <Heart size={20} />
                  <span>Adicionar aos Favoritos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
