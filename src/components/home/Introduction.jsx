import React from 'react';
import { motion } from 'framer-motion';
import './Introduction.css';

const Introduction = () => {
    return (
        <section id="heritage" className="introduction section-padding">
            <div className="premium-container">
                <div className="intro-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="intro-image-container"
                    >
                        <div className="image-wrapper main-img">
                            <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800" alt="Tailor at work" />
                        </div>
                        <div className="image-wrapper small-img">
                            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600" alt="Fabric detail" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="intro-text"
                    >
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">Tailor-made elegance that inspires</h2>
                        <div className="divider"></div>
                        <p className="intro-paragraph">
                            Are you looking for an exclusive, high-quality custom-made product that is
                            perfectly tailored to you? Then you've come to the right place. The world
                            of fashion is our great passion, it all started over ten years ago, and
                            since then I have been providing a unique shopping experience that will
                            delight you.
                        </p>
                        <p className="intro-paragraph">
                            In the meantime, I have specialized in the production of individual
                            made-to-measure clothing. Our motto: "Clothes make the man" and that's
                            exactly what is reflected in my work. I attach great importance to
                            letting your personality and style flow into every single piece of clothing.
                        </p>
                        <a href="#process" className="read-more">Learn about our history →</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
