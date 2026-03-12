import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Handshake, Ruler, Sparkles } from 'lucide-react';
import './MadeToMeasureSuit.css';

const MadeToMeasureSuit = () => {
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

    const suitImages = [
        'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=500',
    ];

    const consultation = [
        {
            icon: <Handshake size={32} />,
            title: 'Reservation & Arrival',
            desc: 'At first glance, first conversation — we get to know your goals, lifestyle, and style ambitions in a no-pressure consultation.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Precision Measurement',
            desc: 'With over 30 measurements, we ensure a silhouette that feels custom-made for every line and curve of your frame.',
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Selection & Production',
            desc: 'Every finishing detail, every unique combination — we start with nothing but excellence and precision.',
        },
    ];

    return (
        <div className="suit-page">
            <Navbar />

            {/* Hero with multiple suit images */}
            <section className="suit-hero">
                <img
                    src="https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=1920"
                    alt="Premium suits collection"
                    className="suit-hero-img"
                />
                <div className="suit-hero-overlay"></div>
                <div className="suit-hero-cta">
                    <Link to="/booking">
                        <button className="suit-hero-btn">Book an Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Title & Intro */}
            <section className="suit-intro-section" ref={addRef}>
                <div className="suit-intro-container">
                    <h1 className="suit-intro-title">A suit that not only fits, but inspires</h1>
                    <p className="suit-intro-text">
                        Getting a good suit is a whole different experience at Rasory. We believe that the perfect suit tells a story — of craftsmanship, attention to detail, and the person who wears it.
                        Our approach is distinctly personal: working one-on-one with you, from the very first measurement to the final stitch, we create pieces that embody confidence, elegance, and authenticity. It's modern tailoring that honors tradition.
                    </p>
                </div>
            </section>

            {/* Full-Width Store Image */}
            <section className="suit-store-strip">
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                    alt="Rasory store interior"
                    className="suit-store-img"
                />
                <div className="suit-store-overlay"></div>
            </section>

            {/* Second Text Block */}
            <section className="suit-desc-section" ref={addRef}>
                <div className="suit-desc-container">
                    <p>
                        Every single garment is a reflection of its wearer — composed from handpicked materials, 
                        cut from the finest fabrics, created with the care and dedication that only master tailoring 
                        allows. Each suit is perfectly sized, individually shaped, following your taste in every detail. 
                        We produce no mass — we create wearable art, tailored to live.
                    </p>
                </div>
            </section>

            {/* Suit Image Row */}
            <section className="suit-row-section">
                <div className="suit-row-grid">
                    {suitImages.map((src, i) => (
                        <div className="suit-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <img src={src} alt={`Suit style ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Fabrics */}
            <section className="suit-fabrics-section" ref={addRef}>
                <div className="suit-fabrics-container">
                    <h2 className="suit-fabrics-title">Premium Fabrics</h2>
                    <div className="suit-fabrics-brands">
                        <div className="suit-brand-item">BRISBANE MOSS</div>
                        <div className="suit-brand-item">GUABELLO</div>
                        <div className="suit-brand-item">VITALE BARBERIS CANONICO</div>
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section className="suit-quality-section">
                <div className="suit-quality-container" ref={addRef}>
                    <h2 className="suit-quality-title">Quality that takes its time</h2>
                    <p className="suit-quality-desc">
                        No shortcut, no fast-track. Each suit is sewn by hand, measured with care, 
                        crafted from fabrics of the highest quality. Our tailors take 3–4 weeks to deliver perfection — 
                        because the finest things in life deserve patience.
                    </p>
                </div>
            </section>

            {/* Consultation Concept */}
            <section className="suit-consult-section">
                <div className="suit-consult-container">
                    <h2 className="suit-consult-title" ref={addRef}>Our Consultation Concept</h2>
                    <p className="suit-consult-subtitle" ref={addRef}>
                        We accompany you from inspiration to finished product — step by step, entirely bespoke.
                    </p>
                    <div className="suit-consult-grid">
                        {consultation.map((item, i) => (
                            <div className="suit-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="suit-consult-icon">{item.icon}</div>
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

export default MadeToMeasureSuit;
