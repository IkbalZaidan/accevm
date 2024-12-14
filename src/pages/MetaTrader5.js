import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination styles
import { Pagination, Navigation } from "swiper/modules"; // Swiper modules
import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';

import img1 from "../assets/img/metatrader5/slide-1.png";
import img2 from "../assets/img/metatrader5/slide-2.jpg";
import img3 from "../assets/img/metatrader5/slide-3.png";
import img4 from "../assets/img/metatrader5/slide-4.png";

import ico1 from "../assets/img/metatrader5/icon-1.png";
import ico2 from "../assets/img/metatrader5/icon-2.png";
import ico3 from "../assets/img/metatrader5/icon-3.png";


const MetaTrader5 = () => {
    const [activeTab, setActiveTab] = useState(1);
    const { t } = useTranslation(); // Use the t function to translate


    return (
        <div>
            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        <div className="col-xl-6">
                            <img src={img1} width="100%" alt="Metatrader Image" />
                        </div>

                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('masterMarketsWithAccuindex')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('cuttingEdgeToolsDescription')}</p>
                                </div>

                                <a className="btn-main2" href="#">
                                    <span className="txt">{t('downloadForWindows')}</span>
                                </a>
                                <a className="btn-main2" href="#">
                                    <span className="txt">{t('downloadForIOS')}</span>
                                </a>
                                <a className="btn-main2" href="#">
                                    <span className="txt">{t('downloadForAndroid')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="service-request-style2-area black background-black">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="service-request-style2-content-box">
                                <div
                                    className="pattern-bottom"
                                    style={{
                                        backgroundImage: 'url(assets/img/aboutus/ourstory/SLIDE-IMG-5.png)',
                                    }}
                                ></div>
                                <div className="sec-title mobile-align">
                                    <h2 className="bold-title white">
                                        {t('exploreAdvancedFeatures')}
                                        <span className="span-main span-main-font">.</span>
                                    </h2>
                                    <div className="sub-title white">
                                        <p>{t('unlockYourTradingEdge')}</p>
                                    </div>
                                </div>
                                <div className="service-request-style2-content-box__inner pc">
                                    <ul>
                                        <li>
                                            <div className="single-service-request-style2-box">
                                                <div className="icon">
                                                    <span className="icon-credit-card"></span>
                                                </div>
                                                <div className="title">
                                                    <h3 className="white">
                                                        {t('advancedChartingTools')}
                                                        <a href="#">
                                                            <span className="icon-right-arrow"></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-service-request-style2-box">
                                                <div className="icon">
                                                    <span className="icon-computer"></span>
                                                </div>
                                                <div className="title">
                                                    <h3 className="white">
                                                        {t('technicalIndicators')}
                                                        <a href="#">
                                                            <span className="icon-right-arrow"></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-service-request-style2-box">
                                                <div className="icon">
                                                    <span className="icon-book"></span>
                                                </div>
                                                <div className="title">
                                                    <h3 className="white">
                                                        {t('algorithmicTrading')}
                                                        <a href="#">
                                                            <span className="icon-right-arrow"></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-service-request-style2-box">
                                                <div className="icon">
                                                    <span className="icon-check-book"></span>
                                                </div>
                                                <div className="title">
                                                    <h3 className="white">
                                                        {t('multiAssetSupport')}
                                                        <a href="#">
                                                            <span className="icon-right-arrow"></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="service-request-style2__btns-box mobile-align pc">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('tradeNow')}</span>
                                    </a>
                                </div>

                                <div className="mobile-seen mobile-align">
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src={img2}
                                            alt=""
                                            width="100%"
                                        />
                                    </div>

                                    <br />
                                    <br />
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('tradeNow')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 pc">
                            <img src={img2} alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="benefits-area white-back" >
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('whyChooseAccuindex')} <span className="span-main">{t('Accuindex')}</span> {t('mt5Platform')}
                        </h2>
                        <div className="sub-title">
                            <p>{t('switchEffortlessly')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (Mission) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico1} width="100px" alt="High-Speed Execution" />
                                <div className="text">
                                    <h3 className="bold-p">{t('highSpeedExecution')}</h3>
                                    <p>{t('highSpeedExecutionDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Vision) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico2} width="100px" alt="Advanced Analytical Tools" />
                                <div className="text">
                                    <h3 className="bold-p">{t('advancedAnalyticalTools')}</h3>
                                    <p>{t('advancedAnalyticalToolsDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Values) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico3} width="100px" alt="Seamless Cross-Platform Access" />
                                <div className="text">
                                    <h3 className="bold-p">{t('seamlessCrossPlatformAccess')}</h3>
                                    <p>{t('seamlessCrossPlatformAccessDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>
                </div>
            </section>



            <section className="features-style4-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 mobile-align">
                            <div className="features-style4-title-box">
                                <div className="sec-title">
                                    <h2>
                                        {t('howToDownload')} <span className="span-main">MT5</span>
                                    </h2>
                                    <div className="sub-title">
                                        <p>{t('downloadDescription')}</p>
                                    </div>
                                </div>

                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('downloadForWindows')}</span>
                                    </a>
                                </div>
                                <br />
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('downloadForIOS')}</span>
                                    </a>
                                </div>
                                <br />
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('downloadForAndroid')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 mobile-align">
                            <img src={img3} alt="MT5" width="100%" />
                        </div>

                        <div className="col-xl-4">
                            <div className="account-creation-step">
                                <ul>
                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">01</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('downloadMT5')}</h3>
                                                <p>{t('downloadMT5Description')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">02</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('logInWithCredentials')}</h3>
                                                <p>{t('logInDescription')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-step">
                                            <div className="counting lnone">
                                                <span className="span-main bold-title">03</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('startTrading')}</h3>
                                                <p>{t('startTradingDescription')}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('tradeSmarter')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>
                                            .
                                        </span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('unlockPotential')}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="#">
                                            <span className="txt">{t('openLiveAccount')}</span>
                                        </a>
                                        <a className="btn-one background-main" href="#">
                                            <span className="txt">{t('tryDemoAccount')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <img
                                src={img4}
                                alt="MetaTrader 5"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
};


export default MetaTrader5;
