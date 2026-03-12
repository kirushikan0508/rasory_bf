import React, { useEffect, useRef } from 'react';
import './ShirtIntro.css';

const ShirtIntro = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="shirt-intro-section" ref={sectionRef}>
            <div className="shirt-intro-container">
                <h1 className="shirt-intro-title">Perfection that feels like a second skin</h1>
                <p className="shirt-intro-text">
                    Your individual fit is my top priority. My goal is for your bespoke shirt to fit you like a second skin – comfortable and perfectly tailored. Together, we'll choose the right collar style and cuffs to accentuate your personal taste. I pay meticulous attention to quality and detail, ensuring that every shirt is unique.
                </p>
            </div>
        </section>
    );
};

export default ShirtIntro;
