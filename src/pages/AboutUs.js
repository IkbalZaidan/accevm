import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import '../styles/about-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';
import slideImg1 from '../assets/img/aboutus/ourstory/SLIDE-IMG-1.png';
import slideImg4 from '../assets/img/aboutus/ourstory/SLIDE-IMG-4.png';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation(); // Use the t function to translate

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
                    <span className="k">k</span>
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
                    What Sets Us Apart
                    <span
                      className="span-main"
                      style={{ fontSize: "55px" }}
                    >
                      .
                    </span>
                  </h1>
                  <div className="sub-title white">
                    <p>
                      At Accuindex, our culture is built on a foundation of
                      trust, education, and collaboration. We believe in
                      empowering traders with the tools and knowledge they
                      need to navigate financial markets confidently.
                    </p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="row">
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white">Our Core Values</h3>
                      <br />
                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            Clear pricing and open communication for
                            complete transparency.
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            Regulatory compliance to ensure secure and
                            trustworthy trading.
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            A client-first mindset, always prioritizing
                            trader success.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white">Empowering Traders</h3>
                      <br />
                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            Expert-led workshops and interactive webinars.
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            Comprehensive resources to enhance trading
                            expertise.
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-checkbox-mark"></span>
                          </div>
                          <p className="white">
                            A commitment to building confidence in financial
                            markets.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btns-box mobile-align">
                    <br />
                    <br />
                    <a className="btn-main2" href="#">
                      <span className="txt">EXPLORE ACCUPAY</span>
                    </a>
                    <a className="btn-one background-main" href="#">
                      <span className="txt">ACCUINDEX MetaTrader 5</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 mobile-seen">
              <br />
              <br />
              <img
                className="mob"
                src={slideImg4}
                alt="MetaTrader 5"
              />
            </div>
          </div>
        </div>

        {/* Image section, positioned at bottom-left */}
        <div className="image-section pc">
          <img
            src={slideImg4}
            alt="MetaTrader 5"
            className="bottom-left-image2"
          />
        </div>
      </section>
    </div>

  );
};


export default AboutUs;
