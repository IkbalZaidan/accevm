import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Swiper modules
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import img1 from '../assets/img/landr/statistics-chart.png';
import img2 from '../assets/img/landr/mt5.png';
import img3 from '../assets/img/landr/service-style1.jpg';

import img4 from '../assets/img/landr/Funding.png';
import img5 from '../assets/img/landr/tech.png';
import img6 from '../assets/img/landr/ZeroComssion.png';

import '../styles/Style.css';
import '../styles/Responsive-sty.css';



const LAndR = () => {

    const { t } = useTranslation(); // Use the t function to translate
    const [activeTab, setActiveTab] = React.useState("mauritius");

    const handleTabClick = (tab) => {
        console.log(`Tab clicked: ${tab}`);

        setActiveTab(tab);
    };


    const benefits = [
        {
            img: img4,
            alt: 'Segregated Funds',
            title: t('segregatedFundsTitle'),
            description: t('segregatedFundsDescription'),
        },
        {
            img: img5,
            alt: 'Regulatory Oversight',
            title: t('regulatoryOversightTitle'),
            description: t('regulatoryOversightDescription'),
        },
        {
            img: img6,
            alt: 'Risk Management',
            title: t('riskManagementTitle'),
            description: t('riskManagementDescription'),
        },
        {
            img: img6,
            alt: 'Negative Balance Protection',
            title: t('negativeBalanceProtectionTitle'),
            description: t('negativeBalanceProtectionDescription'),
        },
    ];

    const images = [
        'https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg',
        'https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg',
        'https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg',
        'https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg',
    ];


    return (
        <div>
            <section className="statistics-area">
                <div className="container">
                    <div className="row">

                        {/* Content Section */}
                        <div className="col-xl-6 mobile-align">
                            <div className="statistics-content-box">
                                <div className="sec-title">
                                    <br className="mobile-seen" />
                                    <br className="mobile-seen" />
                                    <h2 className="bold-title">
                                        {t('statistics.title')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('statistics.description')}</p>
                                </div>
                                <div className="btns-box mobile-align">
                                    <br />
                                    <br />
                                    <a className="btn-main2" href="/Register">
                                        <span className="txt">{t('statistics.liveAccount')}</span>
                                    </a>
                                    <a className="btn-one background-main" href="/RegisterDemo">
                                        <span className="txt">{t('statistics.demoAccount')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className="col-xl-6">
                            <div className="statistics-chart">
                                <img
                                    src={img1}
                                    alt={t('statistics.chartAlt')}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                className="features-style-area"
                style={{
                    background: 'linear-gradient(to bottom, black 98.7%, white 5%)',
                }}
            >
                <div className="container">
                    <div className="row">

                        {/* Content Section */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('features7.title')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('features7.description')}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="row">
                                        <div className="col-md-6 account-key-features pc mobile-align">
                                            <h3 className="white">{t('features7.clientSecurity.title')}</h3>
                                            <br />
                                            <p className="white">{t('features7.clientSecurity.description')}</p>
                                        </div>
                                        <div className="col-md-6 account-key-features pc mobile-align">
                                            <h3 className="white">{t('features7.transparency.title')}</h3>
                                            <br />
                                            <p className="white">{t('features7.transparency.description')}</p>
                                        </div>
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="/AccPay">
                                            <span className="txt">{t('features7.exploreAccuPay')}</span>
                                        </a>
                                        <a className="btn-one background-main" href="/metatrader">
                                            <span className="txt">{t('features7.accuindexMT5')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-xl-6 mobile-seen">
                            <br />
                            <br />
                            <img className="mob" src={img2} alt={t('features7.metaTrader5Alt')} />
                        </div>
                    </div>
                </div>

                {/* Bottom Image Section */}
                <div className="image-section pc">
                    <img
                        src={img2}
                        alt={t('features7.metaTrader5Alt')}
                        className="bottom-left-image"
                    />
                </div>
            </section>

            <section id="service" className="service-style1-area">
                <div
                    className="service-style1-bg"
                    style={{ backgroundImage: `url(${img3})` }}
                ></div>
                <div className="container">
                    {/* Section Title */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-style1-title">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("service3.globalRegulatoryTitle")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>.</span>
                                    </h2>
                                    <div className="sub-title">
                                        <p>{t("service3.globalRegulatoryDescription")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-style1-tab">
                                {/* Tab Buttons */}
                                <div className="service-style1-tab__button">
                                    <ul className="tabs-button-box clearfix">
                                        <li
                                            onClick={() => handleTabClick("mauritius")}
                                            className={`tab-btn-item ${activeTab === "mauritius" ? "active-btn-item" : ""}`}
                                        >
                                            <div className="inner">
                                                <div className="left">
                                                    <h4>{t("service3.regulation")}</h4>
                                                    <h3>{t("service3.mauritius.title")}</h3>
                                                </div>
                                                <div className="right">
                                                    <span className="icon-down-arrow"></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => handleTabClick("cyprus")}
                                            className={`tab-btn-item ${activeTab === "cyprus" ? "active-btn-item" : ""}`}
                                        >
                                            <div className="inner">
                                                <div className="left">
                                                    <h4>{t("service3.regulation")}</h4>
                                                    <h3>{t("service3.cyprus.titleB")}</h3>
                                                </div>
                                                <div className="right">
                                                    <span className="icon-down-arrow"></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tab Content */}
                                <div className="tabs-content-box">
                                    {activeTab === "mauritius" && (
                                        <div className="tab-content-box-item tab-content-box-item-active">
                                            <div className="service-style1-tab-content-box-item">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="single-service-box-style1">
                                                            <div className="icon">
                                                                <span className="icon-safebox"></span>
                                                            </div>
                                                            <h3 className="white">{t("service3.mauritius.title")}</h3>
                                                            <div className="border-box"></div>
                                                            <p className="white">
                                                                {t("service3.mauritius.entityName")} <br />
                                                                {t("service3.mauritius.licenseNumber")} <br />
                                                                {t("service3.mauritius.regulatoryBody")} <br />
                                                                {t("service3.mauritius.address")}
                                                            </p>
                                                            <div className="btn-box">
                                                                <a href="#">
                                                                    <span className="icon-right-arrow"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "cyprus" && (
                                        <div className="tab-content-box-item tab-content-box-item-active">
                                            <div className="service-style1-tab-content-box-item">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="single-service-box-style1">
                                                            <div className="icon">
                                                                <span className="icon-online"></span>
                                                            </div>
                                                            <h3 className="white">{t("service3.cyprus.title")}</h3>
                                                            <div className="border-box"></div>
                                                            <p className="white">
                                                                {t("service3.cyprus.entityName")} <br />
                                                                {t("service3.cyprus.licenseNumber")} <br />
                                                                {t("service3.cyprus.regulatoryBody")} <br />
                                                                {t("service3.cyprus.complianceDirective")} <br />
                                                                {t("service3.cyprus.address")}
                                                            </p>
                                                            <div className="btn-box">
                                                                <a href="#">
                                                                    <span className="icon-right-arrow"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-style1__btns-box text-center">
                                <a className="btn-main2" href="/Register">
                                    <span className="txt">{t("service3.startNow")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="benefits-area"
                style={{ backgroundColor: 'white' }}
            >
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('howWeSafeguardYourInvestments')}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('safeguardDescription')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {benefits.map((benefit, index) => (
                            <li className="col-xl-3" key={index}>
                                <div className="single-benefits-box">
                                    <img
                                        src={benefit.img}
                                        width="100px"
                                        alt={benefit.alt}
                                    />
                                    <div className="text">
                                        <h3 className="bold-p">{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className="facts-area">
                <div className="facts-area-bg background-main"></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Award Winning Broker</h2>
                        <div className="sub-title">
                            <p>Discover why millions of users from over countries choose to trade with Accuindex</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="swiper-container-facts mobile-seen">
                            <Swiper
                                modules={[Pagination]}
                                loop={true}
                                spaceBetween={1}
                                slidesPerView={1}
                                initialSlide={0}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                <SwiperSlide className='text-center' >
                                    <div className='footer-img-slide'>
                                        <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg" alt="Slide 1" width={'50%'} />

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='text-center' >
                                    <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg" alt="Slide 2" width={'50%'} />
                                </SwiperSlide>

                                <SwiperSlide className='text-center' >
                                    <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg" alt="Slide 3" width={'50%'} />
                                </SwiperSlide>

                                <SwiperSlide className='text-center' >
                                    <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg" alt="Slide 4" width={'50%'} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        {/* Regular Fact Boxes (For Larger Screens) */}
                        <div className="col-xl-3 col-lg-6 col-md-6 pc">
                            <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg" alt="Fact 1" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 pc">
                            <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg" alt="Fact 2" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 pc">
                            <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg" alt="Fact 3" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 pc">
                            <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg" width="100%" alt="Fact 4" />
                        </div>
                    </div>
                </div>
            </section >


        </div>


    );
};


export default LAndR;