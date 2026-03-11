import React from 'react';
import { motion } from 'framer-motion';
import './MaterialsSection.css';

const MaterialsSection = () => {
    return (
        <section className="materials-section section-padding">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-label">Excellence</span>
                    <h2 className="section-title">Luxury that can be touched</h2>
                    <p className="section-description">Quality you can feel, for an unforgettable feeling of exclusivity.</p>
                </motion.div>

                <div className="materials-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="material-item item-1"
                    >
                        <img src="https://images.unsplash.com/photo-1718184021018-d2158af6b321?auto=format&fit=crop&q=80&w=800" alt="Premium Fabrics" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="material-item item-2"
                    >
                        <img src="https://images.unsplash.com/photo-1718184021018-d2158af6b321?auto=format&fit=crop&q=80&w=800" alt="Fabric Swatches" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="material-item item-3"
                    >
                        <img src="https://images.unsplash.com/photo-1718184021018-d2158af6b321?auto=format&fit=crop&q=80&w=1200" alt="Tailoring Tools" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
