import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Handshake, Ruler, Scissors } from 'lucide-react';
import './MadeToMeasureShirt.css';

const MadeToMeasureShirt = () => {
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

    const shirtImages = [
        'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=500',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500',
    ];

    const consulting = [
        {
            icon: <Handshake size={32} />,
            title: 'Getting to know each other & discussing',
            desc: 'At the first meeting, we take our time to understand your expectations, your daily routine and your style preferences — with a genuine interest in your personality.',
        },
        {
            icon: <Ruler size={32} />,
            title: 'Fit & individualization',
            desc: 'With more than a dozen precise measurements, we define your personal fit. You choose collar style, cuff design, fabric, and finishing — each detail considered.',
        },
        {
            icon: <Scissors size={32} />,
            title: 'Fitting & Finishing',
            desc: 'Every fitting is an event. Fine-tuning each detail, verifying every stitch — so that your finished shirt fits flawlessly and feels uniquely yours.',
        },
    ];

    return (
        <div className="shirt-page">
            <Navbar />

            {/* Hero */}
            <section className="shirt-hero">
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                    alt="Premium shirts collection"
                    className="shirt-hero-img"
                />
                <div className="shirt-hero-overlay"></div>
                <div className="shirt-hero-cta">
                    <Link to="/booking">
                        <button className="shirt-hero-btn">Book an Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Intro */}
            <section className="shirt-intro-section" ref={addRef}>
                <div className="shirt-intro-container">
                    <h1 className="shirt-intro-title">Perfection that feels like a second skin</h1>
                    <p className="shirt-intro-text">
                        My made-to-measure shirts fit like no off-the-rack shirt ever could. Created from the world's finest fabrics, with meticulous
                        attention to every detail. Together we will give you an experience that fits your personality, your needs, your life.
                        The result is a shirt so natural and individual that it feels like a second skin.
                    </p>
                </div>
            </section>

            {/* Shirt Image Row */}
            <section className="shirt-row-section">
                <div className="shirt-row-grid">
                    {shirtImages.map((src, i) => (
                        <div className="shirt-row-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <img src={src} alt={`Shirt style ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Top-class Fabrics */}
            <section className="shirt-fabrics-section" ref={addRef}>
                <div className="shirt-fabrics-container">
                    <h2 className="shirt-fabrics-title">Top-class fabrics</h2>
                    <div className="shirt-fabrics-brands">
                        <div className="shirt-brand-item">ALBINI</div>
                        <div className="shirt-brand-item">CANCLINI</div>
                        <div className="shirt-brand-item">GETZNER</div>
                        <div className="shirt-brand-item">METZLER</div>
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section className="shirt-personal-section">
                <div className="shirt-personal-container" ref={addRef}>
                    <h2 className="shirt-personal-title">Personal, stylish, versatile</h2>
                    <p className="shirt-personal-desc">
                        Custom-made shirts offer more than just a fit — they're a subtle form of self-expression.
                        You define the collar shape, the button style, the placket design, even the monogramming —
                        personal style infused into every detail. Our craftsmanship means richly textured materials and the very best
                        in hand-finished quality, for business to your finest events.
                    </p>
                </div>
            </section>

            {/* Consulting Concept */}
            <section className="shirt-consult-section">
                <div className="shirt-consult-container">
                    <h2 className="shirt-consult-title" ref={addRef}>Our consulting concept</h2>
                    <p className="shirt-consult-subtitle" ref={addRef}>
                        With the modern consulting concept, we accompany you the entire way from idea to the finished shirt.
                    </p>
                    <div className="shirt-consult-grid">
                        {consulting.map((item, i) => (
                            <div className="shirt-consult-card" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="shirt-consult-icon">{item.icon}</div>
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

export default MadeToMeasureShirt;
