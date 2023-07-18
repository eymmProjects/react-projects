import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';
import Sponsors from '../components/Sponsors';
import Timeline from '../components/Timeline';

function About() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Sponsors />
            <Timeline />
            <Footer1 />
        </>
    );
}

export default About;
