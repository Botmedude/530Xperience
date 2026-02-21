import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-outer">
            <div className="footer-inner">
                {/* Column 1: Brand */}
                <div className="footer-col">
                    <div className="footer-brand">53ØX</div>
                    <div className="footer-item footer-location">Engineered in Mexico City</div>
                </div>

                {/* Column 2: Navigation */}
                <div className="footer-col">
                    <div className="footer-label">NAVIGATE</div>
                    <a href="#" className="footer-item">COLLECTIONS</a>
                    <a href="#products" className="footer-item">MENSWEAR</a>
                    <a href="#products" className="footer-item">WOMENSWEAR</a>
                    <a href="#drop-access" className="footer-item">DROP_ACCESS</a>
                </div>

                {/* Column 3: Info */}
                <div className="footer-col">
                    <div className="footer-label">INFO</div>
                    <a href="/about" className="footer-item">ABOUT_US</a>
                    <a href="/shipping" className="footer-item">SHIPPING_POLICY</a>
                    <a href="/returns" className="footer-item">RETURNS</a>
                    <a href="/terms" className="footer-item">TERMS_OF_SERVICE</a>
                </div>

                {/* Column 4: Connect */}
                <div className="footer-col">
                    <div className="footer-label">CONNECT</div>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-item">INSTAGRAM</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-item">TIKTOK</a>
                    <a href="mailto:hello@fivethirty.store" className="footer-item">MAIL</a>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-copyright">
                © 2026 FIVETHIRTY XPERIENCE // ALL_RIGHTS_RESERVED // SS26_COLLECTION
            </div>
        </footer>
    );
};

export default Footer;
