import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
import WidgetAbout from './WidgetAbout';
import WidgetGetinTouch from './WidgetGetinTouch';
import WidgetGetinTouchData from './WidgetGetinTouchData';
import WidgetNews from './WidgetNews';
import WidgetNewsData from './WidgetNewsData';

function Footer1() {
    // STATES
    const [email, setEmail] = useState('');

    // HANDLER
    const onchangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <footer className="footer-1 footer-wrap">
            <div className="footer-widgets dark-bg">
                <div className="container">
                    <div className="row">
                        {/* ABOUT WIDGET */}
                        <WidgetAbout
                            text="Use Wix's Advanced Web Page Design Tools to Create Your Professional Site in an Instant! Experience Total Design Freedom and the Ability to Customize Your Site as You Wish! Social media compatible with design."
                            fbLink="/"
                            twitterLink="/"
                            instaLink="/"
                            youtubeLink="/"
                        />

                        {/* NEWS FEED WIDGET */}

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid recent_post_widget">
                                <div className="wid-title">
                                    <h4>News Feeds</h4>
                                </div>
                                <div className="recent-post-list">
                                    {WidgetNewsData.map((data) => (
                                        <WidgetNews
                                            key={data.id}
                                            thumbnail={data.thumbnail}
                                            meta={data.meta}
                                            heading={data.heading}
                                            link={data.link}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* NEWSLETTER WIDGET */}
                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid newsletter_widget">
                                <div className="wid-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="newsletter_box">
                                    <p>
                                        Subscribe our newsletter to get our latest updates &#38;
                                        news.
                                    </p>
                                    <form action="#">
                                        <input
                                            value={email}
                                            onChange={onchangeHandler}
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <button
                                            className="submit-btn"
                                            type="submit"
                                            onSubmit={onSubmitHandler}
                                        >
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid ml-15 site_info_widget">
                                <div className="wid-title">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="contact-us" />
                                {WidgetGetinTouchData.map((data) => (
                                    <WidgetGetinTouch
                                        key={data.id}
                                        icon={data.icon}
                                        heading={data.heading}
                                        text={data.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="copyright-info">
                                <p>
                                    &copy; Copyright By <a href="index.html">Dustrix</a> - 2021
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <div className="footer-logo">
                                <a href="#top">
                                    <img src={logo} alt="Dustrix" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block col-12">
                            <div className="scroll-up-btn text-md-right justify-content-end">
                                <a href="#top">
                                    <AiOutlineArrowUp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;
