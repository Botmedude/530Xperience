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
                    NO SEGUIMOS<br />TEMPORADAS.<br />HACEMOS<br />PRENDAS.
                </motion.h2>

                <motion.p
                    className="manifesto-body"
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    530 Systems nació en México con una idea simple:
                    que la ropa bien cortada no tiene que costar una fortuna
                    ni verse como todas las demás.<br />
                    Brutalismo en la forma. Cuidado en el detalle.<br />
                    Sin logos grandes. Sin gritos innecesarios.
                </motion.p>
            </div>
        </section>
    );
};

export default Manifesto;
