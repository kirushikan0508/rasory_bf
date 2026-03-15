import React, { useEffect, useRef } from 'react';
import './SuitQuality.css';

const SuitQuality = () => {
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
        <section className="suit-quality-section">
            <div className="suit-quality-container" ref={sectionRef}>
                <h2 className="suit-quality-title">Qualität, die ihre Zeit benötigt</h2>
                <p className="suit-quality-desc">
                    Die Anfertigung dauert in der in der Regel bis zu vier Wochen. Bei Bedarf biete ich auch eine Express-Anfertigung innerhalb von drei Wochen an. Qualität und Präzision stehen bei mir an erster Stelle, damit Sie ein einzigartiges Kleidungsstück erhalten.
                </p>
            </div>
        </section>
    );
};

export default SuitQuality;
