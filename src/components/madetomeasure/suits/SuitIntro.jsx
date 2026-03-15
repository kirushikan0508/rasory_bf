import React, { useEffect, useRef } from 'react';
import './SuitIntro.css';

const SuitIntro = () => {
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
        <section className="suit-intro-section" ref={sectionRef}>
            <div className="suit-intro-container">
                <h1 className="suit-intro-title">Ein Anzug, der nicht nur passt, sondern begeistert</h1>
                <p className="suit-intro-text">
                   Die Anfertigung eines hochwertigen Anzugs, sei es ein eleganter zweiteiliger Anzug oder ein stilvoller dreiteiliger Anzug mit Weste, erfordert viel Sorgfalt, Leidenschaft und meisterhafte Handwerkskunst. Ich verwende ausschließlich exklusive Stoffe und entwickle individuelle Schnittmuster, die exakt auf Ihre Wünsche sowie auf Ihre persönliche Körperform abgestimmt sind. Jeder Schritt im Herstellungsprozess ist durchdacht und präzise: Von der Auswahl des passenden Stoffes über die detaillierte Schnittentwicklung bis hin zur hochwertigen Verarbeitung. Bei einem zweiteiligen Anzug liegt der Fokus auf einer stilvollen, zeitlosen Eleganz, während der dreiteilige Anzug mit Weste eine zusätzliche Dimension von Eleganz und Vielseitigkeit bietet.
                </p>
            </div>
        </section>
    );
};

export default SuitIntro;
