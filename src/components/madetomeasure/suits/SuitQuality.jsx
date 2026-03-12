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
                    Production typically takes up to four weeks. If needed, I also offer an express service within three weeks. Quality and precision are my top priorities, ensuring you receive a unique garment.
                </p>
            </div>
        </section>
    );
};

export default SuitQuality;
