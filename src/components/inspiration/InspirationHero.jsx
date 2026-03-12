import React from 'react';
import './InspirationHero.css';

const InspirationHero = () => {
    return (
        <section className="insp-hero">
            <img
                src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=1920"
                alt="Men in elegant suits"
                className="insp-hero-img"
            />
            <div className="insp-hero-overlay"></div>
        </section>
    );
};

export default InspirationHero;
