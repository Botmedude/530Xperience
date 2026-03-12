import React from 'react';
import { motion } from 'framer-motion';
import './CategoryLinks.css';

const CATEGORIES = [
    {
        id: 'man',
        tag: '> HOMBRE',
        label: 'COLECCIÓN',
        cta: '[ IR A TIENDA ]',
        href: '/category/menswear',
        image: '/images/cat_man_1771716716009.png',
    },
    {
        id: 'woman',
        tag: '> MUJER',
        label: 'COLECCIÓN',
        cta: '[ IR A TIENDA ]',
        href: '/category/womenswear',
        image: '/images/cat_woman_1771716730937.png',
    },
];

const CategoryLinks = () => {
    return (
        <section className="category-grid" id="categories">
            {CATEGORIES.map((cat, i) => (
                <motion.a
                    key={cat.id}
                    href={cat.href}
                    className="category-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src={cat.image} alt={cat.tag} />
                    <div className="category-overlay" />
                    <div className="category-content">
                        <span className="category-tag">{cat.tag}</span>
                        <span className="category-label">{cat.label}</span>
                        <span className="category-cta">{cat.cta}</span>
                    </div>
                </motion.a>
            ))}
        </section>
    );
};

export default CategoryLinks;
