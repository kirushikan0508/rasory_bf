import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/home/ProductGrid';
import QuoteSection from '../components/home/QuoteSection';
import MaterialsSection from '../components/home/MaterialsSection';
import ConsultingSection from '../components/ConsultingSection';
import Footer from '../components/Footer';
import Hero from '../components/ui/Hero';

import Sample from '../components/home/Introduction'

function Home() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero
                    title={<>Tailored to Your <br /><span className="gold-text">Presence</span></>}
                    description="Elevate your personal style with bespoke craftsmanship. Every stitch is a statement of power, elegance, and individuality."
                    videoSrc="https://cdn.pixabay.com/video/2024/03/29/206029_large.mp4"
                    imageSrc="https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=2000"
                />
                <Sample />
                <ProductGrid />
                <QuoteSection />
                <MaterialsSection />
                <ConsultingSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
