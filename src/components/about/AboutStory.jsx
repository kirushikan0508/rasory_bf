import React, { useEffect, useRef } from 'react';
import img from "../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-06.jpg"
import './AboutStory.css';

const AboutStory = () => {
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
            { threshold: 0.15 }
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

    return (
        <section className="about-story-section">
            <div className="about-story-container">
                <div className="about-story-text" ref={addRef}>
                    <p>
                        Mein Name ist Roshan Yogarajah, und ich bin Ihr Partner für massgeschneiderte Kleidung. Vor rund zehn Jahren hat sich durch meine Ausbildung als Detailhandelsfachmann meine Leidenschaft für Mode und Kundenberatung entwickelt und somit meine Faszination für die Welt der Mode. Im Laufe der Zeit habe ich mich insbesondere auf die Masskonfektion und Stoffe spezialisiert. Mich begeistert nicht nur die unendliche Vielfalt und die grenzenlosen Gestaltungsmöglichkeiten, die vor allem die Branche der massgeschneiderten Kleidung bietet, sondern auch der individuelle Kunde, der vor mir steht. Jeder von ihnen bringt seine eigenen Vorstellungen, seine eigene Kombination, seinen Stil und seine Wünsche mit – und genau darin liegt die Schönheit meiner Arbeit. Es ist eine einzigartige Reise, bei der ich die Persönlichkeit und den Stil jedes Einzelnen in Harmonie mit der Welt der Mode in Verbindung setzen möchte. Gemeinsam finden wir den Look, der Sie strahlen lässt – authentisch, stilvoll und einzigartig. – Es sind keine Grenzen gesetzt – nur die eigene Kreativität und Vorstellungskraft bestimmen das Ergebnis.
                    </p>
                </div>
                <div className="about-story-image" ref={addRef}>
                    <img
                        src={img}
                        alt="Bespoke shirt craftsmanship"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
