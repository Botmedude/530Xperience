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
                        &gt; ENVIANDO DATOS...<br />
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
                        &gt; ACCESO_CONCEDIDO.<br />
                        &gt; ESTÁS EN LA LISTA. PREPÁRATE PARA EL DROP_001.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="drop-outer" id="drop-access">
            <div className="drop-container">
                <div className="drop-header">
                    <h2 className="drop-title">ACCESO_ANTICIPADO</h2>
                    <p className="drop-subtitle">&gt; Primero en enterarte. Primero en comprar.</p>
                </div>

                <form onSubmit={handleSubmit} className="drop-form">
                    <div className="drop-group">
                        <label className="drop-label">CORREO_ELECTRÓNICO</label>
                        <div className="drop-input-wrap">
                            <span className="drop-prompt">&gt;</span>
                            <input
                                type="email"
                                className="drop-input"
                                placeholder="tu@correo.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="drop-group">
                        <label className="drop-label">PREFERENCIA</label>
                        <div className="drop-input-wrap">
                            <span className="drop-prompt">&gt;</span>
                            <input
                                type="text"
                                className="drop-input"
                                placeholder="H / M / AMBOS"
                                value={formData.preference}
                                onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                            />
                        </div>
                    </div>

                    <button type="submit" className="drop-submit">
                        [ SOLICITAR ACCESO ]
                    </button>
                </form>
            </div>
        </section>
    );
};

export default DropAccess;
