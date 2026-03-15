import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, CalendarCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgmain from "../assets/Preislisten/Rasory  Preislisten 01.jpg"
import imgleft1 from "../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-01.jpg";
import imgright from "../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-03.jpg";
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
                title="Unser Flagship-Store"
                subtitle="Rasory Bern"
                description="Treten Sie ein in unsere Welt der Eleganz. Erleben Sie die perfekte Mischung aus traditioneller Handwerkskunst und modernem Luxus im Herzen von Bern."
                imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                // secondaryBtnText="Find Location"
                showActions={false}
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
                                <h3 className="store-hours-title">ÖFFNUNGSZEITEN</h3>
                                <div className="store-hours-list">
                                <div className="store-hours-row">
                                    <span className="hours-day">Montag – Freitag</span>
                                    <span className="hours-time">8.30 am – 6.00 pm</span>
                                </div>
                                <div className="store-hours-row">
                                    <span className="hours-day">Samstag</span>
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
                                <CalendarCheck size={16} /> TERMIN VEREINBAREN
                            </Link>
                            <a href="mailto:store@rasory.ch" className="store-action-link">
                                <Mail size={16} /> E-MAIL SCHREIBEN
                            </a>
                        </div>

                        <div className="store-description">
                            <p>
                                Betreten Sie unseren Store und entdecken Sie die Welt der Eleganz. Erleben Sie unseren exzellenten
                                Kundenservice, der Meisterwerke der Handwerkskunst, perfekte Passform und
                                hochwertige Stoffe vereint. Spüren Sie die subtile Eleganz, die jedes einzelne
                                Kleidungsstück auszeichnet.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="store-images-col" ref={addRef}>
                        <div className="store-img-grid">
                            <div className="store-img-card store-img-tall">
                                <img
                                    src={imgmain}
                                    alt="Schneider beim Massnehmen"
                                />
                            </div>
                            <div className="store-img-card store-img-top-right">
                                <img
                                    src={imgleft1}
                                    alt="Nadelstreifenanzug auf Schaufensterpuppe"
                                />
                            </div>
                            <div className="store-img-card store-img-bottom-right">
                                <img
                                    src={imgright}
                                    alt="Stoffe auf Kleiderbügeln"
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
