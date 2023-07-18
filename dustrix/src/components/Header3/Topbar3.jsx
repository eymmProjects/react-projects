import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Topbar3() {
    return (
        <div className="top-bar style-3 d-none d-sm-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-data">
                            <ul>
                                <li>
                                    <AiOutlineMail
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    info@webexample.com
                                </li>
                                <li>
                                    <AiOutlinePhone
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    987 878 787 87
                                </li>
                                <li>
                                    <FaMapMarkerAlt
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    12/A, New Street, NYC
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="lan-select">
                            <form>
                                <select id="lan">
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Bangla</option>
                                    <option>Hindi</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar3;
