import React, { useState } from 'react';
import { useEffect } from "react";
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

import img1 from "../assets/img/crypto/slide-1.png";
import img2 from "../assets/img/crypto/SLIDE-4.png";


import img3 from "../assets/img/crypto/SLIDE-2.png";

import img6 from "../assets/img/crypto/slide-3.png";

import ico1 from "../assets/img/crypto/icon-1.png";
import ico2 from "../assets/img/crypto/icon-2.png";
import ico3 from "../assets/img/crypto/icon-3.png";


import ico4 from "../assets/img/crypto/icon-4.png";
import ico5 from "../assets/img/crypto/icon-5.png";
import ico6 from "../assets/img/crypto/icon-6.png";



const Crypto = () => {
    const { t } = useTranslation(); // Use the t function to translate


    const tabs = [
        {
            id: "tabid11",
            title: t("Major Cryptocurrencies"),
            description: t("Major Cryptocurrencies Description"),
            pairs: t("Major Cryptocurrencies Pairs"),
            icon: ico1,
            image: img3,
        },
        {
            id: "tabid22",
            title: t("More Cryptocurrencies"),
            description: t("More Cryptocurrencies Description"),
            pairs: "",
            icon: ico2,
            image: img3,
        },
        {
            id: "tabid33",
            title: t("Exotic Cryptocurrencies"),
            description: t("Exotic Cryptocurrencies Description"),
            pairs: "",
            icon: ico3,
            image: img3,
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);



    useEffect(() => {
        // Check if the TradingView widget script is already added
        if (!document.querySelector("#tradingview-widget-script")) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
            script.async = true;
            script.id = "tradingview-widget-script"; // Add an ID to easily identify the script

            // Widget configuration
            script.innerHTML = JSON.stringify({
                colorTheme: "dark",
                dateRange: "12M",
                showChart: true,
                locale: "en",
                width: "100%",
                height: "600",
                largeChartUrl: "",
                isTransparent: true,
                showSymbolLogo: true,
                showFloatingTooltip: false,
                plotLineColorGrowing: "rgba(166, 77, 121, 1)",
                plotLineColorFalling: "rgba(166, 77, 121, 1)",
                gridLineColor: "rgba(240, 243, 250, 0)",
                scaleFontColor: "rgba(19, 23, 34, 1)",
                belowLineFillColorGrowing: "rgba(213, 166, 189, 0.12)",
                belowLineFillColorFalling: "rgba(213, 166, 189, 0.12)",
                belowLineFillColorGrowingBottom: "rgba(234, 209, 220, 0)",
                belowLineFillColorFallingBottom: "rgba(234, 209, 220, 0)",
                symbolActiveColor: "rgba(41, 98, 255, 0.12)",
                tabs: [
                    {
                        title: "Cryptocurrencies",
                        symbols: [
                            { s: "CRYPTO:BTCUSD", d: "Bitcoin / USD" },
                            { s: "CRYPTO:ETHUSD", d: "Ethereum / USD" },
                            { s: "CRYPTO:BNBUSD", d: "Binance Coin / USD" },
                            { s: "CRYPTO:XRPUSD", d: "Ripple / USD" },
                            { s: "CRYPTO:ADAUSD", d: "Cardano / USD" },
                            { s: "CRYPTO:DOGEUSD", d: "Dogecoin / USD" }
                        ],
                        originalTitle: "Cryptocurrencies"
                    }
                ]
            });

            // Append the script to the widget container
            const widgetContainer = document.getElementById("tradingview-widget-container");
            if (widgetContainer) {
                widgetContainer.appendChild(script);
            }
        }
    }, []);





    return (
        <div>



            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Left Column (Image) */}
                        <div className="col-xl-6">
                            <img src={img1} alt="Cryptocurrency Trading" />
                        </div>

                        {/* Right Column (Text Content) */}
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('tradeCryptocurrenciesAnywhere')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('seizeOpportunities')}</p>
                                </div>
                                <a className="btn-main2" href="#">
                                    <span className="txt">{t('tradeCryptocurrencies')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        {/* Left Column (Text Content) */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('enterWorldCrypto')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('seizeOpportunities')}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="#">
                                            <span className="txt">{t('tradeCryptocurrencies')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="col-xl-6">
                            <img src={img2} alt="MetaTrader 5" width="100%" />
                        </div>
                    </div>
                </div>
            </section>





            <section className="features-style2-area" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t("Trade the Most Popular Cryptocurrencies.")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t("Trade the Most Popular Cryptocurrencies Description")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="features-style2-content">
                                <div className="features-style2-tab">
                                    {/* Tab Buttons */}
                                    <div className="features-style2-tab__button">
                                        <ul
                                            className="owl-carousel owl-theme thm-owl__carousel features-style2-carousel owl-nav-style-one tabs-button-box"
                                        >
                                            {tabs.map((tab) => (
                                                <li
                                                    key={tab.id}
                                                    data-tab={`#${tab.id}`}
                                                    className={`tab-btn-item ${activeTab === tab.id ? "active-btn-item" : ""
                                                        }`}
                                                    onClick={() => setActiveTab(tab.id)}
                                                >
                                                    <div className="single-features-box-style2">
                                                        <div className="icon">
                                                            <img src={tab.icon} alt={tab.title} />
                                                        </div>
                                                        <div className="title">
                                                            <h3>
                                                                <a href="javascript:void(0);">{tab.title}</a>
                                                            </h3>
                                                        </div>
                                                        <div className="arrow-button">
                                                            <a href="javascript:void(0);">
                                                                <span className="icon-chevron"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tab Content */}
                                    <div className="tabs-content-box">
                                        {tabs.map((tab) => (
                                            <div
                                                key={tab.id}
                                                className={`tab-content-box-item ${activeTab === tab.id ? "tab-content-box-item-active" : ""
                                                    }`}
                                                id={tab.id}
                                            >
                                                <div className="row mini-row">
                                                    <div className="col-xl-6 justify-content-center align-items-center mini-box">
                                                        <div>
                                                        <br></br>
                                                            <br></br>
                                                            <br></br>
                                                            <br></br>
                                                            <h1 className="span-main bold-title">{tab.title}.</h1>
                                                            <br></br>
                                                            <p>
                                                                {tab.pairs}
                                                                <br />
                                                                {tab.description}
                                                            </p>
                                                            <br></br>
                                                            <a
                                                                className="btn-main"
                                                                href="#"
                                                                style={{ backgroundColor: "#C02881" }}
                                                            >
                                                                {t("tradeNow")}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <img
                                                            src={tab.image}
                                                            alt={tab.title}
                                                            className="full-cover-image"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="benefits-area background-black">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title white">
                            {t("Stay Updated with Real-Time Crypto Prices")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p className="white">
                                {t(
                                    "Track Live Crypto Prices and Make Informed Trading Decisions Instantly"
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-md-12 col-sm-12"></div>
                        <div className="col-xl-8 col-md-12 col-sm-12">
                            {/* TradingView Widget BEGIN */}
                            <div id="tradingview-widget-container">
                                <div className="tradingview-widget-container__widget"></div>
                                <div className="tradingview-widget-copyright">
                                    <a
                                        href="https://www.tradingview.com/"
                                        rel="noopener nofollow"
                                        target="_blank"
                                    ></a>
                                </div>
                            </div>
                            {/* TradingView Widget END */}
                        </div>
                        <div className="col-xl-2 col-md-12 col-sm-12"></div>
                    </div>
                    <div className="text-center">
                        <a className="btn-main2 " href="#">
                            <span className="txt">{t("startTradingNow")}</span>
                        </a>
                    </div>
                </div>
            </section>


            <section className="benefits-area" style={{ backgroundColor: 'white !important' }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">{t('whyTradeCryptoWith')} <span className="span-main">Accuindex</span>?</h2>
                        <div className="sub-title">
                            <p>{t('unlockOpportunities')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (24/7 Market Access) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico4} width="100px" alt="24/7 Market Access" />
                                <div className="text">
                                    <h3 className="bold-p">{t('marketAccess')}</h3>
                                    <p>{t('marketAccessDesc')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (High Leverage) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico6} width="100px" alt="High Leverage" />
                                <div className="text">
                                    <h3 className="bold-p">{t('highLeverage')}</h3>
                                    <p>{t('highLeverageDesc')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Tight Spreads) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico5} width="100px" alt="Tight Spreads" />
                                <div className="text">
                                    <h3 className="bold-p">{t('tightSpreads')}</h3>
                                    <p>{t('tightSpreadsDesc')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>

                    <div className="text-center">
                        <br /><br />
                        <a className="btn-main2" href="#">
                            <span className="txt">{t('tradeCrypto')}</span>
                        </a>
                    </div>
                </div>
            </section>





            <section className="features-style4-area">
                <div className="container">
                    <div className="row">
                        {/* Left Column: Title & Button */}
                        <div className="col-xl-4 mobile-align">
                            <div className="features-style4-title-box">
                                <div className="sec-title">
                                    <h2>{t('advancedTools')}<span className="span-main">.</span></h2>
                                    <div className="sub-title">
                                        <p>{t('revolutionizeExperience')}</p>
                                    </div>
                                </div>
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">
                                            {t('tradeCrypto')}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column: Image */}
                        <div className="col-xl-4 mobile-align">
                            <img src={img6} alt="Crypto Trading Tools" width="100%" />
                        </div>

                        {/* Right Column: Steps */}
                        <div className="col-xl-4">
                            <div className="account-creation-step">
                                <ul>
                                    {/* Step 1: Live Crypto Charts */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">01</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('liveCryptoCharts')}</h3>
                                                <p>{t('liveCryptoChartsDesc')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Step 2: Technical Indicators */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">02</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('technicalIndicators')}</h3>
                                                <p>{t('technicalIndicatorsDesc')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Step 3: Trading Alerts */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting lnone">
                                                <span className="span-main bold-title">03</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('tradingAlerts')}</h3>
                                                <p>{t('tradingAlertsDesc')}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>

    );
};


export default Crypto;