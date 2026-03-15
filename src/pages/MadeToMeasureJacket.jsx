import React from 'react';

// Components
import JacketIntro from '../components/madetomeasure/jackets/JacketIntro';
import JacketRow from '../components/madetomeasure/jackets/JacketRow';
import JacketVersatile from '../components/madetomeasure/jackets/JacketVersatile';
import JacketConsult from '../components/madetomeasure/jackets/JacketConsult';
import Grid from '../components/madetomeasure/jackets/GridImage';
import Hero from '../components/ui/Hero';
import Consultant from "../components/ConsultingSection"

import heroimage from "../assets/jacket hero.png";

import './MadeToMeasureJacket.css';

const MadeToMeasureJacket = () => {
    return (
        <div className="jacket-page">
            <Hero 
                title="Gemacht für den modernen Gentleman"
                subtitle="Massgeschneiderte Sakkos & Blazer"
                description="Erleben Sie den Gipfel der modischen Eleganz mit unseren massgeschneiderten Sakkos, entworfen, um Ihre Präsenz zu unterstreichen."
                imageSrc={heroimage}
                showActions={false}
            />
            <JacketIntro />
            <Grid />
            <JacketVersatile />
            {/* <JacketConsult /> */}
            <Consultant />
        </div>
    );
};

export default MadeToMeasureJacket;
