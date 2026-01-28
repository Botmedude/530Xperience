import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import ConsoleForm from './ConsoleForm';
import ServiceDetail from './ServiceDetail';
import ScrollIndicator from './ScrollIndicator';
import { servicesData } from '../data/services';
import logoHero from '../assets/logo-hero.png';
import './Hero.css';

// Animation Variants - Premium Entrance
const panelLeftVariant = {
    hidden: { x: '-100%' },
    visible: {
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] // Premium bezier
        }
    }
};

const panelRightVariant = {
    hidden: { x: '100%' },
    visible: {
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const contentStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

const ModulesGrid = ({ setMode }) => {
    // Map internal IDs to modes
    const mapIdToMode = {
        '01': 'detail_web',
        '02': 'detail_auto',
        '03': 'detail_sec'
    };

    return (
        <div className="modules-grid-container">
            <div className="modules-header">SYS.MODULES // CORE_PILLARS</div>
            <div className="modules-grid">
                {Object.values(servicesData).map((service) => (
                    <div
                        key={service.id}
                        className="module-item"
                        onClick={() => setMode(mapIdToMode[service.id])}
                    >
                        <div className="module-top">
                            <span className="module-id">{service.id}</span>
                            <span className="module-title">{service.title}</span>
                        </div>
                        <div className="module-desc">{service.shortDesc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Hero = ({ mode, setMode }) => {
    const renderRightPanel = () => {
        switch (mode) {
            case 'contact':
                return <ConsoleForm onClose={() => setMode('dashboard')} />;
            case 'detail_web':
                return <ServiceDetail service={servicesData.detail_web} onBack={() => setMode('dashboard')} onContact={() => setMode('contact')} />;
            case 'detail_auto':
                return <ServiceDetail service={servicesData.detail_auto} onBack={() => setMode('dashboard')} onContact={() => setMode('contact')} />;
            case 'detail_sec':
                return <ServiceDetail service={servicesData.detail_sec} onBack={() => setMode('dashboard')} onContact={() => setMode('contact')} />;
            default: // dashboard
                return (
                    <div className="tech-container">
                        <Terminal />
                        <ModulesGrid setMode={setMode} />
                    </div>
                );
        }
    };

    return (
        <div className="split-layout">
            {/* LEFT PANEL - WHITE with Slide from Left */}
            <motion.div
                className="panel left-panel"
                variants={panelLeftVariant}
                initial="hidden"
                animate="visible"
            >
                <div className="branding-container">
                    <motion.img
                        src={logoHero}
                        alt="FiveThirty Systems"
                        className="hero-logo-img"
                        variants={contentStagger}
                        initial="hidden"
                        animate="visible"
                        custom={0.8}
                    />

                    <motion.div
                        className="separator"
                        variants={contentStagger}
                        initial="hidden"
                        animate="visible"
                        custom={1.0}
                    />

                    <motion.h2
                        className="sub-title"
                        variants={contentStagger}
                        initial="hidden"
                        animate="visible"
                        custom={1.0}
                    >
                        INGENIERÍA // SEGURIDAD // AUTOMATIZACIÓN
                    </motion.h2>

                    <motion.button
                        className="cta-button"
                        onClick={() => setMode('contact')}
                        variants={contentStagger}
                        initial="hidden"
                        animate="visible"
                        custom={1.2}
                    >
                        [ INICIAR_PROTOCOLO ]
                    </motion.button>
                </div>
            </motion.div>

            {/* RIGHT PANEL - BLACK with Slide from Right */}
            <motion.div
                className="panel right-panel"
                variants={panelRightVariant}
                initial="hidden"
                animate="visible"
            >
                {renderRightPanel()}
            </motion.div>

            {/* CENTERED SCROLL INDICATOR - X-Ray Effect */}
            {mode === 'dashboard' && (
                <ScrollIndicator theme="difference" label="SCROLL" />
            )}
        </div>
    );
};

export default Hero;
