import React from 'react';
import { motion } from 'framer-motion';
import './ProductGrid.css';

const products = [
    {
        subtitle: "Elegance that inspires",
        buttonText: "TAILOR-MADE SUITS",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
        link: "#suits"
    },
    {
        subtitle: "Feels like a second skin",
        buttonText: "MADE-TO-MEASURE SHIRTS",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
        link: "#shirts"
    },
    {
        subtitle: "Comfort and elegance made to measure",
        buttonText: "TAILOR-MADE TROUSERS",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
        link: "#trousers"
    },
    {
        subtitle: "Focus on your individual style",
        buttonText: "MADE-TO-MEASURE JACKET",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
        link: "#jackets"
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
                            whileInView={{ opacity: 1, y: 0 }}
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
