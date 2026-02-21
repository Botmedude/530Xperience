import React, { useState, useEffect } from 'react';
import logo from '../assets/530_Logo_Rectangulo.svg';
import './Header.css';

const NAV_LINKS = [
    { label: 'MENSWEAR', href: '#man' },
    { label: 'WOMENSWEAR', href: '#woman' },
    { label: 'ARCHIVE', href: '#archive' },
    { label: 'NEW_DROP', href: '#products' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
            {/* ── Promo Bar ── */}
            <div className="header-promo">
                <span className="header-promo__text">
                    &gt; SECURE_CONNECTION_ESTABLISHED // ENCRYPTION: <strong>ACTIVE</strong> // SYSTEM_ONLINE
                </span>
            </div>

            {/* ── Main Nav ── */}
            <nav className="header-nav">
                {/* Left: Nav Links */}
                <ul className="header-nav__links header-nav__links--left">
                    {NAV_LINKS.slice(0, 2).map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="header-nav__link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Center: Logo */}
                <a href="/" className="header-logo">
                    <img src={logo} alt="530X Logo" className="header-logo__img" />
                </a>

                {/* Right: Nav Links + Icons */}
                <ul className="header-nav__links header-nav__links--right">
                    {NAV_LINKS.slice(2).map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="header-nav__link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="header-icon-btn" aria-label="Search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className="header-icon-btn" aria-label="Cart">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
