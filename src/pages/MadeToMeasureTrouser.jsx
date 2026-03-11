import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import './MadeToMeasure.css';

const MadeToMeasureTrouser = () => {
    const steps = [
        { num: '01', title: 'Consultation', desc: 'Discuss your preferred style, fit, and occasion.' },
        { num: '02', title: 'Fabric Selection', desc: 'Explore our range of wool, cotton, and linen fabrics.' },
        { num: '03', title: 'Measurements', desc: 'Precise measurements for waist, inseam, and more.' },
        { num: '04', title: 'Delivery', desc: 'Your custom trousers, ready within 2–3 weeks.' },
    ];

    const features = [
        'Precision cuts tailored to your exact body shape',
        'Choice of pleated, flat-front, or slim-fit styles',
        'Premium waistband finishes with curtain lining',
        'Working button fly or zip fly options',
        'Trouser break styled to your preference',
        'Hand-finished hems and seams throughout',
    ];

    return (
        <div className="mtm-page">
            <Navbar />

            <section className="mtm-hero">
                <div className="mtm-hero-overlay"></div>
                <div className="mtm-hero-content">
                    <span className="mtm-label">Made to Measure</span>
                    <h1 className="mtm-hero-title">
                        Tailor-Made <span className="gold-text">Trousers</span>
                    </h1>
                    <p className="mtm-hero-desc">
                        Precision cuts and meticulous attention to detail define our custom trousers,
                        designed to complement your silhouette perfectly.
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
                            <h2>Why Choose Our <span className="gold-text">Trousers</span></h2>
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
                                src="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800" 
                                alt="Bespoke Trouser Craftsmanship"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mtm-cta-section">
                <div className="mtm-container">
                    <div className="mtm-cta-box">
                        <h2>Ready for Your <span className="gold-text">Perfect Trousers?</span></h2>
                        <p>Book a consultation and experience the difference of custom-tailored trousers.</p>
                        <button className="mtm-cta-btn">Book Appointment</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MadeToMeasureTrouser;
