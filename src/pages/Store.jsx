import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, CalendarCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Store.css';

import Hero from '../components/ui/Hero';

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

            <Hero 
                title="Our Flagship Store"
                subtitle="Rasory Bern"
                description="Step into our world of elegance. Experience the perfect blend of traditional craftsmanship and modern luxury in the heart of Bern."
                imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                secondaryBtnText="Find Location"
            />

            {/* Store Info + Image Grid */}
            <section className="store-details-section">
                <div className="store-details-container">
                    {/* Left: Info */}
                    <div className="store-info-col" ref={addRef}>
                        <div className="store-top-info">
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
                                    <span className="hours-day">Monday – Friday</span>
                                    <span className="hours-time">8.30 am – 6.00 pm</span>
                                </div>
                                <div className="store-hours-row">
                                    <span className="hours-day">Saturday</span>
                                    <span className="hours-time">9.00 am – 5.00 pm</span>
                                </div>
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
                                    src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800"
                                    alt="Tailor measuring client"
                                />
                            </div>
                            <div className="store-img-card store-img-top-right">
                                <img
                                    src="https://images.unsplash.com/photo-1621072156002-e2fcced0b170?auto=format&fit=crop&q=80&w=600"
                                    alt="Pinstripe suit on mannequin"
                                />
                            </div>
                            <div className="store-img-card store-img-bottom-right">
                                <img
                                    src="https://images.unsplash.com/photo-1520004481444-1660c392c101?auto=format&fit=crop&q=80&w=600"
                                    alt="Fabrics on hangers"
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
