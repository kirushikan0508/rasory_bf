import React, { useEffect, useRef } from 'react';
import './InspirationTitle.css';

const InspirationTitle = () => {
    const sectionRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="insp-title-section" ref={sectionRef}>
            <div className="insp-title-container">
                <h1 className="insp-main-title">Discover the variety of your outfits</h1>
                <p className="insp-main-desc">
                    Sometimes all it takes is a small impulse to experience your own style in a new way.
                    With us you will not find any fixed rules, but countless ways to vary your look.
                    We show you creative combinations that stylishly enrich your everyday life –
                    whether for a business day, a relaxed evening or special occasions.
                    Be inspired and expand your fashion world – the perfect outfit for every moment.
                </p>
            </div>
        </section>
    );
};

export default InspirationTitle;
