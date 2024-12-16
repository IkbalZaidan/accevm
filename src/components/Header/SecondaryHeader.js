import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import '../../styles/Style.css';
import '../../styles/Responsive-sty.css';

import logo from '../../assets/img/accuLogo.png'; // Adjust path if necessary

const SecondaryHeader = () => {
    const { t, i18n } = useTranslation();

    // State for language
    const [savedLanguage, setSavedLanguage] = useState(localStorage.getItem('language') || 'en');
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    // const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);

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

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
        document.body.classList.toggle('locked', !isMobileNavOpen); // Lock scrolling
    };


    useEffect(() => {
        const mobileNavContainer = document.querySelector('.mobile-nav__container');
        const mainMenuList = document.querySelector('.main-menu__list');

        if (mainMenuList && mobileNavContainer) {
            mobileNavContainer.innerHTML = mainMenuList.outerHTML; // Clone menu

            const dropdownAnchors = mobileNavContainer.querySelectorAll('.dropdown > a');

            dropdownAnchors.forEach((anchor) => {
                const toggleBtn = document.createElement('button');
                toggleBtn.setAttribute('aria-label', 'dropdown toggler');
                toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
                anchor.appendChild(toggleBtn);

                toggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleBtn.classList.toggle('expanded');
                    anchor.parentElement.classList.toggle('expanded');
                    const subMenu = anchor.nextElementSibling;
                    if (subMenu) {
                        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                    }
                });
            });
        }
    }, [isMobileNavOpen]);

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
                                        <div className="custom-dropdown">
                                            <button onClick={toggleDropdown}>{t('partnerView')}</button>
                                            <div className={`custom-dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                                <a href="/">{t('individualView')}</a>
                                                <a href="/IB">{t('partnerView')}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-header-style1-top__right">
                                <div className="header-menu-style1">
                                    <ul>
                                        <li><a href="/faq" className="white">{t('supportCenter')}</a></li>
                                        <li><a href="/LegalDocuments" className="white">{t('authorisedRegulated')}</a></li>
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
                                        <a href="/IB">
                                            <img src={logo} width="200" alt="Awesome Logo" title="" />
                                        </a>
                                    </div>

                                    {/* <div className="logo-box-style1 nav-background">
                                        <form action="#" className='mobile-seen'>
                                            <select className='langSty mobile-seen' value={savedLanguage} onChange={handleLanguageChange} >
                                                <option id="en" value="en">{t('english')}</option>
                                                <option id="ar" value="ar">{t('arabic')}</option>
                                            </select>
                                        </form>
                                    </div> */}

                                    <div className="main-menu-box">
                                        <a href="#" className="mobile-nav__toggler" onClick={toggleMobileNav}>
                                            <i className="icon-menu"></i>
                                        </a>
                                        <ul className="main-menu__list">

                                            <li className="nav-li">
                                                <Link to="/IB" className="nav-li">
                                                    {t('IntroducingBrokersNav')}
                                                </Link>
                                            </li>


                                            <li className="nav-li">
                                                <Link to="/CorporateAccounts" className="nav-li">
                                                    {t('CorporateAccountsNav')}
                                                </Link>
                                            </li>

                                            <li className="nav-li">
                                                <Link to="/FundMnagers" className="nav-li">
                                                    {t('FundMnagers')}
                                                </Link>
                                            </li>

                                            <li className="nav-li">
                                                <Link to="/Company" className="nav-li">
                                                    {t('CompanyNav')}
                                                </Link>
                                            </li>

                                            <li className="nav-li mobile-seen">
                                                <Link to="/" className="nav-li">
                                                    {t('individualView')}
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-style1-right">
                                    <div className="header-btn-one">
                                        <a href="https://my.accuindex.com/login" className="a-main">{t('login')}</a>
                                        <a href="/RegisterIb" className="style2 a-main2">{t('openAccount2')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Navigation */}

                <div
                    className={`mobile-nav__wrapper ${isMobileNavOpen ? 'expanded' : ''}`}
                >

                    <div
                        className="mobile-nav__overlay mobile-nav__toggler"
                        onClick={toggleMobileNav}
                    ></div>
                    <div className="mobile-nav__content">
                        <span
                            className="mobile-nav__close mobile-nav__toggler"
                            onClick={toggleMobileNav}
                        >
                            <i className="fas fa-plus"></i>
                        </span>
                        <div className="logo-box">
                            <a href="/IB" aria-label="logo image">
                                <img src={logo} width="200" alt="" />
                            </a>
                        </div>
                        <div className="mobile-nav__container"></div>
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:info@accuindex.com">info@accuindex.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                <a href="tel:002304644888">+230 464 4888</a>
                            </li>
                        </ul>


                        <div className="mobile-nav__social mb-3">
                            <a href="https://my.accuindex.com/login" style={{ width: "120px", borderRadius: "unset" }} className="a-main">{t('login')}</a>
                            <a href="/Register" style={{ width: "160px", borderRadius: "unset" }} className="style2 a-main2">{t('openAccount2')}</a>
                        </div>




                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-x"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-youtube"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>

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
                        <div className="container-fluid">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu-style1-left">
                                    <div className="logo-box-style1 nav-background">
                                        <a href="/IB">
                                            <img src={logo} width="200" alt="Awesome Logo" title="" />
                                        </a>
                                    </div>

                                    <div className="main-menu-box">
                                        <a href="#" className="mobile-nav__toggler">
                                            <i className="icon-menu"></i>
                                        </a>

                                        <ul className="main-menu__list">


                                            <li className="nav-li">
                                                <Link to="/IB" className="nav-li">
                                                    {t('IntroducingBrokersNav')}
                                                </Link>
                                            </li>


                                            <li className="nav-li">
                                                <Link to="/CorporateAccounts" className="nav-li">
                                                    {t('CorporateAccountsNav')}
                                                </Link>
                                            </li>

                                            <li className="nav-li">
                                                <Link to="/FundMnagers" className="nav-li">
                                                    {t('FundMnagers')}
                                                </Link>
                                            </li>

                                            <li className="nav-li">
                                                <Link to="/Company" className="nav-li">
                                                    {t('CompanyNav')}
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-style1-right">
                                    <div className="header-btn-one">
                                        <a href="https://my.accuindex.com/login" className="a-main">
                                            {t('login')}
                                        </a>
                                        <a className="style2 a-main2" href="/RegisterIb">
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

export default SecondaryHeader;
