import React, { useEffect, useRef } from 'react';
import { Handshake, Ruler, Package } from 'lucide-react';
import './JacketConsult.css';

const JacketConsult = () => {
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

    const consulting = [
        {
            icon: <Handshake size={32} />,
            title: 'Kennenlernen & Auswahl',
            desc: 'Beim ersten Treffen nehmen wir uns Zeit, um Ihre Erwartungen, Ihren Stil und Ihre Garderoben-Ziele zu verstehen. Gemeinsam besprechen wir Stoffe, Farben und den perfekten Sakko-Stil für Sie.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Präzision & Individualisierung',
            desc: 'Mit mehr als einem Dutzend präziser Masse gewährleisten wir Ihre persönliche Passform. Die Schulterlinie, die Reversbreite, der Knopfstand — jedes Detail wird sorgfältig auf Ihren Körper abgestimmt.',
        },
        {
            icon: <Package size={32} />,
            title: 'Auslieferung & Fertigstellung',
            desc: 'Die letzte Anprobe, jedes Detail wird geprüft. Jede Linie sitzt, jede Naht fällt perfekt. Das Sakko wird tadellos übergeben — inklusive eines hochwertigen Kleidersacks für die perfekte Pflege und Aufbewahrung.',
        },
    ];

    return (
        <section className="jacket-consult-section">
            <div className="jacket-consult-container">
                <h2 className="jacket-consult-title" ref={addRef}>Unser Beratungskonzept</h2>
                <p className="jacket-consult-subtitle" ref={addRef}>
                    Mit dem modernen Beratungskonzept begleiten wir Sie bei jedem Schritt von der ersten Idee bis zum fertigen Sakko.
                </p>
                <div className="jacket-consult-grid">
                    {consulting.map((item, i) => (
                        <div className="jacket-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="jacket-consult-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JacketConsult;
