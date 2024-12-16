import React from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination styles
import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';

import img1 from "../assets/img/accuGo/SLIDE-1.png";
import img2 from "../assets/img/accuGo/SLIDE-2.png";

import ico1 from "../assets/img/accuGo/ico-1.png";
import ico2 from "../assets/img/accuGo/ico-2.png";
import ico3 from "../assets/img/accuGo/ico-3.png";
import ico4 from "../assets/img/accuGo/ico-4.png";


import ico5 from "../assets/img/accuGo/icon-1.png";
import ico6 from "../assets/img/accuGo/icon-2.png";
import ico7 from "../assets/img/accuGo/icon-3.png";


import win from "../assets/img/btns/microsoft.png";
import android from "../assets/img/btns/googlePlay.png";
import ios from "../assets/img/btns/appStore.png";


const AccuGo = () => {
    const { t } = useTranslation(); // Use the t function to translate


    return (
        <div>
            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        <div className="col-xl-6">
                            <img src={img1} alt="AccuGo" />
                        </div>

                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('tradingJourney')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('tradingJourneyDescription')}</p>
                                </div>
                                <a href="https://apps.apple.com/us/app/accugo/id1665870172" className="m-1" target="_blank">
                                    <img
                                        src={ios}
                                        alt="Download for iOS"
                                        style={{ maxWidth: '150px', height: 'auto' }}
                                    />
                                </a>
                                <br className='mobile-seen' />
                                <br style={{ height: '10px' }} className='mobile-seen' />
                                <a href="https://play.google.com/store/apps/details?id=com.accutrade&hl=en_US" className="" target="_blank">
                                    <img
                                        src={android}
                                        alt="Download for Android"
                                        style={{ maxWidth: '150px', height: 'auto' }}
                                    />
                                </a>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facts-area">
                <div className="facts-area-bg background-black"></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>{t('benefitsOfAccuGo')} <span className="span-main">.</span></h2>
                        <div className="sub-title">
                            <p>{t('advancedTradingTools')}</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Start Single Fact Box */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={ico1} width="150px" alt="Push Notifications" />
                                </div>
                                <div className="text">
                                    <h3>{t('pushNotifications')}</h3>
                                    <p>{t('latestRealTimeAlerts')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}

                        {/* Start Single Fact Box */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={ico2} width="150px" alt="Secured Management" />
                                </div>
                                <div className="text">
                                    <h3>{t('securedManagement')}</h3>
                                    <p>{t('topTierSecurity')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}

                        {/* Start Single Fact Box */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={ico3} width="150px" alt="Charting and Indicators" />
                                </div>
                                <div className="text">
                                    <h3>{t('chartingAndIndicators')}</h3>
                                    <p>{t('toolsTailoredForMobile')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}

                        {/* Start Single Fact Box */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={ico4} width="150px" alt="Easy Orders" />
                                </div>
                                <div className="text">
                                    <h3>{t('easyOrders')}</h3>
                                    <p>{t('closeOrdersMobile')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}
                    </div>

                    <div className="sec-title text-center">
                        <a className="btn-main2" href="/Register">
                            <span className="txt">{t('openYourAccount')}</span>
                        </a>
                    </div>
                </div>
            </section>


            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('whyChooseMobileTrading')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('tradeAnytimeAnywhere')}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img src={img2} alt="MetaTrader 5" width="100%" />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a href="https://apps.apple.com/us/app/accugo/id1665870172" className="m-1" target="_blank">
                                            <img
                                                src={ios}
                                                alt="Download for iOS"
                                                style={{ maxWidth: '150px', height: 'auto' , background:"white"}}
                                            />
                                        </a>
                                        <br className='mobile-seen' />
                                        <br style={{ height: '10px' }} className='mobile-seen' />
                                        <a href="https://play.google.com/store/apps/details?id=com.accutrade&hl=en_US" className="" target="_blank">
                                            <img
                                                src={android}
                                                alt="Download for Android"
                                                style={{ maxWidth: '150px', height: 'auto' , background:"white"}}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-xl-6 pc">
                            <img src={img2} alt="MetaTrader 5" width="100%" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="benefits-area white-back" >
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('gettingStartedWithAccuGo')} <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('discoverSimplicityOfTrading')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (Mission) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico5} width="100px" alt="Register or Log In" />
                                <div className="text">
                                    <h3 className="bold-p">{t('registerOrLogIn')}</h3>
                                    <p>{t('signUpOrLogInDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Vision) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico6} width="100px" alt="Fund Your Account" />
                                <div className="text">
                                    <h3 className="bold-p">{t('fundYourAccount')}</h3>
                                    <p>{t('depositFundsDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Values) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico7} width="100px" alt="Start Trading" />
                                <div className="text">
                                    <h3 className="bold-p">{t('startTrading')}</h3>
                                    <p>{t('exploreAccuGoDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>

                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main2" href="/Register">
                            <span className="txt">{t('openYourAccount')}</span>
                        </a>
                    </div>
                </div>
            </section>


        </div>

    );
};


export default AccuGo;
