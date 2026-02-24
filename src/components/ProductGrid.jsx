import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getProductsByBrand } from '../data/products';
import './ProductGrid.css';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="product-card"
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={`/product/${product.id}`} className="product-card__link-overlay" aria-label={`View ${product.title}`} />
            <div className="product-card__image-wrap">
                <img
                    src={isHovered ? product.images[1] : product.images[0]}
                    alt={product.title}
                    className="product-card__img"
                    loading="lazy"
                />
                <div className={`product-card__overlay ${isHovered ? 'is-visible' : ''}`}>
                    <button
                        className="product-card__cart-btn"
                        onClick={(e) => {
                            e.preventDefault(); // Prevenir navegación
                            alert(`ADDED TO CART -> ${product.title}`);
                        }}
                    >
                        [ ADD_TO_CART ]
                    </button>
                </div>
            </div>
            <div className="product-card__info">
                <span className="product-card__title">{product.title}</span>
                <span className="product-card__price">${product.price.toFixed(2)}</span>
            </div>
        </motion.div>
    );
};

const ProductGrid = ({ products: externalProducts, title, subtitle }) => {
    const products = externalProducts || getProductsByBrand('core');
    const headerTitle = title || 'NEW_ARRIVALS';
    const headerSubtitle = subtitle || '> DROP_01 // CORE_COLLECTION';

    return (
        <section className="products-outer" id="products">
            <div className="products-inner">
                <div className="products-header-block">
                    <motion.h2
                        className="products-header"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {headerTitle}
                    </motion.h2>
                    <span className="products-subheader">{headerSubtitle}</span>
                </div>

                <motion.div
                    className="products-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;
