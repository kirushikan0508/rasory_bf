import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './InspirationCTA.css';

const InspirationCTA = () => {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="insp-cta-section" ref={sectionRef}>
            <Link to="/booking">
                <button className="insp-cta-btn">TERMIN VEREINBAREN</button>
            </Link>
        </section>
    );
};

export default InspirationCTA;
