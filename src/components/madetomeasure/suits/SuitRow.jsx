import React, { useEffect, useRef } from 'react';
import './SuitRow.css';

const SuitRow = () => {
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

    const suitImages = [
        'https://images.unsplash.com/photo-1617130608344-33a92806ecd3?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=600',
    ];

    return (
        <section className="suit-row-section">
            <div className="suit-row-grid">
                {suitImages.map((src, i) => (
                    <div className="suit-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                        <img src={src} alt={`Suit style ${i + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuitRow;
