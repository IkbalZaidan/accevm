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

import img1 from "../assets/img/stocks/SLIDE-1.png";
import img2 from "../assets/img/stocks/SLIDE-4.png";
import img3 from "../assets/img/stocks/SLIDE-2.png";
import img4 from "../assets/img/stocks/slide-3.png";



import ico1 from "../assets/img/stocks/ICON-1.png";
import ico2 from "../assets/img/stocks/icon-2.png";
import ico3 from "../assets/img/stocks/icon-3.png";


import ico4 from "../assets/img/stocks/icon-4.png";
import ico5 from "../assets/img/stocks/icon-5.png";
import ico6 from "../assets/img/stocks/icon-6.png";





const Forex = () => {
    const { t } = useTranslation(); // Use the t function to translate


    const tabs = [
        {
            id: "tabid11",
            title: t("Discover Stocks"),
            description: t("Tesla (TSLA): The pioneer in sustainable energy and electric vehicles."),
            pairs: t("Apple (AAPL): Leading the tech industry with innovative products and services."),
            icon: ico1,
            image: img3,
        },
        {
            id: "tabid22",
            title: t("More Stocks"),
            description: t("Google (GOOGL): Powering the internet with unmatched advertising and cloud solutions."),
            pairs: "",
            icon: ico2,
            image: img3,
        },
        {
            id: "tabid33",
            title: t("Exotic Stocks"),
            description: t("Amazon (AMZN): Revolutionizing e-commerce and logistics worldwide."),
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
                        title: "Stocks",
                        symbols: [
                            { s: "NASDAQ:AAPL", d: "Apple Inc." },
                            { s: "NASDAQ:GOOGL", d: "Alphabet Inc." },
                            { s: "NASDAQ:AMZN", d: "Amazon.com Inc." },
                            { s: "NASDAQ:MSFT", d: "Microsoft Corporation" },
                            { s: "NASDAQ:TSLA", d: "Tesla" },
                            { s: "NYSE:BRK.B", d: "Berkshire Hathaway" },
                        ],
                        originalTitle: "Stocks",
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
                            {/* Dynamic image source can be handled similarly if needed */}
                            <img src={img1} alt="Global Stocks" />
                        </div>

                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("Trade Global Stocks with Confidence")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t("Unlock access to the world’s leading companies with Accuindex’s advanced stock trading platform.")}</p>
                                </div>

                                <a className="btn-main2" href="#">
                                    <span className="txt">{t("Trade Stocks")}</span>
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
                                    <h1 className="white bold-title" style={{ fontSize: "45px" }}>
                                        {t("Unlock Global Opportunities with Stock Trading")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t("Stock trading allows you to invest in global market leaders like Apple, Tesla, and Amazon. Whether you're targeting short-term opportunities or long-term growth, Accuindex provides the tools and support to help you succeed.")}</p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <a className="btn-main2" href="#">
                                            <span className="txt">{t("Open Account")}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                            {t("Trade Stocks from Industry Giants")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t("Unlock Global Opportunities by Trading Stocks from Leading Industry Titans Across Key Markets")}</p>
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
                                                                <a>{tab.title}</a>
                                                            </h3>
                                                        </div>
                                                        <div className="arrow-button">
                                                            <a>
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
                            {t("WatchStockPrices")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p className="white">
                                {t(
                                    "StayAheadOfTheMarket"
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


            <section className="benefits-area white-back">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('Why Trade Stocks with Us')} <span className="span-main"> {t('qMark')} </span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('Unlock Your Trading Potential with Accuindex Stock Trading')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Single Benefits Box Column (Competitive Spreads) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico4} width="100px" alt="Competitive Spreads" />
                                <div className="text">
                                    <h3 className="bold-p">{t('Competitive Spreads')}</h3>
                                    <p>{t('Boost your profitability with ultra-low spreads on leading global stocks, ensuring you keep more of your returns.')}</p>
                                </div>
                            </div>
                        </li>

                        {/* Single Benefits Box Column (High Leverage) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico6} width="100px" alt="High Leverage" />
                                <div className="text">
                                    <h3 className="bold-p">{t('High Leverage')}</h3>
                                    <p>{t('Amplify your trading power with leverage up to 1:400, allowing you to take larger positions and maximize your market exposure.')}</p>
                                </div>
                            </div>
                        </li>

                        {/* Single Benefits Box Column (Risk Management Tools) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={ico5} width="100px" alt="Risk Management Tools" />
                                <div className="text">
                                    <h3 className="bold-p">{t('Risk Management Tools')}</h3>
                                    <p>{t('Trade with confidence using advanced tools like stop-loss orders and price alerts, designed to protect your investments and support informed decision-making.')}</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main2" href="#">
                            <span className="txt">{t('Trade Stocks')}</span>
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
                                        {t('Powerful Tools for Smarter Trading')}
                                        <span className="span-main">.</span>
                                    </h2>
                                    <div className="sub-title">
                                        <p>{t('Enhance Your Trading with Advanced Tools')}</p>
                                    </div>
                                </div>
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('Trade Stocks')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - Image */}
                        <div className="col-xl-4 mobile-align">
                            <img src={img4} alt="Powerful Tools" width="100%" />
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
                                                <h3>{t('Live Stock Prices')}</h3>
                                                <p>{t('Keep up with real-time market movements to make timely and well-informed trading decisions.')}</p>
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
                                                <h3>{t('Technical Indicators')}</h3>
                                                <p>{t('Use sophisticated charting tools to analyze trends, refine strategies, and identify profitable opportunities.')}</p>
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
                                                <h3>{t('Market Analysis')}</h3>
                                                <p>{t('Leverage expert insights and the latest market updates to stay informed and ahead of industry trends.')}</p>
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