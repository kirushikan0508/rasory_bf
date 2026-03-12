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
            title: 'Reservation & Arrival',
            desc: 'At first glance, first conversation — we get to know your goals, lifestyle, and style ambitions in a no-pressure consultation.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Precision Measurement',
            desc: 'With over 30 measurements, we ensure a silhouette that feels custom-made for every line and curve of your frame.',
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Selection & Production',
            desc: 'Every finishing detail, every unique combination — we start with nothing but excellence and precision.',
        },
    ];

    return (
        <section className="suit-consult-section">
            <div className="suit-consult-container">
                <h2 className="suit-consult-title" ref={addRef}>Our Consultation Concept</h2>
                <p className="suit-consult-subtitle" ref={addRef}>
                    We accompany you from inspiration to finished product — step by step, entirely bespoke.
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
