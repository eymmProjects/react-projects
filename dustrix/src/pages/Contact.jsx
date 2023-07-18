import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';

function Contact() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="Contact Us" currentPage="Contact" />
            <ContactUs />
            <ContactForm title="Write Message" heading="Get In Touch" />
            <Footer1 />
        </>
    );
}

export default Contact;
