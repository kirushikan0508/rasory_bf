import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import JacketHero from '../components/madetomeasure/jackets/JacketHero';
import JacketIntro from '../components/madetomeasure/jackets/JacketIntro';
import JacketRow from '../components/madetomeasure/jackets/JacketRow';
import JacketVersatile from '../components/madetomeasure/jackets/JacketVersatile';
import JacketConsult from '../components/madetomeasure/jackets/JacketConsult';

import './MadeToMeasureJacket.css';

const MadeToMeasureJacket = () => {
    return (
        <div className="jacket-page">
            <Navbar />
            <JacketHero />
            <JacketIntro />
            <JacketRow />
            <JacketVersatile />
            <JacketConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureJacket;
