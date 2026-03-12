import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import SuitHero from '../components/SuitHero';
import SuitIntro from '../components/SuitIntro';
import SuitStoreStrip from '../components/SuitStoreStrip';
import SuitDesc from '../components/SuitDesc';
import SuitRow from '../components/SuitRow';
import SuitFabrics from '../components/SuitFabrics';
import SuitQuality from '../components/SuitQuality';
import SuitConsult from '../components/SuitConsult';

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
