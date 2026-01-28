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
                    NO ADIVINAMOS.<br />CALCULAMOS.
                </motion.h2>

                <motion.p
                    className="manifesto-body"
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Muchas agencias venden humo y diseños bonitos. Nosotros vendemos Lógica, Estabilidad y Seguridad. FiveThirty Systems nació para traer la ingeniería de software real a las PyMEs. Nuestro código es un activo, no un gasto.
                </motion.p>
            </div>
            <ScrollIndicator theme="dark" />
        </section>
    );
};

export default Manifesto;
