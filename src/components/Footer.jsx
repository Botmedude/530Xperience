import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-outer">
            <div className="footer-inner">
                {/* Column 1: Brand */}
                <div className="footer-col">
                    <div className="footer-brand">53ØS</div>
                    <div className="footer-item footer-location">Engineered in Mexico City</div>
                </div>

                {/* Column 2: Sitemap */}
                <div className="footer-col">
                    <div className="footer-label">SITEMAP</div>
                    <a href="#hero" className="footer-item">HOME</a>
                    <a href="#manifesto" className="footer-item">MANIFESTO</a>
                    <a href="#pipeline" className="footer-item">PIPELINE</a>
                    <a href="#contact" className="footer-item">CONTACT</a>
                </div>

                {/* Column 3: Legal */}
                <div className="footer-col">
                    <div className="footer-label">LEGAL</div>
                    <a href="/terms" className="footer-item">TERMS_OF_SERVICE</a>
                    <a href="/privacy" className="footer-item">PRIVACY_PROTOCOL</a>
                    <a href="/.well-known/security.txt" className="footer-item">SECURITY.TXT</a>
                </div>

                {/* Column 4: Connect */}
                <div className="footer-col">
                    <div className="footer-label">CONNECT</div>
                    <a href="https://linkedin.com/company/fivethirty-systems" target="_blank" rel="noopener noreferrer" className="footer-item">LINKEDIN</a>
                    <a href="https://github.com/fivethirty-systems" target="_blank" rel="noopener noreferrer" className="footer-item">GITHUB</a>
                    <a href="mailto:root@fivethirty.systems" className="footer-item">MAIL_TO_ROOT</a>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-copyright">
                © 2026 FIVETHIRTY SYSTEMS // ALL_RIGHTS_RESERVED // BUILD_VERSION_2.1.0
            </div>
        </footer>
    );
};

export default Footer;
