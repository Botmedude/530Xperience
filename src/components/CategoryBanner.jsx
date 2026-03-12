import React from 'react';
import { motion } from 'framer-motion';
import './CategoryBanner.css';

const CategoryBanner = () => {
    return (
        <section className="catbanner-outer">
            <div className="catbanner-bg" />
            <div className="catbanner-overlay" />
            <div className="catbanner-content">
                <motion.span
                    className="catbanner-eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, ease: "linear" }}
                >
                    {'>'} TEMPORADA_01 // CIUDAD DE MÉXICO
                </motion.span>

                <motion.h2
                    className="catbanner-headline"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.1, ease: "linear" }}
                >
                    ENTRE LA<br />CALLE Y<br />EL SASTRE.
                </motion.h2>

                <motion.p
                    className="catbanner-sub"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.1, ease: "linear" }}
                >
                    Ropa que no pide permiso. Cortes que duran más que las tendencias.
                </motion.p>

                <motion.a
                    href="#products"
                    className="catbanner-cta"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    [ VER COLECCIÓN ]
                </motion.a>
            </div>
        </section>
    );
};

export default CategoryBanner;
