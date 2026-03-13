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

import './MadeToMeasureJacket.css';

const MadeToMeasureJacket = () => {
    return (
        <div className="jacket-page">
            <Navbar />
            <Hero 
                title="Crafted for the Modern Gentleman"
                subtitle="Bespoke Jackets & Blazers"
                description="Experience the pinnacle of sartorial elegance with our custom-tailored jackets, designed to enhance your presence."
                imageSrc="https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=2000"
            />
            <JacketIntro />
            <Grid />
            <JacketVersatile />
            <JacketConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureJacket;
