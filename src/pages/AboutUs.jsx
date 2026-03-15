import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutStory from '../components/about/AboutStory';
import AboutStrip from '../components/about/AboutStrip';
import AboutValues from '../components/about/AboutValues';
import AboutQuote from '../components/about/AboutQuote';
import Hero from '../components/ui/Hero';

import hero from "../assets/about-hero.png"
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-page">
            <Navbar />
            <Hero 
                title="Unser Erbe der Eleganz"
                subtitle="Die Rasory Geschichte"
                description="Entdecken Sie die Leidenschaft, das Erbe und die kompromisslose Handwerkskunst hinter unserer Massschneiderei."
                imageSrc={hero}
                showActions={false}
                // secondaryBtnText="Meet the Tailor"
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
