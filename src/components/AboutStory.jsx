import React, { useEffect, useRef } from 'react';

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
                        My name is Kirushan Ragunathan, and I am your partner for made-to-measure clothing.
                        About six years ago, my passion for fashion and customer service developed
                        through my tailoring and design work and I built my business from the very
                        start on a clear vision: to combine craftsmanship with modern elegance and personal
                        advice – with a passion and skill set so extraordinary that they redefine
                        design possibilities for men, making a lasting impression on fashion-conscious
                        contemporaries by the finest customer service one can find in this field.
                    </p>
                    <p>
                        Each of my pieces, from materials to the smallest detail, is made to measure by hand –
                        where I want to connect the personality and style of each one in harmony with
                        the world of fashion. Together we'll find the perfect expression for your style
                        – authentic, quality and unique. I look forward to having you on this exciting
                        journey of individual tailoring.
                    </p>
                </div>
                <div className="about-story-image" ref={addRef}>
                    <img
                        src="https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=700"
                        alt="Bespoke shirt craftsmanship"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
