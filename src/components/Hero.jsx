import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// ── Animation Variants ──────────────────────────
const panelVariant = {
    hidden: (direction) => ({
        x: direction === 'left' ? '-100%' : '100%',
    }),
    visible: {
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const contentFade = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Hero = () => {
    const [hovered, setHovered] = useState(null); // 'mens' | 'womens' | null

    return (
        <section className="hero-split">
            {/* ── FLOATING LOGO ── */}
            <div className="hero-brand-float">
                <span className="hero-brand-mark">53ØX</span>
            </div>

            {/* ── LEFT PANEL: MENSWEAR ── */}
            <motion.div
                className={`hero-panel hero-panel--mens ${hovered === 'mens' ? 'is-active' : ''} ${hovered === 'womens' ? 'is-inactive' : ''}`}
                custom="left"
                variants={panelVariant}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setHovered('mens')}
                onMouseLeave={() => setHovered(null)}
            >
                <div className="hero-panel__overlay" />
                <div className="hero-panel__content">
                    <motion.span
                        className="hero-panel__label"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.0}
                    >
                        MENSWEAR
                    </motion.span>
                    <motion.span
                        className="hero-panel__sub"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.2}
                    >
                        SS26 // COLLECTION
                    </motion.span>
                    <motion.a
                        href="#products"
                        className="hero-panel__cta"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.4}
                    >
                        [ SHOP_COLLECTION ]
                    </motion.a>
                </div>
            </motion.div>

            {/* ── RIGHT PANEL: WOMENSWEAR ── */}
            <motion.div
                className={`hero-panel hero-panel--womens ${hovered === 'womens' ? 'is-active' : ''} ${hovered === 'mens' ? 'is-inactive' : ''}`}
                custom="right"
                variants={panelVariant}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setHovered('womens')}
                onMouseLeave={() => setHovered(null)}
            >
                <div className="hero-panel__overlay" />
                <div className="hero-panel__content">
                    <motion.span
                        className="hero-panel__label"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.0}
                    >
                        WOMENSWEAR
                    </motion.span>
                    <motion.span
                        className="hero-panel__sub"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.2}
                    >
                        SS26 // COLLECTION
                    </motion.span>
                    <motion.a
                        href="#products"
                        className="hero-panel__cta"
                        variants={contentFade}
                        initial="hidden"
                        animate="visible"
                        custom={1.4}
                    >
                        [ SHOP_COLLECTION ]
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
