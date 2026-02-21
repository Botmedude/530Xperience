import React from 'react';
import logoAlt from '../assets/530_Logo_Rectangulo_Alternate.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-outer">
            <div className="footer-inner">
                {/* Column 1: Brand */}
                <div className="footer-col">
                    <img src={logoAlt} alt="530X" className="footer-logo" />
                    <div className="footer-item footer-location">Engineered in Mexico City</div>
                </div>

                {/* Column 2: Product */}
                <div className="footer-col">
                    <div className="footer-label">COLLECTION</div>
                    <a href="#products" className="footer-item">NEW_DROP</a>
                    <a href="#man" className="footer-item">MENSWEAR</a>
                    <a href="#woman" className="footer-item">WOMENSWEAR</a>
                    <a href="#archive" className="footer-item">ARCHIVE</a>
                </div>

                {/* Column 3: Categories */}
                <div className="footer-col">
                    <div className="footer-label">INFORMATION</div>
                    <a href="#" className="footer-item">LOOKBOOK</a>
                    <a href="#drop-access" className="footer-item">EARLY_ACCESS</a>
                    <a href="/about" className="footer-item">ABOUT_BRAND</a>
                    <a href="/shipping" className="footer-item">SHIPPING</a>
                </div>

                {/* Column 4: Social */}
                <div className="footer-col">
                    <div className="footer-label">SOCIAL_MEDIA</div>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-item">INSTAGRAM</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-item">TIKTOK</a>
                    <a href="mailto:hello@fivethirty.store" className="footer-item">EMAIL_US</a>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-copyright">
                © 2026 FIVETHIRTY_XPERIENCE // ALL_RIGHTS_RESERVED // SYSTEM_VERSION_26.0
            </div>
        </footer>
    );
};

export default Footer;
