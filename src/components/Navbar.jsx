import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import ThemeToggle from './ui/ThemeToggle';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const menuItems = [
        { name: 'About', path: '/about' },
        { name: 'Inspiration', path: '/inspiration' },
        { name: 'Store', path: '/store' },
        { name: 'Price List', path: '/price-list' },
        {
            name: 'MADE-TO-MEASURE',
            path: '#',
            dropdown: [
                { name: 'Tailor-Made Shirt', path: '/made-to-measure/shirt' },
                { name: 'Tailor-Made Trouser', path: '/made-to-measure/trouser' },
                { name: 'Tailor-Made Suits', path: '/made-to-measure/suit' },
                { name: 'Tailor-Made Jacket', path: '/made-to-measure/jacket' },
            ]
        },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/" className="logo">RASORY</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={item.dropdown ? 'has-dropdown' : ''}
                            onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                            onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
                        >
                            {item.dropdown ? (
                                <div className="nav-item" style={{ cursor: 'pointer' }}>
                                    {item.name}
                                    <ChevronDown size={14} className="dropdown-icon" />
                                </div>
                            ) : (
                                <Link to={item.path} className="nav-item">
                                    {item.name}
                                </Link>
                            )}

                            {item.dropdown && (
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.2 }}
                                            className="simple-dropdown"
                                        >
                                            <ul className="simple-dropdown-list">
                                                {item.dropdown.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link to={subItem.path} className="simple-dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions desktop-only">
                    {/* <ThemeToggle /> */}
                    <button className="cta-button">Book Appointment</button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-actions">
                    {/* <ThemeToggle /> */}
                    <button className="mobile-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide-in */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="mobile-menu"
                    >
                        <ul className="mobile-nav-links">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    {item.dropdown ? (
                                        <div className="mobile-dropdown-container">
                                            <div className="mobile-nav-item" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                                                {item.name} <ChevronDown size={18} />
                                            </div>
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.ul
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="mobile-sub-menu"
                                                    >
                                                        {item.dropdown.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <Link to={subItem.path} onClick={toggleMobileMenu}>{subItem.name}</Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link to={item.path} onClick={toggleMobileMenu}>{item.name}</Link>
                                    )}
                                </li>
                            ))}
                            <li>
                                <button className="cta-button mobile-cta" onClick={toggleMobileMenu}>
                                    Book Appointment
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
