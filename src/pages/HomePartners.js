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

import slide1 from '../assets/img/partners/SLIDE-1.png';
import slide2 from '../assets/img/partners/SLIDE-4.png';

import icon1 from "../assets/img/partners/icon-1.png";
import icon2 from "../assets/img/partners/icon-2.png";
import icon3 from "../assets/img/partners/icon-3.png";

import imgp from "../assets/img/partners/22.png";
import imgp2 from "../assets/img/partners/33.png";
import imgp3 from "../assets/img/partners/44.png";

const DemoAccount = () => {
    const { t } = useTranslation();

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
                                        {t("Grow Your Business")}
                                        <span className="span-main" style={{ fontSize: "55px" }}>
                                            .
                                        </span>
                                    </h2>
                                </div>
                                <div className="text">
                                    <p>{t("Partner with us to unlock growth")}</p>
                                </div>

                                <a className="btn-main2" href="#idsec">
                                    <span className="txt">{t("Explore Partnership Opportunities")}</span>
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
                                        {t('whyPartnerWith')}{' '}
                                        <span className="span-main" style={{ fontSize: '55px' }}>
                                            {t('accuindex')}
                                        </span>
                                        ?
                                    </h1>
                                    <div className="sub-title white">
                                        <p>{t('discoverBenefits')}</p>
                                        <br />
                                        <p className="p-list">
                                            <span className="span-main">⦿</span> {t('dedicatedSupport')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('diverseProducts')}
                                            <br />
                                            <span className="span-main">⦿</span> {t('earnCommissions')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="col-xl-6 mobile-seen">
                                        <img
                                            src={slide2}
                                            alt={t('metaTraderAlt')}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="btns-box mobile-align">
                                        <br />
                                        <a className="btn-one background-main" href="/RegisterIb">
                                            <span className="txt">{t('becomePartner')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 pc">
                            <img
                                src={slide2}
                                alt={t('metaTraderAlt')}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="benefits-area" style={{ backgroundColor: 'white !important' }} id='idsec'>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('discoverPartnership')}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('tailoredPrograms')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {/* Start Single Benefits Box Column (Mission) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon3} alt={t('introducingBrokers')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('introducingBrokers')}</h3>
                                    <p>{t('introducingBrokersDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Vision) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon1} alt={t('corporateAccounts')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('corporateAccounts')}</h3>
                                    <p>{t('corporateAccountsDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}

                        {/* Start Single Benefits Box Column (Values) */}
                        <li className="col-xl-4 single-benefits-box-colum">
                            <div className="single-benefits-box">
                                <img src={icon2} alt={t('fundManagers')} width="100px" />
                                <div className="text">
                                    <h3 className="bold-p">{t('fundManagers')}</h3>
                                    <p>{t('fundManagersDescription')}</p>
                                </div>
                            </div>
                        </li>
                        {/* End Single Benefits Box Column */}
                    </ul>

                    <div className="text-center">
                        <br />
                        <br />
                        <a className="btn-main2" href="/RegisterIb">
                            <span className="txt">{t('becomePartner2')}</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="features-style-area background-black">
                <div className="container">
                    <div className="sec-title mobile-align text-center">
                        <br />
                        <h1 className="white bold-title " style={{ fontSize: '45px' }}>
                            {t('whatpartnersay')}
                            <span className="span-main" style={{ fontSize: '55px' }}>
                                .
                            </span>

                        </h1>
                        <div className="sub-title white text-center col-md-7 col-12" style={{ justifySelf: "center" }}>
                            <p>{t('explorepartner')}</p>

                        </div>
                    </div>

                </div>
                <div className="row mx-5 pc">

                    <div className="col-xl-4 col-12">

                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "480px",
                            padding: "20px",
                        }}>

                            <div className='partnerContent'>
                                <p>
                                    {t("partnerSP1")}
                                </p>
                                <br></br>
                                <br></br>
                                <h4>
                                    <span>{t("writerP1")}</span>

                                    <br></br>
                                    {t("positionP1")}
                                </h4>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-4 col-12">
                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            padding: "20px",
                            height: "480px",
                        }}>

                            <div className='partnerContent'>
                                <p>
                                    {t("partnerSP2")}
                                </p>
                                <br></br>
                                <br></br>
                                <h4>
                                    <span>{t("writerP2")}</span>

                                    <br></br>
                                    {t("positionP2")}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-12">
                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            padding: "20px",
                            height: "480px",
                        }}>

                            <div className='partnerContent'>
                                <p>
                                    {t("partnerSP3")}
                                </p>
                                <br></br>
                                <br></br>
                                <h4>
                                    <span>{t("writerP3")}</span>

                                    <br></br>
                                    {t("positionP3")}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 mobile-seen">

                    <div className="col-xl-4 col-12">

                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingInline: "20px",
                        }}>

                            <div className='partnerContent'>
                                <br></br>

                                <p>
                                    {t("partnerSP1")}
                                </p>
                                <h4>
                                    <span>{t("writerP1")}</span>

                                    <br></br>
                                    {t("positionP1")}
                                </h4>
                                <br></br>
                                <br></br>

                            </div>
                        </div>

                    </div>

                    <div className="col-xl-4 col-12">
                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp2})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingInline: "20px",
                        }}>

                            <div className='partnerContent'>
                                <br></br>

                                <p>
                                    {t("partnerSP2")}
                                </p>
                                <h4>
                                    <span>{t("writerP2")}</span>

                                    <br></br>
                                    {t("positionP2")}
                                </h4>
                                <br></br>
                                <br></br>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-12">
                        <div className='partner1' style={{
                            backgroundImage: `url(${imgp3})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingInline: "20px",
                        }}>

                            <div className='partnerContent'>
                                <br></br>

                                <p>
                                    {t("partnerSP3")}
                                </p>
                                <h4>
                                    <span>{t("writerP3")}</span>

                                    <br></br>
                                    {t("positionP3")}
                                </h4>
                                <br></br>
                                <br></br>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <br />
                    <br />
                    <a className="btn-main2" href="/RegisterIb">
                        <span className="txt">{t('becomePartner2')}</span>
                    </a>
                </div>
            </section>


        </div>

    );
};


export default DemoAccount;
