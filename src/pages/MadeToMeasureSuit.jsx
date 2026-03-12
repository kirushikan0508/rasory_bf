import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import SuitHero from '../components/madetomeasure/suits/SuitHero';
import SuitIntro from '../components/madetomeasure/suits/SuitIntro';
import SuitStoreStrip from '../components/madetomeasure/suits/SuitStoreStrip';
import SuitDesc from '../components/madetomeasure/suits/SuitDesc';
import SuitRow from '../components/madetomeasure/suits/SuitRow';
import SuitFabrics from '../components/madetomeasure/suits/SuitFabrics';
import SuitQuality from '../components/madetomeasure/suits/SuitQuality';
import SuitConsult from '../components/madetomeasure/suits/SuitConsult';

import './MadeToMeasureSuit.css';

const MadeToMeasureSuit = () => {
    return (
        <div className="suit-page">
            <Navbar />
            <SuitHero />
            <SuitIntro />
            <SuitStoreStrip />
            <SuitDesc />
            <SuitRow />
            <SuitFabrics />
            <SuitQuality />
            <SuitConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureSuit;
