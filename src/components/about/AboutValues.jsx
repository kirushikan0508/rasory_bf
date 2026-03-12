import React, { useEffect, useRef } from 'react';
import './AboutValues.css';

const AboutValues = () => {
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
            { threshold: 0.15 }
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

    const values = [
        {
            title: 'Artistic approach instead of standard solution.',
            desc: 'We interpret your wishes with artistic flair and translate them into designs that are as unique as every single piece of clothing.',
        },
        {
            title: 'Innovative fabric technologies.',
            desc: 'We experiment with exclusive combinations of materials, weave styles, and surface treatments that ensure comfort, movement and style.',
        },
        {
            title: 'Limited editions, not mass-produced goods.',
            desc: 'Our made-to-measure clothing is produced only once, so that your wardrobe is always a privilege.',
        },
        {
            title: 'Sustainability with ambition.',
            desc: 'We believe in fashion that doesn\'t just look good. We select particular importance to ethically production and all stages of production, which makes every garment a small statement – for resource, for respect and quality.',
        },
    ];

    return (
        <section className="about-values-section">
            <div className="about-values-container">
                <h2 className="about-values-title" ref={addRef}>What makes us incomparable ?</h2>
                <div className="about-values-list">
                    {values.map((val, i) => (
                        <div
                            className="about-value-item"
                            key={i}
                            ref={addRef}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <h3 className="about-value-heading">{val.title}</h3>
                            <p className="about-value-desc">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
