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
                    Eine perfekt sitzende Hose ist das Fundament eines gepflegten Looks. Für mich steht die individuelle Passform an erster Stelle, um maximalen Komfort zu gewährleisten. Die Hosen bieten vielseitige Stile und stilvolle Details. Ich berate Sie bei Stoffen, Schnitten und Designs, um eine Hose zu kreieren, die perfekt sitzt. Gemeinsam bestimmen wir die Details, vom Bund über den Stoff bis zur Passform, um eine Hose zu fertigen, die sowohl Ihren ästhetischen Ansprüchen als auch Ihren Komfortbedürfnissen gerecht wird. Mein Ziel ist es, massgeschneiderte Hosen zu kreieren, die sich durch höchste Qualität, makellose Handwerkskunst und individuelles Design auszeichnen.
                </p>
            </div>
        </section>
    );
};

export default TrouserIntro;
