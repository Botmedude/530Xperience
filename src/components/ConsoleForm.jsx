import React, { useState, useEffect } from 'react';
import './ConsoleForm.css';

const ConsoleForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        projectType: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network request
        setTimeout(() => {
            setStatus('sent');

            // Revert to dashboard after showing success message
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 2000);
    };

    if (status === 'sending') {
        return (
            <div className="console-form-container">
                <div className="console-status">
                    &gt; UPLOADING BYTES...<br />
                    <span className="blink">_</span>
                </div>
            </div>
        );
    }

    if (status === 'sent') {
        return (
            <div className="console-form-container">
                <div className="console-status">
                    &gt; MESSAGE SENT.<br />
                    &gt; TERMINATING CONNECTION...
                </div>
            </div>
        );
    }

    return (
        <div className="console-form-container">
            <div className="form-header">&gt; INICIANDO PROTOCOLO DE CONTACTO...</div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">USER_EMAIL</label>
                    <div className="cmd-input-wrapper">
                        <span className="cmd-prompt">&gt;</span>
                        <input
                            type="email"
                            className="console-input"
                            placeholder="user@network.node"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            autoFocus
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">PROJECT_TYPE</label>
                    <div className="cmd-input-wrapper">
                        <span className="cmd-prompt">&gt;</span>
                        <input
                            type="text"
                            className="console-input"
                            placeholder="WEB_APP / SECURITY_AUDIT / AUTOMATION"
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">MESSAGE_DATA</label>
                    <textarea
                        className="console-textarea"
                        placeholder="INIT_MESSAGE_SEQUENCE..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="console-btn">
                        [ EJECUTAR_ENVÍO ]
                    </button>
                    <button type="button" className="console-btn abort-btn" onClick={onClose}>
                        [ ABORTAR ]
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConsoleForm;
