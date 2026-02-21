import React from 'react';
import { motion } from 'framer-motion';
import './Manifesto.css';

const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Manifesto = () => {
    return (
        <section className="manifesto-outer">
            <div className="manifesto-inner">
                <motion.h2
                    className="manifesto-headline"
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    SEASON_01 //<br />RAW MATERIALS.<br />ZERO COMPROMISE.
                </motion.h2>

                <motion.p
                    className="manifesto-body"
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    We don't follow trends — we engineer garments. Every thread is rigorously tested, every seam is structurally defined, every pattern is built to outlast the season it was compiled in. FiveThirty is not just fashion. It's digital concrete you can wear.
                </motion.p>
            </div>
        </section>
    );
};

export default Manifesto;
