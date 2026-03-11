import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sparkles, TrendingUp, Palette, Star } from 'lucide-react';
import './Inspiration.css';

const Inspiration = () => {
    const inspirations = [
        {
            title: 'Classic British',
            desc: 'Timeless Savile Row elegance with structured shoulders and clean lines.',
            icon: <Star size={28} />,
        },
        {
            title: 'Italian Sprezzatura',
            desc: 'Effortless sophistication with soft construction and natural drape.',
            icon: <Sparkles size={28} />,
        },
        {
            title: 'Modern Minimalism',
            desc: 'Clean silhouettes and precise tailoring for the contemporary gentleman.',
            icon: <TrendingUp size={28} />,
        },
        {
            title: 'Bold Expressions',
            desc: 'Daring patterns, rich textures, and statement-making ensembles.',
            icon: <Palette size={28} />,
        },
    ];

    const gallery = [
        { label: 'Formal Suiting', tag: 'Classic', img: 'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=600' },
        { label: 'Summer Linen', tag: 'Casual', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600' },
        { label: 'Evening Wear', tag: 'Luxury', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600' },
        { label: 'Business Casual', tag: 'Modern', img: 'https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=600' },
        { label: 'Wedding Collection', tag: 'Special', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600' },
        { label: 'Overcoats', tag: 'Winter', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600' },
    ];

    return (
        <div className="inspiration-page">
            <Navbar />

            {/* Hero */}
            <section className="insp-hero">
                <div className="insp-hero-overlay"></div>
                <div className="insp-hero-content">
                    <span className="insp-label">Inspiration</span>
                    <h1 className="insp-hero-title">
                        Find Your <span className="gold-text">Signature Style</span>
                    </h1>
                    <p className="insp-hero-desc">
                        Explore curated looks and timeless aesthetics that define the modern gentleman.
                    </p>
                </div>
            </section>

            {/* Style Cards */}
            <section className="insp-styles-section">
                <div className="insp-container">
                    <h2 className="insp-section-title">Style <span className="gold-text">Directions</span></h2>
                    <div className="insp-styles-grid">
                        {inspirations.map((item, i) => (
                            <div className="insp-style-card" key={i}>
                                <div className="insp-style-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="insp-gallery-section">
                <div className="insp-container">
                    <h2 className="insp-section-title">Curated <span className="gold-text">Looks</span></h2>
                    <div className="insp-gallery-grid">
                        {gallery.map((item, i) => (
                            <div className="insp-gallery-card" key={i}>
                                <div className="gallery-placeholder" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <span className="gallery-tag">{item.tag}</span>
                                        <span className="gallery-label" style={{ color: '#fff', fontWeight: 600 }}>{item.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Inspiration;
