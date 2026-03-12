import React, { useEffect, useRef } from 'react';
import './SuitDesc.css';

const SuitDesc = () => {
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
        <section className="suit-desc-section" ref={sectionRef}>
            <div className="suit-desc-container">
                <p>
                    Every single garment is a reflection of its wearer — composed from handpicked materials, 
                    cut from the finest fabrics, created with the care and dedication that only master tailoring 
                    allows. Each suit is perfectly sized, individually shaped, following your taste in every detail. 
                    We produce no mass — we create wearable art, tailored to live.
                </p>
            </div>
        </section>
    );
};

export default SuitDesc;
