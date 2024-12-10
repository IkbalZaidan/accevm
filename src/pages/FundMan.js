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

import slide1 from '../assets/img/fundManagers/SLIDE-1.png';
import slide2 from '../assets/img/fundManagers/SLIDE-4.png';
import img2 from '../assets/img/fundManagers/IMG-2.png';

import icon1 from "../assets/img/fundManagers/icon-1.png";
import icon2 from "../assets/img/fundManagers/icon-2.png";
import icon3 from "../assets/img/fundManagers/icon-3.png";

const DemoAccount = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const faqs = [
    {
      questionKey: 'faqFunds.q1.question',
      answerKey: 'faqFunds.q1.answer',
    },
    {
      questionKey: 'faqFunds.q2.question',
      answerKey: 'faqFunds.q2.answer',
    },
    {
      questionKey: 'faqFunds.q3.question',
      answerKey: 'faqFunds.q3.answer',
    },
    {
      questionKey: 'faqFunds.q4.question',
      answerKey: 'faqFunds.q4.answer',
    },
    {
      questionKey: 'faqFunds.q5.question',
      answerKey: 'faqFunds.q5.answer',
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
                    {t("Maximize Client Portfolios")}
                    <span className="span-main" style={{ fontSize: "55px" }}>
                      .
                    </span>
                  </h2>
                </div>
                <div className="text">
                  <p>{t("Manage assets efficiently")}</p>
                </div>

                <a className="btn-main2" href={t("intro.buttonLink")}>
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
              {t('streamlinedSolutions')}{' '}
              <span className="span-main">.</span>
            </h2>
            <div className="sub-title">
              <p>{t('leverageTools')}</p>
            </div>
          </div>
          <div className="row">
            {/* Start Single Fact Box */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-fact-box">
                <div>
                  <img src={icon1} alt="Icon 1" width="150px" />
                </div>
                <div className="text">
                  <h3>{t('allocationMethodsTitle')}</h3>
                  <p>{t('allocationMethodsDescription')}</p>
                </div>
              </div>
            </div>
            {/* End Single Fact Box */}

            {/* Start Single Fact Box */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-fact-box">
                <div>
                  <img src={icon3} alt="Icon 3" width="150px" />
                </div>
                <div className="text">
                  <h3>{t('realTimeAnalyticsTitle')}</h3>
                  <p>{t('realTimeAnalyticsDescription')}</p>
                </div>
              </div>
            </div>
            {/* End Single Fact Box */}

            {/* Start Single Fact Box */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-fact-box">
                <div>
                  <img src={icon2} alt="Icon 2" width="150px" />
                </div>
                <div className="text">
                  <h3>{t('customizableConditionsTitle')}</h3>
                  <p>{t('customizableConditionsDescription')}</p>
                </div>
              </div>
            </div>
            {/* End Single Fact Box */}
          </div>

          <div className="sec-title text-center">
            <a className="btn-main2" href="#">
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
                  <h1
                    className="white bold-title"
                    style={{ fontSize: '45px' }}
                  >
                    {t('whyChooseUs')}
                    <span
                      className="span-main"
                      style={{ fontSize: '55px' }}
                    ></span>
                  </h1>
                  <div className="sub-title white">
                    <p>{t('experienceTools')}</p>
                    <br />
                    <p className="p-list">
                      <span className="span-main">⦿</span>{' '}
                      {t('cuttingEdgeTechnology')}
                      <br />
                      <span className="span-main">⦿</span>{' '}
                      {t('transparencyAndTrust')}
                      <br />
                      <span className="span-main">⦿</span>{' '}
                      {t('dedicatedSupport')}
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="col-xl-6 mobile-seen">
                    <img
                      src={slide2}
                      alt="MetaTrader 5"
                      width="100%"
                    />
                  </div>
                  <div className="btns-box mobile-align">
                    <br />
                    <a className="btn-one background-main" href="#">
                      <span className="txt">{t('becomePartner')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 pc">
              <img
                src={slide2}
                alt="MetaTrader 5"
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
                  <h2>{t('faq.title')}</h2>
                  <div className="sub-title">
                    <p>{t('Find answers to the most common')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="faq-style1__image">
                <div>
                  <img src={img2} alt={t('faq.imageAlt')} />
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
                  {t('faqFunds.ctaTextPOne')} <a href="#">{t('faqFunds.ctaLinkText')}</a> {t('faqFunds.ctaTextPTwo')}
                </p>
                <div className="btns-box">
                  <a className="btn-main2" href="#">
                    <span className="txt">{t('faqFunds.registerButton')}</span>
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
