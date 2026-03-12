import React, { useEffect, useRef } from 'react';
import './SuitIntro.css';

const SuitIntro = () => {
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
        <section className="suit-intro-section" ref={sectionRef}>
            <div className="suit-intro-container">
                <h1 className="suit-intro-title">A suit that not only fits, but inspires</h1>
                <p className="suit-intro-text">
                    Crafting a high-quality suit, whether an elegant two-piece or a stylish three-piece suit with a waistcoat, requires meticulous care, passion, and masterful craftsmanship. I use only exclusive fabrics and develop individual patterns precisely tailored to your wishes and your personal physique. Every step in the manufacturing process is carefully considered and precise: from selecting the perfect fabric and developing the detailed pattern to the high-quality finishing. A two-piece suit focuses on stylish, timeless elegance, while a three-piece suit with a waistcoat offers an additional dimension of sophistication and versatility.
                </p>
            </div>
        </section>
    );
};

export default SuitIntro;
