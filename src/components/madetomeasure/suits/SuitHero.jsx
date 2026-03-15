import React from 'react';
import { Link } from 'react-router-dom';
import './SuitHero.css';

const SuitHero = () => {
    return (
        <section className="suit-hero">
            <img
                src="https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=1920"
                alt="Premium Anzugkollektion"
                className="suit-hero-img"
            />
            <div className="suit-hero-overlay"></div>
            {/* <div className="suit-hero-cta">
                <Link to="/booking">
                    <button className="suit-hero-btn">Book an Appointment</button>
                </Link>
            </div> */}
        </section>
    );
};

export default SuitHero;
