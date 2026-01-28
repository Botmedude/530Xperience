import React from 'react';
import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = ({ theme = 'light', label = null }) => {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={`scroll-indicator scroll-indicator--${theme}`}
            onClick={handleScroll}
            animate={{
                y: [0, 10, 0]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {label && <div className="scroll-label">{label}</div>}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                />
            </svg>
        </motion.div>
    );
};

export default ScrollIndicator;
