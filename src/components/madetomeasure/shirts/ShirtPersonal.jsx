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
                    A custom-made shirt offers countless combination possibilities to perfectly highlight your personal style. Whether for the workday, an elegant event, or a relaxed leisure look, our shirts adapt to your needs and ensure a sophisticated, personal style that allows you to project confidence and style. Let yourself be inspired by quality and style.
                </p>
            </div>
        </section>
    );
};

export default ShirtPersonal;
