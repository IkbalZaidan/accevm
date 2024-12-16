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

import slide1 from '../assets/img/company/SLIDE-1.png';
import slide2 from '../assets/img/corporateAccounts/SLIDE-4.png';
import img2 from '../assets/img/fundManagers/IMG-2.png';

import icon1 from "../assets/img/company/icon-1.png";
import icon2 from "../assets/img/company/icon-2.png";
import icon3 from "../assets/img/company/icon-3.png";

const DemoAccount = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const features = [
        {
            imgSrc: icon1,
            title: t('featuresThree.diverseFinancialInstruments.title'),
            description: t('featuresThree.diverseFinancialInstruments.description'),
        },
        {
            imgSrc: icon2,
            title: t('featuresThree.stateOfTheArtTechnology.title'),
            description: t('featuresThree.stateOfTheArtTechnology.description'),
        },
        {
            imgSrc: icon3,
            title: t('featuresThree.regulatoryComplianceSecurity.title'),
            description: t('featuresThree.regulatoryComplianceSecurity.description'),
        },
    ];


    const faqs = [
        {
            questionKey: 'faqCO.q1.question',
            answerKey: 'faqCO.q1.answer',
        },
        {
            questionKey: 'faqCO.q2.question',
            answerKey: 'faqCO.q2.answer',
        },
        {
            questionKey: 'faqCO.q3.question',
            answerKey: 'faqCO.q3.answer',
        },
        {
            questionKey: 'faqCO.q4.question',
            answerKey: 'faqCO.q4.answer',
        },
        {
            questionKey: 'faqCO.q5.question',
            answerKey: 'faqCO.q5.answer',
        }
    ];


    return (
        <div>
            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        <div className="col-xl-6">
                            {/* Image source is dynamic using i18n */}
                            <img src={slide1} alt={t("intro.imageAlt")} />
                        </div>

                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t("Partner with")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t("Fully regulated")}</p>
                                </div>

                                <a className="btn-main6" href="/RegisterIb">
                                    <span className="txt">{t("Become a Partner Today")}</span>
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
                        <h2>
                            {t('Transparency You Can Trust')}<span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('At Accuindex')}</p>
                        </div>
                    </div>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-fact-box">
                                    <div>
                                        <img src={feature.imgSrc} alt={feature.title} width="150px" />
                                    </div>
                                    <div className="text">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sec-title text-center">
                        <a className="btn-main2" href="/RegisterIb">
                            <span className="txt">{t('openAccountRaw')}</span>
                        </a>
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
                                        {t('Empowering Institutions to Thrive')}<span className="span-main" style={{ fontSize: '55px' }}></span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('Accuindex offers')}</p>
                                        <br />
                                        <p className="p-list">
                                            <span className="span-main">⦿</span> {t('Fund Manager Program')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('Corporate Accounts')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src={slide2}
                                            alt={t('metaTrader5')}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="/RegisterIb">
                                            <span className="txt">{t('Explore Partnership Opportunities')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 pc">
                            <img
                                src={slide2}
                                alt={t('metaTrader5')}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="faq-style1-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-style1-title">
                                <div className="sec-title">
                                    <h2>{t('faqCO.title')}</h2>
                                    <div className="sub-title">
                                        <p>{t('faqCO.FaqSub')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-style1__image">
                                <div>
                                    <img src={img2} alt={t('faqCO.imageAlt')} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="faq-style1__content">
                                <ul className="accordion-box">
                                    {faqs.map((faq, index) => (
                                        <li
                                            key={index}
                                            className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                        >
                                            <div
                                                className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <div className="icon-outer">
                                                    <i className="icon-right-arrow"></i>
                                                </div>
                                                <h3>{t(faq.questionKey)}</h3>
                                            </div>
                                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                                <p>{t(faq.answerKey)}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-style1-bottom-box text-center">
                                <p>
                                    {t('faqCO.ctaTextPOne')} <a href="/RegisterIb">{t('faqCO.ctaLinkText')}</a> {t('faqCO.ctaTextPTwo')}
                                </p>
                                <div className="btns-box">
                                    <a className="btn-main2" href="/RegisterIb">
                                        <span className="txt">{t('faqCO.registerButton')}</span>
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


export default DemoAccount;
