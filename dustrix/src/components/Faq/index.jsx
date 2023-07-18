import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {
    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="content-block">
                            <p>Get Answers</p>
                            <h1>Get every single answers from here.</h1>
                            <div className="bg-img">
                                <img src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-4 mt-xl-0">
                        <div className="faq-content">
                            <FaqAccordion
                                question="How Do We Manage Quality Assurance?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="With Diverse Capabilities And Extensive Manufacturing?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="You Can Rely On Amwerk As A Critical Part?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="How Do We Manage Quality Assurance?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                            <FaqAccordion
                                question="Appropriately Communicate One-To-One Technology?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
