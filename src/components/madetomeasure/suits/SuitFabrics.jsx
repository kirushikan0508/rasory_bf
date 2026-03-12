import React, { useEffect, useRef } from 'react';
import './SuitFabrics.css';

const SuitFabrics = () => {
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
        <section className="suit-fabrics-section" ref={sectionRef}>
            <div className="suit-fabrics-container">
                <h2 className="suit-fabrics-title">Premium Fabrics</h2>
                <div className="suit-fabrics-brands">
                    <div className="suit-brand-item">BRISBANE MOSS</div>
                    <div className="suit-brand-item">GUABELLO</div>
                    <div className="suit-brand-item">VITALE BARBERIS CANONICO</div>
                </div>
            </div>
        </section>
    );
};

export default SuitFabrics;
