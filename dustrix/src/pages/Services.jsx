import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from '../components/Services2';

function Services() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} currentPage="Services" heading="What We Do" />
            <Services2 />
            <Process />
            <ProjectFilter2 />
            <Footer1 />
        </>
    );
}

export default Services;
