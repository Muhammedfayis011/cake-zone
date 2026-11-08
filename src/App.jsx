import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeView from './components/HomeView.jsx';
import HampersView from './components/HampersView.jsx';
import OccasionsView from './components/OccasionsView.jsx';
import CakesView from './components/CakesView.jsx';
import FlowersView from './components/FlowersView.jsx';
import ChocolatesView from './components/ChocolatesView.jsx';
import ComboGiftsView from './components/ComboGiftsView.jsx';
import AboutContactView from './components/AboutContactView.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import ProductModal from './components/ProductModal.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeOccasion, setActiveOccasion] = useState(null);

  const handleSelectProduct = (product) => setSelectedProduct(product);

  const handleSelectOccasion = (occ) => {
    setActiveOccasion(occ);
    setCurrentView('occasions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cakezone-app">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main>
        {currentView === 'home' && (
          <HomeView
            setCurrentView={setCurrentView}
            onSelectProduct={handleSelectProduct}
            onSelectOccasion={handleSelectOccasion}
          />
        )}
        {currentView === 'cakes' && (
          <CakesView onSelectProduct={handleSelectProduct} />
        )}
        {currentView === 'flowers' && (
          <FlowersView />
        )}
        {currentView === 'chocolates' && (
          <ChocolatesView />
        )}
        {currentView === 'combos' && (
          <ComboGiftsView />
        )}
        {currentView === 'hampers' && (
          <HampersView onSelectProduct={handleSelectProduct} />
        )}
        {currentView === 'occasions' && (
          <OccasionsView
            activeOccasion={activeOccasion}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {currentView === 'about' && (
          <AboutContactView />
        )}
      </main>

      <Footer setCurrentView={setCurrentView} />
      <WhatsAppFloat />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
