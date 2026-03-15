import React from 'react';
import { Link } from 'react-router-dom';
import './TrouserHero.css';

const TrouserHero = () => {
    return (
        <section className="trouser-hero">
            <img
                src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=1920"
                alt="Männer in massgeschneiderten Hosen"
                className="trouser-hero-img"
            />
            <div className="trouser-hero-overlay"></div>
            {/* <div className="trouser-hero-cta">
                <Link to="/booking">
                    <button className="trouser-hero-btn">Book an Appointment</button>
                </Link>
            </div> */}
        </section>
    );
};

export default TrouserHero;
