import React from 'react';
import { motion } from 'framer-motion';
import './QuoteSection.css';

const QuoteSection = () => {
    return (
        <section className="quote-section">
            <div className="quote-parallax-bg"></div>
            <div className="quote-overlay"></div>

            <div className="premium-container quote-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="quote-box"
                >
                    <span className="quote-mark">“</span>
                    <h2 className="quote-text">
                        Der Unterschied zwischen gewöhnlich und außergewöhnlich liegt im Detail
                    </h2>
                    <p className="quote-author">— The Difference Between Ordinary & Extraordinary Lies in the Detail</p>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
