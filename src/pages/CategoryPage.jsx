import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductsByCategory } from '../data/products';
import ProductGrid from '../components/ProductGrid';

import './CategoryPage.css';

const CATEGORY_MAP = {
    menswear: {
        dataKey: 'mens',
        title: 'MENSWEAR',
        subtitle: '> CORE_SYSTEMS // MODULE_01',
        gridTitle: 'ALL_PRODUCTS',
        gridSubtitle: '> MENSWEAR // CORE_COLLECTION',
    },
    womenswear: {
        dataKey: 'womens',
        title: 'WOMENSWEAR',
        subtitle: '> CORE_SYSTEMS // MODULE_02',
        gridTitle: 'ALL_PRODUCTS',
        gridSubtitle: '> WOMENSWEAR // CORE_COLLECTION',
    },
};

const FILTER_TYPES = [
    { key: 'all', label: 'ALL' },
    { key: 'tops', label: 'TOPS' },
    { key: 'bottoms', label: 'BOTTOMS' },
    { key: 'outerwear', label: 'OUTERWEAR' },
    { key: 'accessories', label: 'ACCESSORIES' },
];

const CategoryPage = () => {
    const { id } = useParams();
    const config = CATEGORY_MAP[id];
    const [activeFilter, setActiveFilter] = useState('all');

    /* Reset filter when switching between menswear/womenswear */
    useEffect(() => {
        setActiveFilter('all');
    }, [id]);

    /* Fallback for unknown categories */
    if (!config) {
        return (
            <div className="category-page">
                <div className="category-header">
                    <div className="category-header__inner">
                        <h1 className="category-header__title">404 // NOT_FOUND</h1>
                    </div>
                </div>

            </div>
        );
    }

    const allProducts = getProductsByCategory(config.dataKey);
    const filteredProducts = allProducts.filter((item) => {
        return activeFilter === 'all' || item.type === activeFilter;
    });

    /* Dynamic subtitle based on active filter */
    const gridSubtitle =
        activeFilter === 'all'
            ? config.gridSubtitle
            : `> ${config.title} // ${activeFilter.toUpperCase()}`;

    return (
        <div className="category-page">
            {/* ── Brutalist Category Header ── */}
            <motion.div
                className="category-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="category-header__inner">
                    <motion.span
                        className="category-header__label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {config.subtitle}
                    </motion.span>
                    <motion.h1
                        className="category-header__title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {config.title}
                    </motion.h1>
                    <motion.span
                        className="category-header__subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {filteredProducts.length} ITEMS LOADED // STATUS:{' '}
                        <span className="category-header__count">ACTIVE</span>
                    </motion.span>
                </div>
            </motion.div>

            {/* ── Layout: Filters & Grid ── */}
            <div className="category-layout">
                {/* Top Filters */}
                <div className="category-filters">
                    <span className="category-filters__label">// FILTER_BY:</span>
                    <nav className="category-filters__nav">
                        {FILTER_TYPES.map((filter) => (
                            <button
                                key={filter.key}
                                className={`category-filters__btn ${activeFilter === filter.key ? 'is-active' : ''}`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Product Grid */}
                <div className="category-content">
                    <ProductGrid
                        key={`${id}-${activeFilter}`}
                        products={filteredProducts}
                        title={activeFilter === 'all' ? config.gridTitle : activeFilter.toUpperCase()}
                        subtitle={gridSubtitle}
                    />
                </div>
            </div>


        </div>
    );
};

export default CategoryPage;
