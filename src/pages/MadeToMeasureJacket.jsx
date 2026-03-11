import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import './MadeToMeasure.css';

const MadeToMeasureJacket = () => {
    const steps = [
        { num: '01', title: 'Design Brief', desc: 'Define your jacket style — blazer, sport coat, or overcoat.' },
        { num: '02', title: 'Fabric Selection', desc: 'Choose from premium wools, tweeds, and cashmere blends.' },
        { num: '03', title: 'Measurements', desc: 'Detailed measurements for shoulders, chest, and length.' },
        { num: '04', title: 'Delivery', desc: 'Your bespoke jacket, delivered within 3–4 weeks.' },
    ];

    const features = [
        'Structured or soft shoulder construction to match your style',
        'Choice of patch, flap, or jetted pocket styles',
        'Custom lining patterns and monogramming available',
        'Hand-stitched details for a refined finish',
        'Working cuff buttons as standard',
        'Premium fabrics sourced from Italian and British mills',
    ];

    return (
        <div className="mtm-page">
            <Navbar />

            <section className="mtm-hero">
                <div className="mtm-hero-overlay"></div>
                <div className="mtm-hero-content">
                    <span className="mtm-label">Made to Measure</span>
                    <h1 className="mtm-hero-title">
                        Tailor-Made <span className="gold-text">Jackets</span>
                    </h1>
                    <p className="mtm-hero-desc">
                        Stand out with exceptionally designed and meticulously crafted tailored jackets,
                        built to elevate any outfit.
                    </p>
                </div>
            </section>

            <section className="mtm-process-section">
                <div className="mtm-container">
                    <h2 className="mtm-section-title">Our <span className="gold-text">Process</span></h2>
                    <div className="mtm-process-grid">
                        {steps.map((s, i) => (
                            <div className="mtm-process-step" key={i}>
                                <div className="step-number">{s.num}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mtm-features-section">
                <div className="mtm-container">
                    <div className="mtm-features-grid">
                        <div className="mtm-features-text">
                            <h2>Why Choose Our <span className="gold-text">Jackets</span></h2>
                            <div className="mtm-feature-list">
                                {features.map((f, i) => (
                                    <div className="mtm-feature-item" key={i}>
                                        <CheckCircle size={18} className="feature-check" />
                                        <p>{f}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mtm-features-image">
                            <img 
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                                alt="Bespoke Jacket Craftsmanship"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mtm-cta-section">
                <div className="mtm-container">
                    <div className="mtm-cta-box">
                        <h2>Ready for Your <span className="gold-text">Perfect Jacket?</span></h2>
                        <p>Book a consultation and let us create a jacket that speaks your style.</p>
                        <button className="mtm-cta-btn">Book Appointment</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MadeToMeasureJacket;
