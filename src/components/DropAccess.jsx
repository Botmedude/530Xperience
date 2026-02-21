import React, { useState } from 'react';
import './DropAccess.css';

const DropAccess = () => {
    const [formData, setFormData] = useState({
        email: '',
        preference: '',
    });
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network request
        setTimeout(() => {
            setStatus('sent');
        }, 2500);
    };

    if (status === 'sending') {
        return (
            <section className="drop-outer">
                <div className="drop-container">
                    <div className="drop-status">
                        &gt; UPLOADING BYTES...<br />
                        <span className="blink">_</span>
                    </div>
                </div>
            </section>
        );
    }

    if (status === 'sent') {
        return (
            <section className="drop-outer">
                <div className="drop-container">
                    <div className="drop-status">
                        &gt; ACCESS_GRANTED.<br />
                        &gt; YOU'RE ON THE LIST. STAND BY FOR DROP_001.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="drop-outer" id="drop-access">
            <div className="drop-container">
                <div className="drop-header">
                    <h2 className="drop-title">VIP_DROP_ACCESS</h2>
                    <p className="drop-subtitle">&gt; EXCLUSIVE EARLY ACCESS TO LIMITED RELEASES</p>
                </div>

                <form onSubmit={handleSubmit} className="drop-form">
                    <div className="drop-group">
                        <label className="drop-label">EMAIL_ADDRESS</label>
                        <div className="drop-input-wrap">
                            <span className="drop-prompt">&gt;</span>
                            <input
                                type="email"
                                className="drop-input"
                                placeholder="your@address.node"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="drop-group">
                        <label className="drop-label">PREFERENCE</label>
                        <div className="drop-input-wrap">
                            <span className="drop-prompt">&gt;</span>
                            <input
                                type="text"
                                className="drop-input"
                                placeholder="M / W / ALL"
                                value={formData.preference}
                                onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                            />
                        </div>
                    </div>

                    <button type="submit" className="drop-submit">
                        [ REQUEST_ACCESS ]
                    </button>
                </form>
            </div>
        </section>
    );
};

export default DropAccess;
