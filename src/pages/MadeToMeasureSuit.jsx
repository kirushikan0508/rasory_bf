import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import SuitIntro from '../components/madetomeasure/suits/SuitIntro';
import SuitStoreStrip from '../components/madetomeasure/suits/SuitStoreStrip';
import SuitDesc from '../components/madetomeasure/suits/SuitDesc';
import SuitRow from '../components/madetomeasure/suits/SuitRow';
import SuitFabrics from '../components/madetomeasure/suits/SuitFabrics';
import SuitQuality from '../components/madetomeasure/suits/SuitQuality';
import SuitConsult from '../components/madetomeasure/suits/SuitConsult';

import Hero from '../components/ui/Hero';

import './MadeToMeasureSuit.css';

const MadeToMeasureSuit = () => {
    return (
        <div className="suit-page">
            <Navbar />
            <Hero 
                title="Elegance Without Compromise"
                subtitle="Exquisite Two & Three Piece Suits"
                description="Masterfully crafted bespoke suits that embody your personal success and uncompromising standards of quality."
                imageSrc="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1920"
            />
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
