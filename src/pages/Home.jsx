import React from 'react';
import BrandIntro from '../components/BrandIntro';
import CategoryLinks from '../components/CategoryLinks';
import Manifesto from '../components/Manifesto';
import ProductGrid from '../components/ProductGrid';
import DropAccess from '../components/DropAccess';


const Home = () => {
    return (
        <main className="app-main">
            <BrandIntro />
            <CategoryLinks />
            <Manifesto />
            <ProductGrid />
            <DropAccess />

        </main>
    );
};

export default Home;
