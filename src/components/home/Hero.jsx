import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
                className="hero-background"
            ></motion.div>

            <div className="hero-overlay"></div>

            <div className="hero-content premium-container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-title"
                >
                    Tailored to Your <br />
                    <span className="gold-text">Presence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="hero-description"
                >
                    Elevate your personal style with bespoke craftsmanship.
                    Every stitch is a statement of power, elegance, and individuality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="hero-actions"
                >
                    <button className="btn-primary glow-effect">Book Appointment</button>
                    <button className="btn-secondary glow-effect">Explore Collection</button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="scroll-indicator"
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
