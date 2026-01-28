import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service, onBack, onContact }) => {
    if (!service) return null;

    return (
        <div className="service-detail-container">
            <div className="detail-header">
                <div className="section-label">SPEC_SHEET // {service.id}</div>
                <h2 className="detail-title">{service.title}</h2>
            </div>

            <div className="detail-body">
                <div className="detail-section">
                    <div className="section-label">CONCEPT</div>
                    <div className="section-content highlight">
                        "{service.concept}"
                    </div>
                </div>

                <div className="detail-section">
                    <div className="section-label">TECHNICAL_SPECS</div>
                    <div className="section-content">
                        {service.specs}
                    </div>
                </div>

                <div className="detail-section">
                    <div className="section-label">TECH_STACK</div>
                    <div className="section-content">
                        [{service.techStack}]
                    </div>
                </div>

                <div className="detail-section">
                    <div className="section-label">DELIVERABLES</div>
                    <div className="section-content">
                        {service.deliverables}
                    </div>
                </div>
            </div>

            <div className="detail-footer">
                <button className="detail-btn" onClick={onBack}>
                    &lt; VOLVER_ROOT
                </button>
                <button className="detail-btn primary" onClick={onContact}>
                    [ INICIAR_PROYECTO ]
                </button>
            </div>
        </div>
    );
};

export default ServiceDetail;
