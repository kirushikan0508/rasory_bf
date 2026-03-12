import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">

                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-icon">✂</span>
                            <span className="footer-logo-text">RASORY</span>
                        </div>
                        <p className="footer-brand-desc">
                            Crafting elegance through made-to-measure tailoring. Experience the perfect fit with Rasory.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/inspiration">Inspiration</Link></li>
                            <li><Link to="/price-list">Price List</Link></li>
                        </ul>
                    </div>

                    {/* Made to Measure Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Made to Measure</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/made-to-measure/suit">Bespoke Suits</Link></li>
                            <li><Link to="/made-to-measure/shirt">Custom Shirts</Link></li>
                            <li><Link to="/made-to-measure/trouser">Tailored Trousers</Link></li>
                            <li><Link to="/made-to-measure/jacket">Jackets &amp; Blazers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={16} className="footer-contact-icon" />
                                <span>123 Luxury Lane, Fashion District,<br />New York, NY 10012</span>
                            </li>
                            <li>
                                <Phone size={16} className="footer-contact-icon" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <Mail size={16} className="footer-contact-icon" />
                                <span>contact@rasory.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rasory Tailoring. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
