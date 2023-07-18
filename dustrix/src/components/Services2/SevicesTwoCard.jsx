import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SevicesTwoCard({ thumbnail, icon, heading, text }) {
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                />
                <div className="content">
                    <div className="case-cat">
                        <Link to="/services-details">{icon}</Link>
                    </div>
                    <h3>
                        <Link to="/services-details">{heading}</Link>
                    </h3>
                    <p>{text}</p>
                    <Link to="/services-details" className="read-btn">
                        Read More <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SevicesTwoCard;
