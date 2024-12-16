import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import img1 from '../assets/img/awards/SLIDE-1.png';
import img2 from '../assets/img/awards/icon-1.png';
import img3 from '../assets/img/awards/slide-2.png';

import img4 from '../assets/img/awards/AW-1.png';
import img5 from '../assets/img/awards/AW-2.png';
import img6 from '../assets/img/awards/AW-3.png';
import img7 from '../assets/img/awards/AW-4.png';

import '../styles/Style.css';
import '../styles/Responsive-sty.css';



const Awards = () => {
    const [activeTab, setActiveTab] = useState(1);
    const { t } = useTranslation(); // Use the t function to translate


    const benefits = [
        {
            img: img4,
            title: t('awards.awardOne-title'),
            description: t('awards.awardOne-desc'),
        },
        {
            img: img5,
            title: t('awards.awardTwo-title'),
            description: t('awards.awardTwo-desc'),
        },
        {
            img: img6,
            title: t('awards.awardThree-title'),
            description: t('awards.awardThree-desc'),
        },
        {
            img: img7,
            title: t('awards.awardFour-title'),
            description: t('awards.awardFour-desc'),
        },
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
                                        {t("awards.awards-s1-header")}
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
                                            "awards.awards-s1-content"
                                        )}
                                    </p>
                                </div>

                                <div className="btns-box mobile-align">
                                    <br />
                                    <br />
                                    <a className="btn-main2 mx-1" href="/Register">
                                        <span className="txt">{t("awards.awards-s1-btnOne")}</span>
                                    </a>
                                    <a className="btn-one background-main" href="/RegisterDemo">
                                        <span className="txt">{t("awards.awards-s1-btnTwo")}</span>
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
                            {t("awards.awards-s2-header")}
                            <span className="span-main" style={{ fontSize: "55px" }}>
                                .
                            </span>
                        </h2>
                        <div className="sub-title">
                            <p className="white">
                                {t(
                                    "awards.awards-s2-sub"
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Column */}
                        <div className="col-xl-4">
                            <div className="awards-achivements-left-box">
                                {/* Single Award Box 1 */}
                                <div className="single-awards-achivements-box background-black main-border">
                                    <div className="top">
                                        <div className="icon">
                                            <img
                                                src={img2}
                                                alt={t("JFEX Award 2020")}
                                                width="50px"
                                            />
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="white">
                                                {t("awards.awards-s2-l1")}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="white">{t("awards.Winner")}</span>
                                            <b className="span-main">{t("awards.awards-s2-l1-winner")}</b>
                                        </li>
                                        <li>
                                            <span className="white">{t("awards.Year")}</span>
                                            <b className="span-main">{t("2021")}</b>
                                        </li>
                                    </ul>
                                </div>

                                {/* Single Award Box 2 */}
                                <div className="single-awards-achivements-box background-black main-border">
                                    <div className="top">
                                        <div className="icon">
                                            <img
                                                src={img2}
                                                alt={t("JFEX Award 2020")}
                                                width="50px"
                                            />
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="white">{t("awards.awards-s2-l2")}</h3>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="white">{t("awards.Winner")}</span>
                                            <b className="span-main">{t("awards.awards-s2-l2-winner")}</b>
                                        </li>
                                        <li>
                                            <span className="white">{t("awards.Year")}</span>
                                            <b className="span-main">{t("2022")}</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Center Column */}
                        <div className="col-xl-4">
                            <div className="awards-img-box">
                                <div className="round-box"></div>
                                <div className="inner">
                                    <img
                                        src={img3}
                                        alt={t("Awards Trophy")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-4">
                            <div className="awards-achivements-right-box">
                                {/* Single Award Box 3 */}
                                <div className="single-awards-achivements-box background-black main-border">
                                    <div className="top">
                                        <div className="icon">
                                            <img
                                                src={img2}
                                                alt={t("JFEX Award 2020")}
                                                width="50px"
                                            />
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="white">{t("awards.awards-s2-r1")}</h3>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="white">{t("awards.Winner")}</span>
                                            <b className="span-main">{t("awards.awards-s2-r1-winner")}</b>
                                        </li>
                                        <li>
                                            <span className="white">{t("awards.Year")}</span>
                                            <b className="span-main">{t("2020")}</b>
                                        </li>
                                    </ul>
                                </div>

                                {/* Single Award Box 4 */}
                                <div className="single-awards-achivements-box background-black main-border">
                                    <div className="top">
                                        <div className="icon">
                                            <img
                                                src={img2}
                                                alt={t("JFEX Award 2020")}
                                                width="50px"
                                            />
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="white">{t("awards.awards-s2-r2")}</h3>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="white">{t("awards.Winner")}</span>
                                            <b className="span-main">{t("awards.awards-s2-r2-winner")}</b>
                                        </li>
                                        <li>
                                            <span className="white">{t("awards.Year")}</span>
                                            <b className="span-main">{t("2020")}</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section Buttons */}
                        <div className="col-12 text-center">
                            <div className="btns-box mobile-align">
                                <br />
                                <br />
                                <a className="btn-main2 mx-1" href="/Register">
                                    <span className="txt">{t("awards.awards-s2-btnOne")}</span>
                                </a>
                                <a className="btn-one background-main" href="/metatrader">
                                    <span className="txt">{t("awards.awards-s2-btnTwo")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="benefits-area" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="bold-title">
                            {t('awards.awards-s3-title')}
                            <span className="span-main">.</span>
                        </h2>
                        <div className="sub-title">
                            <p>{t('awards.awards-s3-subtitle')}</p>
                        </div>
                    </div>
                    <ul className="row benefits-content text-center">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="col-xl-12 single-benefits-box-colum">
                                <div className="single-benefits-box">
                                    <br />
                                    <img src={benefit.img} width="150px" alt={benefit.alt} />
                                    <div className="text">
                                        <h3 className="bold-p">{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>







        </div>


    );
};


export default Awards;
