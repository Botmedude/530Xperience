import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import './Manifesto.css';

// Premium Slide-Up Reveal
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
                    We don't follow trends — we engineer garments. Every thread is selected, every cut is calculated, every piece is built to outlast the season it was born in. FiveThirty is not fashion. It's infrastructure you wear.
                </motion.p>
            </div>
            <ScrollIndicator theme="dark" />
        </section>
    );
};

export default Manifesto;
