import React, { useState } from 'react';
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

import slide1 from '../assets/img/islamicAccount/SLIDE-1.png';
import slide2 from '../assets/img/islamicAccount/slide-img-2.png';



import icon1 from "../assets/img/islamicAccount/icon-1.png";
import icon2 from "../assets/img/islamicAccount/icon-2.png";
import icon3 from "../assets/img/islamicAccount/icon-3.png";



import img2 from '../assets/img/demoAccount/IMG-2.png';
import icon11 from "../assets/img/demoAccount/icon-1.png";
import icon22 from "../assets/img/demoAccount/icon-2.png";
import icon33 from "../assets/img/demoAccount/icon-3.png";

const IslamicAccounts = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const demoAccounts = [
    {
      title: t("islamic.service.demoAccountTitle"),
      features: [
        t("islamic.service.feature1"),
        t("islamic.service.feature2"),
        t("islamic.service.feature3"),
        t("islamic.service.feature4"),
        t("islamic.service.feature5"),
        t("islamic.service.feature6"),
        t("islamic.service.feature7"),
        t("islamic.service.feature8"),
      ],
    },
  ];
  const benefits = [
    {
      imgSrc: icon1,
      title: t("islamic.benefits3.riskFreeLearning.title"),
      description: t("islamic.benefits3.riskFreeLearning.description"),
    },
    {
      imgSrc: icon2,
      title: t("islamic.benefits3.strategyTesting.title"),
      description: t("islamic.benefits3.strategyTesting.description"),
    },
    {
      imgSrc: icon3,
      title: t("islamic.benefits3.platformFamiliarity.title"),
      description: t("islamic.benefits3.platformFamiliarity.description"),
    },
  ];


  const faqs = [
    {
      questionKey: 'islamic.faq.q1.question',
      answerKey: 'islamic.faq.q1.answer',
    },
    {
      questionKey: 'islamic.faq.q2.question',
      answerKey: 'islamic.faq.q2.answer',
    },
    {
      questionKey: 'islamic.faq.q3.question',
      answerKey: 'islamic.faq.q3.answer',
    },
    {
      questionKey: 'islamic.faq.q4.question',
      answerKey: 'islamic.faq.q4.answer',
    },
    {
      questionKey: 'islamic.faq.q5.question',
      answerKey: 'islamic.faq.q5.answer',
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
                    {t("islamic.intro.title")}
                    <span className="span-main" style={{ fontSize: "55px" }}>
                      .
                    </span>
                  </h2>
                </div>
                <div className="text">
                  <p>{t("islamic.intro.description")}</p>
                </div>

                <a className="btn-main2" href={t("islamic.intro.buttonLink")}>
                  <span className="txt">{t("islamic.intro.buttonText")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="features-style-area"
        style={{
          background: "linear-gradient(to bottom, black 98.7%, white 5%)",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Content Section */}
            <div className="col-xl-6">
              <div className="features-style-content">
                <div className="sec-title mobile-align">
                  <br />
                  <h1 className="white bold-title" style={{ fontSize: "45px" }}>
                    {t("islamic.features2.title")}
                    <span className="span-main" style={{ fontSize: "55px" }}>
                      ?
                    </span>
                  </h1>
                  <div className="sub-title white">
                    <p>{t("islamic.features2.description")}</p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="btns-box mobile-align">
                    <br />
                    <br />
                    <a className="btn-main3" href={t("islamic.features2.buttonLink")}>
                      <span className="txt">{t("islamic.features2.buttonText")}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-xl-6">
              <img src={slide2} alt={t("islamic.features2.imageAlt")} />
            </div>
          </div>
        </div>
      </section>

      <section className="service-style1-area">
        <div className="container">
          {/* Title Section */}
          <div className="row">
            <div className="col-xl-12" style={{ textAlign: "center" }}>
              <div className="service-style1-title">
                <div className="sec-title">
                  <h2 className="bold-title" style={{ color: "black" }}>
                    {t("islamic.service.title")}
                    <span className="span-main">.</span>
                  </h2>
                  <div className="sub-title">
                    <p style={{ color: "black" }}>{t("islamic.service.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (data-show) */}
          <div className="row data-show">
            <div className="col-xl-12">
              <div className="service-style1-tab">
                <div className="tabs-content-box">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    {demoAccounts.map((account, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            height: "400px",
                          }}
                        >
                          <h2 className="white">{account.title}</h2>
                          <div className="border-box"></div>
                          <ul>
                            {account.features.map((feature, idx) => (
                              <li className="white" key={idx}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout (data-show-x) */}
          <div className="row data-show-x">
            <div className="col-xl-2"></div>
            <div className="col-xl-8">
              <div className="service-style1-tab">
                <div className="tabs-content-box">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    {demoAccounts.map((account, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            height: "430px",
                          }}
                        >
                          <h2 className="white">{account.title}</h2>
                          <div className="border-box"></div>
                          <ul>
                            {account.features.map((feature, idx) => (
                              <li className="white" key={idx}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-xl-2"></div>
          </div>

          {/* Action Button */}
          <div className="row">
            <div className="col-xl-12">
              <div className="service-style1__btns-box text-center">
                <a className="btn-main2" href="#">
                  <span className="txt">{t("islamic.service.tradeNow")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-area" style={{ backgroundColor: "white" }}>
        <div className="container">
          {/* Title Section */}
          <div className="sec-title text-center">
            <h2 className="bold-title">
              {t("islamic.benefits3.title")}
              <span className="span-main">.</span>
            </h2>
            <div className="sub-title">
              <p>{t("islamic.benefits3.subtitle")}</p>
            </div>
          </div>

          {/* Benefits Content */}
          <ul className="row benefits-content text-center">
            {benefits.map((benefit, index) => (
              <li
                className="col-xl-4 single-benefits-box-colum"
                key={index}
              >
                <div className="single-benefits-box">
                  <img src={benefit.imgSrc} alt={benefit.title} width="100px" />
                  <div className="text">
                    <h3 className="bold-p">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>



      <section className="faq-style1-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="faq-style1-title">
                <div className="sec-title">
                  <h2>{t('islamic.faq.title')}</h2>
                  <div className="sub-title">
                    <p>{t('islamic.faq.subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="faq-style1__image">
                <div>
                  <img src={img2} alt={t('islamic.faq.imageAlt')} />
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
                  {t('islamic.faq.ctaText')} <a href="#">{t('islamic.faq.ctaLinkText')}</a>
                </p>
                <div className="btns-box">
                  <a className="btn-main2" href="#">
                    <span className="txt">{t('islamic.faq.registerButton')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-area">
        <div className="facts-area-bg background-main"></div>
        <div className="container">
          <div className="sec-title text-center">
            <h2>{t('awardWinningBroker')}</h2>
            <div className="sub-title">
              <p>{t('discoverWhyMillions')}</p>
            </div>
          </div>
          <div className="row">

            <div className="swiper-container-facts mobile-seen">
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                className="swiper-wrapper"
              >
                {/* Slide 1 */}
                <SwiperSlide className="swiper-slide text-center">
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg" alt="Slide 1" />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="swiper-slide text-center">
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg" alt="Slide 2" />
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="swiper-slide text-center">
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg" alt="Slide 3" />
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="swiper-slide text-center">
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg" alt="Slide 4" />
                </SwiperSlide>
              </Swiper>
              {/* Pagination */}
              <div className="swiper-pagination"></div>
            </div>
            {/* Regular Fact Boxes (For Larger Screens) */}
            <div className="col-xl-3 col-lg-6 col-md-6 pc">
              <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg" alt="Fact 1" />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 pc">
              <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg" alt="Fact 2" />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 pc">
              <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg" alt="Fact 3" />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 pc">
              <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg" width="100%" alt="Fact 4" />
            </div>
          </div>
        </div>
      </section >
    </div>

  );
};


export default IslamicAccounts;
