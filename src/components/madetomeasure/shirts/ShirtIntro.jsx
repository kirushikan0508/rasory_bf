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
                <h1 className="shirt-intro-title">Perfektion, die sich wie ein zweite Haut anfühlt</h1>
                <p className="shirt-intro-text">
                    Bei mir steht Ihre individuelle Passform im Mittelpunkt. Mein Ziel ist es, dass Ihr maßgeschneidertes Hemd sich an Sie anpasst wie eine zweite Haut, komfortabel und perfekt sitzend. Gemeinsam wählen wir die passende Kragenform und die passenden Manschetten aus, um Ihren persönlichen Stil zu unterstreichen. Dabei achte ich auf höchste Qualität und sorgfältige Details, damit jedes Hemd ein Unikat wird..
                </p>
            </div>
        </section>
    );
};

export default ShirtIntro;
