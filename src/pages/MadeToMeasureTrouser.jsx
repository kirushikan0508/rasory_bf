import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import TrouserHero from '../components/TrouserHero';
import TrouserIntro from '../components/TrouserIntro';
import TrouserRow from '../components/TrouserRow';
import TrouserStyle from '../components/TrouserStyle';
import TrouserStrip from '../components/TrouserStrip';
import TrouserConsult from '../components/TrouserConsult';

import './MadeToMeasureTrouser.css';

const MadeToMeasureTrouser = () => {
    return (
        <div className="trouser-page">
            <Navbar />
            <TrouserHero />
            <TrouserIntro />
            <TrouserRow />
            <TrouserStyle />
            <TrouserStrip />
            <TrouserConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureTrouser;
