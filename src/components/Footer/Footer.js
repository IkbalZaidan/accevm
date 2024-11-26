import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';
import '../../styles/Style.css';

import '../../styles/Responsive-sty.css';

import footerBg from '../../assets/images/shapes/footer-right-shape.png';
import logo from '../../assets/img/accuLogo.png'; // Adjust path if necessary

const Footer = () => {
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
                                    <h3>Company</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Legal Documents</a></li>
                                        <li><a href="#">Promotions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Trade Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>Trade</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="#">Forex</a></li>
                                        <li><a href="#">Metals</a></li>
                                        <li><a href="#">Stocks</a></li>
                                        <li><a href="#">Indices</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Our Platforms Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>Our Platforms</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="#">AccuConnect</a></li>
                                        <li><a href="#">AccuPay</a></li>
                                        <li><a href="#">AccuGo</a></li>
                                        <li><a href="#">MetaTrader 5</a></li>
                                        <li><a href="#">Web Trader</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Trading Conditions Section */}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>Trading Conditions</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li><a href="#">Account Types</a></li>
                                        <li><a href="#">Cost & Spreads</a></li>
                                        <li><a href="#">Deposits</a></li>
                                        <li><a href="#">Withdrawals</a></li>
                                        <li><a href="#">Fees & Charges</a></li>
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
                                Accuindex Limited is an Investment Firm incorporated under the laws of Republic of Mauritius with company number 167867 GBC. Authorized and regulated by the Financial Service Commission (FSC) in Mauritius. (License No GB19024778, Registered address at The Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebène, Republic of Mauritius.
                                <br />
                                The website www.accuindex.com is operated and provides content by Accuindex Group of companies, which include:
                                • Accuindex Limited (Mauritius)
                                <br />
                                Accuindex EU Limited is a Cypriot Investment Firm (CIF) under number HE 360650. Regulated by the Cyprus Securities and Exchange Commission (CySEC) under license number 340/17.
                            </p>
                            <br />
                            <p className="white">
                                Accuindex EU Limited is governed by the Markets of Financial Instruments Directive (MiFID) of the European Union. Registered address at 1 Ayias Zonis Street Nicolaou Pentadromos Centre Block B, Limassol 3026, Cyprus.
                                <br />
                                The website www.accuindex.eu is operated by Accuindex EU Limited.
                                <br />
                                Risk Warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please read the full Risk Disclosure.
                                <br />
                                Regional Restrictions: Accuindex Limited does not provide investment and ancillary services in the territories of the United States of America, Canada, Israel, Japan, North Korea, Belgium, and UN/EU Sanctioned countries.
                            </p>
                        </div>

                        {/* Footer Logo and Copyright */}
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
                                            Copyright &copy; 2024 <a href="index.html">ACCUINDEX.</a> Licensed by the<br />
                                            Central Bank of United States.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                        </div>

                        {/* Additional Links Section */}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="single-footer-widget">
                                <div className="single-footer-widget-right-colum">
                                    <ul>
                                        <li><a href="#">Download Forms<span className="icon-download"></span></a></li>
                                        <li><a href="#">Register Your Complaint<span className="icon-feedback"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer */}

            {/* Footer Bottom */}
            <div className="footer-bottom">
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
            </div>
        </footer>
    );
}

export default Footer;
