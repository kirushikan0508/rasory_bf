import React, { useEffect, useRef } from 'react';
import './AboutQuote.css';

const AboutQuote = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-quote-section">
            <div className="about-quote-container" ref={containerRef}>
                <div className="about-quote-image">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
                        alt="Gentleman in suit"
                    />
                </div>
                <div className="about-quote-text">
                    <blockquote>
                        "Because true individuality is not a mass-produced product."
                    </blockquote>
                    <cite>– Rasory</cite>
                </div>
            </div>
        </section>
    );
};

export default AboutQuote;
