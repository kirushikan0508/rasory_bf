import React, { useEffect, useRef } from 'react';
import './JacketIntro.css';

const JacketIntro = () => {
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
        <section className="jacket-intro-section" ref={sectionRef}>
            <div className="jacket-intro-container">
                <h1 className="jacket-intro-title">ihr individueller Stil im Fokus</h1>
                <p className="jacket-intro-text">
                    Bei mir steht die persönliche Gestaltung Ihres Sakkos im Mittelpunkt. Neben der Auswahl exquisiter Stoffe und präziser Schnitte lege ich besonderen Wert auf die Details. Die Wahl der Taschen, ob klassische Paspelierte Pattentaschen, die einen eleganten Business-Look vermitteln, oder sportlich offene aufgesetzte Taschen, ermöglicht es, den Stil Ihres Sakkos individuell zu verfeinern. Durch diese feinen Nuancen können wir das Erscheinungsbild Ihres Sakkos gezielt auf Ihre Wünsche abstimmen.
                </p>
            </div>
        </section>
    );
};

export default JacketIntro;
