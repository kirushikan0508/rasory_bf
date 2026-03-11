import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import './MadeToMeasure.css';

const MadeToMeasureSuit = () => {
    const steps = [
        { num: '01', title: 'Style Consultation', desc: 'Define your vision — single-breasted, double-breasted, or three-piece.' },
        { num: '02', title: 'Fabric & Details', desc: 'Select from hundreds of luxurious fabrics and linings.' },
        { num: '03', title: 'Precise Fitting', desc: 'Over 30 measurements ensure an impeccable silhouette.' },
        { num: '04', title: 'Final Delivery', desc: 'Your bespoke suit, perfected and delivered within 3–4 weeks.' },
    ];

    const features = [
        'Full or half canvas construction for natural drape and longevity',
        'Hand-stitched lapels, buttonholes, and finishing details',
        'Choice of peak, notch, or shawl lapel styles',
        'Custom lining with optional monogramming',
        'Surgeon\'s cuffs (working buttonholes) as standard',
        'Multiple fittings to ensure absolute perfection',
    ];

    return (
        <div className="mtm-page">
            <Navbar />

            <section className="mtm-hero">
                <div className="mtm-hero-overlay"></div>
                <div className="mtm-hero-content">
                    <span className="mtm-label">Made to Measure</span>
                    <h1 className="mtm-hero-title">
                        Tailor-Made <span className="gold-text">Suits</span>
                    </h1>
                    <p className="mtm-hero-desc">
                        Command any room with our fully custom tailored suits — precisely shaped,
                        impeccably finished, and unmistakably yours.
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
                            <h2>Why Choose Our <span className="gold-text">Suits</span></h2>
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
                                src="https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=800" 
                                alt="Bespoke Suit Craftsmanship"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mtm-cta-section">
                <div className="mtm-container">
                    <div className="mtm-cta-box">
                        <h2>Ready for Your <span className="gold-text">Perfect Suit?</span></h2>
                        <p>Book a consultation and let our master tailors create a suit that defines your presence.</p>
                        <button className="mtm-cta-btn">Book Appointment</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MadeToMeasureSuit;
