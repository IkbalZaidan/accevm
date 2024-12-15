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
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>{t('company')}</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="/about-us"> {t('aboutUs')}</a></li>
                                        <li><a href="/promotion">{t('promotions')}</a></li>
                                        <li><a href="/LegalDocuments">{t('authorisedRegulated')}</a></li>
                                        <li>
                                            <a
                                                href="/documents/Privacy-Policy.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="nav-li"
                                            >
                                                {t('privacyPolicy')}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/documents/Website-Terms-and-Conditions.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="nav-li"
                                            >
                                                {t('termsAndConditions')}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Trade Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>{t('products')}</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="/forex">{t('ForexNav')}</a></li>
                                        <li><a href="/stocks">{t('StocksNav')}</a></li>
                                        <li><a href="/indices">{t('IndicesNav')}</a></li>
                                        <li><a href="/crypto">{t('Cryptocurrencies')}</a></li>
                                        <li><a href="/commodities">{t('CommoditiesNav')}</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Our Platforms Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>{t('PlatformsNav')}</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="/accuconnect">{t('AccuConnectNav')}</a></li>
                                        <li><a href="/AccPay">{t('AccuPayNav')}</a></li>
                                        <li><a href="/accugo">{t('AccuGoNav')}</a></li>
                                        <li><a href="/metatrader">{t('MetaTraderNav')}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Trading Conditions Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>{t('tradingConditions')}</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="/account-types">{t('accountTypes')}</a></li>
                                        <li><a href="#">{t('Cost & Spreads')}</a></li>
                                        <li><a href="#">{t('Deposits & Withdrawals')}</a></li>
                                        <li><a href="#">{t('Fees & Charges')}</a></li>
                                    </ul>
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

                        {/* Footer Logo and Copyright */}
                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="single-footer-widget marbtm50">
                                <div className="our-company-info">
                                    <div className="footer-logo-style1">
                                        <a href="index.html">
                                            <img src={logo} width="200" alt="Awesome Logo" />
                                        </a>
                                    </div>
                                    <div className="copyright-text">
                                        <p>
                                            Copyright &copy; 2024 <a href="index.html">ACCUINDEX.</a> Licensed by the<br />
                                            Central Bank of United States.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Contact Info Section */}
                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="single-footer-widget marbtm50">
                                <div className="footer-widget-contact-info">
                                    <ul>
                                        <li>
                                            <h3><a href="tel:2512353256">(800) 123 456 78</a></h3>
                                            <p>Customer Care</p>
                                        </li>
                                        <li>
                                            <h3>Mon - Fri: 9.00am to 5.00pm</h3>
                                            <p>Banking Hours</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        {/* Additional Links Section */}
                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="single-footer-widget">
                                <div className="single-footer-widget-right-colum">
                                    <ul>
                                        <li><a href="#">Download Forms<span className="icon-download"></span></a></li>
                                        <li><a href="#">Register Your Complaint<span className="icon-feedback"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* End Footer */}

            {/* Footer Bottom */}
            {/* <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Online Security Tips</a></li>
                            </ul>
                        </div>
                        <div className="footer-social-link">
                            <ul className="clearfix">
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    );
}

export default Footer;
