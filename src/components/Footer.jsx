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
                            Eleganz durch Massanfertigung. Erleben Sie die perfekte Passform mit Rasory.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Schnelle Links</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/about">Über uns</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/inspiration">Inspiration</Link></li>
                            <li><Link to="/price-list">Preisliste</Link></li>
                        </ul>
                    </div>

                    {/* Made to Measure Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Massanfertigung</h4>
                        <ul className="footer-col-list">
                            <li><Link to="/made-to-measure/suit">Massgeschneiderte Anzüge</Link></li>
                            <li><Link to="/made-to-measure/shirt">Massgeschneiderte Hemden</Link></li>
                            <li><Link to="/made-to-measure/trouser">Massgeschneiderte Hosen</Link></li>
                            <li><Link to="/made-to-measure/jacket">Massgeschneiderte Jacken</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Kontakt</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={16} className="footer-contact-icon" />
                                <span>Waaghaus-Passage 8<br />3011 Bern</span>
                            </li>
                            <li>
                                <Phone size={16} className="footer-contact-icon" />
                                <span>+41 78 312 41 88</span>
                            </li>
                            <li>
                                <Mail size={16} className="footer-contact-icon" />
                                <span>store@rasory.ch</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rasory Tailoring. Alle Rechte vorbehalten.</p>
                    <div className="footer-legal">
                        <a href="#">Datenschutzrichtlinie</a>
                        <a href="#">Nutzungsbedingungen</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
