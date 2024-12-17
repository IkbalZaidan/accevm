import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules"; // Swiper modules

import 'swiper/css';
import "swiper/css/pagination";
import '../styles/Banner-sty.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';

import accConnectImg from '../assets/img/home/11.png';
import accGoImg from '../assets/img/home/13.png';
import accPayImg from '../assets/img/home/12.png';
import accConnect from '../assets/img/accConnect.png';
import accuindexImage from '../assets/img/accuindex.png';
import accPay from '../assets/img/accuPay.png';
import accuGo from '../assets/img/accuGo.png';
import zeroCommissionImg from '../assets/img/home/ZeroComssion.png';
import techImg from '../assets/img/home/tech.png';
import copyImg from '../assets/img/home/COPY.png';
import mt5Img from '../assets/img/mt5.png';
import paymentsImg from '../assets/img/payments.png';
import support from '../assets/img/accountTypes/main/icon-2.png';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation(); // Use the t function to translate

  const handleSlideChange = (swiper) => {
    setActiveTab(swiper.activeIndex);
  };

  return (
    <div>
      <section className="main-slider main-slider-style2 not-clickable">
        <div className="thm-swiper__slider">
          <Swiper
            modules={[Pagination]} // Include Pagination module
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true, // Enable clickable pagination dots
            }}
          // spaceBetween={50}
          // slidesPerView={1}
          // loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          >
            <SwiperSlide>
              <div className="content-layer">
                <div className="main-slider-content">
                  <div className="main-slider-content__inner">
                    <div className="big-title mobile-align">
                      <br className="mob" />
                      <br className="mob" />
                      <h2 className="bold-title laptop-text">
                        {t('joinWorld')}
                        <span className="span-main">.</span>
                      </h2>
                    </div>
                    <div className="text mobile-align">
                      <p>
                        {t('tradeText')}
                      </p>
                    </div>
                    <div className="btns-box mobile-align pc">
                      <a className="btn-one a-second" href="/Register">
                        <span className="txt">{t('register')}</span>
                      </a>
                      <a className="btn-one style2 a-second" href="/RegisterDemo">
                        <span className="txt">{t('demo')}</span>
                      </a>
                    </div>

                    <div className="btns-box mobile-align mobile-seen2">
                      <div className='row '>
                        <div className='col-12 '>
                          <a className="btn-one a-second2" href="/Register">
                            <span className="txt">{t('register')}</span>
                          </a>
                        </div>
                        <div className='col-12'>
                          <a className="btn-one style2 a-second2" href="/RegisterDemo">
                            <span className="txt">{t('demo')}</span>
                          </a>
                        </div>

                      </div>


                    </div>
                    <div className="bottom-text mobile-align">
                      <p>
                        <span>*</span> {t('openAccount')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${accuindexImage})`,
                  backgroundSize: '100%',
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-style2-area" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">{t('Unlock Your Trading Potential')}</h2>
            <div className="sub-title">
              <p>{t('Empower your investments with our smart tools: mirror successful traders with AccuConnect, trade on the go with AccuGo,')}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="features-style2-content">
                <div className="features-style2-tab ">
                  {/* Swiper Component */}
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={(swiper) => setActiveTab(swiper.activeIndex + 1)}
                    className="features-style2-tab__button mb-5 "

                  >
                    <SwiperSlide>
                      <div
                        className={`single-features-box-style2 ${activeTab === 1 ? 'active-btn-item' : ''}`}
                        onClick={() => setActiveTab(1)}
                      >
                        <div className="icon">
                          <img src={accConnectImg} alt="AccuConnect" />
                        </div>
                        <div className="title">
                          <h3><a href="#accuconnect">AccuConnect</a></h3>
                        </div>
                        <div className="arrow-button">
                          <a href="#accuconnect"><span className="icon-chevron"></span></a>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div
                        className={`single-features-box-style2 ${activeTab === 2 ? 'active-btn-item' : ''}`}
                        onClick={() => setActiveTab(2)}
                      >
                        <div className="icon">
                          <img src={accGoImg} alt="AccuGo" />
                        </div>
                        <div className="title">
                          <h3><a href="#accugo">AccuGo</a></h3>
                        </div>
                        <div className="arrow-button">
                          <a href="#accugo"><span className="icon-chevron"></span></a>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div
                        className={`single-features-box-style2 border-right-sty ${activeTab === 3 ? 'active-btn-item' : ''}`}
                        onClick={() => setActiveTab(3)}
                      >
                        <div className="icon">
                          <img src={accPayImg} alt="AccuPay" />
                        </div>
                        <div className="title">
                          <h3><a href="#accupay">AccuPay</a></h3>
                        </div>
                        <div className="arrow-button">
                          <a href="#accupay"><span className="icon-chevron"></span></a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Tabs Content */}
                  <div className="tabs-content-box">
                    {activeTab === 1 && (
                      <div className="tab-content-box-item tab-content-box-item-active">
                        <div className="row mini-row">
                          <div className="col-xl-6 justify-content-center align-items-center mini-box">
                            <div>
                              <br></br>
                              <br></br>
                              <br></br>
                              <h1 className="span-main bold-title mt-5">AccuConnect.</h1>
                              <br></br>

                              <p>{t('AccConnectCt')}</p>
                              <br></br>

                              <a className="btn-main" href="/Register" style={{ backgroundColor: '#C02881' }}>
                                {t('register')}
                              </a>
                              <br className="mobile-seen" />
                              <br className="mobile-seen" />

                            </div>
                          </div>
                          <div className="col-xl-6 p-0">
                            <img src={accConnect} alt="AccuConnect" className="full-cover-image" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="tab-content-box-item tab-content-box-item-active">
                        <div className="row mini-row">
                          <div className="col-xl-6 justify-content-center align-items-center mini-box">
                            <div>
                              <br></br>
                              <br></br>
                              <br></br>
                              <h1 className="span-main bold-title mt-5">AccuGo.</h1>                              <br></br>

                              <p>{t('AccGoCT')}</p>                              <br></br>

                              <a className="btn-main" href="/Register" style={{ backgroundColor: '#C02881' }}>
                                {t('register')}
                              </a>
                              <br className="mobile-seen" />
                              <br className="mobile-seen" />

                            </div>
                          </div>
                          <div className="col-xl-6 p-0">
                            <img src={accuGo} alt="AccuGo" className="full-cover-image" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="tab-content-box-item tab-content-box-item-active">
                        <div className="row mini-row">
                          <div className="col-xl-6 justify-content-center align-items-center mini-box">
                            <div>
                              <br></br>
                              <br></br>
                              <br></br>
                              <h1 className="span-main bold-title mt-5">AccuPay.</h1>                              <br></br>

                              <p>{t('AccPayCt')}</p>                              <br></br>

                              <a className="btn-main" href="/Register" style={{ backgroundColor: '#C02881' }}>
                                {t('register')}
                              </a>
                              <br className="mobile-seen" />
                              <br className="mobile-seen" />

                            </div>
                          </div>
                          <div className="col-xl-6 p-0">
                            <img src={accPay} alt="AccuPay" className="full-cover-image" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="benefits-area" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">
              Why Choose <span className="span-main">Accuindex</span>
            </h2>
            <div className="sub-title">
              <p>We help businesses and customers achieve more.</p>
            </div>
          </div>
          <ul className="row benefits-content text-center">
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
              <img src={fundingImg} width="100px" alt="Funding" />
              <div className="text">
                <h3 className="bold-p">Flexible Funding Options</h3>
                <p>
                Conveniently deposit and withdraw from your account using a variety of payment methods to suit your needs.
                </p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={zeroCommissionImg} width="100px" alt="Zero Commission" />
                <div className="text">
                  <h3 className="bold-p">Competitive Spreads</h3>
                  <p>
                    Trade confidently in a secure environment with spreads starting as low as 0.0 pips, providing a cost-effective trading experience.
                  </p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={techImg} width="100px" alt="Advanced Trading Technology" />
                <div className="text">
                  <h3 className="bold-p">Advanced Trading Technology</h3>
                  <p>
                    Access a wide range of assets, including currencies, energies, futures, metals, indices, and shares, all available as CFDs on a cutting-edge platform.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section> */}

      <section className="service-style1-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" style={{ textAlign: 'center' }}>
              <div className="service-style1-title">
                <div className="sec-title">
                  <h2 style={{ color: 'black' }} className="bold-title">
                    {t('Multiple Account Types')}<span className="span-main">.</span>
                  </h2>
                  <div className="sub-title">
                    <p style={{ color: 'black' }}>
                      {t('subContent')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (Default) */}
          <div className="row data-show-x">
            <div className="col-xl-12">
              <div className="service-style1-tab">
                <div className="tabs-content-box">
                  <div className="tab-content-box-item tab-content-box-item-active" id="companies">
                    <div className="service-style1-tab-content-box-item">
                      <div className="row">
                        {/* Standard Account */}
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">{t('HPstandardAccount')}</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* {t('HPminimumBalance')}</li>
                              <li className="white">* {t('HPleverage')}</li>
                              <li className="white">* {t('HPspreads')}</li>
                              <li className="white">* {t('HPnoCommissions')}</li>
                              <li className="white">* {t('HPtradingInstruments')}</li>
                              <li className="white">* {t('HPautomatedTrading')}</li>
                              <li className="white">* {t('HPstopOutLevel')}</li>
                              <li className="white">* {t('HPaccountCurrency')}</li>
                            </ul>
                          </div>
                        </div>

                        {/* Pro Account */}
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">{t('HPproAccount')}</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* {t('HPminimumBalance').replace('$100', '$1,000')}</li>
                              <li className="white">* {t('HPleverage')}</li>
                              <li className="white">* {t('HPspreads').replace('1.4', '0.8')}</li>
                              <li className="white">* {t('HPnoCommissions')}</li>
                              <li className="white">* {t('HPadvancedTools')}</li>
                              <li className="white">* {t('HPtradingInstruments')}</li>
                              <li className="white">* {t('HPstopOutLevel')}</li>
                              <li className="white">* {t('HPaccountCurrency')}</li>
                            </ul>
                          </div>
                        </div>

                        {/* Raw Account */}
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">{t('HPrawAccount')}</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* {t('HPminimumBalance').replace('$100', '$2,000')}</li>
                              <li className="white">* {t('HPleverage')}</li>
                              <li className="white">* {t('HPspreads').replace('1.4', '0.0')}</li>
                              <li className="white">* {t('HPcommission')}</li>
                              <li className="white">* {t('HPdirectMarketAccess')}</li>
                              <li className="white">* {t('HPtradingInstruments')}</li>
                              <li className="white">* {t('HPautomatedTrading')}</li>
                              <li className="white">* {t('HPstopOutLevel')}</li>
                              <li className="white">* {t('HPaccountCurrency')}</li>
                            </ul>
                          </div>
                        </div>

                        {/* Copy Trading Account */}
                        {/* <div className="row mt-2">
                          <div className="col-xl-4 col-lg-4"></div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                              <h2 className="white">{t('copyTradingAccount')}</h2>
                              <div className="border-box"></div>
                              <ul>
                                <li className="white">* {t('minimumBalance')}</li>
                                <li className="white">* {t('leverage')}</li>
                                <li className="white">* {t('spreads')}</li>
                                <li className="white">* {t('noCommissions')}</li>
                                <li className="white">* {t('seamlessAccess')}</li>
                                <li className="white">* {t('copyTrades')}</li>
                                <li className="white">* {t('tradingInstruments')}</li>
                                <li className="white">* {t('accountCurrency')}</li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Swiper Layout */}
          <div className="row data-show">
            <div className="col-xl-12">
              <div className="service-style1-tab">
                <div className="tabs-content-box">
                  <div className="swiper-container">
                    <Swiper
                      modules={[Pagination]} // Include Pagination module
                      loop={true} // Enable loop mode
                      spaceBetween={1}
                      slidesPerView={1}
                      initialSlide={0}
                      pagination={{
                        clickable: true, // Enable clickable pagination dots
                      }}
                    >
                      <SwiperSlide>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            height: '400px',
                          }}
                        >
                          <h2 className="white">{t('HPstandardAccount')}</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* {t('HPminimumBalance')}</li>
                            <li className="white">* {t('HPleverage')}</li>
                            <li className="white">* {t('HPspreads')}</li>
                            <li className="white">* {t('HPnoCommissions')}</li>
                            <li className="white">* {t('HPtradingInstruments')}</li>
                            <li className="white">* {t('HPautomatedTrading')}</li>
                            <li className="white">* {t('HPstopOutLevel')}</li>
                            <li className="white">* {t('HPaccountCurrency')}</li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            height: '400px',
                          }}
                        >
                          <h2 className="white">{t('HPproAccount')}</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* {t('HPminimumBalance').replace('$100', '$1,000')}</li>
                            <li className="white">* {t('HPleverage')}</li>
                            <li className="white">* {t('HPspreads').replace('1.4', '0.8')}</li>
                            <li className="white">* {t('HPnoCommissions')}</li>
                            <li className="white">* {t('HPadvancedTools')}</li>
                            <li className="white">* {t('HPtradingInstruments')}</li>
                            <li className="white">* {t('HPstopOutLevel')}</li>
                            <li className="white">* {t('HPaccountCurrency')}</li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            height: '400px',
                          }}
                        >
                          <h2 className="white">{t('HPrawAccount')}</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* {t('HPminimumBalance').replace('$100', '$2,000')}</li>
                            <li className="white">* {t('HPleverage')}</li>
                            <li className="white">* {t('HPspreads').replace('1.4', '0.0')}</li>
                            <li className="white">* {t('HPcommission')}</li>
                            <li className="white">* {t('HPdirectMarketAccess')}</li>
                            <li className="white">* {t('HPtradingInstruments')}</li>
                            <li className="white">* {t('HPautomatedTrading')}</li>
                            <li className="white">* {t('HPstopOutLevel')}</li>
                            <li className="white">* {t('HPaccountCurrency')}</li>
                          </ul>
                        </div>
                      </SwiperSlide>


                      <SwiperSlide>
                        <div
                          className="single-service-box-style1"
                          style={{
                            backgroundColor: 'black',
                            borderRadius: '20px',
                            height: '400px',
                          }}
                        >
                          <h2 className="white">{t('copyTradingAccount')}</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* {t('minimumBalance')}</li>
                            <li className="white">* {t('leverage')}</li>
                            <li className="white">* {t('spreads')}</li>
                            <li className="white">* {t('noCommissions')}</li>
                            <li className="white">* {t('seamlessAccess')}</li>
                            <li className="white">* {t('copyTrades')}</li>
                            <li className="white">* {t('tradingInstruments')}</li>
                            <li className="white">* {t('accountCurrency')}</li>
                          </ul>
                        </div>
                      </SwiperSlide>
                    </Swiper>


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="service-style1__btns-box text-center">
                <a className="btn-one" href="/Register">
                  <span className="txt bold-title">{t('Open Your Preferred Account Today')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="copy-trading-section">
        <div className="container">
          <div className="row" id="copyTrading1">
            <br className="mobile-seen" />
            <br className="mobile-seen" />

            <div className="col-xl-7 col-12 col-sm-12 col-md-12 mobile-align">
              <img src={copyImg} alt="Copy Trading" style={{ width: '100%' }} />
            </div>

            <div className="col-xl-5 mobile-align">
              <div className="features-style3-content copy-trading-padding">
                <br className="mobile-seen" />
                <br className="mobile-seen" />

                <div className="sec-title mobile-align">
                  <h6 className="white bold-title copy-trading-text mobile-align">
                    {t('Master Trading with Ease Through Copy Trading')}
                  </h6>
                  <div className="sub-title white mobile-align">
                    <p>{t('suCtTwo')}</p>
                  </div>
                </div>

                <div className="text-box">
                  <br />
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">* {t('TPOne')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">* {t('TPTwo')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">* {t('TPThree')}</p>
                    </li>
                    <li>
                      <div className="icon pc">
                        <span className="icon-checkbox-mark"></span>
                      </div>
                      <p className="white pc">* {t('TPFour')}</p>
                    </li>
                  </ul>

                  <div className="btns-box">
                    <br className="pc" />
                    <a className="btn-main" href="/accuconnect" style={{ backgroundColor: '#C02881' }}>
                      {t('Get The App')}
                    </a>
                    <br className="pc" />
                    <br className="pc" />
                    <br className="mobile-seen" />
                    <br className="mobile-seen" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-area" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">
              {t('whyChooseAccuindex')}<span className="span-main">{t('accuindex')}</span>
            </h2>
            <div className="sub-title">
              <p>{t('WhyChooseSub')}</p>
            </div>
          </div>
          <ul className="row benefits-content text-center">
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={techImg} width="100px" alt="Flexible Funding Options" />
                <div className="text">
                  <h3 className="bold-p">{t('Cutting-Edge Technology')}</h3>
                  <p>{t('Cutting-Edge TechnologySub')}</p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={zeroCommissionImg} width="100px" alt="Competitive Spreads" />
                <div className="text">
                  <h3 className="bold-p">{t('Transparent Trading Conditions')}</h3>
                  <p>{t('Transparent Trading ConditionsSub')}</p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={support} width="100px" alt="Advanced Trading Technology" />
                <div className="text">
                  <h3 className="bold-p">{t('Dedicated Customer Support')}</h3>
                  <p>{t('Dedicated Customer SupportSub')}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-style3-area" style={{ background: 'linear-gradient(to bottom, black 98.7%, white 5%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="features-style3-content">
                <div className="sec-title mobile-align">
                  <h1 className="white bold-title" style={{ fontSize: '45px' }}>
                    {t('Trade the Markets with Premier Platforms.')}
                    <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                  </h1>
                  <div className="sub-title white">
                    <p>{t('Experience seamless trading with Accuindex through our user-friendly AccuPay app or the advanced MetaTrader 5 platform, accessible on any device, anytime, anywhere.')}</p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="row">
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white mb-4">{t('AccuPay Account')}</h3>
                      <ul>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPOne')}</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPTwo')}</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPThree')}</p></li>
                      </ul>
                    </div>
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white mb-4">{t('MT5 Account')}</h3>
                      <ul>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPFour')}</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPFive')}</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">{t('SubPSix')}</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="btns-box mobile-align mt-5">
                    <a className="btn-main2 mx-1" href="/AccPay">{t('EXPLORE ACCUPAY APP')}</a>
                    <a className="btn-one background-main" href="/metatrader">{t('EXPLORE METATRADER 5')}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mobile-seen">
              <br></br>
              <br></br>

              <img className="mob" src={mt5Img} alt="MetaTrader 5" />
            </div>
          </div>
        </div>
        <div className="image-section pc">
          <img src={mt5Img} alt="MetaTrader 5" className="bottom-left-image" />
        </div>
      </section>

      {/* Service Request Section */}
      <section className="service-request-style2-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="service-request-style2-content-box">
                <div className="pattern-bottom" style={{ backgroundImage: 'url(assets/images/shapes/service-request-style2-content-box-pattern.png)' }}></div>
                <div className="sec-title mobile-align">
                  <h2 className="bold-title">{t('Effortless and Swift Account Funding')}<span className="span-main span-main-font">.</span></h2>
                  <div className="sub-title">
                    <p>{t('Seamlessly deposit and withdraw funds with Accuindex’s secure, flexible, and fast payment solutions')}.</p>
                  </div>
                </div>
                <div className="service-request-style2-content-box__inner pc">
                  <ul>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-credit-card"></span></div><div className="title"><h3>{t('Instant Deposits')}</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-computer"></span></div><div className="title"><h3>{t('Flexible Options')}</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-book"></span></div><div className="title"><h3>{t('Secure Transactions')}</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-check-book"></span></div><div className="title"><h3>{t('Hassle-Free Withdrawals')}</h3></div></div></li>
                  </ul>
                </div>
                <div className="service-request-style2__btns-box mobile-align pc">
                  <a className="btn-main2" href="/Register">{t('Trade Now')}</a>
                </div>
                <div className="mobile-seen mobile-align">
                  <img src={paymentsImg} alt="Payments" width="100%" />
                  <br></br>
                  <br></br>

                  <a className="btn-main2" href="/Register">{t('Trade Now')}</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pc">
              <img src={paymentsImg} alt="Payments" width="100%" />
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
    </div >
  );
};

export default Home;
