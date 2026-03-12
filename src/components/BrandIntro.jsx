import React from 'react';
import { motion } from 'framer-motion';
import './BrandIntro.css';

const BrandIntro = () => {
    return (
        <motion.section
            className="brand-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Columna izquierda — texto */}
            <div className="brand-intro__text">
                <span className="brand-intro__label">
                    {'>'} 530 SYSTEMS // EST. CIUDAD DE MÉXICO
                </span>

                <h1 className="brand-intro__title">
                    ROPA SIN<br />FECHA DE<br />CADUCIDAD.
                </h1>

                <p className="brand-intro__body">
                    No seguimos temporadas.<br />
                    Hacemos prendas que duran<br />
                    más que las tendencias.
                </p>

                <a href="/category/menswear" className="brand-intro__cta">
                    [ VER COLECCIÓN ]
                </a>
            </div>

            {/* Columna derecha — imagen editorial */}
            <div className="brand-intro__visual">
                <div className="brand-intro__image-wrap">
                    <img
                        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85"
                        alt="530 Systems"
                        className="brand-intro__image"
                    />
                </div>
                <span className="brand-intro__visual-tag">
                    TEMPORADA_01
                </span>
            </div>
        </motion.section>
    );
};

export default BrandIntro;
