import React, { useEffect, useRef } from 'react';
import { Handshake, Ruler, Scissors } from 'lucide-react';
import './ShirtConsult.css';

const ShirtConsult = () => {
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
            title: 'Kennenlernen & Besprechen',
            desc: 'Beim ersten Treffen nehmen wir uns Zeit, um Ihre Erwartungen, Ihren Alltag und Ihre Stilvorlieben zu verstehen — mit echtem Interesse an Ihrer Persönlichkeit.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Passform & Individualisierung',
            desc: 'Mit mehr als einem Dutzend präziser Masse definieren wir Ihre persönliche Passform. Sie wählen Kragenform, Manschettendesign, Stoff und Verarbeitung — jedes Detail wird berücksichtigt.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Anprobe & Fertigstellung',
            desc: 'Jede Anprobe ist ein Ereignis. Feinschliff jedes Details, Überprüfung jedes Stichs — damit Ihr fertiges Hemd makellos sitzt und sich einzigartig anfühlt.',
        },
    ];

    return (
        <section className="shirt-consult-section">
            <div className="shirt-consult-container">
                <h2 className="shirt-consult-title" ref={addRef}>Unser Beratungskonzept</h2>
                <p className="shirt-consult-subtitle" ref={addRef}>
                    Mit dem modernen Beratungskonzept begleiten wir Sie den gesamten Weg von der Idee bis zum fertigen Hemd.
                </p>
                <div className="shirt-consult-grid">
                    {consulting.map((item, i) => (
                        <div className="shirt-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="shirt-consult-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShirtConsult;
