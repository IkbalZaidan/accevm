import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "swiper/css/navigation";

import img1 from '../assets/img/awards/SLIDE-1.png';

import '../styles/Style.css';
import '../styles/Responsive-sty.css';



const Awards = () => {
    const { t } = useTranslation(); // Use the t function to translate


    const files = [
        { nameKey: 'Accuindex Client Agreement', path: 'documents/Client-Agreement-Mauritius-Version-13.pdf' },
        { nameKey: 'Accuindex Limited Privacy Notice', path: 'documents/Privacy-Policy.pdf' },
        { nameKey: 'Accuindex Limited Website Terms and Conditions', path: 'documents/Website-Terms-and-Conditions-V4.pdf' },
        { nameKey: 'AML Procedures Manual', path: 'documents/AML-PROCEDURES-MANUAL.pdf' },
        { nameKey: 'Accuindex Limited Complaint Procedures', path: 'documents/Compliant-Handling-Procedures.pdf' },
        { nameKey: 'Safeguarding of Clients Assets Policy', path: 'documents/Safeguarding-of-Clients-Assets-Policy.pdf' },

    ];


    const files2 = [
        { nameKey: 'AccuPay MasterCard Terms', path: 'documents/AccuPay MasterCard Terms.pdf' },
        { nameKey: 'Accuindex VPS Service - Terms and Conditions', path: 'documents/Accuindex-VPS-Service.pdf' },
        { nameKey: 'Withdrawal and Refund Policy', path: 'documents/Withdrawal-and-Refund-Policy-version-3.pdf' },
        { nameKey: 'Summary Order Execution Policy', path: 'documents/Risk-Warning-Notice.pdf' },
        { nameKey: 'Copy Trading Terms and Conditions', path: 'documents/Copy Trading Terms and Conditions.pdf' },
    ];


    const files3 = [
        { nameKey: 'Accuindex 15% Bonus Terms and Conditions - SEA', path: 'documents/Accuindex-15-Bonus-Terms-and-Conditions-SEA.pdf' },
        { nameKey: 'Accuindex 20% Bonus Offer - Terms and Conditions', path: 'documents/bonus-20-tnc.pdf' },
        { nameKey: '30% Bonus Offer - Terms and Conditions', path: 'documents/30-Bonus.pdf' },
        { nameKey: 'Accuindex Bonus 50% offer Terms & Conditions', path: 'documents/bonus-50-tnc.pdf' },
        { nameKey: 'Accuindex Ramadan offer Terms & Conditions', path: 'documents/Terms-and-conditions-Copy-002.pdf' },
        { nameKey: 'Risk Warning Notice', path: 'documents/Risk-Warning-Notice.pdf' },
    ];


    return (
        <div>
            <section className="statistics-area">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-xl-6">
                            <div className="statistics-chart">
                                <img
                                    src={img1}
                                    alt={t("Accuindex Statistics Chart")}
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-6 mobile-align">
                            <div className="statistics-content-box">
                                <div className="sec-title">
                                    <br className="mobile-seen" />
                                    <br className="mobile-seen" />
                                    <h2 className="bold-title">
                                        {t("Legal Documents")}
                                        <span
                                            className="span-main"
                                            style={{ fontSize: "55px" }}
                                        >
                                            .
                                        </span>
                                    </h2>
                                </div>

                                <div className="text">
                                    <p>
                                        {t(
                                            "LegalDocsSub"
                                        )}
                                    </p>
                                </div>

                                <div className="btns-box mobile-align">
                                    <br />
                                    <br />
                                    <a className="btn-main2 mx-1" href="#">
                                        <span className="txt">{t("ReadMore")}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="awards-achivements-area background-black">
                <div className="container">
                    {/* Section Title */}
                    <div className="sec-title text-center">
                        <h2 className="white bold-title">
                            {t("Privacy Policy")}
                            <span className="span-main" style={{ fontSize: "55px" }}>
                                .
                            </span>
                        </h2>
                        <div className="sub-title">
                            <p className="white">
                                {t(
                                    "PrivacyPolicySub"
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6 col-12">
                            <div className="awards-achivements-left-box">
                                <div className="sub-title">
                                    <p className="white">
                                        {t(
                                            "PrivacyPolicySecOne"
                                        )}
                                        <br />
                                        <br />
                                        {t(
                                            "PrivacyPolicySecTwo"
                                        )}
                                        <br />
                                        <br />
                                        {t(
                                            "PrivacyPolicySecThree"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="awards-achivements-left-box">
                                <div className="sub-title">
                                    <h3 className='white'> {t('Accuindex Limited Gathers And Tracks')} </h3>
                                    <br />
                                    <br />
                                    <p className="white">
                                        {t(
                                            "PrivacyPolicySecFour"
                                        )}
                                        <br />
                                        <br />
                                        {t(
                                            "PrivacyPolicySecFive"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="awards-achivements-area background-black">
                <div className="container">
                    {/* Section Title */}
                    <div className="sec-title text-center">
                        <h2 className="white bold-title">
                            {t("License & Authorization")}
                            <span className="span-main" style={{ fontSize: "55px" }}>
                                .
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-12">
                            <div className="awards-achivements-left-box">
                                <div className="sub-title">
                                    <h4 className="white">
                                        {t(
                                            "L&APone"
                                        )}
                                        <br />
                                        <br />
                                        {t(
                                            "L&APTwo"
                                        )}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div className='row'>
                        <div className="col-12">
                            <div className="awards-achivements-left-box">
                                <div className="sub-title">
                                    <h3 className='white'> {t('High Risk Investment Warning')} </h3>
                                    <ul>
                                        <li className='white'>{t('LiPOne')}</li>
                                        <li className='white'>{t('LiPTwo')}</li>
                                        <li className='white'>{t('LiPThree')}</li>
                                        <li className='white'>{t('LiPFour')}</li>
                                    </ul>
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
                            {t('Accuindex Legal Documents')}
                            <span className="span-main">.</span>
                        </h2>
                    </div>
                    <div className='row'>
                        <div className="col-md-4 col-12">
                            <ul className="row benefits-content text-center">
                                {files.map((file, index) => (
                                    <li key={index} className="col-xl-12 mb-3">
                                        <a
                                            href={file.path} // PDF file path
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pdf-link"
                                        >
                                            <i className="fas fa-file-pdf" style={{ marginRight: '8px', color: 'red' }}></i>
                                            {t(file.nameKey)} {/* Translation using the key */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-4 col-12">
                            <ul className="row benefits-content text-center">
                                {files2.map((file, index) => (
                                    <li key={index} className="col-xl-12 mb-3">
                                        <a
                                            href={file.path} // PDF file path
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pdf-link"
                                        >
                                            <i className="fas fa-file-pdf" style={{ marginRight: '8px', color: 'red' }}></i>
                                            {t(file.nameKey)} {/* Translation using the key */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-4 col-12">
                            <ul className="row benefits-content text-center">
                                {files3.map((file, index) => (
                                    <li key={index} className="col-xl-12 mb-3">
                                        <a
                                            href={file.path} // PDF file path
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pdf-link"
                                        >
                                            <i className="fas fa-file-pdf" style={{ marginRight: '8px', color: 'red' }}></i>
                                            {t(file.nameKey)} {/* Translation using the key */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>







        </div>


    );
};


export default Awards;
