import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import suits from "../../assets/MASSKLEIDUNG/suits/Rasory Massanzuge 06 HOME.jpg"
import shirts from "../../assets/MASSKLEIDUNG/shirts/Rasory Masshemd 06 HOME.jpg"
import pants from "../../assets/MASSKLEIDUNG/pants/Rasory Masshose 04 HOME.jpg"
import jacket from "../../assets/MASSKLEIDUNG/jacket/Rasory Masssako 01 HOME.jpg"
import './ProductGrid.css';

const products = [
    {
        subtitle: "Eleganz, die begeistert",
        buttonText: "massanzüge",
        image: suits,
        link: "/made-to-measure/suit"
    },
    {
        subtitle: "Fühlt sich an wie eine zweite Haut",
        buttonText: "masshemden",
        image: shirts,
        link: "/made-to-measure/shirt"
    },
    {
        subtitle: "Komfort und Eleganz nach Mass",
        buttonText: "masshose",
        image: pants,
        link: "/made-to-measure/trouser"
    },
    {
        subtitle: "ihr individueller Stil im Fokus",
        buttonText: "masssakko",
        image: jacket,
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
                    <span className="section-label">Kollektionen</span>
                    <h2 className="section-title">Massgeschneiderte Kleidung</h2>
                    <p className="section-description">Hier finden Sie unsere verschiedenen Bereiche, in denen wir gemeinsam Ihre Vision verwirklichen können.</p>
                </motion.div>

                <div className="cards-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, x: 0 }} // Corrected horizontal movement if needed, or kept consistent
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={product.link} className="product-card" style={{ display: 'block', textDecoration: 'none' }}>
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
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
