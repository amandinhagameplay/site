
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import PropertyCard from './components/PropertyCard';
import PropertyCarousel from './components/PropertyCarousel';
import PropertyDetail from './components/PropertyDetail';
import SectionInstitutional from './components/SectionInstitutional';
import Differentiators from './components/Differentiators';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { PROPERTIES } from './constants';
import { BusinessType } from './types';

function App() {
  const propertiesToBuy = PROPERTIES.filter(p => p.businessType === BusinessType.COMPRAR);
  const propertiesToRent = PROPERTIES.filter(p => p.businessType === BusinessType.ALUGAR);

  return (
    <Router>
      <Routes>
        <Route path="/imovel/:id" element={<PropertyDetail />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              
              <main>
                <Hero />
                
                <SearchFilter />

                {/* Featured Comprar */}
                <section id="comprar" className="py-24 bg-luxury-beige">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">Imóveis em Destaque para Comprar</h2>
                        <p className="text-gray-500">Imóveis selecionados com potencial de valorização e exclusividade.</p>
                      </div>
                      <button className="hidden md:block bg-white border border-gray-100 px-6 py-3 rounded-full text-sm font-bold hover:bg-gold-500 hover:text-white transition-all shadow-sm">
                        Ver todos os imóveis
                      </button>
                    </div>

                    <PropertyCarousel properties={propertiesToBuy} />
                  </div>
                </section>

                {/* Featured Alugar */}
                <section id="alugar" className="py-24 bg-white">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">Imóveis em Destaque para Alugar</h2>
                        <p className="text-gray-500">Residências prontas para morar com todo o conforto que você merece.</p>
                      </div>
                      <button className="hidden md:block bg-luxury-beige px-6 py-3 rounded-full text-sm font-bold hover:bg-gold-500 hover:text-white transition-all">
                        Ver todas as opções
                      </button>
                    </div>

                    <PropertyCarousel properties={propertiesToRent} />
                  </div>
                </section>

                <SectionInstitutional />

                <Differentiators />

                <Services />

                <Testimonials />

                <FinalCTA />
              </main>

              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
