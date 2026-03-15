import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-hero">
            <img
                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1920"
                alt="Premium tailoring"
                className="about-hero-img"
            />
            <div className="about-hero-overlay"></div>
            <div className="about-hero-content">
                <h1 className="about-hero-title">Willkommen bei RASORY</h1>
            </div>
        </section>
    );
};

export default AboutHero;
