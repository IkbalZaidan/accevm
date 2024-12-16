import React, { useState } from 'react';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination styles
import { Pagination, Navigation } from "swiper/modules"; // Swiper modules
import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';

import img1 from "../assets/img/webtrader/1.png";
import img2 from "../assets/img/webtrader/2.png";

import ico1 from "../assets/img/webtrader/icon-1.png";
import ico2 from "../assets/img/webtrader/icon-2.png";
import ico3 from "../assets/img/webtrader/icon-3.png";
import ico4 from "../assets/img/webtrader/icon-4.png";

import ico5 from "../assets/img/webtrader/icon-5.png";
import ico6 from "../assets/img/webtrader/icon-6.png";
import ico7 from "../assets/img/webtrader/icon-7.png";


const Forex = () => {
    const { t } = useTranslation(); // Use the t function to translate


    return (
        <div>

            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Left Column - Image */}
                        <div className="col-xl-6">
                            <img src={img1} alt={t('webTraderAlt')} />
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('webTraderTitle')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('webTraderDescription')}</p>
                                </div>

                                <a className="btn-main2" href="/Register">
                                    <span className="txt">{t('startTrading')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('seamlessTradingTitle')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('seamlessTradingDescription')}</p>
                                    </div>
                                </div>

                                <div className="text-box">
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <img
                                            src="assets/img/webtrader/2.png"
                                            alt={t('metaTraderAlt')}
                                            width="100%"
                                            className="mobile-seen"
                                        />
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="/Register">
                                            <span className="txt">{t('tradeNow')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-6 pc">
                            <img
                                src={img2}
                                alt={t('metaTraderAlt')}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>




            <section className="facts-area">
                <div className="facts-area-bg background-black"></div>
                <div className="container">
                    {/* Section Title */}
                    <div className="sec-title text-center">
                        <h2>
                            {t('simplifyTrading')}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('tradeAnywhere')}</p>
                        </div>
                    </div>

                    {/* Facts Rows */}
                    <div className="row">
                        {/* Fact Box 1 */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <img
                                    src={ico1}
                                    alt={t('iconAlt1')}
                                    width="150px"
                                />
                                <div className="text">
                                    <h3>{t('fact1Title')}</h3>
                                    <p>{t('fact1Description')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Fact Box 2 */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <img
                                    src={ico2}
                                    alt={t('iconAlt2')}
                                    width="150px"
                                />
                                <div className="text">
                                    <h3>{t('fact2Title')}</h3>
                                    <p>{t('fact2Description')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Fact Box 3 */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <img
                                    src={ico3}
                                    alt={t('iconAlt3')}
                                    width="150px"
                                />
                                <div className="text">
                                    <h3>{t('fact3Title')}</h3>
                                    <p>{t('fact3Description')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Fact Box 4 */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <img
                                    src={ico4}
                                    alt={t('iconAlt4')}
                                    width="150px"
                                />
                                <div className="text">
                                    <h3>{t('fact4Title')}</h3>
                                    <p>{t('fact4Description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="sec-title text-center">
                        <a className="btn-main2" href="/Register">
                            <span className="txt">{t('tradeNow')}</span>
                        </a>
                    </div>
                </div>
            </section>





            <section className="benefits-area" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t("whoIs")} <span className="span-main">{t('WebTrader')}</span> {t('for')}
                        </h2>
                        <div className="sub-title">
                            <p>{t("webTraderPerfectFor")}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (Mission) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico5} width="100px" alt={t("tradersIconAlt")} />
                                <div className="text">
                                    <p>{t("tradersValueConvenience")}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Vision) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico6} width="100px" alt={t("beginnersIconAlt")} />
                                <div className="text">
                                    <p>{t("beginnersLookingSimplePlatform")}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Values) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico7} width="100px" alt={t("professionalsIconAlt")} />
                                <div className="text">
                                    <p>{t("professionalsQuickAccess")}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>

                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main2" href="https://my.accuindex.com/login">
                            <span className="txt">{t("logInAndTradeNow")}</span>
                        </a>
                    </div>
                </div>
            </section>



        </div>

    );
};


export default Forex;