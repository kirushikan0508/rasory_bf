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
            title: 'Getting to know each other & choosing',
            desc: 'In the first step, we learn about your personal preferences and a range of options. Together we will look at styles, patterns and tailoring — for the perfect pair of trousers.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Fit & individualization',
            desc: 'With more than a dozen precise measurements, we ensure your personal fit. The waist height, the pleats, the leg opening — every detail is carefully adjusted to create truly individual trousers.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Fitting & Finishing',
            desc: 'Every fitting is carefully each detail is checked, the final result is perfectly matched to your measurements. The finishing is impeccable — you can be confident every time you wear them.',
        },
    ];

    return (
        <section className="trouser-consult-section">
            <div className="trouser-consult-container">
                <h2 className="trouser-consult-title" ref={addRef}>Our consulting concept</h2>
                <p className="trouser-consult-subtitle" ref={addRef}>
                    With the modern consulting concept, we accompany you the way from the idea to the finished product.
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
