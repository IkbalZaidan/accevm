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

import slide1 from '../assets/img/accuPay/SLIDE-1.png';
import slide2 from '../assets/img/accuPay/SLIDE-4.png';
import slide8 from '../assets/img/accuPay/SLIDE-8.png';
import slide5 from '../assets/img/accuPay/SLIDE-5.png';
import slide6 from '../assets/img/accuPay/SLIDE-6.png';

import img2 from '../assets/img/fundManagers/IMG-2.png';

import icon1 from "../assets/img/accuPay/icon-1.png";
import icon2 from "../assets/img/accuPay/icon-2.png";
import icon3 from "../assets/img/accuPay/icon-3.png";

const DemoAccount = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const faqs = [
        {
            questionKey: 'faqAccPay.q1.question',
            answerKey: 'faqAccPay.q1.answer',
        },
        {
            questionKey: 'faqAccPay.q2.question',
            answerKey: 'faqAccPay.q2.answer',
        },
        {
            questionKey: 'faqAccPay.q3.question',
            answerKey: 'faqAccPay.q3.answer',
        },
        {
            questionKey: 'faqAccPay.q4.question',
            answerKey: 'faqAccPay.q4.answer',
        },
        {
            questionKey: 'faqAccPay.q5.question',
            answerKey: 'faqAccPay.q5.answer',
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
                            <img src={slide1} alt={t('accuPayAlt')} />
                        </div>

                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('seamlessPaymentsWithAccuPay')}
                                        <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t('experienceFastSecure')}</p>
                                </div>
                                <br className="mobile-seen" />
                                <a className="btn-main6" href="/Register">
                                    <span className="txt">{t('startTradingNow')}</span>
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
                            {t('whatIsAccuPay')}
                            <span className="span-main">{t('qMark')}</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('accuPayDescription')}</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Start Single Fact Box */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={icon3} alt={t('fastTransactionsAlt')} width="150px" />
                                </div>
                                <div className="text">
                                    <h3>{t('fastTransactionsTitle')}</h3>
                                    <p>{t('fastTransactionsDescription')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}

                        {/* Start Single Fact Box */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={icon2} alt={t('securePaymentsAlt')} width="150px" />
                                </div>
                                <div className="text">
                                    <h3>{t('securePaymentsTitle')}</h3>
                                    <p>{t('securePaymentsDescription')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}

                        {/* Start Single Fact Box */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-fact-box">
                                <div>
                                    <img src={icon1} alt={t('flexibleOptionsAlt')} width="150px" />
                                </div>
                                <div className="text">
                                    <h3>{t('flexibleOptionsTitle')}</h3>
                                    <p>{t('flexibleOptionsDescription')}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Fact Box */}
                    </div>

                    <div className="sec-title text-center">
                        <a className="btn-main2" href="/Register">
                            <span className="txt">{t('startTrading')}</span>
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
                                        {t('whyChooseAccuPay')}
                                        <span className="span-main" style={{ fontSize: '55px' }}></span> {t('qMark')}
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('accuPaySimplifiesDescription')}</p>
                                        <br />
                                        <p className="p-list">
                                            <span className="span-main">⦿</span> {t('instantTransactions')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('globalAccessibility')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('secureReliable')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('userFriendly')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('integratedTradingAccounts')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src={slide2}
                                            alt={t('metaTrader5Alt')}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="/Register">
                                            <span className="txt">{t('startTradingToday')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 pc">
                            <img
                                src={slide2}
                                alt={t('metaTrader5Alt')}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-style4-area">
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-xl-4 mobile-align">
                            <div className="features-style4-title-box">
                                <div className="sec-title">
                                    <h2>
                                        {t('howToGetYour')} <span className="span-main">{t('accuPay')}</span> {t('card')}
                                    </h2>
                                    <div className="sub-title">
                                        <p>{t('followStepsDescription')}</p>
                                    </div>
                                </div>
                                <div className="btns-box">
                                    <a className="btn-main5" href="/Register">
                                        <span className="txt">{t('startSimplifying')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="col-xl-4 mobile-align">
                            <img src={slide8} alt={t('slide8Alt')} width="100%" />
                        </div>

                        {/* Right Section */}
                        <div className="col-xl-4">
                            <div className="account-creation-step">
                                <ul>
                                    {[
                                        {
                                            step: '01',
                                            title: t('step1Title'),
                                            description: t('step1Description'),
                                        },
                                        {
                                            step: '02',
                                            title: t('step2Title'),
                                            description: t('step2Description'),
                                        },
                                        {
                                            step: '03',
                                            title: t('step3Title'),
                                            description: t('step3Description'),
                                        },
                                        {
                                            step: '04',
                                            title: t('step4Title'),
                                            description: t('step4Description'),
                                        },
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <div className="single-step">
                                                <div className={`counting span-main ${index === 3 ? 'lnone' : ''}`}>
                                                    <span className="span-main bold-title">{item.step}</span>
                                                </div>
                                                <div className="text-box">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="intro-style1-area">
                <div className="container">
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                    <div className="row mobile-align">
                        {/* Left Section */}
                        <div className="col-xl-6">
                            <div className="intro-style1-content-box">
                                <div className="sec-title">
                                    <h2 className="bold-title">
                                        {t('securityAndReliability')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>
                                        {t('seamlessTransactionsDescription')}
                                    </p>
                                </div>
                                <br className="mobile-seen" />

                                <a className="btn-main5" href="/Register">
                                    <span className="txt">
                                        {t('experiencePeaceOfMind')}
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="col-xl-6">
                            <img src={slide5} alt={t('securityImageAlt')} />
                        </div>
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
                                        {t('accuPayVsTraditional')} <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('accuPayVsTraditionalDescription')}</p>
                                        <br />
                                        <p className="p-list">
                                            <b>{t('accuPayBenefits')}</b>
                                            <br />
                                            <span className="span-main">⦿</span> {t('instantAccess')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('globalAcceptance')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('costEffective')}
                                            <br /><br />
                                            <b>{t('traditionalPaymentMethods')}</b>
                                            <br />
                                            <span className="span-main">⦿</span> {t('slowProcessing')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('higherFees')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('limitedAccess')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img src={slide6} alt="AccuPay vs Traditional Payment Methods" width="100%" />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="/Register">
                                            <span className="txt">{t('startUsingOurCard')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="col-xl-6 pc">
                            <img src={slide6} alt="AccuPay vs Traditional Payment Methods" width="100%" />
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
                                    <h2>{t('faqAccPay.title')}</h2>
                                    <div className="sub-title">
                                        <p>{t('faqAccPay.FaqSub')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-style1__image">
                                <div>
                                    <img src={img2} alt={t('faqAccPay.imageAlt')} />
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
                                    {t('faqAccPay.ctaTextPOne')} <a href="/ContactUs">{t('faqAccPay.ctaLinkText')}</a> {t('faqAccPay.ctaTextPTwo')}
                                </p>
                                <div className="btns-box">
                                    <a className="btn-main2" href="/Register">
                                        <span className="txt">{t('faqAccPay.registerButton')}</span>
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
