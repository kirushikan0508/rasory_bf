import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Handshake, Ruler, Package } from 'lucide-react';
import './MadeToMeasureJacket.css';

const MadeToMeasureJacket = () => {
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

    const jacketImages = [
        'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500',
    ];

    const consulting = [
        {
            icon: <Handshake size={32} />,
            title: 'Getting to know & Selection',
            desc: 'At the first meeting, we take our time to understand your expectations, your style, and your wardrobe goals. Together we will discuss fabrics, colors and the perfect jacket style for you.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Precision & Individualization',
            desc: 'With more than a dozen precise measurements, we ensure your personal fit. The shoulder line, the lapel width, the button stance — every detail is carefully adjusted to fit your body perfectly.',
        },
        {
            icon: <Package size={32} />,
            title: 'Delivery & Completion',
            desc: 'The last fitting, every detail is checked. Every line sits, every seam falls perfectly. The jacket is impeccably finished — including a premium garment bag for perfect care and storage.',
        },
    ];

    return (
        <div className="jacket-page">
            <Navbar />

            {/* Hero */}
            <section className="jacket-hero">
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                    alt="Premium jackets collection"
                    className="jacket-hero-img"
                />
                <div className="jacket-hero-overlay"></div>
                <div className="jacket-hero-cta">
                    <Link to="/booking">
                        <button className="jacket-hero-btn">Book an Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Intro */}
            <section className="jacket-intro-section" ref={addRef}>
                <div className="jacket-intro-container">
                    <h1 className="jacket-intro-title">Focus on your individual style</h1>
                    <p className="jacket-intro-text">
                        We focus on the personal design of your jacket. From the finest selection of natural materials to precise cuts, our
                        specialization lies in jackets. The details of tailoring craftsmanship create a perfect product. With us, there are elegant
                        business looks, figures using casual and yet exclusive jackets and coats. We offer our customers advice, solutions, and the
                        high standard to create the finest garment of your individual wardrobe.
                    </p>
                </div>
            </section>

            {/* Jacket Image Row */}
            <section className="jacket-row-section">
                <div className="jacket-row-grid">
                    {jacketImages.map((src, i) => (
                        <div className="jacket-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <img src={src} alt={`Jacket style ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Versatility Section */}
            <section className="jacket-versatile-section">
                <div className="jacket-versatile-container" ref={addRef}>
                    <h2 className="jacket-versatile-title">Versatility meets style</h2>
                    <p className="jacket-versatile-desc">
                        Whether ready-to-go or combined as an eye-catcher on a special occasion — the jacket is our classic that offers the
                        widest form of expression in a wardrobe. It's casual, sophisticated, modern and elegant at the same time. Choose
                        the perfect cut for an effortless elegance that makes you stand out, and the refined tailoring experience that is
                        unmatched in quality and individual in its expression.
                    </p>
                </div>
            </section>

            {/* Consulting Concept */}
            <section className="jacket-consult-section">
                <div className="jacket-consult-container">
                    <h2 className="jacket-consult-title" ref={addRef}>Our consulting concept</h2>
                    <p className="jacket-consult-subtitle" ref={addRef}>
                        With the modern consulting concept, we accompany you on every step from the initial idea to the finished jacket.
                    </p>
                    <div className="jacket-consult-grid">
                        {consulting.map((item, i) => (
                            <div className="jacket-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="jacket-consult-icon">{item.icon}</div>
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

export default MadeToMeasureJacket;
