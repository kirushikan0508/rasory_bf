import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ProductGrid from '../components/ProductGrid';
import QuoteSection from '../components/QuoteSection';
import MaterialsSection from '../components/MaterialsSection';
import ConsultingSection from '../components/ConsultingSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Introduction />
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
