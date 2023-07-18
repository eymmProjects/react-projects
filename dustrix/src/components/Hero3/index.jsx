import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/home3/hero-3.jpg';

function Hero3() {
    return (
        <section className="hero-slide-wrapper hero-3">
            <div className="slide-items">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row align-items-center text-center text-xl-start">
                            <div className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                                <div className="hero-contents">
                                    <p>Welcome To Our Industry Website</p>
                                    <h1>We help make vision tangible.</h1>
                                    <Link to="/services" className="theme-btn theme-3">
                                        Our Services <BsArrowRight />
                                    </Link>
                                    <Link to="/about" className="theme-btn theme-3">
                                        learn more
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div
                                    className="hero-img bg-cover"
                                    style={{ backgroundImage: `url(${heroImg})` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
