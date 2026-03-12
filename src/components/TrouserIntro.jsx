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
                    Perfectly fitting trousers are the foundation of a successful appearance. With the focus on the individual fit and unique
                    materials and patterns. The quality, the wonderful fabrics and skillful tailoring, create a style that is as individual as the
                    man who wears them — for comfort, signature and character. Whether a classic crease or a more relaxed chino fit — every line is
                    made from our trousers. The finest textiles, hand-tailored to perfection, embody our commitment to style and craftsmanship to
                    create a pair of trousers that stands out with impeccable quality, perfect craftsmanship and individual design.
                </p>
            </div>
        </section>
    );
};

export default TrouserIntro;
