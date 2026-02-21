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
                    {'>'} SS26 // SPRING_SUMMER
                </motion.span>

                <motion.h1
                    className="hero-banner__headline"
                    variants={fadeUp}
                    custom={0.6}
                    initial="hidden"
                    animate="visible"
                >
                    SPRING<br />COLLECTION
                </motion.h1>

                <motion.p
                    className="hero-banner__sub"
                    variants={fadeUp}
                    custom={0.8}
                    initial="hidden"
                    animate="visible"
                >
                    We don't follow trends — we engineer garments.<br />
                    Every thread selected. Every cut calculated.
                </motion.p>

                <motion.div
                    className="hero-banner__ctas"
                    variants={fadeUp}
                    custom={1.0}
                    initial="hidden"
                    animate="visible"
                >
                    <a href="#products" className="hero-banner__cta hero-banner__cta--primary">
                        [ SHOP_MAN ]
                    </a>
                    <a href="#products" className="hero-banner__cta hero-banner__cta--secondary">
                        [ SHOP_WOMAN ]
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
