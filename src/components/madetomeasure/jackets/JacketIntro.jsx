import React, { useEffect, useRef } from 'react';
import './JacketIntro.css';

const JacketIntro = () => {
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
        <section className="jacket-intro-section" ref={sectionRef}>
            <div className="jacket-intro-container">
                <h1 className="jacket-intro-title">Focus on your individual style</h1>
                <p className="jacket-intro-text">
                    We focus on the personal design of your jacket. From the finest selection of natural materials to precise cuts, our
                    specialization lies in jackets. The details of tailoring craftsmanship create a perfect product. With us, there are elegant
                    business looks, figures using casual and yet exclusive jackets and coats. We offer our customers advice, solutions, and the
                    high standard to create the finest garment of your individual wardrobe.
                </p>
            </div>
        </section>
    );
};

export default JacketIntro;
