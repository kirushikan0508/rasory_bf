import React from 'react';

// Components
import SuitIntro from '../components/madetomeasure/suits/SuitIntro';
import SuitStoreStrip from '../components/madetomeasure/suits/SuitStoreStrip';
import SuitDesc from '../components/madetomeasure/suits/SuitDesc';
import SuitRow from '../components/madetomeasure/suits/SuitRow';
import SuitFabrics from '../components/madetomeasure/suits/SuitFabrics';
import SuitQuality from '../components/madetomeasure/suits/SuitQuality';
import SuitConsult from '../components/madetomeasure/suits/SuitConsult';
import Consultant from "../components/ConsultingSection"

import Hero from '../components/ui/Hero';

import './MadeToMeasureSuit.css';

const MadeToMeasureSuit = () => {
    return (
        <div className="suit-page">
            <Hero 
                title="Eleganz ohne Kompromisse"
                subtitle="Exquisite Zwei- & Dreiteiler"
                description="Meisterhaft gefertigte Massanzüge, die Ihren persönlichen Erfolg und Ihre kompromisslosen Qualitätsansprüche verkörpern."
                imageSrc="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1920"
                showActions={false}
            />
            <SuitIntro />
            <SuitStoreStrip />
            <SuitDesc />
            <SuitRow />
            <SuitFabrics />
            <SuitQuality />
            {/* <SuitConsult /> */}
            <Consultant />
        </div>
    );
};

export default MadeToMeasureSuit;
