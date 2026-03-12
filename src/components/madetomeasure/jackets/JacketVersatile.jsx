import React, { useEffect, useRef } from 'react';
import './JacketVersatile.css';

const JacketVersatile = () => {
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
        <section className="jacket-versatile-section">
            <div className="jacket-versatile-container" ref={sectionRef}>
                <h2 className="jacket-versatile-title">Versatility meets style</h2>
                <p className="jacket-versatile-desc">
                    Whether ready-to-go or combined as an eye-catcher on a special occasion — the jacket is our classic that offers the
                    widest form of expression in a wardrobe. It's casual, sophisticated, modern and elegant at the same time. Choose
                    the perfect cut for an effortless elegance that makes you stand out, and the refined tailoring experience that is
                    unmatched in quality and individual in its expression.
                </p>
            </div>
        </section>
    );
};

export default JacketVersatile;
