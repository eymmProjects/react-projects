import React from 'react';
import { Link } from 'react-router-dom';

function WidExplore() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Explore Other Pages</h4>
            </div>
            <div className="splite-menu d-flex justify-content-between">
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">Careers</Link>
                    </li>
                    <li>
                        <Link to="/team">Our Team</Link>
                    </li>
                    <li>
                        <Link to="/about">Approach</Link>
                    </li>
                    <li>
                        <Link to="/projects">Case Studies</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contact">Locations</Link>
                    </li>
                    <li>
                        <Link to="/about">Clients</Link>
                    </li>
                    <li>
                        <Link to="/contact">Help</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WidExplore;
