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
                <h2 className="shirt-personal-title">Persönlich, Stilvoll, Vielseitig</h2>
                <p className="shirt-personal-desc">
                    Ein individuell angefertigtes Hemd bietet unzählige Kombinationsmöglichkeiten, um Ihren persönlichen Stil perfekt zu unterstreichen. Ob für den Arbeitstag, ein elegantes Event oder den entspannten Freizeitlook, unsere Hemden passen sich Ihren Bedürfnissen an und sorgen für einen eleganten, persönlichen Look, mit dem Sie souverän und stilvoll auftreten. Lassen Sie sich von Qualität und Stil inspirieren.
                </p>
            </div>
        </section>
    );
};

export default ShirtPersonal;
