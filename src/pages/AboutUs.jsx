import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Scissors, Award, Heart, Users } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    const values = [
        { icon: <Scissors size={32} />, title: 'Craftsmanship', desc: 'Every stitch reflects decades of tailoring expertise passed through generations.' },
        { icon: <Award size={32} />, title: 'Excellence', desc: 'We use only the finest fabrics sourced from the world\'s most prestigious mills.' },
        { icon: <Heart size={32} />, title: 'Passion', desc: 'Tailoring is not just our profession — it is our lifelong devotion to perfection.' },
        { icon: <Users size={32} />, title: 'Personal Touch', desc: 'Every client receives individual attention, ensuring a truly bespoke experience.' },
    ];

    return (
        <div className="about-page">
            <Navbar />

            {/* Hero Banner */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <span className="about-label">Our Story</span>
                    <h1 className="about-hero-title">
                        The Art of <span className="gold-text">Fine Tailoring</span>
                    </h1>
                    <p className="about-hero-desc">
                        Since our founding, Rasory has been synonymous with impeccable craftsmanship,
                        luxurious fabrics, and the pursuit of sartorial perfection.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story-section">
                <div className="about-container">
                    <div className="about-story-grid">
                        <div className="about-story-text">
                            <h2 className="section-heading">A Legacy of <span className="gold-text">Elegance</span></h2>
                            <p>
                                Welcome to Rasory. We are dedicated to providing premium tailoring services with
                                an elegant touch. Our black and gold aesthetics reflect our brand's promise
                                of luxury and perfection.
                            </p>
                            <p>
                                Our master tailors ensure every piece is meticulously crafted to fit
                                your unique style and measurements. From the initial consultation to the final fitting,
                                we bring your vision to life with unparalleled attention to detail.
                            </p>
                            <p>
                                Each garment tells a story — your story — expressed through the finest fabrics
                                and timeless design. At Rasory, we don't just make clothes; we craft confidence.
                            </p>
                        </div>
                        <div className="about-story-image">
                            <img 
                                src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800" 
                                alt="Master Tailoring at Rasory" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values-section">
                <div className="about-container">
                    <h2 className="section-heading center">Our <span className="gold-text">Values</span></h2>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div className="value-card" key={i}>
                                <div className="value-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
