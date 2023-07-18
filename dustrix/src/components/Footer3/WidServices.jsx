import React from 'react';
import { Link } from 'react-router-dom';

function WidServices() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Services</h4>
            </div>
            <ul>
                <li>
                    <Link to="/services">Energy and Utilities</Link>
                </li>
                <li>
                    <Link to="/services">Communication Services</Link>
                </li>
                <li>
                    <Link to="/services">Internet of Things</Link>
                </li>
                <li>
                    <Link to="/services">Product Development</Link>
                </li>
                <li>
                    <Link to="/services">Industrial Automation</Link>
                </li>
                <li>
                    <Link to="/services">Artificial Intelligence</Link>
                </li>
            </ul>
        </div>
    );
}

export default WidServices;
