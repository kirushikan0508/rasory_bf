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
                    Whether it's casual chinos or elegant trousers with fine creases — customize the fit and details. High-quality materials
                    ensure a perfect look, while special accents such as fastenings and refined finishes complete the picture. Together, we
                    develop your individual style and find an outfit that suits you — stylish and flexible, for all the important occasions.
                </p>
            </div>
        </section>
    );
};

export default TrouserStyle;
