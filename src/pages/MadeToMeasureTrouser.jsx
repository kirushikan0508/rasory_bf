import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Handshake, Ruler, Scissors } from 'lucide-react';
import './MadeToMeasureTrouser.css';

const MadeToMeasureTrouser = () => {
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
            { threshold: 0.12 }
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

    const trouserImages = [
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=500',
    ];

    const consulting = [
        {
            icon: <Handshake size={32} />,
            title: 'Getting to know each other & choosing',
            desc: 'In the first step, we learn about your personal preferences and a range of options. Together we will look at styles, patterns and tailoring — for the perfect pair of trousers.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Fit & individualization',
            desc: 'With more than a dozen precise measurements, we ensure your personal fit. The waist height, the pleats, the leg opening — every detail is carefully adjusted to create truly individual trousers.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Fitting & Finishing',
            desc: 'Every fitting is carefully each detail is checked, the final result is perfectly matched to your measurements. The finishing is impeccable — you can be confident every time you wear them.',
        },
    ];

    return (
        <div className="trouser-page">
            <Navbar />

            {/* Hero */}
            <section className="trouser-hero">
                <img
                    src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=1920"
                    alt="Men in tailored trousers"
                    className="trouser-hero-img"
                />
                <div className="trouser-hero-overlay"></div>
                <div className="trouser-hero-cta">
                    <Link to="/booking">
                        <button className="trouser-hero-btn">Book an Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Intro */}
            <section className="trouser-intro-section" ref={addRef}>
                <div className="trouser-intro-container">
                    <h1 className="trouser-intro-title">Comfort and elegance made to measure</h1>
                    <p className="trouser-intro-text">
                        Perfectly fitting trousers are the foundation of a successful appearance. With the focus on the individual fit and unique
                        materials and patterns. The quality, the wonderful fabrics and skillful tailoring, create a style that is as individual as the
                        man who wears them — for comfort, signature and character. Whether a classic crease or a more relaxed chino fit — every line is
                        made from our trousers. The finest textiles, hand-tailored to perfection, embody our commitment to style and craftsmanship to
                        create a pair of trousers that stands out with impeccable quality, perfect craftsmanship and individual design.
                    </p>
                </div>
            </section>

            {/* Trouser Image Row */}
            <section className="trouser-row-section">
                <div className="trouser-row-grid">
                    {trouserImages.map((src, i) => (
                        <div className="trouser-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <img src={src} alt={`Trouser style ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Individual Style */}
            <section className="trouser-style-section">
                <div className="trouser-style-container" ref={addRef}>
                    <h2 className="trouser-style-title">Your individual style</h2>
                    <p className="trouser-style-desc">
                        Whether it's casual chinos or elegant trousers with fine creases — customize the fit and details. High-quality materials
                        ensure a perfect look, while special accents such as fastenings and refined finishes complete the picture. Together, we
                        develop your individual style and find an outfit that suits you — stylish and flexible, for all the important occasions.
                    </p>
                </div>
            </section>

            {/* Full-Width Strip */}
            <section className="trouser-strip">
                <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920"
                    alt="Elegant gentleman"
                    className="trouser-strip-img"
                />
                <div className="trouser-strip-overlay"></div>
            </section>

            {/* Consulting Concept */}
            <section className="trouser-consult-section">
                <div className="trouser-consult-container">
                    <h2 className="trouser-consult-title" ref={addRef}>Our consulting concept</h2>
                    <p className="trouser-consult-subtitle" ref={addRef}>
                        With the modern consulting concept, we accompany you the way from the idea to the finished product.
                    </p>
                    <div className="trouser-consult-grid">
                        {consulting.map((item, i) => (
                            <div className="trouser-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="trouser-consult-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MadeToMeasureTrouser;
