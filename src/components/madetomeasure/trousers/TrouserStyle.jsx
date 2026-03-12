import React, { useEffect, useRef } from 'react';
import './TrouserStyle.css';

const TrouserStyle = () => {
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
            { threshold: 0.12 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="trouser-style-section">
            <div className="trouser-style-container" ref={sectionRef}>
                <h2 className="trouser-style-title">Your individual style</h2>
                <p className="trouser-style-desc">
                    Whether you prefer casual chinos or elegant styles with French pockets, I tailor the fit and details to your individual needs. High-quality materials ensure a comfortable feel, while special touches like pleats and turn-up hems complete the look. Together, we'll create a pair of trousers that meets your requirements – stylish, comfortable, and unique. Trust in my experience.
                </p>
            </div>
        </section>
    );
};

export default TrouserStyle;
