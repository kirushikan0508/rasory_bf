import React, { useEffect, useRef } from 'react';
import leftimg from "../../../assets/MASSKLEIDUNG/suits/Rasory Massanzuge 03.jpg";
import centerimg from "../../../assets/MASSKLEIDUNG/suits/Rasory Massanzuge 04.jpg";
import rightimg from "../../../assets/MASSKLEIDUNG/suits/Rasory Massanzuge 11.jpg";
import './SuitRow.css';

const SuitRow = () => {
    const fadeRefs = useRef([]);

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

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !fadeRefs.current.includes(el)) {
            fadeRefs.current.push(el);
        }
    };

    const suitImages = [
        leftimg,
        centerimg,
        rightimg
    ];

    return (
        <section className="suit-row-section">
            <div className="suit-row-grid">
                {suitImages.map((src, i) => (
                    <div className="suit-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                        <img src={src} alt={`Suit style ${i + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuitRow;
