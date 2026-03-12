import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ProductGrid from '../components/home/ProductGrid';
import QuoteSection from '../components/home/QuoteSection';
import MaterialsSection from '../components/home/MaterialsSection';
import ConsultingSection from '../components/home/ConsultingSection';
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
