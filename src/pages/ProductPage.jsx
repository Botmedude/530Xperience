import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [activeImage, setActiveImage] = useState(0);

    const sizes = ['S', 'M', 'L', 'XL'];

    useEffect(() => {
        // En un caso real, esto sería una llamada a una API
        const foundProduct = products.find(p => p.id === id);
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="product-page error-container">
                <div className="error-box">
                    <h2>ERROR: PRODUCT_NOT_FOUND</h2>
                    <p>SYSTEM LOG: The requested item `{id}` does not exist in the current database.</p>
                    <Link to="/" className="btn-return">[ RETURN_HOME ]</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="product-page">
            <div className="product-container">
                {/* BACK BUTTON */}
                <div className="product-nav">
                    <Link to="/">&lt; BACK_TO_INDEX</Link>
                </div>

                {/* MAIN GRID */}
                <div className="product-grid-layout">
                    {/* LEFT: GALLERY */}
                    <div className="gallery-section">
                        <motion.div
                            className="main-image-wrap"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={product.images[activeImage]}
                                alt={product.title}
                                className="main-image"
                            />
                            <div className="image-overlay-tech">
                                <span>RENDER_V1.{activeImage + 1}</span>
                                <span>UID: {product.id.split('-').pop()}</span>
                            </div>
                        </motion.div>

                        <div className="thumbnail-strip">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    className={`thumb-btn ${activeImage === idx ? 'active' : ''}`}
                                    onClick={() => setActiveImage(idx)}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DETAILS */}
                    <div className="details-section">
                        <motion.div
                            className="details-header"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="product-title">{product.title.replace(/_/g, ' ')}</h1>
                            <div className="product-meta">
                                <span className="meta-item tech-mono">ID: {product.id.toUpperCase()}</span>
                                <span className="meta-item tech-mono">CAT: {product.category.toUpperCase()}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="price-block"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="currency-symbol">$</span>
                            <span className="price-value">{product.price.toFixed(2)}</span>
                            <span className="currency-code">USD</span>
                        </motion.div>

                        <motion.div
                            className="specs-block tech-mono"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="spec-row">
                                <span className="spec-label">MATERIAL:</span>
                                <span className="spec-value">100% HEAVYWEIGHT COTTON // 280GSM</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">FIT:</span>
                                <span className="spec-value">BOXY // OVERSIZED DROP SHOULDER</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">CARE:</span>
                                <span className="spec-value">COLD WASH // DO NOT TUMBLE DRY</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="size-selector"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label className="tech-mono">SELECT_SIZE:</label>
                            <div className="size-buttons">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        [{size}]
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="action-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <button
                                className={`add-cart-massive ${!selectedSize ? 'disabled' : ''}`}
                                disabled={!selectedSize}
                                onClick={() => alert(`SYSTEM MSG: ADDED TO CART -> ${product.title} (SIZE: ${selectedSize})`)}
                            >
                                {selectedSize ? '[ ADD_TO_CART ]' : '[ REQ: SELECT_SIZE ]'}
                            </button>
                            <div className="shipping-notice tech-mono">
                                {'\u003E'} WORLDWIDE_SHIPPING_AVAILABLE
                                <br />
                                {'\u003E'} EST. DISPATCH: 24-48HRS
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
