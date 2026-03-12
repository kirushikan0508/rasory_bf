import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import ShirtHero from '../components/ShirtHero';
import ShirtIntro from '../components/ShirtIntro';
import ShirtRow from '../components/ShirtRow';
import ShirtFabrics from '../components/ShirtFabrics';
import ShirtPersonal from '../components/ShirtPersonal';
import ShirtConsult from '../components/ShirtConsult';

import './MadeToMeasureShirt.css';

const MadeToMeasureShirt = () => {
    return (
        <div className="shirt-page">
            <Navbar />
            <ShirtHero />
            <ShirtIntro />
            <ShirtRow />
            <ShirtFabrics />
            <ShirtPersonal />
            <ShirtConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureShirt;
