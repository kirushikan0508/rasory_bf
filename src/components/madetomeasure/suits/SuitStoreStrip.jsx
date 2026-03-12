import React from 'react';
import './SuitStoreStrip.css';

const SuitStoreStrip = () => {
    return (
        <section className="suit-store-strip">
            <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                alt="Rasory store interior"
                className="suit-store-img"
            />
            <div className="suit-store-overlay"></div>
        </section>
    );
};

export default SuitStoreStrip;
