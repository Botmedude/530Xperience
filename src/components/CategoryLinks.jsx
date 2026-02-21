import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CategoryLinks.css';

const CATEGORIES = [
    {
        id: 'man',
        label: 'MAN',
        href: '#man',
        image: '/images/cat_man_1771716716009.png',
    },
    {
        id: 'woman',
        label: 'WOMAN',
        href: '#woman',
        image: '/images/cat_woman_1771716730937.png',
    },
    {
        id: 'kids',
        label: 'ARCHIVE',
        href: '#archive',
        image: '/images/cat_archive_1771716742700.png',
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
