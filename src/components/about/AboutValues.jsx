import React, { useEffect, useRef } from 'react';
import './AboutValues.css';

const AboutValues = () => {
    const fadeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !fadeRefs.current.includes(el)) {
            fadeRefs.current.push(el);
        }
    };

    const values = [
        {
            title: 'Ein künstlerischer Ansatz statt Standardlösung.',
            desc: 'Wir interpretieren Ihre Wünsche mit künstlerischem Flair und setzen sie in Designs um, die keinem anderen Kleidungsstück gleichen.',
        },
        {
            title: 'Innovative Stofftechnologien.',
            desc: 'Wir experimentieren mit innovativen Materialien, die nicht nur schön aussehen, sondern auch Ihren Komfort berücksichtigen.',
        },
        {
            title: 'Limitierte Editionen, keine Massenware',
            desc: 'Unsere massgeschneiderte Kleidung wird auf Sie zugeschnitten, damit Sie ein echtes Unikat tragen können.',
        },
        {
            title: 'Nachhaltigkeit mit hohen Standards',
            desc: "Wir glauben an Mode, die nicht nur gut aussieht. Wir legen besonderen Wert auf faire Arbeitsbedingungen in allen Produktionsphasen und machen so jedes Kleidungsstück zu einem echten Statement – für Verantwortung, Respekt und Qualität.",
        },
    ];

    return (
        <section className="about-values-section">
            <div className="about-values-container">
                <h2 className="about-values-title" ref={addRef}>Was macht uns einzigartig?</h2>
                <div className="about-values-list">
                    {values.map((val, i) => (
                        <div
                            className="about-value-item"
                            key={i}
                            ref={addRef}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <h3 className="about-value-heading">{val.title}</h3>
                            <p className="about-value-desc">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
