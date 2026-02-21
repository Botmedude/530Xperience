import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CategoryLinks.css';

const CATEGORIES = [
    {
        id: 'man',
        label: 'MAN',
        href: '#man',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    },
    {
        id: 'woman',
        label: 'WOMAN',
        href: '#woman',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
    },
    {
        id: 'kids',
        label: 'KIDS',
        href: '#kids',
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900&q=80',
    },
];

const CategoryLinks = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="catlinks-outer" id="categories">
            <div className="catlinks-grid">
                {CATEGORIES.map((cat, i) => (
                    <motion.a
                        key={cat.id}
                        href={cat.href}
                        className={`catlinks-card ${hovered === cat.id ? 'is-active' : ''} ${hovered && hovered !== cat.id ? 'is-dimmed' : ''}`}
                        onMouseEnter={() => setHovered(cat.id)}
                        onMouseLeave={() => setHovered(null)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div
                            className="catlinks-card__img"
                            style={{ backgroundImage: `url(${cat.image})` }}
                        />
                        <div className="catlinks-card__overlay" />
                        <div className="catlinks-card__content">
                            <span className="catlinks-card__label">{cat.label}</span>
                            <span className="catlinks-card__cta">[ SEE_DETAILS ]</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default CategoryLinks;
