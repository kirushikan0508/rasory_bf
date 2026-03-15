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
        <section className="section sample-section" ref={observerRef}>
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
                        <span className="sample-subtitle">UNSERE GESCHICHTE</span>
                        <h2 className="sample-title">Massgeschneiderte Eleganz,<br/>die begeistert</h2>
                        <div className="sample-divider"></div>
                        
                        <p className="sample-paragraph">
                            Sie suchen nach einer exklusiven, hochwertigen Massanfertigung, die perfekt auf Sie abgestimmt ist? Dann sind Sie bei mir genau richtig. Die Welt der Mode ist meine grosse Leidenschaft, vor über zehn Jahren begann alles, und seitdem sorge ich für ein einzigartiges Einkaufserlebnis, das Sie begeistern wird. Inzwischen habe ich mich auf die Anfertigung individueller Masskleidungen spezialisiert. Unser Motto lautet: „Kleidung machen Leute“ und genau das spiegelt sich in meiner Arbeit wider. Ich lege grossen Wert darauf, Ihre Persönlichkeit und Ihren Stil in jedes einzelne Kleidungsstück einfliessen zu lassen…
                        </p>

                        <button onClick={toggleExpand} className="sample-read-more">
                            {isExpanded ? 'Weniger anzeigen ↑' : 'Mehr lesen ↓'}
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
                                        Mein Ziel ist es nicht nur, Ihnen ein unvergessliches Kauferlebnis zu bieten, sondern auch, Masskleidungen zu kreieren, die Ihre individuellen Vorstellungen perfekt widerspiegeln. Dabei spielen Ihre Wünsche und
                                        Ideen eine zentrale Rolle im gesamten Entstehungsprozess. Damit Sie sich von Anfang an gut aufgehoben fühlen und nicht überfordert sind, stehe ich Ihnen mit meiner fachkundigen sowie professionellen Beratung und Präzision bei jedem Schritt zur Seite von der sorgfältigen Auswahl hochwertiger Stoffe über die individuelle Gestaltung von Schnitten und Farbnuancen bis hin zum letzten Fitting. Lassen Sie uns gemeinsam Ihr perfektes Kleidungsstück kreieren massgeschneidert, hochwertig und einzigartig auf Sie abgestimmt. Ihre Vorstellung ist meine Verantwortung. 
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
