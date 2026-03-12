import React, { useEffect, useRef } from 'react';
import './TrouserIntro.css';

const TrouserIntro = () => {
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
        <section className="trouser-intro-section" ref={sectionRef}>
            <div className="trouser-intro-container">
                <h1 className="trouser-intro-title">Comfort and elegance made to measure</h1>
                <p className="trouser-intro-text">
                    A perfectly fitting pair of trousers is the foundation of a polished look. For me, the individual fit is paramount to ensure maximum comfort. The trousers offer versatile styles and stylish details. I will advise you on fabrics, cuts, and designs to create trousers that fit perfectly. Together, we will determine the details, from the waistband and fabric to the fit, to create trousers that meet both your aesthetic requirements and your comfort needs. My goal is to create bespoke trousers that stand out through superior quality, impeccable craftsmanship, and individual design.
                </p>
            </div>
        </section>
    );
};

export default TrouserIntro;
