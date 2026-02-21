import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductGrid from './components/ProductGrid';
import DropAccess from './components/DropAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Manifesto />
      <ProductGrid />
      <DropAccess />
      <Footer />
    </div>
  );
}

export default App;
