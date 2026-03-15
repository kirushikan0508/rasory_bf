import React, { useEffect, useRef } from 'react';
import { Handshake, Ruler, Scissors } from 'lucide-react';
import './TrouserConsult.css';

const TrouserConsult = () => {
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
            desc: 'Im ersten Schritt lernen wir Ihre persönlichen Vorlieben und eine Reihe von Optionen kennen. Gemeinsam schauen wir uns Stile, Muster und Schnitte an — für die perfekte Hose.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Passform & Individualisierung',
            desc: 'Mit mehr als einem Dutzend präziser Masse stellen wir Ihre persönliche Passform sicher. Die Bundhöhe, die Bundfalten, die Fussweite — jedes Detail wird sorgfältig angepasst, um eine wirklich individuelle Hose zu kreieren.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Anprobe & Fertigstellung',
            desc: 'Bei jeder Anprobe wird jedes Detail sorgfältig geprüft, das Endergebnis ist perfekt auf Ihre Masse abgestimmt. Die Verarbeitung ist tadellos — damit Sie sich bei jedem Tragen sicher fühlen können.',
        },
    ];

    return (
        <section className="trouser-consult-section">
            <div className="trouser-consult-container">
                <h2 className="trouser-consult-title" ref={addRef}>Unser Beratungskonzept</h2>
                <p className="trouser-consult-subtitle" ref={addRef}>
                    Mit dem modernen Beratungskonzept begleiten wir Sie auf dem Weg von der Idee bis zum fertigen Produkt.
                </p>
                <div className="trouser-consult-grid">
                    {consulting.map((item, i) => (
                        <div className="trouser-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="trouser-consult-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrouserConsult;
