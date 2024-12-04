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

import introImg from '../assets/img/accountTypes/main/slide-1.png';

import slide2 from '../assets/img/accountTypes/main/slide-2.png';

import secure from '../assets/img/accountTypes/main/icon-1.png';
import advanced from '../assets/img/accountTypes/main/icon-3.png';
import support from '../assets/img/accountTypes/main/icon-2.png';

const AccountTypes = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation(); // Use the t function to translate

  const benefits = t("benefits2", { returnObjects: true }); // Fetch dynamic content

  const imagePaths = {
    "Secure Investments": secure,
    "Advanced Platforms": advanced,
    "24/5 Support": support,
  };

  return (
    <div>
      <section className="intro-style1-area">
        <div className="container">
          <br className="mobile-seen" />
          <br className="mobile-seen" />
          <div className="row mobile-align">
            {/* Image Section */}
            <div className="col-xl-6">
              <img src={introImg} alt="Intro" />
            </div>

            {/* Text Section */}
            <div className="col-xl-6">
              <div className="intro-style1-content-box">
                <div className="sec-title">
                  <h2 className="bold-title">
                    {t("introStyle1.title")}
                    <span className="span-main" style={{ fontSize: "55px" }}>
                      .
                    </span>
                  </h2>
                </div>
                <div className="text">
                  <p>{t("introStyle1.subtitle")}</p>
                </div>

                {/* Button */}
                <a className="btn-main2" href="#">
                  <span className="txt">{t("introStyle1.buttonText")}</span>
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
            <div className="col-xl-6">
              <div className="features-style-content">
                <div className="sec-title mobile-align">
                  <br />
                  <h1 className="white bold-title" style={{ fontSize: "45px" }}>
                    {t("featuresStyle.title")}
                    <span className="span-main" style={{ fontSize: "55px" }}>
                      .
                    </span>
                  </h1>
                  <div className="sub-title white">
                    <p>{t("featuresStyle.subtitle")}</p>
                  </div>
                </div>
                <div className="mobile-seen">
                  <img
                    src={slide2}
                    alt="Trading Options"
                    loading="lazy"
                  />
                </div>
                <div className="text-box">
                  <div className="btns-box mobile-align">
                    <br />
                    <br />
                    <a className="btn-main3" href="#">
                      <span className="txt">{t("featuresStyle.buttonText")}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pc">
              <img
                src={slide2}
                alt="MetaTrader 5"
                loading="lazy"
              />
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
                  <h2 style={{ color: "black" }} className="bold-title">
                    {t("serviceStyle.mainTitle")}
                    <span className="span-main">.</span>
                  </h2>
                  <div className="sub-title">
                    <p style={{ color: "black" }}>
                      {t("serviceStyle.mainSubtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row data-show">
            <div className="col-xl-12">
              <div className="service-style1-tab">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  {t("serviceStyle.accounts", { returnObjects: true }).map(
                    (account, index) => (
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
                                * {feature}
                              </li>
                            ))}
                          </ul>
                         
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="row data-show-x">
            <div className="col-xl-2"></div>
            <div className="col-xl-8">
              <div className="service-style1-tab">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  {t("serviceStyle.accounts", { returnObjects: true }).map(
                    (account, index) => (
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
                                * {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="text-center mb-3">
                          <a className="btn-main2" href="#">
                            <span className="txt">
                              {t("tradeNow")}
                            </span>
                          </a>
                        </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
            <div className="col-xl-2"></div>
          </div>

          {/* Swipe Hint Section */}
          <div className="row">
            <div className="col-xl-12">
              <div className="service-style1__btns-box text-center">
                <a className="btn-one" href="#">
                  <span className="txt bold-title">
                    {t("serviceStyle.swipeHint")}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="benefits-area" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">
              {t('benefits2.title')} <span className="span-main">.</span>
            </h2>
            <div className="sub-title">
              <p>{t('benefits2.subtitle')}</p>
            </div>
          </div>
          <ul className="row benefits-content text-center">
            {t('benefits2.items', { returnObjects: true }).map((item, index) => (
              <li key={index} className="col-xl-4 single-benefits-box-colum">
                <div className="single-benefits-box">
                  <img src={imagePaths[item.imgSrc]} width="100px" alt={item.title} />
                  <div className="text">
                    <h3 className="bold-p">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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


export default AccountTypes;
