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
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {'>'} EDITORIAL // OCCASION_WEAR
                </motion.span>

                <motion.h2
                    className="catbanner-headline"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    WEAR TO<br />OCCASION
                </motion.h2>

                <motion.p
                    className="catbanner-sub"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Precision tailoring for every milestone.
                </motion.p>

                <motion.a
                    href="#products"
                    className="catbanner-cta"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    [ SEE_ALL ]
                </motion.a>
            </div>
        </section>
    );
};

export default CategoryBanner;
