import React, { useEffect, useRef } from 'react';
import { Handshake, Ruler, Sparkles } from 'lucide-react';
import './SuitConsult.css';

const SuitConsult = () => {
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
            { threshold: 0.12 }
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

    const consultation = [
        {
            icon: <Handshake size={32} />,
            title: 'Terminvereinbarung & Ankunft',
            desc: 'Auf den ersten Blick, das erste Gespräch — wir lernen Ihre Ziele, Ihren Lebensstil und Ihre Stilambitionen in einer unverbindlichen Beratung kennen.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Präzisionsvermessung',
            desc: 'Mit über 30 Massen sorgen wir für eine Silhouette, die sich für jede Linie und Kurve Ihres Körpers massgeschneidert anfühlt.',
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Auswahl & Produktion',
            desc: 'Jedes abschliessende Detail, jede einzigartige Kombination — wir beginnen mit nichts als Exzellenz und Präzision.',
        },
    ];

    return (
        <section className="suit-consult-section">
            <div className="suit-consult-container">
                <h2 className="suit-consult-title" ref={addRef}>Unser Beratungskonzept</h2>
                <p className="suit-consult-subtitle" ref={addRef}>
                    Wir begleiten Sie von der Inspiration bis zum fertigen Produkt — Schritt für Schritt, komplett nach Mass.
                </p>
                <div className="suit-consult-grid">
                    {consultation.map((item, i) => (
                        <div className="suit-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="suit-consult-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuitConsult;
