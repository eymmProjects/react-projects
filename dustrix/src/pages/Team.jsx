import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Portfolio1 from '../components/Portfolio1';
import SkillSet from '../components/SkillSet';
import TeamMembers from '../components/TeamMembers';

function Team() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="Our Expert Team" currentPage="Team" />
            <TeamMembers />
            <SkillSet />
            <Portfolio1 />
            <Footer1 />
        </>
    );
}

export default Team;
