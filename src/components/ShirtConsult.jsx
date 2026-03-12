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
            title: 'Getting to know each other & discussing',
            desc: 'At the first meeting, we take our time to understand your expectations, your daily routine and your style preferences — with a genuine interest in your personality.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Fit & individualization',
            desc: 'With more than a dozen precise measurements, we define your personal fit. You choose collar style, cuff design, fabric, and finishing — each detail considered.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Fitting & Finishing',
            desc: 'Every fitting is an event. Fine-tuning each detail, verifying every stitch — so that your finished shirt fits flawlessly and feels uniquely yours.',
        },
    ];

    return (
        <section className="shirt-consult-section">
            <div className="shirt-consult-container">
                <h2 className="shirt-consult-title" ref={addRef}>Our consulting concept</h2>
                <p className="shirt-consult-subtitle" ref={addRef}>
                    With the modern consulting concept, we accompany you the entire way from idea to the finished shirt.
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
