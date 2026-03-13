import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import ShirtIntro from '../components/madetomeasure/shirts/ShirtIntro';
import ShirtPersonal from '../components/madetomeasure/shirts/ShirtPersonal';
import ShirtConsult from '../components/madetomeasure/shirts/ShirtConsult';
import Detail from '../components/madetomeasure/shirts/Detail';
import Fabric from '../components/madetomeasure/shirts/ShirtFabric';
import Hero from '../components/ui/Hero';
import Grid from "../components/madetomeasure/shirts/GridImage"

import './MadeToMeasureShirt.css';

const MadeToMeasureShirt = () => {
    return (
        <div className="shirt-page">
            <Navbar />
            <Hero
                title="The Perfect Fit, Redefined"
                subtitle="Premium Tailor-Made Shirts"
                description="From fabric selection to the final stitch, our custom shirts are crafted to provide unparalleled comfort and style."
                imageSrc="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1920"
            />
            <ShirtIntro />
            <Grid />
            <Fabric />
            <ShirtPersonal />
            {/* <ShirtConsult /> */}
            <Detail />
            <Footer />
        </div>
    );
};

export default MadeToMeasureShirt;
