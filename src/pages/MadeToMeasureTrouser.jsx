import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import Hero from '../components/ui/Hero';
import TrouserIntro from '../components/madetomeasure/trousers/TrouserIntro';
import TrouserStyle from '../components/madetomeasure/trousers/TrouserStyle';
import TrouserStrip from '../components/madetomeasure/trousers/TrouserStrip';
import TrouserConsult from '../components/madetomeasure/trousers/TrouserConsult';
import Grid from '../components/madetomeasure/trousers/GridImage';
import Consultant from "../components/ConsultingSection"

import panthero from "../assets/trouser-hero.png";

import './MadeToMeasureTrouser.css';

const MadeToMeasureTrouser = () => {
    return (
        <div className="trouser-page">
            <Navbar />
            <Hero
                title="Precision in Every Fold"
                subtitle="Custom Tailored Trousers"
                description="Experience perfect fit and unmatched comfort with our bespoke trousers, tailored to your exact measurements and preference."
                imageSrc={panthero}
                showActions={false}
            />
            <TrouserIntro />
            <Grid />
            <TrouserStyle />
            <TrouserStrip />
            {/* <TrouserConsult /> */}
            <Consultant />           
            <Footer />
        </div>
    );
};

export default MadeToMeasureTrouser;
