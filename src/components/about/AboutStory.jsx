import React, { useEffect, useRef } from 'react';
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
                        My name is Roshan Yogarajah, and I am your partner for bespoke clothing. Around ten years ago, my training as a retail specialist sparked my passion for fashion and customer service, igniting my fascination with the world of fashion. Over time, I have specialized in bespoke tailoring and fabrics. I am not only captivated by the endless variety and limitless design possibilities that the bespoke clothing industry offers, but also by each individual client. Every client brings their own vision, their own combinations, their own style, and their own desires – and therein lies the beauty of my work. It is a unique journey where I strive to harmonize each individual's personality and style with the world of fashion. Together, we will find the look that makes you shine – authentic, stylish, and unique. There are no limits – only your own creativity and imagination determine the result.
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
