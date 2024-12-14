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

const DemoAccount = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeIndex2, setActiveIndex2] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const toggleAccordion2 = (index) => {
        setActiveIndex2(activeIndex2 === index ? null : index);
    };

    return (
        <div>

            <section className="faq-page-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <br></br>
                        <h2>
                            {t('faqTitle')}<span className="span-main" style={{ fontSize: '55px' }}>.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('faqSubtitle')}</p>
                        </div>
                    </div>

                    <div className="faq-search-box">
                        <div className="faq-search-box__inner">
                            <form className="search-form" action="#">
                                {/* Search form can be added here */}
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Column */}
                        <div className="col-xl-6">
                            <div className="faq-style1__content">
                                <ul className="accordion-box">
                                    {[...Array(15)].map((_, index) => (
                                        <li className={`accordion block ${activeIndex === index ? 'active-block' : ''}`} key={index}>
                                            <div
                                                className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => toggleAccordion(index)}

                                            >
                                                <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                                <h3>{t(`faqQuestion${index + 1}`)}</h3>
                                            </div>
                                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                                <p>{t(`faqAnswer${index + 1}`)}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-6">
                            <div className="faq-style1__content margintop">
                                <ul className="accordion-box">
                                    {[...Array(15)].map((_, index) => (
                                        <li className={`accordion block ${activeIndex2 === 16 ? 'active-block' : ''}`} key={index}>
                                            <div className={`acc-btn ${activeIndex2 === index ? 'active' : ''}`}
                                                onClick={() => toggleAccordion2(index)}>
                                                <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                                <h3>{t(`faqQuestion${index + 16}`)}</h3>
                                            </div>
                                            <div className={`acc-content ${activeIndex2 === index ? 'current' : ''}`}>
                                                <p>{t(`faqAnswer${index + 16}`)}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
};


export default DemoAccount;
