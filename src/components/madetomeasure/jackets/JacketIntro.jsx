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
                <h1 className="jacket-intro-title">Im Fokus steht Ihr individueller Stil</h1>
                <p className="jacket-intro-text">
                    Wir legen den Fokus auf das persönliche Design Ihres Sakkos. Von der feinsten Auswahl natürlicher Materialien bis hin zu präzisen Schnitten liegt unsere Spezialisierung bei Sakkos. Die Details der Schneiderkunst schaffen ein perfektes Produkt. Bei uns finden Sie elegante Business-Looks, figurbetonende legere und doch exklusive Sakkos und Mäntel. Wir bieten unseren Kunden Beratung, Lösungen und den hohen Anspruch, das feinste Kleidungsstück Ihrer individuellen Garderobe zu schaffen.
                </p>
            </div>
        </section>
    );
};

export default JacketIntro;
