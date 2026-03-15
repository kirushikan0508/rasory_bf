import React from 'react';
import './FloatingBookingButton.css';

const FloatingBookingButton = () => {
    const handleBooking = () => {
        window.open('https://calendly.com/rasorybooking', '_blank', 'noopener,noreferrer');
    };

    return (
        <button className="floating-booking-btn" onClick={handleBooking}>
            <span className="floating-booking-text">Termin vereinbaren</span>
            <div className="floating-booking-icon">
                {/* Simple SVG Calendar Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
        </button>
    );
};

export default FloatingBookingButton;
