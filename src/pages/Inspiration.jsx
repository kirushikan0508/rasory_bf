import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Inspiration.css';

const Inspiration = () => {
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
            { threshold: 0.1 }
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

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600', alt: 'Navy suit style', size: 'tall' },
        { src: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600', alt: 'Tailor fitting', size: 'normal' },
        { src: 'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=600', alt: 'Formal suit', size: 'wide' },
        { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600', alt: 'Casual elegance', size: 'normal' },
        { src: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600', alt: 'Classic trousers', size: 'tall' },
        { src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=600', alt: 'Business shirt', size: 'normal' },
        { src: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600', alt: 'Walking style', size: 'normal' },
        { src: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600', alt: 'Accessories detail', size: 'normal' },
        { src: 'https://images.unsplash.com/photo-1584324204369-0268ec3b71eb?auto=format&fit=crop&q=80&w=600', alt: 'Watch and cuff', size: 'normal' },
    ];

    return (
        <div className="insp-page">
            <Navbar />

            {/* Full-Width Hero */}
            <section className="insp-hero">
                <img
                    src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=1920"
                    alt="Men in elegant suits"
                    className="insp-hero-img"
                />
                <div className="insp-hero-overlay"></div>
            </section>

            {/* Title Section */}
            <section className="insp-title-section" ref={addRef}>
                <div className="insp-title-container">
                    <h1 className="insp-main-title">Discover the variety of your outfits</h1>
                    <p className="insp-main-desc">
                        Sometimes all it takes is a small impulse to experience your own style in a new way.
                        With us you will not find any fixed rules, but countless ways to vary your look.
                        We show you creative combinations that stylishly enrich your everyday life –
                        whether for a business day, a relaxed evening or special occasions.
                        Be inspired and expand your fashion world – the perfect outfit for every moment.
                    </p>
                </div>
            </section>

            {/* Masonry Gallery */}
            <section className="insp-gallery-section">
                <div className="insp-gallery-container">
                    <div className="insp-masonry-grid">
                        {galleryImages.map((img, i) => (
                            <div
                                className={`insp-masonry-item insp-size-${img.size}`}
                                key={i}
                                ref={addRef}
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <img src={img.src} alt={img.alt} />
                                <div className="insp-img-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="insp-cta-section" ref={addRef}>
                <Link to="/booking">
                    <button className="insp-cta-btn">BOOK AN APPOINTMENT</button>
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default Inspiration;
