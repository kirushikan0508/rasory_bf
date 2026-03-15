import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background-container">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=2000"
                >
                    <source src="https://cdn.pixabay.com/video/2024/03/29/206029_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content premium-container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-title"
                >
                    Massgeschneidert für Ihre <br />
                    <span className="gold-text">Präsenz</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="hero-description"
                >
                    Unterstreichen Sie Ihren persönlichen Stil mit massgeschneiderter Handwerkskunst.
                    Jeder Stich ist ein Statement von Kraft, Eleganz und Individualität.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="hero-actions"
                >
                    <button className="btn-primary glow-effect">Termin vereinbaren</button>
                    <button className="btn-secondary glow-effect">Kollektion entdecken</button>
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
                <span>Scrollen</span>
            </motion.div>
        </section>
    );
};

export default Hero;
