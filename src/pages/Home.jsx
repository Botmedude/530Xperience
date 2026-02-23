import React from 'react';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import ProductGrid from '../components/ProductGrid';
import CategoryBanner from '../components/CategoryBanner';
import CategoryLinks from '../components/CategoryLinks';
import DropAccess from '../components/DropAccess';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="app-main">
            <Hero />
            <ProductGrid />
            <CategoryBanner />
            <CategoryLinks />
            <Manifesto />
            <DropAccess />
            <Footer />
        </main>
    );
};

export default Home;
