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
                    Durch die akribische Bearbeitung jeder Phase verbinden wir Präzision mit Hingabe, um ein Ergebnis zu erzielen, das nicht nur perfekt passt, sondern auch Ihre einzigartige Persönlichkeit widerspiegelt. Ob Sie einen eleganten Business-Anzug oder einen formellen Anzug für besondere Anlässe wünschen, ich fertige Ihren massgeschneiderten Anzug, perfekt auf Ihre Bedürfnisse zugeschnitten.
                </p>
            </div>
        </section>
    );
};

export default SuitDesc;
