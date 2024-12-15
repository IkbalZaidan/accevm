import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';
import '../../styles/Style.css';
import '../../styles/footer-section.css';

import '../../styles/Responsive-sty.css';

import footerBg from '../../assets/images/shapes/footer-right-shape.png';
import logo from '../../assets/img/accuLogo.png'; // Adjust path if necessary
import { Link, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, [pathname]);

    return null;
};

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [savedLanguage, setSavedLanguage] = useState(localStorage.getItem('language') || 'en');
    return (
        <footer className="footer-area">
            <div className="right-shape mobile-align">
                <img src={footerBg} alt="" />
            </div>

            {/* Start Footer Top */}
            <div className="footer-top pc">
                <div className="lef-shape">
                    <img src={footerBg} alt="Footer Background" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="container">
                    <div className="row">
                        {/* Company Section */}
                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3><a href="/IB"> {t('IntroducingBrokersNav')}</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3><a href="/CorporateAccounts"> {t('CorporateAccountsNav')}</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3><a href="/FundMnagers"> {t('FundMnagers')}</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3><a href="/Company"> {t('CompanyNav')}</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3><a href="/about-us"> {t('aboutUs')}</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Top */}

            {/* Start Footer */}
            <div className="footer mobile-align">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <p className="white">
                                {t('termsPOne')}
                            </p>
                            <br />
                            <p className="white">
                                {t('termsPTwo')}
                            </p>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="single-footer-widget marbtm50">
                                <div className="our-company-info">
                                    <div className="footer-logo-style1">
                                        <a href="index.html">
                                            <img src={logo} width="200" alt="Awesome Logo" />
                                        </a>
                                    </div>
                                    <div className="copyright-text">
                                        <p>
                                            Copyright © 2024 Accuindex. All rights reserved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer */}

        </footer>
    );
}

export default Footer;
