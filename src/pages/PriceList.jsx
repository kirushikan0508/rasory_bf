import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PriceList.css';
import price01 from "../assets/Preislisten/Rasory  Preislisten 01.jpg";
import price02 from "../assets/Preislisten/Rasory  Preislisten 02.jpg";
import price03 from "../assets/Preislisten/Rasory  Preislisten 03.jpg";


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
        { item: 'Stylish two-piece suits are available for the price of', price: '899.- CHF' },
        { item: 'Elegant three-piece suits for', price: '1\'299.- CHF' },
        { item: 'Stylish jackets, individually made for', price: '649.- CHF' },
        { item: 'Tailor-made vests are available for', price: '339.- CHF' },
        { item: 'Perfectly fitting trousers at the price of', price: '239.- CHF' },
        { item: 'High-quality shirts that round off your look are available for', price: '169.- CHF' },
    ];

    return (
        <div className="pricelist-page">
            <Navbar />

            <Hero 
                title="Elegance & Quality at a Fair Price"
                subtitle="Rasory Value"
                description="First-class fabrics and expert tailoring shouldn't be out of reach. Discover our transparent pricing for bespoke creations."
                imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1920"
                secondaryBtnText="See Price List"
            />

            {/* Price Details Section */}
            <section className="price-details-section">
                <div className="price-details-container">
                    {/* Left: Pricing Info */}
                    <div className="price-info-col" ref={addRef}>
                        <h2 className="price-main-title">
                            Elegance and quality at a fair price
                        </h2>

                        <p className="price-intro">
                            I use first-class lace fabric made of pure virgin wool in the qualities
                            Super130 to Super 200. This exclusive material guarantees durability,
                            comfort and gives your garments a timeless elegance.
                        </p>

                        <p className="price-subtitle">
                            For the high-quality Super130 quality,<br />
                            I manufacture suits, jackets, trousers and vests at attractive prices that meet the
                            demand for exclusivity:
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
                                Each garment is made according to your personal wishes and measurements for a
                                perfect fit and maximum wearing comfort. Trust in my expertise and passion for
                                exclusive fabrics to realize your individual style at the highest level.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="price-images-col" ref={addRef}>
                        <div className="price-img-grid">
                            <div className="price-img-card price-img-top-left">
                                <img
                                    src={price01}
                                    alt="Tailor fitting a suit"
                                />
                            </div>
                            <div className="price-img-card price-img-top-right">
                                <img
                                    src={price02}
                                    alt="Gentleman in tailored suit"
                                />
                            </div>
                            <div className="price-img-card price-img-bottom">
                                <img
                                    src={price03}
                                    alt="Premium suit style"
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
