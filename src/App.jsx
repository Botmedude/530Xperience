import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductGrid from './components/ProductGrid';
import CategoryBanner from './components/CategoryBanner';
import CategoryLinks from './components/CategoryLinks';
import DropAccess from './components/DropAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Hero />
        <ProductGrid />
        <CategoryBanner />
        <CategoryLinks />
        <Manifesto />
        <DropAccess />
        <Footer />
      </main>
    </div>
  );
}

export default App;
