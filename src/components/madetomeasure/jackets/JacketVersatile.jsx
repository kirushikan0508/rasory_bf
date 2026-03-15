import React, { useEffect, useRef } from 'react';
import './JacketVersatile.css';

const JacketVersatile = () => {
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
        <section className="jacket-versatile-section">
            <div className="jacket-versatile-container" ref={sectionRef}>
                <h2 className="jacket-versatile-title">Vielseitigkeit trifft Stil</h2>
                <p className="jacket-versatile-desc">
                    Meine vielfältigen Gestaltungsmöglichkeiten erlauben es, Ihren Look zu intensivieren und das Sakko flexibel für verschiedene Gelegenheiten zu gestalten. Ob casual, smart casual oder smart casual extravagant ganz gleich, ob Sie Ihr Sakko mit Jeans, Chino oder Anzughose kombinieren möchten. Gemeinsam kreieren wir ein massgeschneidertes Unikat, das Sie sowohl im beruflichen Alltag als auch bei besonderen Events stilvoll begleitet, und perfekt auf Ihren Anlass abgestimmt ist.
                </p>
            </div>
        </section>
    );
};

export default JacketVersatile;
