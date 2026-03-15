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
                <h2 className="trouser-style-title">Ihr individueller Style</h2>
                <p className="trouser-style-desc">
                    Sei es lässiger Chino oder elegante Modelle mit französischen Taschen, ich passe die Passform sowie die Details individuell an. Hochwertige Materialien sorgen für ein angenehmes Tragegefühl, während spezielle Akzente wie Bundfalten und umschlagener Look die Hose vervollständigen. Gemeinsam entwickeln wir eine Hose, die Ihren Anforderungen entspricht – stilvoll, bequem und einzigartig. Vertrauen Sie auf meine Erfahrung.
                </p>
            </div>
        </section>
    );
};

export default TrouserStyle;
