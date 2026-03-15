import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PriceList.css';
import price01 from "../assets/Preislisten/Rasory  Preislisten 01.jpg";
import price02 from "../assets/Preislisten/Rasory  Preislisten 02.jpg";
import price03 from "../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-03.jpg";

import pricehero from "../assets/price-hero.png";


import Hero from '../components/ui/Hero';

const PriceList = () => {
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

    const prices = [
        { item: 'Stilvolle zweiteilige Anzüge sind erhältlich zum Preis von', price: '899.- CHF' },
        { item: 'Elegante dreiteilige Anzüge für', price: '1\'299.- CHF' },
        { item: 'Stilvolle Sakkos, individuell angefertigt für', price: '649.- CHF' },
        { item: 'Massgeschneiderte Westen sind erhältlich für', price: '339.- CHF' },
        { item: 'Perfekt sitzende Hosen zum Preis von', price: '239.- CHF' },
        { item: 'Hochwertige Hemden, die Ihren Look abrunden, sind erhältlich für', price: '169.- CHF' },
    ];

    return (
        <div className="pricelist-page">
            <Navbar />

            <Hero 
                title="Eleganz & Qualität zu einem fairen Preis"
                subtitle="Rasory Werte"
                description="Erstklassige Stoffe und meisterhafte Schneiderkunst sollten nicht unerreichbar sein. Entdecken Sie unsere transparenten Preise für massgeschneiderte Kreationen."
                imageSrc={pricehero}
                secondaryBtnText="See Price List"
                showActions={false}
            />

            {/* Price Details Section */}
            <section className="price-details-section">
                <div className="price-details-container">
                    {/* Left: Pricing Info */}
                    <div className="price-info-col" ref={addRef}>
                        <h2 className="price-main-title">
                            Eleganz und Qualität zu einem fairen Preis
                        </h2>

                        <p className="price-intro">
                            Ich verwende erstklassige Stoffe aus reiner Schurwolle in den Qualitäten
                            Super130 bis Super 200. Dieses exklusive Material garantiert Langlebigkeit,
                            Komfort und verleiht Ihren Kleidungsstücken eine zeitlose Eleganz.
                        </p>

                        <p className="price-subtitle">
                            Für die hochwertige Super130 Qualität,<br />
                            fertige ich Anzüge, Sakkos, Hosen und Westen zu attraktiven Preisen, die dem
                            Anspruch an Exklusivität gerecht werden:
                        </p>

                        <ul className="price-items-list">
                            {prices.map((p, i) => (
                                <li key={i} className="price-item-row">
                                    <span className="price-arrow">→</span>
                                    <span className="price-item-text">
                                        {p.item} <strong>{p.price}</strong>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="price-closing">
                            <p>
                                Jedes Kleidungsstück wird nach Ihren persönlichen Wünschen und Massen für eine
                                perfekte Passform und maximalen Tragekomfort gefertigt. Vertrauen Sie auf meine
                                Expertise und Leidenschaft für exklusive Stoffe, um Ihren individuellen Stil auf
                                höchstem Niveau zu verwirklichen.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="price-images-col" ref={addRef}>
                        <div className="price-img-grid">
                            <div className="price-img-card price-img-top-left">
                                <img
                                    src={price01}
                                    alt="Schneider bei der Anprobe"
                                />
                            </div>
                            <div className="price-img-card price-img-top-right">
                                <img
                                    src={price02}
                                    alt="Herr im massgeschneiderten Anzug"
                                />
                            </div>
                            <div className="price-img-card price-img-bottom">
                                <img
                                    src={price03}
                                    alt="Premium Anzug-Stil"
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

export default PriceList;
