import React, { useEffect, useRef } from 'react';
import './InspirationTitle.css';

const InspirationTitle = () => {
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
        <section className="insp-title-section" ref={sectionRef}>
            <div className="insp-title-container">
                <h1 className="insp-main-title">Entdecken Sie die Vielfalt Ihrer Outfits</h1>
                <p className="insp-main-desc">
                    Manchmal braucht es nur einen kleinen Impuls, um den eigenen Stil neu zu erleben. Bei uns finden Sie keine festen Regeln, sondern unzählige Wege, Ihren Look zu variieren. Wir zeigen Ihnen kreative Kombinationen, die Ihren Alltag stilvoll bereichern – egal ob für den Business-Tag, einen entspannten Abend oder besondere Anlässe. Lassen Sie sich inspirieren und erweitern Sie Ihre Modewelt – für jeden Moment das perfekte Outfit.
                </p>
            </div>
        </section>
    );
};

export default InspirationTitle;
