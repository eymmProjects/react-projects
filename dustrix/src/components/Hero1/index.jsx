import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import HeroBg1 from '../../assets/img/home1/hero1.jpg';

function Hero1() {
    return (
        <section className="hero-slide-wrapper hero-1">
            <Swiper className="hero-slider-active owl-carousel">
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{ backgroundImage: `url(${HeroBg1})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Global Automotive</h1>
                                        <Link to="/services" className="theme-btn">
                                            Our Services{' '}
                                            <BsArrowRight style={{ marginLeft: '10px' }} />
                                        </Link>
                                        <Link to="/about" className="theme-btn black">
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover"
                        style={{ backgroundImage: `url(${HeroBg1})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Global Automotive</h1>
                                        <a href="services.html" className="theme-btn">
                                            Our Services <i className="fal fa-long-arrow-right" />
                                        </a>
                                        <a href="about.html" className="theme-btn black">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero1;
