import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.875323165521!2d144.90402300269133!3d-37.792722838344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612018663424!5m2!1sen!2sbd"
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
            />
        </div>
    );
}

export default Map;
