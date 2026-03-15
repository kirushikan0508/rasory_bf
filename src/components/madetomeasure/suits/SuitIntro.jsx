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
                <h1 className="suit-intro-title">Ein Anzug, der nicht nur passt, sondern inspiriert</h1>
                <p className="suit-intro-text">
                    Die Anfertigung eines massgeschneiderten Anzugs, sei es ein eleganter Zweiteiler oder ein stilvoller Dreiteiler mit Weste, erfordert grösste Sorgfalt, Leidenschaft und meisterhafte Handwerkskunst. Ich verwende nur exklusive Stoffe und entwickle individuelle Schnittmuster, die exakt auf Ihre Wünsche und Ihren persönlichen Körperbau abgestimmt sind. Jeder Schritt im Herstellungsprozess ist wohlüberlegt und präzise: von der Auswahl des perfekten Stoffes und der Entwicklung des detaillierten Schnittmusters bis hin zur hochwertigen Verarbeitung. Ein Zweiteiler konzentriert sich auf stilvolle, zeitlose Eleganz, während ein Dreiteiler mit Weste eine zusätzliche Dimension von Raffinesse und Vielseitigkeit bietet.
                </p>
            </div>
        </section>
    );
};

export default SuitIntro;
