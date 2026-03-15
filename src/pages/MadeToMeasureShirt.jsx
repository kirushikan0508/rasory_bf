import React from 'react';

// Components
import ShirtIntro from '../components/madetomeasure/shirts/ShirtIntro';
import ShirtPersonal from '../components/madetomeasure/shirts/ShirtPersonal';
import ShirtConsult from '../components/madetomeasure/shirts/ShirtConsult';
import Detail from '../components/madetomeasure/shirts/Detail';
import Fabric from '../components/madetomeasure/shirts/ShirtFabric';
import Hero from '../components/ui/Hero';
import Grid from "../components/madetomeasure/shirts/GridImage"
import Consultant from "../components/ConsultingSection"

import './MadeToMeasureShirt.css';

const MadeToMeasureShirt = () => {
    return (
        <div className="shirt-page">
            <Hero
                title="Die perfekte Passform, neu definiert"
                subtitle="Premium Masshemden"
                description="Von der Stoffauswahl bis zum letzten Stich werden unsere massgeschneiderten Hemden so gefertigt, dass sie unvergleichlichen Komfort und Stil bieten."
                imageSrc="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1920"
                showActions={false}
            />
            <ShirtIntro />
            <Grid />
            <Fabric />
            <ShirtPersonal />
            {/* <ShirtConsult /> */}
            {/* <Detail /> */}
            <Consultant />
        </div>
    );
};

export default MadeToMeasureShirt;
