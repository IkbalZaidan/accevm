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

import slide1 from '../assets/img/ib/SLIDE-1.png';
import slide2 from '../assets/img/ib/SLIDE-4.png';
import img2 from '../assets/img/fundManagers/IMG-2.png';

import icon1 from "../assets/img/ib/icon-1.png";
import icon2 from "../assets/img/ib/icon-2.png";
import icon3 from "../assets/img/ib/icon-3.png";

const DemoAccount = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const faqs = [
        {
            questionKey: 'faqIbs.q1.question',
            answerKey: 'faqIbs.q1.answer',
        },
        {
            questionKey: 'faqIbs.q2.question',
            answerKey: 'faqIbs.q2.answer',
        },
        {
            questionKey: 'faqIbs.q3.question',
            answerKey: 'faqIbs.q3.answer',
        },
        {
            questionKey: 'faqIbs.q4.question',
            answerKey: 'faqIbs.q4.answer',
        },
        {
            questionKey: 'faqIbs.q5.question',
            answerKey: 'faqIbs.q5.answer',
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
                                        {t("Become an Introducing Broker")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t("Expand your business")}</p>
                                </div>

                                <a className="btn-main6" href={t("intro.buttonLink")}>
                                    <span className="txt">{t("Become a Partner Today")}</span>
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
                                    <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                                        {t('whyPartnerWith')} <span className="span-main" style={{ fontSize: '55px' }}>{t('Accuindex')}</span> {t('qMark')}
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('discoverAdvantages')}</p>
                                        <br />
                                        <p className="p-list">
                                            <span className="span-main">⦿</span> {t('robustTradingInfrastructure')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('competitiveCompensation')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('advancedClientManagementTools')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img src={slide2} alt="MetaTrader 5" width="100%" />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="#">
                                            <span className="txt">{t('explorePartnership')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 pc">
                            <img src={slide2} alt="MetaTrader 5" width="100%" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="benefits-area" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('howItWorks')}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('howItWorksDescription')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Benefit 1 */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon3} width="100px" alt={t('referClients')} />
                                <div className="text">
                                    <h3 className="bold-p">{t('referClients')}</h3>
                                    <p>{t('referClientsDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* Benefit 2 */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon2} width="100px" alt={t('clientsTrade')} />
                                <div className="text">
                                    <h3 className="bold-p">{t('clientsTrade')}</h3>
                                    <p>{t('clientsTradeDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* Benefit 3 */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon1} width="100px" alt={t('earnCommissionsTwo')} />
                                <div className="text">
                                    <h3 className="bold-p">{t('earnCommissionsTwo')}</h3>
                                    <p>{t('earnCommissionsDescription')}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main6" href="#">
                            <span className="txt">{t('becomePartner')}</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="features-style-area background-black pc">
                <div className="container">
                    <div className="sec-title mobile-align text-center">
                        <br />
                        <h1 className="white bold-title " style={{ fontSize: '45px' }}>
                            {t('rebate')}
                            <span className="span-main" style={{ fontSize: '55px' }}>
                                .
                            </span>

                        </h1>
                        <div className="sub-title white text-center col-md-7 col-12" style={{ justifySelf: "center" }}>
                            <p>{t('rebate')}</p>

                        </div>
                    </div>

                </div>
                <div className="row d-flex align-items-stretch justify-content-center mx-5">

                    <div className="col-xl-3 col-12">
                        <div className='rebateTitle'>
                            Account Type
                        </div>
                        <div className='rebateS1  ' >

                            <div className='rebateContent'>
                                <ul>
                                    <li className='contentli'>
                                        Forex
                                    </li>
                                    <li className='contentli'>
                                        Metals
                                    </li>
                                    <li className='contentli'>
                                        Indices
                                    </li>
                                    <li>
                                        Net Deposit Requirements:
                                    </li>
                                    <li>
                                        <span>
                                            1 Month Target:

                                        </span>
                                        <br></br>
                                        $25,000 | $51,000 | $101,000 | $201,000
                                    </li>
                                    <li>
                                        <span>
                                            3 Month Target:
                                        </span>

                                        <br></br>
                                        $50,000 | $100,000 | $200,000 | $300,000
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-12">
                        <div className='rebateTitle'>
                            <span>LV1</span> Rebate/Lot
                        </div>
                        <div className='rebateS1  ' >

                            <div className='rebateContent text-center'>
                                <ul>
                                    <li className='contentli'>
                                        $ <span>5</span>
                                    </li>
                                    <li className='contentli'>
                                        $ <span>5</span>

                                    </li>
                                    <li className='contentli'>
                                        $ <span>5</span>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-2 col-12">
                        <div className='rebateTitle'>
                            <span>LV2</span> Rebate/Lot
                        </div>
                        <div className='rebateS1  ' >

                            <div className='rebateContent text-center'>
                                <ul>
                                    <li className='contentli'>
                                        $ <span>6</span>
                                    </li>
                                    <li className='contentli'>
                                        $ <span>6</span>

                                    </li>
                                    <li className='contentli'>
                                        $ <span>6</span>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-12">
                        <div className='rebateTitle'>
                            <span>LV3</span> Rebate/Lot
                        </div>
                        <div className='rebateS1  ' >

                            <div className='rebateContent text-center'>
                                <ul>
                                    <li className='contentli'>
                                        $ <span>7</span>
                                    </li>
                                    <li className='contentli'>
                                        $ <span>7</span>

                                    </li>
                                    <li className='contentli'>
                                        $ <span>7</span>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-12">
                        <div className='rebateTitle'>
                            <span>LV4</span> Rebate/Lot
                        </div>
                        <div className='rebateS1  ' >

                            <div className='rebateContent text-center'>
                                <ul>
                                    <li className='contentli'>
                                        $ <span>8</span>
                                    </li>
                                    <li className='contentli'>
                                        $ <span>8</span>

                                    </li>
                                    <li className='contentli'>
                                        $ <span>8</span>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                   
                </div>

                <div className="text-center">
                    <br />
                    <br />
                    <a className="btn-main2" href="#">
                        <span className="txt">{t('becomePartner2')}</span>
                    </a>
                </div>
            </section>


            <section className="faq-style1-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-style1-title">
                                <div className="sec-title">
                                    <h2>{t('faqIbs.title')}</h2>
                                    <div className="sub-title">
                                        <p>{t('faqIbs.FaqSub')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-style1__image">
                                <div>
                                    <img src={img2} alt={t('faqIbs.imageAlt')} />
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
                                    {t('faqIbs.ctaTextPOne')} <a href="#">{t('faqIbs.ctaLinkText')}</a> {t('faqIbs.ctaTextPTwo')}
                                </p>
                                <div className="btns-box">
                                    <a className="btn-main2" href="#">
                                        <span className="txt">{t('faqIbs.registerButton')}</span>
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
