import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import PortfolioDetails from '../components/PortfolioDetails';

function ProjectDetails() {
    return (
        <>
            <Header1 />
            <PageBanner
                bannerBg={bannerBg}
                heading="Portfolio Details"
                currentPage="Portfolio Details"
            />
            <PortfolioDetails />
            <Footer1 />
        </>
    );
}

export default ProjectDetails;
