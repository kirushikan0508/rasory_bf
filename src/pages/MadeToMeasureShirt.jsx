import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import './MadeToMeasure.css';

const MadeToMeasureShirt = () => {
    const steps = [
        { num: '01', title: 'Consultation', desc: 'Discuss your style, occasion, and preferences.' },
        { num: '02', title: 'Fabric Selection', desc: 'Choose from over 500 premium shirt fabrics.' },
        { num: '03', title: 'Measurements', desc: 'Precise body measurements for the perfect fit.' },
        { num: '04', title: 'Delivery', desc: 'Your bespoke shirt, delivered within 2–3 weeks.' },
    ];

    const features = [
        'Hand-cut and individually crafted to your measurements',
        'Choice of collar styles: spread, button-down, cutaway, and more',
        'Monogramming and personalized details available',
        'Premium mother-of-pearl buttons as standard',
        'Single-needle stitching for superior finish',
        'Over 500 fabrics from the world\'s finest mills',
    ];

    return (
        <div className="mtm-page">
            <Navbar />

            <section className="mtm-hero">
                <div className="mtm-hero-overlay"></div>
                <div className="mtm-hero-content">
                    <span className="mtm-label">Made to Measure</span>
                    <h1 className="mtm-hero-title">
                        Tailor-Made <span className="gold-text">Shirts</span>
                    </h1>
                    <p className="mtm-hero-desc">
                        Experience the perfect fit with our bespoke shirts, crafted from the finest fabrics
                        and tailored precisely to your measurements.
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
                            <h2>Why Choose Our <span className="gold-text">Shirts</span></h2>
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
                                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800" 
                                alt="Bespoke Shirt Craftsmanship"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mtm-cta-section">
                <div className="mtm-container">
                    <div className="mtm-cta-box">
                        <h2>Ready for Your <span className="gold-text">Perfect Shirt?</span></h2>
                        <p>Book a consultation and let our master tailors craft a shirt that fits you perfectly.</p>
                        <button className="mtm-cta-btn">Book Appointment</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MadeToMeasureShirt;
