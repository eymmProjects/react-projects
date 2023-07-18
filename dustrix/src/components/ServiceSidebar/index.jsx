import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaMapMarkerAlt } from 'react-icons/fa';
import ServiceCategory from './ServiceCategory';
import ServiceContact from './ServiceContact';
import ServiceDownload from './ServiceDownload';

function ServiceSidebar() {
    return (
        <div className="service-details-sidebar">
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                    <h3>Service Category</h3>
                </div>
                <ul>
                    <ServiceCategory link="/service-details" category="General Contracting" />
                    <ServiceCategory link="/service-details" category="Appartment Design" />
                    <ServiceCategory link="/service-details" category="Building Construction " />
                    <ServiceCategory link="/service-details" category="Building Renovation" />
                    <ServiceCategory link="/service-details" category="Building Construction " />
                    <ServiceCategory link="/service-details" category="Building Renovation" />
                </ul>
            </div>
            <div className="single-service-sidebar">
                <div className="sidebar-title">
                    <h3>Download Brochures</h3>
                </div>
                <div className="brochures-download">
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PDF"
                        icon={<FaFilePdf style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .DOC"
                        icon={<FaFileWord style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PPT"
                        icon={
                            <FaFilePowerpoint style={{ marginTop: '-5px', marginRight: '5px' }} />
                        }
                    />
                </div>
            </div>
            <div className="single-service-sidebar site_info_widget">
                <div className="sidebar-title">
                    <h3>Contact Us</h3>
                </div>
                <div className="contact-us">
                    <ServiceContact
                        title="Phone Number"
                        text="908 9098 987 98"
                        icon={<AiOutlinePhone />}
                    />
                    <ServiceContact
                        title="Email Address"
                        text="info@supportexam.com"
                        icon={<AiOutlineMail />}
                    />
                    <ServiceContact
                        title="Office Address"
                        text="14/A, Ping Tower, NYC"
                        icon={<FaMapMarkerAlt />}
                    />
                    {/* <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-phone" />
                        </div>
                        <div className="contact-info">
                            <span>Phone Number</span>
                            <p>908 9098 987 98</p>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-envelope" />
                        </div>
                        <div className="contact-info">
                            <span>Email Address</span>
                            <p>info@supportexam.com</p>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="icon">
                            <i className="fal fa-map-marker-alt" />
                        </div>
                        <div className="contact-info">
                            <span>Office Address</span>
                            <p>14/A, Ping Tower, NYC</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ServiceSidebar;
