import React from 'react';
import { Link } from 'react-router-dom';
import './ShirtHero.css';

const ShirtHero = () => {
    return (
        <section className="shirt-hero">
            <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                alt="Premium shirts collection"
                className="shirt-hero-img"
            />
            <div className="shirt-hero-overlay"></div>
            {/* <div className="shirt-hero-cta">
                <Link to="/booking">
                    <button className="shirt-hero-btn">Book an Appointment</button>
                </Link>
            </div> */}
        </section>
    );
};

export default ShirtHero;
