import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InspirationHero from '../components/InspirationHero';
import InspirationTitle from '../components/InspirationTitle';
import InspirationGallery from '../components/InspirationGallery';
import InspirationCTA from '../components/InspirationCTA';
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
