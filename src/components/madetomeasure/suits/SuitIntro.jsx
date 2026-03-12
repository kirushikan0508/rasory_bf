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
                    Getting a good suit is a whole different experience at Rasory. We believe that the perfect suit tells a story — of craftsmanship, attention to detail, and the person who wears it.
                    Our approach is distinctly personal: working one-on-one with you, from the very first measurement to the final stitch, we create pieces that embody confidence, elegance, and authenticity. It's modern tailoring that honors tradition.
                </p>
            </div>
        </section>
    );
};

export default SuitIntro;
