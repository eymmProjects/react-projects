import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogPosts from '../components/BlogPosts';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';

function News() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="News Feeds" currentPage="News" />
            <BlogPosts />
            <Footer1 />
        </>
    );
}

export default News;
