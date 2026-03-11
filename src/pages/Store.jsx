import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, CalendarCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Store.css';

const Store = () => {
    const fadeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !fadeRefs.current.includes(el)) {
            fadeRefs.current.push(el);
        }
    };

    return (
        <div className="store-page">
            <Navbar />

            {/* Full-Width Hero Banner */}
            <section className="store-hero">
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                    alt="Rasory Store Interior"
                    className="store-hero-img"
                />
                <div className="store-hero-overlay"></div>
                <div className="store-hero-cta">
                    <Link to="/booking">
                        <button className="store-hero-btn">Book An Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Store Info + Image Grid */}
            <section className="store-details-section">
                <div className="store-details-container">
                    {/* Left: Info */}
                    <div className="store-info-col" ref={addRef}>
                        <div className="store-location-block">
                            <h2 className="store-city">Bern</h2>
                            <div className="store-address">
                                <p>Waaghaus-Passage 8</p>
                                <p>3011 Bern</p>
                                <p>store@rasory.ch</p>
                                <p>+41 78 312 41 88</p>
                            </div>
                        </div>

                        <div className="store-hours-block">
                            <h3 className="store-hours-title">OPENING HOURS</h3>
                            <div className="store-hours-list">
                                <div className="store-hours-row">
                                    <span>Monday – Friday</span>
                                    <span>8.30 am – 6.00 pm</span>
                                </div>
                                <div className="store-hours-row">
                                    <span>Saturday</span>
                                    <span>9.00 am – 5.00 pm</span>
                                </div>
                            </div>
                        </div>

                        <div className="store-actions">
                            <a href="#" className="store-action-link">
                                <MapPin size={16} /> Bern
                            </a>
                            <Link to="/booking" className="store-action-link">
                                <CalendarCheck size={16} /> BOOK AN APPOINTMENT
                            </Link>
                            <a href="mailto:store@rasory.ch" className="store-action-link">
                                <Mail size={16} /> WRITE AN E-MAIL
                            </a>
                        </div>

                        <div className="store-description">
                            <p>
                                Enter our store and discover the world of elegance. Experience our excellent
                                customer service, which combines masterpieces of craftsmanship, perfect fit and
                                high-quality fabrics. Feel the subtle elegance that characterizes each individual
                                garment.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="store-images-col" ref={addRef}>
                        <div className="store-img-grid">
                            <div className="store-img-card store-img-tall">
                                <img
                                    src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600"
                                    alt="Tailor measuring a client"
                                />
                            </div>
                            <div className="store-img-card store-img-top-right">
                                <img
                                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
                                    alt="Premium suit jacket"
                                />
                            </div>
                            <div className="store-img-card store-img-bottom-right">
                                <img
                                    src="https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=600"
                                    alt="Accessories and details"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Store;
