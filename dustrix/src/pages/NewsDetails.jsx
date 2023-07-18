import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogDetails from '../components/BlogDetails';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';

function NewsDetails() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="News Details" currentPage="News Details" />
            <BlogDetails />
            <Footer1 />
        </>
    );
}

export default NewsDetails;
