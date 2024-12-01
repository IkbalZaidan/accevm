import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import '../../styles/Style.css';
import '../../styles/Responsive-sty.css';

import logo from '../../assets/img/accuLogo.png'; // Adjust path if necessary

const Header = () => {
  const { t, i18n } = useTranslation();

  // State for language
  const [savedLanguage, setSavedLanguage] = useState(localStorage.getItem('language') || 'en');

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(prevState => !prevState);
  // };
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    console.log("Dropdown toggled!");
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle responsive class
  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById("tabid11Plus");
      if (element) {
        if (window.innerWidth <= 1199) {
          element.classList.remove("row");
        } else {
          element.classList.add("row");
        }
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set the direction based on the current language
  useEffect(() => {

    if (savedLanguage === 'ar') {
      document.documentElement.dir = 'rtl'; // Set RTL direction
    } else {
      document.documentElement.dir = 'ltr'; // Set LTR direction
    }
  }, [savedLanguage]);

  // Load the language from localStorage on initial load
  useEffect(() => {
    i18n.changeLanguage(savedLanguage).catch(err => console.error("Language change error:", err));
  }, [savedLanguage, i18n]);

  // Switch language when user selects an option
  const handleLanguageChange = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language).catch(err => console.error("Language change error:", err));
    localStorage.setItem('language', language);
    setSavedLanguage(language);
  };


  return (
    <div>
      <header className="main-header main-header-style1">
        <div className="main-header-style1-top">
          <div className="auto-container">
            <div className="outer-box">
              <div className="main-header-style1-top__left">
                <div className="looking-banking-box">
                  <div className="inner-title white-text">
                    <span className="icon-binoculars white"></span>
                    <p className="white">{t('looking')}</p>
                  </div>
                  <div className="select-box clearfix">

                    {/* <div className="custom-dropdown">
                      <button onClick={toggleDropdown}>Individual View</button>
                      {isDropdownOpen && (

                        <div className="custom-dropdown-content">
                          <a href="#">Individual View</a>
                          <a href="#">Partner View</a>
                        </div>
                      )}
                    </div> */}

                    {/* <div className="custom-dropdown">
                      <button onClick={toggleDropdown}>{t('individualView')}</button>
                      <div className="custom-dropdown-content">
                        <a href="#">{t('individualView')}</a>
                        <a href="#">{t('partnerView')}</a>
                      </div>
                    </div> */}

                    <div className="custom-dropdown">
                      <button onClick={toggleDropdown}>{t('individualView')}</button>
                      <div className={`custom-dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                        <a href="#">{t('individualView')}</a>
                        <a href="#">{t('partnerView')}</a>
                      </div>
                    </div>



                  </div>
                </div>
              </div>

              <div className="main-header-style1-top__right">
                <div className="header-menu-style1">
                  <ul>
                    <li><a href="#" className="white">{t('supportCenter')}</a></li>
                    <li><a href="#" className="white">{t('authorisedRegulated')}</a></li>
                    <li><a href="#" className="white">{t('fscm')}</a></li>
                  </ul>
                </div>


                <div className="language-switcher mx-4">
                  <div >
                    <form action="#">
                      <select className='langSty' value={savedLanguage} onChange={handleLanguageChange} >
                        <option id="en" value="en">{t('english')}</option>
                        <option id="ar" value="ar">{t('arabic')}</option>
                      </select>
                    </form>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>

        <nav className="main-menu main-menu-style1 nav-background">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu-style1-left">
                  <div className="logo-box-style1 nav-background">
                    <a href="index.html">
                      <img src={logo} width="200" alt="Awesome Logo" title="" />
                    </a>
                  </div>
                  <div className="main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="icon-menu"></i>
                    </a>
                    <ul className="main-menu__list">
                      <li className="nav-li">
                        <a href="https://accuindex.com/" className="nav-button nav-li">{t('home')}</a>
                      </li>
                      <li className="dropdown nav-li">
                        <a href="#">{t('company')}</a>
                        <ul>
                          <li>
                            <Link to="/about-us" className="nav-li">
                              {t('aboutUs')}
                            </Link>
                          </li>
                          <li>

                            {/* <a href="https://accuindex.com/careers/" className="nav-li">{t('careers')}</a> */}
                            <Link to="/awards" className="nav-li">
                              {t('careers')}
                            </Link>
                          </li>
                          <li><a href="https://accuindex.com/legal-documents/" className="nav-li">{t('legalDocuments')}</a></li>
                          <li><a href="https://accuindex.com/promotion/" className="nav-li">{t('promotions')}</a></li>
                        </ul>
                      </li>
                      <li className="dropdown nav-li">
                        <a href="#">{t('trading')}</a>
                        <ul>
                          <li className="dropdown">
                            <a href="#">{t('tradingProducts')}</a>
                            <ul>
                              <li><a href="https://accuindex.com/forex/" className="nav-li">{t('forex')}</a></li>
                              <li><a href="https://accuindex.com/indices/" className="nav-li">{t('indices')}</a></li>
                              <li><a href="https://accuindex.com/commodities/" className="nav-li">{t('commodities')}</a></li>
                              <li><a href="https://accuindex.com/stocks/" className="nav-li">{t('stocks')}</a></li>
                              <li><a href="https://accuindex.com/cryptocurrencies/" className="nav-li">{t('cryptocurrencies')}</a></li>
                            </ul>
                          </li>
                          <li><a href="https://accuindex.com/trading-platforms/" className="nav-li">{t('tradingPlatforms')}</a></li>
                          <li><a href="https://accuindex.com/trading-conditions/" className="nav-li">{t('tradingConditions')}</a></li>
                          <li>
                            <Link to="/account-types" className="nav-li">
                              {t('accountTypes')}
                            </Link>
                            {/* <a href="https://accuindex.com/account-types/" className="nav-li">{t('accountTypes')}</a> */}
                          </li>
                          <li><a href="https://accuindex.com/deposit-withdrawal/" className="nav-li">{t('depositWithdrawal')}</a></li>
                        </ul>

                      </li>
                      <li className="nav-li">
                        <a href="contact.html" className="nav-li">{t('helpCenter')}</a>
                      </li>
                      <li className="nav-li">
                        <a href="contact.html" className="nav-li">{t('getInTouch')}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="main-menu-style1-right">
                  <div className="header-btn-one">
                    <a href="#" className="a-main">{t('login')}</a>
                    <a href="#" className="style2 a-main2">{t('openAccount2')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="main-header-style1-bottom mini-nav-background">
          <div className="auto-container">
            <div className="outer-box">
              <div className="update-box">
                <div className="inner-title">
                  <span className="icon-megaphone"></span>
                  <h4>{t('updates')}</h4>
                </div>
                <div className="text">
                  <p>{t('getUpBalance')}</p>
                  <a href="#"><span className="icon-chevron"></span>{t('moreDetails')}</a>
                </div>
              </div>
              <div className="slogan-box">
                <p>{t('customerMessage')}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu-style1-left">
                  <div className="logo-box-style1 nav-background">
                    <a href="index.html">
                      <img src={logo} width="200" alt="Awesome Logo" title="" />
                    </a>
                  </div>

                  <div className="main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="icon-menu"></i>
                    </a>

                    <ul className="main-menu__list">
                      <li className="nav-li">
                        <a href="https://accuindex.com/" className="nav-button nav-li">{t('home')}</a>
                      </li>
                      <li className="dropdown nav-li">
                        <a href="#">{t('company')}</a>
                        <ul>
                          <li><a href="https://accuindex.com/about-us/" className="nav-li">{t('aboutUs')}</a></li>
                          <li><a href="https://accuindex.com/careers/" className="nav-li">{t('careers')}</a></li>
                          <li><a href="https://accuindex.com/legal-documents/" className="nav-li">{t('legalDocuments')}</a></li>
                          <li><a href="https://accuindex.com/promotion/" className="nav-li">{t('promotions')}</a></li>
                        </ul>
                      </li>
                      <li className="dropdown nav-li">
                        <a href="#">{t('trading')}</a>
                        <ul>
                          <li className="dropdown">
                            <a href="#">{t('tradingProducts')}</a>
                            <ul>
                              <li><a href="https://accuindex.com/forex/" className="nav-li">{t('forex')}</a></li>
                              <li><a href="https://accuindex.com/indices/" className="nav-li">{t('indices')}</a></li>
                              <li><a href="https://accuindex.com/commodities/" className="nav-li">{t('commodities')}</a></li>
                              <li><a href="https://accuindex.com/stocks/" className="nav-li">{t('stocks')}</a></li>
                              <li><a href="https://accuindex.com/cryptocurrencies/" className="nav-li">{t('cryptocurrencies')}</a></li>
                            </ul>
                          </li>
                          <li><a href="https://accuindex.com/trading-platforms/" className="nav-li">{t('tradingPlatforms')}</a></li>
                          <li><a href="https://accuindex.com/trading-conditions/" className="nav-li">{t('tradingConditions')}</a></li>
                          <Link to="/account-types" className="nav-li">
                            {t('accountTypes')}
                          </Link>
                          <li><a href="https://accuindex.com/deposit-withdrawal/" className="nav-li">{t('depositWithdrawal')}</a></li>
                        </ul>

                      </li>
                      <li className="nav-li">
                        <a href="contact.html" className="nav-li">{t('helpCenter')}</a>
                      </li>
                      <li className="nav-li">
                        <a href="contact.html" className="nav-li">{t('getInTouch')}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="main-menu-style1-right">
                  <div className="header-btn-one">
                    <a href="#" className="a-main">
                      {t('login')}
                    </a>
                    <a className="style2 a-main2" href="#">
                      {t('openAccount')}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
