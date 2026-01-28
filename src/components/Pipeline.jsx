import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import './Pipeline.css';

const steps = [
    {
        id: '01',
        title: 'DIAGNÓSTICO',
        desc: 'Auditoría de seguridad y análisis de cuellos de botella.'
    },
    {
        id: '02',
        title: 'ARQUITECTURA',
        desc: "Diseño de sistemas escalables. Nada de 'Hard-coding'."
    },
    {
        id: '03',
        title: 'DESPLIEGUE',
        desc: 'Implementación ágil con CI/CD y pruebas automatizadas.'
    },
    {
        id: '04',
        title: 'HARDENING',
        desc: 'Blindaje final. Pruebas de penetración y monitoreo.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Pipeline = () => {
    return (
        <section className="pipeline-outer">
            <div className="pipeline-inner">
                <motion.h2
                    className="pipeline-header"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    EXECUTION_PIPELINE
                </motion.h2>

                <motion.div
                    className="pipeline-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-150px" }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            className="pipeline-step"
                            variants={itemVariants}
                        >
                            <span className="step-number">[{step.id}]</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <ScrollIndicator theme="light" />
        </section>
    );
};

export default Pipeline;
