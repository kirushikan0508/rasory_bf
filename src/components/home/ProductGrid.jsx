import React from 'react';
import { motion } from 'framer-motion';
import './ProductGrid.css';

const products = [
    {
        subtitle: "Elegance that inspires",
        buttonText: "TAILOR-MADE SUITS",
        image: "https://images.unsplash.com/photo-1594932224010-74f4raw-2a2?auto=format&fit=crop&q=80&w=800",
        link: "/made-to-measure/suit"
    },
    {
        subtitle: "Feels like a second skin",
        buttonText: "MADE-TO-MEASURE SHIRTS",
        image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?auto=format&fit=crop&q=80&w=800",
        link: "/made-to-measure/shirt"
    },
    {
        subtitle: "Comfort and elegance made to measure",
        buttonText: "TAILOR-MADE TROUSERS",
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
        link: "/made-to-measure/trouser"
    },
    {
        subtitle: "Focus on your individual style",
        buttonText: "MADE-TO-MEASURE JACKET",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        link: "/made-to-measure/jacket"
    }
];

const ProductGrid = () => {
    return (
        <section id="collection" className="product-grid section-padding">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-label">Collections</span>
                    <h2 className="section-title">Made-to-Measure Clothing</h2>
                    <p className="section-description">Here you will find our different areas in which we can realize your vision together.</p>
                </motion.div>

                <div className="cards-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, x: 0 }} // Corrected horizontal movement if needed, or kept consistent
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="product-card"
                        >
                            <div className="card-image-wrapper">
                                <img src={product.image} alt={product.buttonText} />
                                <div className="card-overlay"></div>
                            </div>

                            <div className="card-content">
                                <h3 className="card-subtitle">{product.subtitle}</h3>
                                <button className="pill-btn">
                                    {product.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
