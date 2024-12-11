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

import img1 from '../assets/img/promotions/SLIDE-1.png';
import img2 from '../assets/img/promotions/SLIDE-2.png';
import img3 from '../assets/img/promotions/SLIDE-3.png';
import img4 from '../assets/img/promotions/SLIDE-4.png';

import icon1 from "../assets/img/promotions/ICON-1.png";
import icon2 from "../assets/img/promotions/ICON-2.png";
import icon3 from "../assets/img/promotions/ICON-3.png";

const Promotions = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const facts = [
        {
            icon: icon1,
            title: t("promotionfacts.fact1.title"),
            description: t("promotionfacts.fact1.description"),
        },
        {
            icon: icon2,
            title: t("promotionfacts.fact2.title"),
            description: t("promotionfacts.fact2.description"),
        },
        {
            icon: icon3,
            title: t("promotionfacts.fact3.title"),
            description: t("promotionfacts.fact3.description"),
        },
    ];

    return (
        <div>
            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Image Section */}
                        <div className="col-xl-6">
                            <img src={img1} alt="Promotion Slide" />
                        </div>

                        {/* Content Section */}
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                {/* Title */}
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("promotionignite.promotionsTitle")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>.</span>
                                    </h2>
                                </div>

                                {/* Description */}
                                <div className="text">
                                    <p>{t("promotionignite.promotionsDescription")}</p>
                                </div>

                                <br className="mobile-seen" />

                                {/* Call to Action */}
                                <a className="btn-main6" href="#">
                                    <span className="txt">{t("promotionignite.ctaButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        {/* Text Content Section */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: "45px" }}>
                                        {t("promotionfeatures.title")}
                                        <br />
                                        <span className="span-main">{t("promotionfeatures.bonusAmount")}</span> {t("promotionfeatures.depositBonus")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t("promotionfeatures.introduction")}</p>
                                        <br />
                                        <p className="p-list">
                                            <span className="span-main">⦿</span> {t("promotionfeatures.benefit1")}
                                            <br />
                                            <br />
                                            <span className="span-main">⦿</span> {t("promotionfeatures.benefit2")}
                                            <br />
                                            <br />
                                            <span className="span-main">⦿</span> {t("promotionfeatures.benefit3")}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    {/* Mobile Image */}
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src="assets/img/promotions/SLIDE-2.png"
                                            alt="MetaTrader 5"
                                            width="100%"
                                        />
                                    </div>
                                    {/* Call to Action Button */}
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="#">
                                            <span className="txt">{t("promotionfeatures.ctaButton")}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Image */}
                        <div className="col-xl-6 pc">
                            <img
                                src={img2}
                                alt="MetaTrader 5"
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
                            {t("promotionfacts.title")} <span className="span-main">{t("promotionfacts.bonusPercentage")}</span> {t("promotionfacts.bonus")}
                        </h2>
                        <div className="sub-title">
                            <p>{t("promotionfacts.introduction")}</p>
                        </div>
                    </div>

                    {/* Fact Boxes */}
                    <div className="row">
                        {facts.map((fact, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                <div className="single-fact-box">
                                    <div>
                                        <img src={fact.icon} width="150px" alt={fact.title} />
                                    </div>
                                    <div className="text">
                                        <h3>{fact.title}</h3>
                                        <p>{fact.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sub Title */}
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <p>{t("promotionfacts.additionalInfo")}</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="sec-title text-center">
                        <br />
                        <a className="btn-main2" href="#">
                            <span className="txt">{t("promotionfacts.ctaButton")}</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Content Section */}
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("warning.warningTitle")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>
                                        {t("warning.warningText")}
                                        <br /> <br />
                                        {t("warning.bonusOpportunity")}
                                    </p>
                                </div>
                                <br className="mobile-seen" />

                                <a className="btn-main5" href="#">
                                    <span className="txt">{t("warning.ctaButton")}</span>
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-xl-6">
                            <img src={img3} alt="Risk Warning" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-style-area background-black">
                <div className="container">
                    <div className="row">
                        {/* Content Section */}
                        <div className="col-xl-6">
                            <div className="features-style-content">
                                <div className="sec-title mobile-align">
                                    <br />
                                    <h1 className="white bold-title" style={{ fontSize: "45px" }}>
                                        {t("ignite.readyToTrade")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>?</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t("ignite.description")}</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="text-box">
                                    {/* Mobile Image */}
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src="assets/img/promotions/SLIDE-4.png"
                                            alt={t("ignite.imageAlt")}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <br />
                                        <div className="btns-box mobile-align">
                                            <br />
                                            <br />
                                            <a className="btn-main2" href="#">
                                                <span className="txt">{t("ignite.openLiveAccount")}</span>
                                            </a>
                                            <a className="btn-one background-main" href="#">
                                                <span className="txt">{t("ignite.tryDemoAccount")}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-xl-6 pc">
                            <img
                                src={img4}
                                alt={t("ignite.imageAlt")}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};


export default Promotions;
