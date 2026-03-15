import React from 'react';
import InspirationTitle from '../components/inspiration/InspirationTitle';
import InspirationGallery from '../components/inspiration/InspirationGallery';
import InspirationCTA from '../components/inspiration/InspirationCTA';
import './Inspiration.css';

import Hero from '../components/ui/Hero';

const Inspiration = () => {
    return (
        <div className="insp-page">
            <Hero
                title="Eine Welt der modischen Inspiration"
                subtitle="Kuratierter Stil & Visuals"
                description="Entdecken Sie unsere Galerie klassischer und moderner Looks, um die perfekte Inspiration für Ihre nächste massgeschneiderte Kreation zu finden."
                imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920"
                // secondaryBtnText="See Gallery"
                showActions={false}
            />
            <InspirationTitle />
            <InspirationGallery />
            <InspirationCTA />
        </div>
    );
};

export default Inspiration;
