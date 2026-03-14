import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <Navbar />
            <Hero 
                title="Crafted for the Modern Gentleman"
                subtitle="Bespoke Jackets & Blazers"
                description="Experience the pinnacle of sartorial elegance with our custom-tailored jackets, designed to enhance your presence."
                imageSrc={heroimage}
                showActions={false}
            />
            <JacketIntro />
            <Grid />
            <JacketVersatile />
            {/* <JacketConsult /> */}
            <Consultant />
            <Footer />
        </div>
    );
};

export default MadeToMeasureJacket;
