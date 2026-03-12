import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InspirationHero from '../components/inspiration/InspirationHero';
import InspirationTitle from '../components/inspiration/InspirationTitle';
import InspirationGallery from '../components/inspiration/InspirationGallery';
import InspirationCTA from '../components/inspiration/InspirationCTA';
import './Inspiration.css';

const Inspiration = () => {
    return (
        <div className="insp-page">
            <Navbar />
            <InspirationHero />
            <InspirationTitle />
            <InspirationGallery />
            <InspirationCTA />
            <Footer />
        </div>
    );
};

export default Inspiration;
