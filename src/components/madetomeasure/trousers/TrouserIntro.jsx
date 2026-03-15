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
                <h1 className="trouser-intro-title">Komfort und Eleganz nach Mass</h1>
                <p className="trouser-intro-text">
                    Eine perfekt sitzende Hose ist das Fundament eines gelungenen Erscheinungsbildes. Bei mit steht die individuelle Passform im Vordergrund um höchsten Tragekomfort zu gewährleisten Die Hosen bieten vielseitige Styles und stilvolle Elemente. Ich berate Sie bei Stoffen, Schnitten und Designs, um eine Hose zu kreieren, die perfekt sitzt. Gemeinsam bestimmen wir die Details, vom Bund über den Stoff bis hin zur Passform, um eine Hose zu kreieren, die sowohl Ihren ästhetischen Ansprüchen als auch Ihrem Komfort gerecht wird. Mein Ziel ist es, eine massgeschneiderte Hose zu schaffen, die durch höchste Qualität, perfekte Verarbeitung und individuelle Gestaltung heraussticht.
                </p>
            </div>
        </section>
    );
};

export default TrouserIntro;
