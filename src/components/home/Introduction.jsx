import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import top from "../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-02.jpg";
import down from "../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-03.jpg";
import './Introduction.css';

const Sample = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const observerRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = observerRef.current.querySelectorAll('.sample-animate');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="sample-section" ref={observerRef}>
            <div className="sample-container">
                <div className="sample-grid">
                    
                    {/* Left Side: Images */}
                    <div className="sample-image-col sample-animate fade-in-left">
                        <div className="sample-main-img-wrap">
                            <img 
                                src={top} 
                                alt="Elegant tailor" 
                                className="sample-main-img"
                            />
                        </div>
                        <div className="sample-small-img-wrap">
                            <img 
                                src={down} 
                                alt="Evening wear" 
                                className="sample-small-img"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="sample-content-col sample-animate fade-in-right">
                        <span className="sample-subtitle">OUR STORY</span>
                        <h2 className="sample-title">Tailor-made elegance<br/>that inspires</h2>
                        <div className="sample-divider"></div>
                        
                        <p className="sample-paragraph">
                            Are you looking for an exclusive, high-quality, custom-made 
                            garment perfectly tailored to you? Then you've come to the right 
                            place. The world of fashion is my great passion; it all started over 
                            ten years ago, and since then I've been creating a unique 
                            shopping experience that will delight you. I now specialize in 
                            creating individual, bespoke clothing. Our motto is: "Clothes make 
                            the person," and this is exactly what my work reflects. I place 
                            great importance on incorporating your personality and style 
                            into every single garment...
                        </p>

                        <button onClick={toggleExpand} className="sample-read-more">
                            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="sample-expanded-content"
                                >
                                    <p className="sample-paragraph sample-extra-text">
                                        My goal is not only to offer you an unforgettable shopping experience, but also to create bespoke garments that perfectly reflect your individual vision. Your wishes and ideas play a central role in the entire creation process. To ensure you feel comfortable and supported from the very beginning, I will guide you with expert and professional advice and meticulous attention to detail every step of the way, from the careful selection of high-quality fabrics and the individual design of cuts and color nuances to the final fitting. Let's create your perfect garment together – bespoke, high-quality, and uniquely tailored to you. Your vision is my responsibility.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Sample;
