import React, { useEffect, useRef } from 'react';
import './TrouserStyle.css';

const TrouserStyle = () => {
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
        <section className="trouser-style-section">
            <div className="trouser-style-container" ref={sectionRef}>
                <h2 className="trouser-style-title">Ihr individueller Stil</h2>
                <p className="trouser-style-desc">
                    Egal, ob Sie lässige Chinos oder elegante Stile mit französischen Taschen bevorzugen, ich passe die Passform und Details an Ihre individuellen Bedürfnisse an. Hochwertige Materialien sorgen für ein angenehmes Tragegefühl, während besondere Akzente wie Bundfalten und Umschläge den Look abrunden. Gemeinsam kreieren wir eine Hose, die Ihren Anforderungen entspricht – stilvoll, bequem und einzigartig. Vertrauen Sie auf meine Erfahrung.
                </p>
            </div>
        </section>
    );
};

export default TrouserStyle;
