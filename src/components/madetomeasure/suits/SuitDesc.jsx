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
                    By meticulously working through each stage, we combine precision with dedication to create a result that not only fits perfectly but also reflects your unique personality. Whether you desire an elegant business suit or a formal suit for special occasions, I will craft your bespoke suit, perfectly tailored to your needs.
                </p>
            </div>
        </section>
    );
};

export default SuitDesc;
