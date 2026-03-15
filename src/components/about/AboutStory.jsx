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
                        Mein Name ist Roshan Yogarajah und ich bin Ihr Partner für massgeschneiderte Kleidung. Vor rund zehn Jahren entfachte meine Ausbildung zum Detailhandelsfachmann meine Leidenschaft für Mode und Kundenservice und weckte meine Faszination für die Welt der Mode. Im Laufe der Zeit habe ich mich auf Massschneiderei und Stoffe spezialisiert. Mich fesselt nicht nur die endlose Vielfalt und die grenzenlosen Gestaltungsmöglichkeiten, die die Massbekleidungsindustrie bietet, sondern auch jeder einzelne Kunde. Jeder Kunde bringt seine eigene Vision, seine eigenen Kombinationen, seinen eigenen Stil und seine eigenen Wünsche mit – und genau darin liegt die Schönheit meiner Arbeit. Es ist eine einzigartige Reise, bei der ich danach strebe, die Persönlichkeit und den Stil jedes Einzelnen mit der Welt der Mode in Einklang zu bringen. Gemeinsam finden wir den Look, der Sie zum Strahlen bringt – authentisch, stilvoll und einzigartig. Es gibt keine Grenzen – nur Ihre eigene Kreativität und Vorstellungskraft bestimmen das Ergebnis.
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
