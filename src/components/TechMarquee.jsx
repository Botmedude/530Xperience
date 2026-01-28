import React from 'react';
import { motion } from 'framer-motion';
import './TechMarquee.css';

const techStack = [
    "REACT", "NEXT.JS", "PYTHON", "AWS", "DOCKER", "KUBERNETES", "MAKE", "OPENAI",
    "REACT", "NEXT.JS", "PYTHON", "AWS", "DOCKER", "KUBERNETES", "MAKE", "OPENAI"
];

const TechMarquee = () => {
    return (
        <section className="tech-marquee-outer">
            <motion.div
                className="framer-marquee"
                animate={{ x: [0, -1000] }} // Adjust speed dynamically if needed, loop is visual
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >
                {techStack.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <span>//</span> {tech}
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechMarquee;
