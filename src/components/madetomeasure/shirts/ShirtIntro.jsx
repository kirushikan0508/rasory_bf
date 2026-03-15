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
                <h1 className="shirt-intro-title">Perfektion, die sich wie eine zweite Haut anfühlt</h1>
                <p className="shirt-intro-text">
                    Ihre individuelle Passform steht für mich an erster Stelle. Mein Ziel ist es, dass Ihr massgeschneidertes Hemd sitzt wie eine zweite Haut – bequem und perfekt zugeschnitten. Gemeinsam wählen wir die passende Kragenform und Manschetten, um Ihren persönlichen Geschmack zu unterstreichen. Dabei achte ich akribisch auf Qualität und Details, sodass jedes Hemd zu einem Unikat wird.
                </p>
            </div>
        </section>
    );
};

export default ShirtIntro;
