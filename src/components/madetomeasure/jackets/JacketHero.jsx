import React from 'react';
import { Link } from 'react-router-dom';
import './JacketHero.css';

const JacketHero = () => {
    return (
        <section className="jacket-hero">
            <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                alt="Premium Sakko-Kollektion"
                className="jacket-hero-img"
            />
            <div className="jacket-hero-overlay"></div>
            {/* <div className="jacket-hero-cta">
                <Link to="/booking">
                    <button className="jacket-hero-btn">Book an Appointment</button>
                </Link>
            </div> */}
        </section>
    );
};

export default JacketHero;
