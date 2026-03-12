import React from 'react';
import logoPrincipal from '../assets/logos/logo-principal.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-eof">// EOF // FIVETHIRTY_SYSTEMS</div>

            <div className="footer-grid">
                {/* Column 1: Brand */}
                <div className="footer-brand">
                    <img src={logoPrincipal} alt="530 Systems" className="footer-logo-main" />
                    <p className="footer-tagline">— Engineered in Mexico City</p>
                </div>

                {/* Column 2: Collection */}
                <div>
                    <div className="footer-col-title">COLLECTION</div>
                    <a href="#products" className="footer-col-link">NEW_DROP</a>
                    <a href="#man" className="footer-col-link">MENSWEAR</a>
                    <a href="#woman" className="footer-col-link">WOMENSWEAR</a>
                    <a href="#archive" className="footer-col-link">ARCHIVE</a>
                </div>

                {/* Column 3: Information */}
                <div>
                    <div className="footer-col-title">INFORMATION</div>
                    <a href="#" className="footer-col-link">LOOKBOOK</a>
                    <a href="#drop-access" className="footer-col-link">EARLY_ACCESS</a>
                    <a href="/about" className="footer-col-link">ABOUT_BRAND</a>
                    <a href="/shipping" className="footer-col-link">SHIPPING</a>
                </div>

                {/* Column 4: Social */}
                <div>
                    <div className="footer-col-title">SOCIAL_MEDIA</div>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-col-link">INSTAGRAM</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-col-link">TIKTOK</a>
                    <a href="mailto:hello@fivethirty.store" className="footer-col-link">EMAIL_US</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    © 2026 FIVETHIRTY_XPERIENCE // ALL_RIGHTS_RESERVED // SYSTEM_VERSION_26.0
                </div>
            </div>
        </footer>
    );
};

export default Footer;
