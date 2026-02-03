import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

interface PropertyCarouselProps {
  properties: Property[];
}

export default function PropertyCarousel({ properties }: PropertyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 4;
  const totalSlides = Math.max(1, Math.ceil(properties.length / itemsPerView));

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const visibleProperties = properties.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-8">
        {visibleProperties.map(property => (
          <div key={property.id} className="w-full md:w-1/2 lg:w-1/4">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
          <button
            onClick={goToPrevious}
            className="absolute -left-6 pointer-events-auto p-2 rounded-full bg-white border border-gray-200 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all shadow-md"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-6 pointer-events-auto p-2 rounded-full bg-white border border-gray-200 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all shadow-md"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gold-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
