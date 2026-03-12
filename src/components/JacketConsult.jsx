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
            title: 'Getting to know & Selection',
            desc: 'At the first meeting, we take our time to understand your expectations, your style, and your wardrobe goals. Together we will discuss fabrics, colors and the perfect jacket style for you.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Precision & Individualization',
            desc: 'With more than a dozen precise measurements, we ensure your personal fit. The shoulder line, the lapel width, the button stance — every detail is carefully adjusted to fit your body perfectly.',
        },
        {
            icon: <Package size={32} />,
            title: 'Delivery & Completion',
            desc: 'The last fitting, every detail is checked. Every line sits, every seam falls perfectly. The jacket is impeccably finished — including a premium garment bag for perfect care and storage.',
        },
    ];

    return (
        <section className="jacket-consult-section">
            <div className="jacket-consult-container">
                <h2 className="jacket-consult-title" ref={addRef}>Our consulting concept</h2>
                <p className="jacket-consult-subtitle" ref={addRef}>
                    With the modern consulting concept, we accompany you on every step from the initial idea to the finished jacket.
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
