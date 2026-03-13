import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import ShirtHero from '../components/madetomeasure/shirts/ShirtHero';
import ShirtIntro from '../components/madetomeasure/shirts/ShirtIntro';
import ShirtRow from '../components/madetomeasure/shirts/ShirtRow';
import ShirtPersonal from '../components/madetomeasure/shirts/ShirtPersonal';
import ShirtConsult from '../components/madetomeasure/shirts/ShirtConsult';
import Detail from '../components/madetomeasure/shirts/Detail';
import Fabric from '../components/madetomeasure/shirts/ShirtFabric';

import './MadeToMeasureShirt.css';

const MadeToMeasureShirt = () => {
    return (
        <div className="shirt-page">
            <Navbar />
            <ShirtHero />
            <ShirtIntro />
            <ShirtRow />
            <Fabric />
            <ShirtPersonal />
            <ShirtConsult />
            <Detail />
            <Footer />
        </div>
    );
};

export default MadeToMeasureShirt;
