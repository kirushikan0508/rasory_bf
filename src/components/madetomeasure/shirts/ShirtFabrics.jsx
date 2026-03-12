import React, { useEffect, useRef } from 'react';
import './ShirtFabrics.css';

const ShirtFabrics = () => {
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
        <section className="shirt-fabrics-section" ref={sectionRef}>
            <div className="shirt-fabrics-container">
                <h2 className="shirt-fabrics-title">Top-class fabrics</h2>
                <div className="shirt-fabrics-brands">
                    <div className="shirt-brand-item">ALBINI</div>
                    <div className="shirt-brand-item">CANCLINI</div>
                    <div className="shirt-brand-item">GETZNER</div>
                    <div className="shirt-brand-item">METZLER</div>
                </div>
            </div>
        </section>
    );
};

export default ShirtFabrics;
