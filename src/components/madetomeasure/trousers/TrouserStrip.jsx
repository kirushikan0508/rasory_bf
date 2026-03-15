import React from 'react';
import './TrouserStrip.css';

const TrouserStrip = () => {
    return (
        <section className="trouser-strip">
            <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920"
                alt="Eleganter Herr"
                className="trouser-strip-img"
            />
            <div className="trouser-strip-overlay"></div>
        </section>
    );
};

export default TrouserStrip;
