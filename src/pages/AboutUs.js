import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Swiper modules
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';

import slideImg1 from '../assets/img/aboutus/ourstory/SLIDE-IMG-1.png';
import slideImg3 from "../assets/img/aboutus/ourstory/SLIDE-IMG-3.png";
import slideImg4 from '../assets/img/aboutus/ourstory/SLIDE-IMG-4.png';
import slideImg5 from '../assets/img/aboutus/ourstory/SLIDE-IMG-5.png';
import imgTz from '../assets/img/aboutus/ourstory/tz.png';

import icon1 from "../assets/img/aboutus/ourstory/icon-1.png";
import icon2 from "../assets/img/aboutus/ourstory/icon-2.png";
import img2016 from "../assets/img/aboutus/ourstory/2016-VS.png";
import img2018 from "../assets/img/aboutus/ourstory/2018-VS.png";
import img2020 from "../assets/img/aboutus/ourstory/2020-VS.png";
import img2022 from "../assets/img/aboutus/ourstory/2022-VS.png";
import img2023 from "../assets/img/aboutus/ourstory/2023-VS.png";
import img2024 from "../assets/img/aboutus/ourstory/2024-VS.png";


const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation(); // Use the t function to translate
  // const milestones = t("milestones.items", { returnObjects: true });


  const milestones = [
    {
      year: 2016,
      img: img2016,
      description: t("milestones.description2016"),
    },
    {
      year: 2018,
      img: img2018,
      description: t("milestones.description2018"),
    },
    {
      year: 2020,
      img: img2020,
      description: t("milestones.description2020"),
    },
    {
      year: 2022,
      img: img2022,
      description: t("milestones.description2022"),
    },
    {
      year: 2023,
      img: img2023,
      description: t("milestones.description2023"),
    },
    {
      year: 2024,
      img: img2024,
      description: t("milestones.description2024"),
    },
  ];

  return (
    <div>
      <section id="eligibility" className="eligibility-area">
        <div className="container">
          <div className="row">

            <div className="col-xl-6">
              <br className="mobile-seen" />
              <br className="mobile-seen" />
              <div className="eligibility-img-box">
                <div className="sec-title">
                  <h2 className="bold-title">
                    {t('realTrades')},<br /> {t('greatSuccess')}
                    <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                  </h2>
                  <div className="sub-title">
                    <p>{t('trustedPartner')}</p>
                  </div>
                </div>
                <div className="eligibility-img-box__inner pc">
                  <img src={slideImg1} alt="" width="90%" />
                </div>

                <div className="eligibility-img-box__inner mobile-seen">
                  <img src={slideImg1} alt="" width="100%" />
                </div>
                <div className="btns-box mobile-align">
                  <br />
                  <br />
                  <a className="btn-main2" href="#">
                    <span className="txt">{t('liveAccount')}</span>
                  </a>
                  <a className="btn-one background-main" href="#">
                    <span className="txt">{t('demoAccount')}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="eligibility-content-box">
                <div className="eligibility-content-box__inner">
                  <ul>
                    <li>
                      <div className="inner">
                        <div className="counting">1</div>
                        <div className="text">
                          <h3>{t('humbleBeginnings')}</h3>
                          <p>{t('humbleBeginningsDesc')}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="counting">2</div>
                        <div className="text">
                          <h3>{t('globalRecognition')}</h3>
                          <p>{t('globalRecognitionDesc')}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="counting">3</div>
                        <div className="text">
                          <h3>{t('innovativeTrading')}</h3>
                          <p>{t('innovativeTradingDesc')}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="counting">4</div>
                        <div className="text">
                          <h3>{t('commitmentToEmpowerment')}</h3>
                          <p>{t('commitmentToEmpowermentDesc')}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="facts-box-style2">
                  <div className="counting">
                    <h2 className="odometer" data-count="9.3">9.3</h2>
                    <span className="k">{t('K')}</span>
                  </div>
                  <div className="inner-title">
                    <h3>{t('newAccountsOpened')}</h3>
                  </div>
                </div>

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
                  <h1
                    className="white bold-title"
                    style={{ fontSize: "45px" }}
                  >
                    {t('features.title')}
                    <span
                      className="span-main"
                      style={{ fontSize: "55px" }}
                    >
                      .
                    </span>
                  </h1>
                  <div className="sub-title white">
                    <p>{t('features.subtitle')}</p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="row">
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white">{t('features.coreValues.title')}</h3>
                      <br />
                      <ul>
                        {t('features.coreValues.items', { returnObjects: true }).map((item, index) => (
                          <li key={index}>
                            <div className="icon">
                              <span className="icon-checkbox-mark"></span>
                            </div>
                            <p className="white">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white">{t('features.empoweringTraders.title')}</h3>
                      <br />
                      <ul>
                        {t('features.empoweringTraders.items', { returnObjects: true }).map((item, index) => (
                          <li key={index}>
                            <div className="icon">
                              <span className="icon-checkbox-mark"></span>
                            </div>
                            <p className="white">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="btns-box mobile-align">
                    <br />
                    <br />
                    <a className="btn-main2 mx-1" href="#">
                      <span className="txt">{t('features.buttons.explore')}</span>
                    </a>
                    <a className="btn-one background-main" href="#">
                      <span className="txt">{t('features.buttons.metatrader')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <br />
              <br />
              <img
                className="mob"
                src={slideImg4}
                alt={t('features.imageAlt')}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="benefits-area"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">
              {t('benefits.title')}
              <span className="span-main">.</span>
            </h2>
            <div className="sub-title">
              <p>{t('benefits.subtitle')}</p>
            </div>
          </div>
          <ul className="row benefits-content text-center">
            {/* Mission */}
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img
                  src={icon1}
                  width="100px"
                  alt={t('benefits.mission.alt')}
                />
                <div className="text">
                  <h3 className="bold-p">{t('benefits.mission.title')}</h3>
                  <p>{t('benefits.mission.description')}</p>
                </div>
              </div>
            </li>
            {/* Vision */}
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img
                  src={slideImg3}
                  width="100px"
                  alt={t('benefits.vision.alt')}
                />
                <div className="text">
                  <h3 className="bold-p">{t('benefits.vision.title')}</h3>
                  <p>{t('benefits.vision.description')}</p>
                </div>
              </div>
            </li>
            {/* Values */}
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img
                  src={icon2}
                  width="100px"
                  alt={t('benefits.values.alt')}
                />
                <div className="text">
                  <h3 className="bold-p">{t('benefits.values.title')}</h3>
                  <p>{t('benefits.values.description')}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="blog-style1-area">
        <div className="container mobile-align">
          <div className="sec-title text-center">
            <h2>
              <span className="span-main">{t("milestones.titlePart1")}</span>{" "}
              {t("milestones.titlePart2")}
              <span className="span-main">.</span>
            </h2>
            <div className="sub-title"></div>
            <br />
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 10000, 
                  disableOnInteraction: false,
                }}
                spaceBetween={0}
                navigation={{
                  nextEl: '.custom-swiper-button-next',
                  prevEl: '.custom-swiper-button-prev',
                }}
                slidesPerView={1}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {milestones.map((milestone, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="single-blog-style1 wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="img-holder">
                        <div className="inner">
                          <img src={milestone.img} alt={`Milestone ${milestone.year}`} />
                          <div className="overlay-icon">
                            <a href="#">
                              <span className="icon-right-arrow"></span>
                            </a>
                          </div>
                        </div>
                        <div className="category-date-box">
                          <div className="category">
                            <span className="icon-play-button-1"></span>
                            <h5>{t('year')}</h5>
                          </div>
                          <div className="date">
                            <h5>{milestone.year}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="text-holder">
                        <h3 className="blog-title mobile-align">
                          <a href="#">{milestone.description}</a>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Swiper Navigation Buttons */}
              {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> */}

              <div className="custom-swiper-button-next">
                <span className="icon-right-arrow"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="icon-right-arrow rotate180"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-request-style2-area black background-black">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="service-request-style2-content-box">
                <div
                  className="pattern-bottom"
                  style={{
                    backgroundImage: slideImg5,
                  }}
                ></div>
                <div className="sec-title mobile-align">
                  <h2 className="bold-title white">
                    {t("aboutUsP.section1.title")}{" "}
                    <span className="span-main span-main-font">.</span>
                  </h2>
                  <div className="sub-title white">
                    <p>{t("aboutUsP.section1.subtitle")}</p>
                  </div>
                </div>

                <div className="service-request-style2-content-box__inner pc">
                  <ul>
                    {t("aboutUsP.section1.features", { returnObjects: true }).map(
                      (feature, index) => (
                        <li key={index}>
                          <div className="single-service-request-style2-box">
                            <div className="icon">
                              <span className={feature.icon}></span>
                            </div>
                            <div className="title">
                              <h3 className="white">
                                {feature.title}
                                <a href={feature.link}>
                                  <span className="icon-right-arrow"></span>
                                </a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="service-request-style2__btns-box mobile-align pc">
                  <a className="btn-main2" href={t("aboutUsP.section1.button.link")}>
                    <span className="txt">{t("aboutUsP.section1.button.text")}</span>
                  </a>
                </div>

                <div className="mobile-seen mobile-align">
                  <div className="col-xl-6 mobile-seen">
                    <img
                      src={slideImg5}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <br />
                  <br />
                  <a className="btn-main2" href={t("aboutUsP.section1.button.link")}>
                    <span className="txt">{t("aboutUsP.section1.button.text")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 pc">
              <img src={slideImg5} alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-style4-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mobile-align">
              <div className="features-style4-title-box">
                <div className="sec-title">
                  <h2>
                    {t("aboutUsP.section2.title")}{" "}
                    <span className="span-main">{t("aboutUsP.section2.brand")}</span>
                  </h2>
                  <div className="sub-title">
                    <p>{t("aboutUsP.section2.description")}</p>
                  </div>
                </div>
                <div className="btns-box">
                  <a
                    className="btn-main2"
                    href={t("aboutUsP.section2.button.link")}
                  >
                    <span className="txt">{t("aboutUsP.section2.button.text")}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 mobile-align">
              <img src={imgTz} alt="" width="100%" />
            </div>

            <div className="col-xl-4">
              <div className="account-creation-step">
                <ul>
                  {t("aboutUsP.section2.steps", { returnObjects: true }).map(
                    (step, index) => (
                      <li key={index}>
                        <div className="single-step">
                          <div className="counting span-main">
                            <span className="span-main bold-title">
                              {step.number}
                            </span>
                          </div>
                          <div className="text-box">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-area">
        <div className="facts-area-bg background-main"></div>
        <div className="container">
          <div className="sec-title text-center">
            <h2>Award Winning Broker</h2>
            <div className="sub-title">
              <p>Discover why millions of users from over countries choose to trade with Accuindex</p>
            </div>
          </div>
          <div className="row">

            <div className="swiper-container-facts mobile-seen">
              <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={1}
                slidesPerView={1}
                initialSlide={0}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide className='text-center' >
                  <div className='footer-img-slide'>
                    <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82316-2.svg" alt="Slide 1" width={'50%'} />

                  </div>
                </SwiperSlide>

                <SwiperSlide className='text-center' >
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82315-2.svg" alt="Slide 2" width={'50%'} />
                </SwiperSlide>

                <SwiperSlide className='text-center' >
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82321-2.svg" alt="Slide 3" width={'50%'} />
                </SwiperSlide>

                <SwiperSlide className='text-center' >
                  <img src="https://accuindex.com/wp-content/uploads/2023/08/Group-82322-2.svg" alt="Slide 4" width={'50%'} />
                </SwiperSlide>
              </Swiper>
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


export default AboutUs;
