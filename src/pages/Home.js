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
import fundingImg from '../assets/img/home/Funding.png';
import zeroCommissionImg from '../assets/img/home/ZeroComssion.png';
import techImg from '../assets/img/home/tech.png';
import copyImg from '../assets/img/home/COPY.png';
import mt5Img from '../assets/img/mt5.png';
import paymentsImg from '../assets/img/payments.png';

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
                    <div className="btns-box mobile-align">
                      <a className="btn-one a-second" href="#">
                        <span className="txt">{t('register')}</span>
                      </a>
                      <a className="btn-one style2 a-second" href="#">
                        <span className="txt">{t('demo')}</span>
                      </a>
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
            <h2 className="bold-title">{t('Unlock Your Trading Potential')} <br />{t('with')} <span className="span-main">{t('Accuindex')}</span> {t('Solutions')}</h2>
            <div className="sub-title">
              <p>{t('Empower your investments with our smart tools: mirror successful traders with AccuConnect, trade on the go with AccuGo,')}<br />{t('and access your profits instantly with AccuPay.')}</p>
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

                              <p>{t('Copy the strategies of top traders and watch your investment portfolio flourish.')}</p>
                              <br></br>

                              <a className="btn-main" href="#" style={{ backgroundColor: '#C02881' }}>
                                Register
                              </a>
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

                              <p>An intuitive interface that puts financial markets at your fingertips, allowing trading anytime, anywhere.</p>                              <br></br>

                              <a className="btn-main" href="#" style={{ backgroundColor: '#C02881' }}>
                                Register
                              </a>
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

                              <p>Withdraw your profits directly from anywhere in the world using the AccuPay debit card.</p>                              <br></br>

                              <a className="btn-main" href="#" style={{ backgroundColor: '#C02881' }}>
                                Register
                              </a>
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

      <section className="benefits-area" style={{ backgroundColor: 'white' }}>
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
            {/* Start Single Benefits Box Column */}
            {/* <li className="col-xl-4" style={{ border: '2px solid #000' }}>
              <div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="text">
                      <h3 className="bold-p">Flexible Funding Options</h3>
                      <p>
                        Conveniently deposit and withdraw from your account using a variety of payment methods to suit your needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <img src={fundingImg} width="100px" alt="Funding" />
                  </div>
                </div>
              </div>
            </li> */}

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
            {/* End Single Benefits Box Column */}

            {/* Start Single Benefits Box Column */}
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
            {/* End Single Benefits Box Column */}

            {/* Start Single Benefits Box Column */}
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
            {/* End Single Benefits Box Column */}
          </ul>
        </div>
      </section>

      <section className="service-style1-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" style={{ textAlign: 'center' }}>
              <div className="service-style1-title">
                <div className="sec-title">
                  <h2 style={{ color: 'black' }} className="bold-title">
                    Multiple Account Types<span className="span-main">.</span>
                  </h2>
                  <div className="sub-title">
                    <p style={{ color: 'black' }}>
                      We offer three distinct account types, each tailored to provide exceptional trading
                      conditions. Our accounts are thoughtfully designed to suit a range of trader profiles
                      and accommodate various trading strategies, ensuring that every trader can find the ideal
                      fit for their unique needs.
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
                        {/* Start Single Service Box Style1 */}
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">Social Account</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* Minimum Opening Balance: $100</li>
                              <li className="white">* Leverage: Up to 1:400</li>
                              <li className="white">* Spreads from 1.4</li>
                              <li className="white">* No Commissions</li>
                              <li className="white">* 300+ Trading Instruments</li>
                              <li className="white">* Automated Trading</li>
                              <li className="white">* Stop Out Level: 20%</li>
                              <li className="white">* Account Currency: USD</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">Standard Account</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* Minimum Opening Balance: $100</li>
                              <li className="white">* Leverage: Up to 1:400</li>
                              <li className="white">* Spreads from 1.4</li>
                              <li className="white">* No Commissions</li>
                              <li className="white">* 300+ Trading Instruments</li>
                              <li className="white">* Automated Trading</li>
                              <li className="white">* Stop Out Level: 20%</li>
                              <li className="white">* Account Currency: USD</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                          <div className="single-service-box-style1" style={{ backgroundColor: 'black', borderRadius: '20px', height: '400px' }}>
                            <h2 className="white">Pro Account</h2>
                            <div className="border-box"></div>
                            <ul>
                              <li className="white">* Minimum Opening Balance: $5,000</li>
                              <li className="white">* Leverage: Up to 1:400</li>
                              <li className="white">* Spreads from 0.8</li>
                              <li className="white">* No Commissions</li>
                              <li className="white">* 300+ Trading Instruments</li>
                              <li className="white">* Automated Trading</li>
                              <li className="white">* Stop Out Level: 30%</li>
                              <li className="white">* Account Currency: USD</li>
                            </ul>
                          </div>
                        </div>
                        {/* End Single Service Box Style1 */}
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
                          <h2 className="white">Social Account</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* Minimum Opening Balance: $100</li>
                            <li className="white">* Leverage: Up to 1:400</li>
                            <li className="white">* Spreads from 1.4</li>
                            <li className="white">* No Commissions</li>
                            <li className="white">* 300+ Trading Instruments</li>
                            <li className="white">* Automated Trading</li>
                            <li className="white">* Stop Out Level: 20%</li>
                            <li className="white">* Account Currency: USD</li>
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
                          <h2 className="white">Standard Account</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* Minimum Opening Balance: $100</li>
                            <li className="white">* Leverage: Up to 1:400</li>
                            <li className="white">* Spreads from 1.4</li>
                            <li className="white">* No Commissions</li>
                            <li className="white">* 300+ Trading Instruments</li>
                            <li className="white">* Automated Trading</li>
                            <li className="white">* Stop Out Level: 20%</li>
                            <li className="white">* Account Currency: USD</li>
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
                          <h2 className="white">Pro Account</h2>
                          <div className="border-box"></div>
                          <ul>
                            <li className="white">* Minimum Opening Balance: $5,000</li>
                            <li className="white">* Leverage: Up to 1:400</li>
                            <li className="white">* Spreads from 0.8</li>
                            <li className="white">* No Commissions</li>
                            <li className="white">* 300+ Trading Instruments</li>
                            <li className="white">* Automated Trading</li>
                            <li className="white">* Stop Out Level: 30%</li>
                            <li className="white">* Account Currency: USD</li>
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
                <a className="btn-one" href="#">
                  <span className="txt bold-title">Explore More Account Types</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="copy-trading-section">
        <div className="container">
          <div className="row" style={{ width: '100%' }} id="copyTrading1">
            <br className="mobile-seen" />
            <br className="mobile-seen" />

            <div className="col-xl-7 col-12 col-sm-12 col-md-12 mobile-align">
              <img src={copyImg} alt="Copy Trading" style={{ width: '100%' }} />
            </div>

            <div className="col-xl-5 mobile-align">
              <div className="features-style3-content copy-trading-padding">
                <div className="sec-title mobile-align">
                  <h1 className="white bold-title copy-trading-text mobile-align">
                    Copy Top Investors<span className="span-main span-main-font">.</span>
                  </h1>
                  <div className="sub-title white mobile-align">
                    <p>With Accuindex CopyTrader™, you can automatically copy the moves of other investors. Find investors you believe in and replicate their actions in real time.</p>
                  </div>
                </div>

                <div className="text-box">
                  <br />
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">What is copy trading</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">Advantage of copy trading</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checkbox-mark pc"></span>
                      </div>
                      <p className="white pc">How to successfully copy trade</p>
                    </li>
                    <li>
                      <div className="icon pc">
                        <span className="icon-checkbox-mark"></span>
                      </div>
                      <p className="white pc">The rise of copy trading</p>
                    </li>
                  </ul>

                  <div className="btns-box">
                    <br className="pc" />
                    <a className="btn-main" href="#" style={{ backgroundColor: '#C02881' }}>
                      Get The App
                    </a>
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
              Why Choose <span className="span-main">Accuindex</span>
            </h2>
            <div className="sub-title">
              <p>We help businesses and customers achieve more.</p>
            </div>
          </div>
          <ul className="row benefits-content text-center">
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={fundingImg} width="100px" alt="Flexible Funding Options" />
                <div className="text">
                  <h3 className="bold-p">Flexible Funding Options</h3>
                  <p>Conveniently deposit and withdraw from your account using a variety of payment methods to suit your needs.</p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={zeroCommissionImg} width="100px" alt="Competitive Spreads" />
                <div className="text">
                  <h3 className="bold-p">Competitive Spreads</h3>
                  <p>Trade confidently in a secure environment with spreads starting as low as 0.0 pips, providing a cost-effective trading experience.</p>
                </div>
              </div>
            </li>
            <li className="col-xl-4 single-benefits-box-colum">
              <div className="single-benefits-box">
                <img src={techImg} width="100px" alt="Advanced Trading Technology" />
                <div className="text">
                  <h3 className="bold-p">Advanced Trading Technology</h3>
                  <p>Access a wide range of assets, including currencies, energies, futures, metals, indices, and shares, all available as CFDs on a cutting-edge platform.</p>
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
                    Trade the Markets with Premier Platforms
                    <span className="span-main" style={{ fontSize: '55px' }}>.</span>
                  </h1>
                  <div className="sub-title white">
                    <p>Experience seamless trading with Accuindex through our user-friendly AccuPay app or the advanced MetaTrader 5 platform, accessible on any device, anytime, anywhere.</p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="row">
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white mb-4">AccuPay Account</h3>
                      <ul>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">Instant Transactions</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">Global ATM Access</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">User-Friendly Mobile App</p></li>
                      </ul>
                    </div>
                    <div className="col-md-6 account-key-features pc">
                      <h3 className="white mb-4">MT5 Account</h3>
                      <ul>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">Advanced Trading Tools</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">Competitive Spreads</p></li>
                        <li><div className="icon"><span className="icon-checkbox-mark"></span></div><p className="white">Real-Time Market Data</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="btns-box mobile-align mt-5">
                    <a className="btn-main2 mx-1" href="#">EXPLORE ACCUPAY APP</a>
                    <a className="btn-one background-main" href="#">EXPLORE METATRADER 5</a>
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
                  <h2 className="bold-title">Effortless and Swift Account Funding<span className="span-main span-main-font">.</span></h2>
                  <div className="sub-title">
                    <p>Enjoy seamless deposits and fast, secure withdrawals, keeping your funds safe and accessible.</p>
                  </div>
                </div>
                <div className="service-request-style2-content-box__inner pc">
                  <ul>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-credit-card"></span></div><div className="title"><h3>Instant Deposits</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-computer"></span></div><div className="title"><h3>Fast Withdrawals</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-book"></span></div><div className="title"><h3>Secure Transactions</h3></div></div></li>
                    <li><div className="single-service-request-style2-box"><div className="icon"><span className="icon-check-book"></span></div><div className="title"><h3>Guaranteed Fund Safety</h3></div></div></li>
                  </ul>
                </div>
                <div className="service-request-style2__btns-box mobile-align pc">
                  <a className="btn-main2" href="#">Trade Now</a>
                </div>
                <div className="mobile-seen mobile-align">
                  <img src={paymentsImg} alt="Payments" width="100%" />
                  <br></br>
                  <br></br>

                  <a className="btn-main2" href="#">Trade Now</a>
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
    </div >
  );
};

export default Home;
