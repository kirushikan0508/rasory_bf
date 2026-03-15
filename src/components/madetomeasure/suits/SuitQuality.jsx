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
                <h2 className="suit-quality-title">Qualität, die ihre Zeit braucht</h2>
                <p className="suit-quality-desc">
                    Die Produktion dauert in der Regel bis zu vier Wochen. Bei Bedarf biete ich auch einen Express-Service innerhalb von drei Wochen an. Qualität und Präzision stehen für mich an erster Stelle, um sicherzustellen, dass Sie ein einzigartiges Kleidungsstück erhalten.
                </p>
            </div>
        </section>
    );
};

export default SuitQuality;
