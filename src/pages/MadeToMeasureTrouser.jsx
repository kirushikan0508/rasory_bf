import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import TrouserHero from '../components/madetomeasure/trousers/TrouserHero';
import TrouserIntro from '../components/madetomeasure/trousers/TrouserIntro';
import TrouserRow from '../components/madetomeasure/trousers/TrouserRow';
import TrouserStyle from '../components/madetomeasure/trousers/TrouserStyle';
import TrouserStrip from '../components/madetomeasure/trousers/TrouserStrip';
import TrouserConsult from '../components/madetomeasure/trousers/TrouserConsult';

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
