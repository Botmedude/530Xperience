import React, { useEffect, useState, useRef } from 'react';
import './Terminal.css';

const LOGS = [
    "> INICIALIZANDO KERNEL FIVETHIRTY...",
    "> CARGANDO MÓDULO: ARQ_WEB [OPTIMIZADO]",
    "> CARGANDO MÓDULO: AUTO_FLOW [ACTIVO]",
    "> ESTABLECIENDO HANDSHAKE SEGURO...",
    "> ACCESO CONCEDIDO."
];

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex < LOGS.length) {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, LOGS[currentLineIndex]]);
                setCurrentLineIndex(prev => prev + 1);
            }, 600); // Delay between lines
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex]);

    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <span className="terminal-title">SYS.MONITOR_v1.0</span>
                <div className="terminal-status-light"></div>
            </div>
            <div className="terminal-body font-mono">
                {lines.map((line, index) => (
                    <div key={index} className="terminal-line typing-effect">
                        <span className="prompt">$</span> {line}
                    </div>
                ))}
                <div className="cursor-block"></div>
            </div>
        </div>
    );
};

export default Terminal;
