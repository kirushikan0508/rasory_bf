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
                title="Präzision in jeder Falte"
                subtitle="Massgeschneiderte Hosen"
                description="Erleben Sie perfekte Passform und unübertroffenen Komfort mit unseren massgeschneiderten Hosen, genau nach Ihren Massen und Vorlieben gefertigt."
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
