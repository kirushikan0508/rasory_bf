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
                    Durch das sorgfältige Durchlaufen jeder Phase verbinden wir Präzision mit Hingabe, um ein Ergebnis zu schaffen, das nicht nur perfekt sitzt, sondern auch Ihre Einzigartigkeit zum Ausdruck bringt. Ganz gleich, ob Sie einen eleganten Business-Anzug oder einen festlichen Anzug für besondere Anlässe wünschen, ich fertige Ihren individuellen Anzug, der perfekt auf Ihre Bedürfnisse abgestimmt ist.
                </p>
            </div>
        </section>
    );
};

export default SuitDesc;
