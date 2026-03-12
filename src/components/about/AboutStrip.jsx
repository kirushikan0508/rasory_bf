import React from 'react';
import './AboutStrip.css';

const AboutStrip = () => {
    return (
        <section className="about-strip">
            <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                alt="Suit collection"
                className="about-strip-img"
            />
            <div className="about-strip-overlay"></div>
        </section>
    );
};

export default AboutStrip;
