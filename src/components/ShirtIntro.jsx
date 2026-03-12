import React, { useEffect, useRef } from 'react';
import './ShirtIntro.css';

const ShirtIntro = () => {
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
        <section className="shirt-intro-section" ref={sectionRef}>
            <div className="shirt-intro-container">
                <h1 className="shirt-intro-title">Perfection that feels like a second skin</h1>
                <p className="shirt-intro-text">
                    My made-to-measure shirts fit like no off-the-rack shirt ever could. Created from the world's finest fabrics, with meticulous
                    attention to every detail. Together we will give you an experience that fits your personality, your needs, your life.
                    The result is a shirt so natural and individual that it feels like a second skin.
                </p>
            </div>
        </section>
    );
};

export default ShirtIntro;
