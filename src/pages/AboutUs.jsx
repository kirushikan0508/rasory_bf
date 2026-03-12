import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutStrip from '../components/about/AboutStrip';
import AboutValues from '../components/about/AboutValues';
import AboutQuote from '../components/about/AboutQuote';
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
