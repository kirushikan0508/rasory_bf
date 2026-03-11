import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutStrip from '../components/AboutStrip';
import AboutValues from '../components/AboutValues';
import AboutQuote from '../components/AboutQuote';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-page">
            <Navbar />
            <AboutHero />
            <AboutStory />
            <AboutStrip />
            <AboutValues />
            <AboutQuote />
            <Footer />
        </div>
    );
};

export default AboutUs;
