import React, { useEffect, useRef } from 'react';
import './JacketVersatile.css';

const JacketVersatile = () => {
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
        <section className="jacket-versatile-section">
            <div className="jacket-versatile-container" ref={sectionRef}>
                <h2 className="jacket-versatile-title">Vielseitigkeit trifft auf Stil</h2>
                <p className="jacket-versatile-desc">
                    Ob sofort einsatzbereit oder als Hingucker zu einem besonderen Anlass kombiniert — das Sakko ist unser Klassiker, der die vielfältigste Ausdrucksform in einer Garderobe bietet. Es ist leger, anspruchsvoll, modern und elegant zugleich. Wählen Sie den perfekten Schnitt für eine mühelose Eleganz, die Sie hervorhebt, und das raffinierte Schneidererlebnis, das unvergleichlich in Qualität und individuell im Ausdruck ist.
                </p>
            </div>
        </section>
    );
};

export default JacketVersatile;
