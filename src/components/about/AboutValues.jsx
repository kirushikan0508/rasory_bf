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
            title: 'An artistic approach instead of a standard solution.',
            desc: 'We interpret your wishes with artistic flair and translate them into designs that are unlike any other garment.',
        },
        {
            title: 'Innovative fabric technologies.',
            desc: 'We are experimenting with innovative materials that not only look beautiful but also take your comfort into account.',
        },
        {
            title: 'Limited editions, not mass-produced goods',
            desc: 'Our custom-made clothing is tailored to you, so you can wear a truly unique piece.',
        },
        {
            title: 'Sustainability with high standards',
            desc: "We believe in fashion that doesnt just look good. We place particular emphasis on fair working conditions in all stages of production, making every garment a true statement – ​​for responsibility, respect, and quality.",
        },
    ];

    return (
        <section className="about-values-section">
            <div className="about-values-container">
                <h2 className="about-values-title" ref={addRef}>What makes us unique?</h2>
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
