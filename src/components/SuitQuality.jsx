import React, { useEffect, useRef } from 'react';
import './SuitQuality.css';

const SuitQuality = () => {
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
        <section className="suit-quality-section">
            <div className="suit-quality-container" ref={sectionRef}>
                <h2 className="suit-quality-title">Quality that takes its time</h2>
                <p className="suit-quality-desc">
                    No shortcut, no fast-track. Each suit is sewn by hand, measured with care, 
                    crafted from fabrics of the highest quality. Our tailors take 3–4 weeks to deliver perfection — 
                    because the finest things in life deserve patience.
                </p>
            </div>
        </section>
    );
};

export default SuitQuality;
