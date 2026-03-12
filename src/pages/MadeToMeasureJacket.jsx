import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import JacketHero from '../components/JacketHero';
import JacketIntro from '../components/JacketIntro';
import JacketRow from '../components/JacketRow';
import JacketVersatile from '../components/JacketVersatile';
import JacketConsult from '../components/JacketConsult';

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
