import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCategory({ link, category }) {
    return (
        <>
            <li>
                <Link to={link}>{category}</Link>
            </li>
        </>
    );
}

export default ServiceCategory;
