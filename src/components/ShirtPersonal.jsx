import React, { useEffect, useRef } from 'react';
import './ShirtPersonal.css';

const ShirtPersonal = () => {
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
        <section className="shirt-personal-section">
            <div className="shirt-personal-container" ref={sectionRef}>
                <h2 className="shirt-personal-title">Personal, stylish, versatile</h2>
                <p className="shirt-personal-desc">
                    Custom-made shirts offer more than just a fit — they're a subtle form of self-expression.
                    You define the collar shape, the button style, the placket design, even the monogramming —
                    personal style infused into every detail. Our craftsmanship means richly textured materials and the very best
                    in hand-finished quality, for business to your finest events.
                </p>
            </div>
        </section>
    );
};

export default ShirtPersonal;
