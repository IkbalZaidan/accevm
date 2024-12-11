import React, { useState } from 'react';
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

import img1 from '../assets/img/economicCalendar/SLIDE-1.png';
import img2 from '../assets/img/fundManagers/IMG-2.png';

import icon1 from "../assets/img/promotions/ICON-1.png";
import icon2 from "../assets/img/promotions/ICON-2.png";
import icon3 from "../assets/img/promotions/ICON-3.png";

const EconomicCalendar = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
      {
        question: t("ecofaq.question1"),
        answer: t("ecofaq.answer1"),
      },
      {
        question: t("ecofaq.question2"),
        answer: t("ecofaq.answer2"),
      },
      {
        question: t("ecofaq.question3"),
        answer: t("ecofaq.answer3"),
      },
      {
        question: t("ecofaq.question4"),
        answer: t("ecofaq.answer4"),
      },
      {
        question: t("ecofaq.question5"),
        answer: t("ecofaq.answer5"),
      },
    ];
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Image Section */}
                        <div className="col-xl-7">
                            <img
                                src={img1}
                                alt={t("ecointro.imageAlt")}
                                width="100%"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="col-xl-5">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("ecointro.title")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t("ecointro.description")}</p>
                                </div>
                                <br className="mobile-seen" />
                                <a className="btn-main6" href="#">
                                    <span className="txt">{t("ecointro.buttonText")}</span>
                                </a>
                            </div>
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
                            {t("ecofacts.title")}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t("ecofacts.subtitle")}</p>
                        </div>
                    </div>

                    {/* Content Row */}
                    <div className="row">
                        {/* Empty Columns for Layout Balance */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box"></div>
                        </div>

                        {/* TradingView Widget */}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            {/* TradingView Widget BEGIN */}
                            <div className="tradingview-widget-container">
                                <div className="tradingview-widget-container__widget"></div>
                                <div className="tradingview-widget-copyright">
                                    <a
                                        href="https://www.tradingview.com/"
                                        rel="noopener nofollow"
                                        target="_blank"
                                    >
                                        TradingView
                                    </a>
                                </div>
                                <script
                                    type="text/javascript"
                                    src="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
                                    async
                                >
                                    {JSON.stringify({
                                        colorTheme: "light",
                                        isTransparent: false,
                                        width: "100%",
                                        height: "750",
                                        locale: t("ecofacts.widgetLocale"),
                                        importanceFilter: "-1,0,1",
                                        countryFilter:
                                            "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
                                    })}
                                </script>
                            </div>
                            {/* TradingView Widget END */}
                        </div>

                        {/* Empty Columns for Layout Balance */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-box"></div>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="sec-title text-center">
                        <a className="btn-main2" href="#">
                            <span className="txt">{t("ecofacts.buttonText")}</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="faq-style1-area">
                <div className="container">
                    {/* Title Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-style1-title">
                                <div className="sec-title">
                                    <h2>{t("ecofaq.title")}</h2>
                                    <div className="sub-title">
                                        <p>{t("ecofaq.subtitle")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Content */}
                    <div className="row">
                        {/* Image Section */}
                        <div className="col-xl-6">
                            <div className="faq-style1__image">
                                <img src={img2} alt="FAQ Illustration" />
                            </div>
                        </div>

                        {/* Accordion Section */}
                        <div className="col-xl-6">
                            <div className="faq-style1__content">
                                <ul className="accordion-box">
                                    {faqs.map((faq, index) => (
                                        <li
                                            key={index}
                                            className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                }`}
                                        >
                                            <div
                                                className={`acc-btn ${activeIndex === index ? "active" : ""
                                                    }`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <div className="icon-outer">
                                                    <i className="icon-right-arrow"></i>
                                                </div>
                                                <h3>{faq.question}</h3>
                                            </div>
                                            {activeIndex === index && (
                                                <div className="acc-content current">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-style1-bottom-box text-center">
                                <p>
                                    {t("ecofaq.bottomText")}{" "}
                                    <a href="#">{t("ecofaq.bottomLinkText")}</a>
                                </p>
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t("ecofaq.buttonText")}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};


export default EconomicCalendar;
