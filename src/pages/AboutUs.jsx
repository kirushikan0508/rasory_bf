import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutStory from '../components/about/AboutStory';
import AboutStrip from '../components/about/AboutStrip';
import AboutValues from '../components/about/AboutValues';
import AboutQuote from '../components/about/AboutQuote';
import Hero from '../components/ui/Hero';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-page">
            <Navbar />
            <Hero 
                title="Our Legacy of Elegance"
                subtitle="The Rasory Story"
                description="Discover the passion, heritage, and uncompromising craftsmanship behind our bespoke tailoring."
                imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1920"
                secondaryBtnText="Meet the Tailor"
            />
            <AboutStory />
            <AboutStrip />
            <AboutValues />
            <AboutQuote />
            <Footer />
        </div>
    );
};

export default AboutUs;
