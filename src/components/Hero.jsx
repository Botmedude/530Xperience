import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    }),
};

const Hero = () => {
    return (
        <section className="hero-banner">
            {/* Background image */}
            <div className="hero-banner__bg" />

            {/* Dark overlay */}
            <div className="hero-banner__overlay" />

            {/* Content */}
            <div className="hero-banner__content">
                <motion.span
                    className="hero-banner__eyebrow"
                    variants={fadeUp}
                    custom={0.4}
                    initial="hidden"
                    animate="visible"
                >
                    {'>'} DROP_01 // SS26
                </motion.span>

                <motion.h1
                    className="hero-banner__headline"
                    variants={fadeUp}
                    custom={0.6}
                    initial="hidden"
                    animate="visible"
                >
                    ENGINEERED<br />GARMENTS
                </motion.h1>

                <motion.p
                    className="hero-banner__sub"
                    variants={fadeUp}
                    custom={0.8}
                    initial="hidden"
                    animate="visible"
                >
                    We build infrastructure you wear.<br />
                    Compiled logic. Engineered chaos. Zero compromise.
                </motion.p>

                <motion.div
                    className="hero-banner__ctas"
                    variants={fadeUp}
                    custom={1.0}
                    initial="hidden"
                    animate="visible"
                >
                    <a href="#products" className="hero-banner__cta hero-banner__cta--primary">
                        [ VIEW_COLLECTION ]
                    </a>
                    <a href="#man" className="hero-banner__cta hero-banner__cta--secondary">
                        [ SHOP_MENSWEAR ]
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
