import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imgtop from "../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-02.jpg"
import imgdown from "../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-03.jpg"
import './Introduction.css';

const Introduction = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

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
                            <img src={imgtop} alt="Tailor measuring client" />
                        </div>
                        <div className="image-wrapper small-img">
                            <img src={imgdown} alt="Bespoke suit on mannequin" />
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
                            Are you looking for an exclusive, high-quality, custom-made garment perfectly tailored to you?
                            Then you've come to the right place. The world of fashion is my great passion; it all started over
                            ten years ago, and since then I've been creating a unique shopping experience that will delight
                            you. I now specialize in creating individual, bespoke clothing. Our motto is: "Clothes make the
                            person," and this is exactly what my work reflects. I place great importance on incorporating your
                            personality and style into every single garment...
                        </p>

                        <div className="intro-actions">
                            <button onClick={toggleExpand} className="read-more-btn">
                                {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                            </button>
                        </div>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="expanded-content"
                                >
                                    <p className="intro-paragraph extra-text">
                                        My goal is not only to offer you an unforgettable shopping experience, but also to create bespoke garments that perfectly reflect your individual vision. Your wishes and ideas play a central role in the entire creation process. To ensure you feel comfortable and supported from the very beginning, I will guide you with expert and professional advice and meticulous attention to detail every step of the way, from the careful selection of high-quality fabrics and the individual design of cuts and color nuances to the final fitting. Let's create your perfect garment together – bespoke, high-quality, and uniquely tailored to you. Your vision is my responsibility.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
