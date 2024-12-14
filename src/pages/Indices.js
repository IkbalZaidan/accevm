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

import img1 from "../assets/img/indices/slide-1.png";
import img2 from "../assets/img/indices/SLIDE-4.png";

import img3 from "../assets/img/indices/SLIDE-2.png";
import img4 from "../assets/img/indices/slide-3.png";


import ico1 from "../assets/img/indices/icon-1.png";
import ico2 from "../assets/img/indices/icon-2.png";
import ico3 from "../assets/img/indices/icon-3.png";

import ico4 from "../assets/img/indices/icon-4.png";
import ico5 from "../assets/img/indices/icon-5.png";
import ico6 from "../assets/img/indices/icon-6.png";


const Forex = () => {
    const { t } = useTranslation(); // Use the t function to translate

    const tabs = [
        {
            id: "tabid11",
            title: t("MajorIndices"),
            description: t("majorIndicesPairs"),
            pairs: t("majorIndicesDescription"),
            icon: ico1,
            image: img3,
        },
        {
            id: "tabid22",
            title: t("moreIndices"),
            description: t("moreIndicesDescription"),
            pairs: t("moreIndicesPairs"),
            icon: ico2,
            image: img3,
        },
        {
            id: "tabid33",
            title: t("exoticIndices"),
            description: t("exoticIndicesDescription"),
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
                        title: "Forex",
                        symbols: [
                            { s: "FX:EURUSD", d: "EUR to USD" },
                            { s: "FX:GBPUSD", d: "GBP to USD" },
                            { s: "FX:USDJPY", d: "USD to JPY" },
                            { s: "FX:USDCHF", d: "USD to CHF" },
                            { s: "FX:AUDUSD", d: "AUD to USD" },
                            { s: "FX:USDCAD", d: "USD to CAD" },
                        ],
                        originalTitle: "Forex",
                    },
                ],
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
                        <div className="col-xl-6">
                            <img src={img1} alt="Forex Slide" />
                        </div>
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('Trade Major Indices with Accuindex')}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('Get exposure to global markets with top-performing indices.')}</p>
                                </div>
                                <a className="btn-main2" href="#">
                                    <span className="txt">{t('Trade Indices')}</span>
                                </a>
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
                                    <h1
                                        className="white bold-title"
                                        style={{ fontSize: "45px" }}
                                    >
                                        {t('whyTrade')}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            {t('Indices')}
                                        </span>
                                        ?
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('indeciesTradingDescription')}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="#">
                                            <span className="txt">{t('openAccountRaw')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <img
                                src={img2}
                                alt={t('metaTrader5')}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="features-style2-area" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t("ExploreOurIndex")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t("accessGlobalMarket")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="features-style2-content">
                                <div className="features-style2-tab">
                                    {/* Tab Buttons with Swiper */}
                                    <div className="features-style2-tab__button">
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={10}
                                            slidesPerView={3}
                                            navigation={{
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            }}
                                            breakpoints={{
                                                0: { slidesPerView: 3 },
                                                768: { slidesPerView: 3 },
                                                1200: { slidesPerView: 3 },
                                            }}
                                        >
                                            {tabs.map((tab) => (
                                                <SwiperSlide key={tab.id}>
                                                    <div
                                                        className={`single-features-box-style2 ${activeTab === tab.id ? "active-btn-item" : ""
                                                            }`}
                                                        onClick={() => setActiveTab(tab.id)}
                                                    >
                                                        <div className="icon">
                                                            <img src={tab.icon} alt={tab.title} />
                                                        </div>
                                                        <div className="title">
                                                            <h3>
                                                                <a href="#">{tab.title}</a>
                                                            </h3>
                                                        </div>
                                                        <div className="arrow-button">
                                                            <a href="#">
                                                                <span className="icon-chevron"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        {/* Custom Navigation Buttons */}
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
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
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <h1 className="span-main bold-title">{tab.title}.</h1>
                                                            <br />
                                                            <p>
                                                                {tab.pairs}
                                                                <br />
                                                                {tab.description}
                                                            </p>
                                                            <br />
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
                            {t("Track Live Indices Performance")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p className="white">
                                {t(
                                    "Monitor Market Movements and Make Timely Trading Decisions."
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





            <section className="benefits-area" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('Why Trade Indices with')}
                            <span className="span-main"> {t('Accuindex')} </span>
                            ?
                        </h2>
                        <div className="sub-title">
                            <p>{t('whyTradeIndeciesDescription')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (Low Spreads) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico4} alt={t('lowSpreadsAlt')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('PortfolioDiversificationTitle')}</h3>
                                    <p>{t('PortfolioDiversificationDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (High Leverage) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico6} alt={t('highLeverageAlt')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('GlobalMarketAccessTitle')}</h3>
                                    <p>{t('GlobalMarketAccessDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Market Access) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico5} alt={t('marketAccessAlt')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('LowerRiskTitle')}</h3>
                                    <p>{t('LowerRiskDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>

                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main5" href="#">
                            <span className="txt">{t('tradeIndeciesBtn')}</span>
                        </a>
                    </div>
                </div>
            </section>



            <section className="features-style4-area">
                <div className="container">
                    <div className="row">
                        {/* Left Column - Title and Button */}
                        <div className="col-xl-4 mobile-align">
                            <div className="features-style4-title-box">
                                <div className="sec-title">
                                    <h2>
                                        {t('Empower Your Trading with Our Tools')}
                                        <span className="span-main">.</span>
                                    </h2>
                                    <div className="sub-title">
                                        <p>{t('Start Your Indices Trading with Cutting-Edge Tools')}</p>
                                    </div>
                                </div>
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('Open Account')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - Image */}
                        <div className="col-xl-4 mobile-align">
                            <img src={img4} alt="Trading Tools" width="100%" />
                        </div>

                        {/* Right Column - Features List */}
                        <div className="col-xl-4">
                            <div className="account-creation-step">
                                <ul>
                                    {/* Step 1 */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">01</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('Real-Time Data')}</h3>
                                                <p>{t('Stay connected with live index prices, helping you make timely and precise trading decisions during critical market movements.')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Step 2 */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting span-main">
                                                <span className="span-main bold-title">02</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('technicalIndicators')}</h3>
                                                <p>{t('Leverage advanced tools like RSI, Fibonacci retracements, and moving averages to analyze trends and refine your strategies.')}</p>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Step 3 */}
                                    <li>
                                        <div className="single-step">
                                            <div className="counting lnone">
                                                <span className="span-main bold-title">03</span>
                                            </div>
                                            <div className="text-box">
                                                <h3>{t('Comprehensive Market Insights')}</h3>
                                                <p>{t('Gain valuable insights from expert analysis and real-time updates, ensuring you stay ahead in a constantly evolving market.')}</p>
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


export default Forex;