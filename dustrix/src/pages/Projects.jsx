import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import ProjectFilter from '../components/ProjectFilter';

function Projects() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="Case Study" currentPage="Project" />
            <ProjectFilter />
            <Footer1 />
        </>
    );
}

export default Projects;
