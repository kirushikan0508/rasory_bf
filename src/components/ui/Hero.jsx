import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ 
    title, 
    subtitle, 
    description, 
    videoSrc, 
    imageSrc, 
    showActions = true, 
    primaryBtnText = "Book Appointment", 
    secondaryBtnText = "Explore Collection",
    onPrimaryClick,
    onSecondaryClick
}) => {
    return (
        <section className="ui-hero">
            <div className="hero-background-container">
                {videoSrc ? (
                    <video
                        className="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={imageSrc}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="hero-image"
                    />
                )}
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content premium-container">
                {subtitle && (
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-subtitle-top"
                    >
                        {subtitle}
                    </motion.span>
                )}
                
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-title"
                >
                    {title || "Tailored to Your Presence"}
                </motion.h1>

                {description && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="hero-description"
                    >
                        {description}
                    </motion.p>
                )}

                {showActions && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hero-actions"
                    >
                        <button className="btn-primary glow-effect" onClick={onPrimaryClick}>
                            {primaryBtnText}
                        </button>
                        <button className="btn-secondary glow-effect" onClick={onSecondaryClick}>
                            {secondaryBtnText}
                        </button>
                    </motion.div>
                )}
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
