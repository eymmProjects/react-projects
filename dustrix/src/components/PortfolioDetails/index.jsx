import React from 'react';
import galleryImg1 from '../../assets/img/portfolio/pd1.jpg';
import galleryImg2 from '../../assets/img/portfolio/pd2.jpg';
import galleryImg3 from '../../assets/img/portfolio/pd3.jpg';
import thumb from '../../assets/img/portfolio/project_details.jpg';
import detailsCardData from './detailsCardData';
import PortfolioDetailsCard from './PortfolioDetailsCard';
import PortfolioGallery from './PortfolioGallery';

function PortfolioDetails() {
    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div
                            className="project-thumb bg-cover"
                            style={{
                                backgroundImage: `url(${thumb})`,
                            }}
                        />
                        <div className="project-meta-data">
                            <div className="project-info">
                                <span>Clients</span>
                                <h3>Domal D. Williamson</h3>
                            </div>
                            <div className="project-info">
                                <span>Services</span>
                                <h3>Website Design</h3>
                            </div>
                            <div className="project-info">
                                <span>Keyword</span>
                                <h3>Development, UX, UI</h3>
                            </div>
                            <div className="project-info">
                                <a href="portfolio.html" className="theme-btn white">
                                    live preview
                                </a>
                            </div>
                        </div>
                        <div className="project-details-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.
                            </p>
                            <p>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit
                            </p>
                            <div className="row">
                                <PortfolioGallery galeryImg={galleryImg1} />
                                <PortfolioGallery galeryImg={galleryImg2} />
                                <PortfolioGallery galeryImg={galleryImg3} />
                            </div>

                            <h3>Careers Guidelines</h3>
                            <p>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium.
                            </p>

                            <h3>How We Solve This Project</h3>
                            <p>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {detailsCardData.map((data) => (
                        <PortfolioDetailsCard
                            key={data.id}
                            icon={data.icon}
                            heading={data.heading}
                            num={data.num}
                            text={data.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioDetails;
