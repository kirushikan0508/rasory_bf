import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Components
import Hero from '../components/ui/Hero';
import TrouserIntro from '../components/madetomeasure/trousers/TrouserIntro';
import TrouserRow from '../components/madetomeasure/trousers/TrouserRow';
import TrouserStyle from '../components/madetomeasure/trousers/TrouserStyle';
import TrouserStrip from '../components/madetomeasure/trousers/TrouserStrip';
import TrouserConsult from '../components/madetomeasure/trousers/TrouserConsult';

import './MadeToMeasureTrouser.css';

const MadeToMeasureTrouser = () => {
    return (
        <div className="trouser-page">
            <Navbar />
            <Hero
                title="Precision in Every Fold"
                subtitle="Custom Tailored Trousers"
                description="Experience perfect fit and unmatched comfort with our bespoke trousers, tailored to your exact measurements and preference."
                imageSrc="https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=2000"
            />
            <TrouserIntro />
            <TrouserRow />
            <TrouserStyle />
            <TrouserStrip />
            <TrouserConsult />
            <Footer />
        </div>
    );
};

export default MadeToMeasureTrouser;
